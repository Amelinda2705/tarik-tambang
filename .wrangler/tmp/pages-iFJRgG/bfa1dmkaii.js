// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/assets/blue.png",
    "/assets/red.png"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "D:\\dev\\physicsgame\\.wrangler\\tmp\\pages-iFJRgG\\bundledWorker-0.8214719784712513.mjs";
import { isRoutingRuleMatch } from "D:\\dev\\physicsgame\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "D:\\dev\\physicsgame\\.wrangler\\tmp\\pages-iFJRgG\\bundledWorker-0.8214719784712513.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=bfa1dmkaii.js.map
