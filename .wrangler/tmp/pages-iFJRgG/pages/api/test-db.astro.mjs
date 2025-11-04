globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

async function GET({ locals }) {
    try {
        const db = locals.runtime.env.DB;

        // Test if table exists
        const tableCheck = await db
            .prepare(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='questions'"
            )
            .first();

        // Count records
        const countResult = await db
            .prepare("SELECT COUNT(*) as count FROM questions")
            .first();

        return new Response(
            JSON.stringify({
                tableExists: !!tableCheck,
                recordCount: countResult?.count || 0,
                tables: await db
                    .prepare(
                        "SELECT name FROM sqlite_master WHERE type='table'"
                    )
                    .all(),
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            {
                status: 500,
            }
        );
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
