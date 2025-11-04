globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

async function GET({ locals }) {
    try {
        const db = locals.runtime?.env?.DB;

        return new Response(
            JSON.stringify({
                dbAvailable: !!db,
                runtimeEnv: Object.keys(locals.runtime?.env || {}),
                localsKeys: Object.keys(locals),
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
                stack: error.stack,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
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
