export interface Env {
  TESTUSER_DB: D1Database;
  NOTIFY_WEBHOOK_URL?: string;
}
  try {
    await env.TESTUSER_DB.prepare(
      "INSERT INTO pilot_access (email) VALUES (?)"
    )
      .bind(email)
      .run();
  } catch (cause) {
    console.error("Failed to store pilot email", cause);
    return new Response(
      JSON.stringify({ status: "error", message: "Unable to store email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );
  }

  notifyOwner(env, email).catch((cause) => {
    console.error("Notification failed", cause);
  });
  try {
    await env.TESTUSER_DB.prepare(
      "INSERT INTO emails (email) VALUES (?)"
    )
      .bind(email)
      .run();
  } catch (cause) {
    console.error("Failed to store pilot email", cause);
    return new Response(
      JSON.stringify({ status: "error", message: "Unable to store email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );
  }

  const payload = { status: "ok", message: "Submitted" };
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
}

async function notifyOwner(env: Env, submittedEmail: string) {
  const webhook = env.NOTIFY_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "EMPX pilot access",
      submittedEmail,
      timestamp: new Date().toISOString(),
    }),
  });
}
