globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

async function GET({ locals }) {
  const db = locals.runtime.env.DB;
  const { results } = await db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  return new Response(
    JSON.stringify({
      environment: "production",
      tables: results,
      message: "This works the same in local dev and Cloudflare!"
    }),
    {
      status: 200
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
