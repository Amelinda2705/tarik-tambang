globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B-bDRWSY.mjs';
import { $ as $$Layout } from '../chunks/Layout_E6Phd4JU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-10 flex items-center justify-center flex-col"> <span class="font-black text-5xl absolute top-53">Welcome</span> <div class="absolute bottom-30"> <button><a href="/admin/">Admin Page</a></button> <button class="bg-color-transparent"> <a href="/game/">Game Start!</a></button> </div> </div> ` })}`;
}, "D:/dev/physicsgame/src/pages/index.astro", void 0);

const $$file = "D:/dev/physicsgame/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
