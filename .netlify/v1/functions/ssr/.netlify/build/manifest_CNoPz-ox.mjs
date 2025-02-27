import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DIudQE8c.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/","cacheDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/.astro/","outDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/dist/","srcDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/","publicDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/public/","buildClientDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/dist/","buildServerDir":"file:///Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"api/contact","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"properties/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/properties","isIndex":false,"type":"page","pattern":"^\\/properties\\/?$","segments":[[{"content":"properties","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/properties.astro","pathname":"/properties","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.oAq3U8UI.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/properties.astro",{"propagation":"none","containsHead":true}],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/property/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/properties@_@astro":"pages/properties.astro.mjs","\u0000@astro-page:src/pages/property/[slug]@_@astro":"pages/property/_slug_.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CNoPz-ox.mjs","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DEUdcGlc.mjs","@astrojs/react/client.js":"_astro/client.Ib2F77LA.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/property/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.XzFJw72F.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CnenKdvV.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/PropertyListing.astro?astro&type=script&index=0&lang.ts":"_astro/PropertyListing.astro_astro_type_script_index_0_lang.BxZ1V3WB.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/PreSelling.astro?astro&type=script&index=0&lang.ts":"_astro/PreSelling.astro_astro_type_script_index_0_lang.DdhPf9kZ.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/ContactAgent.astro?astro&type=script&index=0&lang.ts":"_astro/ContactAgent.astro_astro_type_script_index_0_lang.BcepMP-b.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CGLjATcp.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.BZQr78ku.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.DeIn6Xlp.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BPf4i7HJ.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Bqp9ztTC.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.Bi0QXwqD.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Bf0GjR5S.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.D9eJCd6x.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.z0KatgqJ.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.qkWwG8ZP.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.BEkTjMas.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.DkPIc2uT.js","/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DkEGiTrL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/pages/property/[slug].astro?astro&type=script&index=0&lang.ts","function s(){const e=document.getElementById(\"mainImage\"),n=document.querySelectorAll(\".thumbnail-container\");n.forEach(t=>{t.addEventListener(\"click\",()=>{const o=t.querySelector(\".thumbnail\");e&&o&&(e.src=o.src),n.forEach(i=>i.classList.remove(\"active\")),t.classList.add(\"active\")})})}function d(){const e=encodeURIComponent(window.location.href),n=encodeURIComponent(document.title),t=document.getElementById(\"shareFacebook\");t&&t.addEventListener(\"click\",()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${e}`,\"facebook-share-dialog\",\"width=800,height=600\")});const o=document.getElementById(\"shareTwitter\");o&&o.addEventListener(\"click\",()=>{window.open(`https://twitter.com/intent/tweet?url=${e}&text=${n}`,\"twitter-share-dialog\",\"width=800,height=600\")});const i=document.getElementById(\"shareWhatsapp\");i&&i.addEventListener(\"click\",()=>{window.open(`https://api.whatsapp.com/send?text=${n} ${e}`,\"_blank\")});const a=document.getElementById(\"copyLink\");a&&a.addEventListener(\"click\",()=>{navigator.clipboard.writeText(window.location.href).then(()=>{r(\"Link copied to clipboard!\")}).catch(c=>{console.error(\"Could not copy text: \",c)})})}function r(e,n=3e3){let t=document.querySelector(\".toast\");t||(t=document.createElement(\"div\"),t.className=\"toast\",document.body.appendChild(t)),t.textContent=e,t.classList.add(\"show\"),setTimeout(()=>{t.classList.remove(\"show\")},n)}document.addEventListener(\"DOMContentLoaded\",()=>{s(),d()});"],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","function e(){localStorage.theme===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\")}e();document.addEventListener(\"astro:after-swap\",e);"],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/PropertyListing.astro?astro&type=script&index=0&lang.ts","function f(){const c=document.querySelectorAll(\".tab-btn\"),a=document.querySelectorAll(\".property-card\"),i=document.querySelector(\"#sort-select\");function l(e){a.forEach(t=>{e===\"all\"||t.dataset.type===e?t.style.display=\"block\":t.style.display=\"none\"})}function p(e){const t=Array.from(a),s=t[0].parentElement;s&&(t.sort((r,d)=>{const n=parseInt(r.dataset.price||\"0\"),o=parseInt(d.dataset.price||\"0\");return e===\"price-asc\"?n-o:e===\"price-desc\"?o-n:0}),t.forEach(r=>s.appendChild(r)))}c.forEach(e=>{e.addEventListener(\"click\",()=>{c.forEach(t=>t.classList.remove(\"active\")),e.classList.add(\"active\"),l(e.dataset.type||\"all\")})}),i?.addEventListener(\"change\",e=>{const t=e.target;p(t.value)})}f();"],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/PreSelling.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"propertyGrid\"),c=document.getElementById(\"priceSort\");function p(){if(!e)return;const r=Array.from(e.children),o=c.value;if(o===\"default\"){window.location.reload();return}r.sort((t,d)=>{const n=Number(t.getAttribute(\"data-price\"))||0,i=Number(d.getAttribute(\"data-price\"))||0;return o===\"asc\"?n-i:i-n}),r.forEach(t=>{e.appendChild(t)})}c?.addEventListener(\"change\",p);"],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/ContactAgent.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contactForm\"),e=document.getElementById(\"formMessage\");t?.addEventListener(\"submit\",async o=>{o.preventDefault();try{const n=new FormData(t),r=Object.fromEntries(n),s=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(r)}),a=await s.json();if(s.ok)e?.classList.remove(\"hidden\",\"bg-red-100\",\"text-red-700\"),e?.classList.add(\"bg-green-100\",\"text-green-700\"),e.textContent=\"Thank you for your message. We will contact you soon!\",t.reset();else throw new Error(a.message||\"Something went wrong\")}catch{e?.classList.remove(\"hidden\",\"bg-green-100\",\"text-green-700\"),e?.classList.add(\"bg-red-100\",\"text-red-700\"),e.textContent=\"There was an error sending your message. Please try again.\"}});"],["/Users/allen/Documents/Projects/astro/astro-tropicalhomes-cebu/src/components/Header.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"theme-toggle\"),d=document.getElementById(\"mobile-theme-toggle\"),c=document.getElementById(\"mobile-menu-button\"),m=document.getElementById(\"close-menu-button\"),n=document.getElementById(\"mobile-menu\"),e=document.getElementById(\"mobile-menu-overlay\");localStorage.theme===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");const o=()=>{document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.theme=\"light\"):(document.documentElement.classList.add(\"dark\"),localStorage.theme=\"dark\")};l?.addEventListener(\"click\",o);d?.addEventListener(\"click\",o);c?.addEventListener(\"click\",()=>{n?.classList.remove(\"translate-x-full\"),e?.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"});const t=()=>{n?.classList.add(\"translate-x-full\"),e?.classList.add(\"hidden\"),document.body.style.overflow=\"\"};m?.addEventListener(\"click\",t);e?.addEventListener(\"click\",t);window.addEventListener(\"resize\",()=>{window.innerWidth>=1024&&t()});"]],"assets":["/_astro/contact.4ZsejAxV.css","/_astro/studio-route.oAq3U8UI.css","/favicon.svg","/_astro/ViteDevServerStopped.Bi0QXwqD.js","/_astro/browser.Bba8RV9V.js","/_astro/client.B436leHu.js","/_astro/client.Ib2F77LA.js","/_astro/index.BEkTjMas.js","/_astro/index2.DkPIc2uT.js","/_astro/index3.qkWwG8ZP.js","/_astro/refractor.D9eJCd6x.js","/_astro/resources.BZQr78ku.js","/_astro/resources2.BPf4i7HJ.js","/_astro/resources3.Bqp9ztTC.js","/_astro/resources4.DeIn6Xlp.js","/_astro/resources5.z0KatgqJ.js","/_astro/stegaEncodeSourceMap.Bf0GjR5S.js","/_astro/studio-component.Bf6Kd8yq.js","/_astro/studio-component.DkEGiTrL.js","/api/contact","/contact/index.html","/properties/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ix4t/GUW7qrg9MBqXLg3gjggve5JMiknk77en+8Gd7M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
