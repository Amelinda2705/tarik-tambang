globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const onRequest = async (context, next) => {
    try {
        // For Cloudflare adapter
        context.locals.db = context.locals.runtime?.env?.DB;

        if (!context.locals.db) {
            console.log(
                "DB not found in runtime.env, checking other locations..."
            );
        }

        return next();
    } catch (error) {
        console.error("Middleware error:", error);
        return next();
    }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    onRequest
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
