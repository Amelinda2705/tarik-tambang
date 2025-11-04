export async function GET({ locals }) {
    const db = locals.runtime.env.DB;

    const { results } = await db
        .prepare("SELECT name FROM sqlite_master WHERE type='table'")
        .all();

    return new Response(
        JSON.stringify({
            environment: process.env.NODE_ENV,
            tables: results,
            message: "This works the same in local dev and Cloudflare!",
        }),
        {
            status: 200,
        }
    );
}
