export interface Env {
  TESTUSER_DB: D1Database;
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  const form = await request.formData();
  const email = form.get("email");

  if (!email || typeof email !== "string") {
    return new Response("Email is required", { status: 400 });
  }

  await env.TESTUSER_DB.prepare(
    "INSERT INTO pilot_access (email) VALUES (?)"
  ).bind(email.trim().toLowerCase()).run();

  const payload = { status: "ok", message: "Submitted" };
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
}
