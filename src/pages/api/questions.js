export async function GET({ locals }) {
    try {
        console.log("API: Starting questions fetch");

        const db = locals.runtime?.env?.DB;

        if (!db) {
            console.error("API: Database not available in locals");
            return new Response(
                JSON.stringify({ error: "Database not configured" }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        console.log("API: Database connection available");

        const { results } = await db
            .prepare("SELECT * FROM questions ORDER BY id DESC")
            .all();

        console.log("API: Questions fetched successfully:", results);

        return new Response(JSON.stringify(results), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("API: Error fetching questions:", error);
        console.error("API: Error details:", error.message, error.stack);

        return new Response(
            JSON.stringify({
                error: "Failed to fetch questions",
                details: error.message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
