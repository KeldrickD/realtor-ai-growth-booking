export async function POST(request) {
  try {
    // Temporarily disable GoHighLevel integration; accept request and no-op
    await request.json().catch(() => ({}));

    return new Response(JSON.stringify({ ok: true, ghl: "disabled" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Unexpected server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


