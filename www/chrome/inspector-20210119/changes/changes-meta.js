import{ls as e}from"../platform/platform.js";import{Runtime as a}from"../root/root.js";import{ViewManager as i}from"../ui/ui.js";let o;i.registerViewExtension({location:"drawer-view",id:"changes.changes",title:()=>e`Changes`,commandPrompt:"Show Changes",persistence:"closeable",loadView:async()=>(await async function(){return o||(await a.Runtime.instance().loadModulePromise("changes"),o=await import("./changes.js")),o}()).ChangesView.ChangesView.instance()});