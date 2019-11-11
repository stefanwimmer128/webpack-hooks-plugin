type Hooks = {
    [key]: () => void,
};

export default class WebpackHooksPlugin {
    constructor(hooks: Hooks) {
        this.hooks = hooks;
    }
    
    apply(compiler: any) {
        Object.keys(this.hooks).forEach(key => {
            compiler.hooks[key].tap("WebpackHooksPlugin_" + key, this.hooks[key]);
        });
    }
}
