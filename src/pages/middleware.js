export const onRequest = async (context, next) => {
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
