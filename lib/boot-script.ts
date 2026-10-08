export const bootScript = `(function(){try{
document.documentElement.classList.add("js");
var nav=performance.getEntriesByType("navigation")[0];
if(location.hash||!nav||nav.type==="back_forward")return;
if("scrollRestoration"in history)history.scrollRestoration="manual";
scrollTo(0,0);
}catch(e){}})();`;
