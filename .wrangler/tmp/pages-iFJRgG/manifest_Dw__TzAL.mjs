globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_B-bDRWSY.mjs';
import './chunks/astro-designed-error-pages_B3_52sKa.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BSgaCjoq.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/dev/physicsgame/","cacheDir":"file:///D:/dev/physicsgame/node_modules/.astro/","outDir":"file:///D:/dev/physicsgame/dist/","srcDir":"file:///D:/dev/physicsgame/src/","publicDir":"file:///D:/dev/physicsgame/public/","buildClientDir":"file:///D:/dev/physicsgame/dist/","buildServerDir":"file:///D:/dev/physicsgame/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.B41hq_8K.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/admin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/admin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/admin.js","pathname":"/api/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/debug","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/debug\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"debug","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/debug.js","pathname":"/api/debug","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/environment","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/environment\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"environment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/environment.js","pathname":"/api/environment","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/questions","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/questions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"questions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/questions.js","pathname":"/api/questions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test-db","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test-db\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test-db","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test-db.js","pathname":"/api/test-db","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.B41hq_8K.css"}],"routeData":{"route":"/game","isIndex":false,"type":"page","pattern":"^\\/game\\/?$","segments":[[{"content":"game","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/game.astro","pathname":"/game","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/middleware","isIndex":false,"type":"endpoint","pattern":"^\\/middleware\\/?$","segments":[[{"content":"middleware","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/middleware.js","pathname":"/middleware","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.B41hq_8K.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/dev/physicsgame/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["D:/dev/physicsgame/src/pages/game.astro",{"propagation":"none","containsHead":true}],["D:/dev/physicsgame/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/admin@_@js":"pages/api/admin.astro.mjs","\u0000@astro-page:src/pages/api/debug@_@js":"pages/api/debug.astro.mjs","\u0000@astro-page:src/pages/api/environment@_@js":"pages/api/environment.astro.mjs","\u0000@astro-page:src/pages/api/questions@_@js":"pages/api/questions.astro.mjs","\u0000@astro-page:src/pages/api/test-db@_@js":"pages/api/test-db.astro.mjs","\u0000@astro-page:src/pages/game@_@astro":"pages/game.astro.mjs","\u0000@astro-page:src/pages/middleware@_@js":"pages/middleware.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dw__TzAL.mjs","D:/dev/physicsgame/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","D:/dev/physicsgame/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_pJiH--W0.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/admin.B41hq_8K.css","/assets/blue.png","/assets/red.png","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_astro/fonts/9ea7986e11b31167.woff2","/_astro/fonts/a14d1900bfe74992.woff2","/_astro/fonts/b6ab73a0b020ecb6.ttf","/_astro/fonts/c2783eaa30c74067.woff2","/_astro/fonts/ea4658b556fad2ec.woff2","/_worker.js/chunks/astro-designed-error-pages_B3_52sKa.mjs","/_worker.js/chunks/astro_BEuhYij0.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_BVzBEqhU.mjs","/_worker.js/chunks/index_DwZ8Gdtu.mjs","/_worker.js/chunks/Layout_E6Phd4JU.mjs","/_worker.js/chunks/noop-middleware_BSgaCjoq.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_BC1y8RCW.mjs","/_worker.js/chunks/sharp_pJiH--W0.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_D4AGzxdX.mjs","/_worker.js/_astro/admin.B41hq_8K.css","/_worker.js/pages/admin.astro.mjs","/_worker.js/pages/game.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/middleware.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro/server_B-bDRWSY.mjs","/_worker.js/pages/api/admin.astro.mjs","/_worker.js/pages/api/debug.astro.mjs","/_worker.js/pages/api/environment.astro.mjs","/_worker.js/pages/api/questions.astro.mjs","/_worker.js/pages/api/test-db.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"9+GIUcmHjrt4q4cbB6yAkW0XBhCerv6mDt3RV3TDMzs=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
