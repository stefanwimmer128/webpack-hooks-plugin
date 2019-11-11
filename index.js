class WebpackHooksPlugin {
    constructor(hooks) {
        this.hooks = hooks;
    }
    
    apply(compiler) {
        Object.keys(this.hooks).forEach(key => {
            compiler.hooks[key].tap("WebpackHooksPlugin_" + key, this.hooks[key]);
        });
    }
}
