function initPlugin(settings) {
    const util = {
        throttle: true
    };

    return function decoreateContext(context, request) {
        context.util = util;
    };
}

module.exports = initPlugin;
