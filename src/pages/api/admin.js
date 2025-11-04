export async function POST({ request, locals }) {
    try {
        const db = locals.runtime.env.DB;
        const formData = await request.formData();
        const action = formData.get("action");
        const id = formData.get("id");
        const question = formData.get("question");
        const answer = formData.get("answer");

        let result;
        let redirectUrl = "/admin?success=";

        switch (action) {
            case "create":
                result = await db
                    .prepare(
                        "INSERT INTO questions (question, answer) VALUES (?, ?)"
                    )
                    .bind(question, parseInt(answer))
                    .run();

                redirectUrl += "created";
                break;

            case "update":
                result = await db
                    .prepare(
                        "UPDATE questions SET question = ?, answer = ? WHERE id = ?"
                    )
                    .bind(question, parseInt(answer), parseInt(id))
                    .run();

                redirectUrl += "updated";
                break;

            case "delete":
                result = await db
                    .prepare("DELETE FROM questions WHERE id = ?")
                    .bind(parseInt(id))
                    .run();

                redirectUrl += "deleted";
                break;

            default:
                return new Response(null, {
                    status: 400,
                    headers: { Location: "/admin?error=invalid_action" },
                });
        }

        return new Response(null, {
            status: 303,
            headers: { Location: redirectUrl },
        });
    } catch (error) {
        console.error("Database error:", error);
        return new Response(null, {
            status: 500,
            headers: { Location: "/admin?error=database_error" },
        });
    }
}
