export interface Env {
  TESTUSER_DB: D1Database;
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  const form = await request.formData();
  const rawEmail = form.get("email");
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

  if (!email) {
    return new Response(
      JSON.stringify({ status: "error", message: "Email is required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      }
    );
  }

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
