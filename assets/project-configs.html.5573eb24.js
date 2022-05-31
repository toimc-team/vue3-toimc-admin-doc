import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as t,a as o}from"./app.b3032eaf.js";const a={},i=o(`<h1 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E</h1><h2 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u914D\u7F6E</h2><blockquote><p>src \u6587\u4EF6\u5939\u4E0B\u627E\u5230 theme.config.ts \u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u4E3A\u9879\u76EE\u6574\u4F53\u7684\u4E3B\u9898\u914D\u7F6E</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code>/**
 * \u5BFC\u51FA\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E
 */
const sysTheme = {
  // &#39;siderbar&#39; \u5DE6\u4FA7\u83DC\u5355 | &#39;mix&#39; \u5DE6\u4FA7+\u9876\u90E8\u83DC\u5355 | &#39;top&#39; \u9876\u90E8\u83DC\u5355 | &#39;mixbar&#39; \u53CC\u5217\u83DC\u5355
  layout: &#39;siderbar&#39;,
  // \u56FA\u5B9A\u5934\u90E8
  fixHeader: true,
  // \u6697\u9ED1\u6A21\u5F0F
  darkMode: false,
  // \u4E3B\u9898\u989C\u8272
  primaryColor: &#39;#409eff&#39;,
  // \u83DC\u5355\u5BBD\u5EA6
  menuWidth: &#39;266px&#39;,
  // \u663E\u793Atab page
  tabPage: true
}
</code></pre></div><h2 id="\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</h2><p>\u9879\u76EE\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u4EE5\u4E09\u79CD\u73AF\u5883\u914D\u7F6E\u4E3A\u4E3B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\u251C\u2500\u2500 .env                                                    # \u57FA\u7840\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.development                                        # \u5F00\u53D1\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.production                                         # \u751F\u4EA7\u73AF\u5883\u53D8\u91CF
</code></pre></div><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><p>::: tip</p><p>\u8BE5\u6587\u4EF6\u4E3A\u6240\u6709\u6A21\u5F0F\u5171\u4EAB\u914D\u7F6E\u9879\u3002</p><p>:::</p><div class="language-bash ext-sh"><pre class="language-bash"><code># port
VITE_PORT = 5500

# spa-title
VITE_GLOB_APP_TITLE = VueToimcAdmin-\u57FA\u4E8EVue3+ElementPlus\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F

# spa shortname
VITE_GLOB_APP_SHORT_NAME = VueToimcAdmin

# config file
VITE_APP_CONFIG_FILE_NAME = &quot;_app.config.js&quot;

# dist path
VITE_APP_OUTPUT_DIR=dist

# Optional: hash | html5
VITE_APP_ROUTE_MODE = &quot;hash&quot;
</code></pre></div><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><div class="language-bash ext-sh"><pre class="language-bash"><code># \u662F\u5426\u5F00\u542Fmock
VITE_USE_MOCK = true

# \u516C\u5171\u6587\u4EF6\u76EE\u5F55
VITE_PUBLIC_PATH = /

# Cross-domain proxy, you can configure multiple
# Please note that no line breaks
VITE_PROXY = [[&quot;/dev-api&quot;,&quot;http://localhost:3000&quot;],[&quot;/upload&quot;,&quot;http://localhost:3300/upload&quot;]]

# Delete console
VITE_DROP_CONSOLE = false

VITE_HTTPS = false

# Basic interface address SPA
VITE_GLOB_API_URL=/dev-api

# File upload address\uFF0C optional
VITE_GLOB_UPLOAD_URL=/upload

# Interface prefix
VITE_GLOB_API_URL_PREFIX=
</code></pre></div><h3 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3><div class="language-env ext-env"><pre class="language-env"><code># \u662F\u5426\u5F00\u542Fmock
VITE_USE_MOCK = true

# \u5F00\u53D1\u73AF\u5883\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
VITE_PUBLIC_PATH = /

# \u5F00\u53D1\u73AF\u5883\u4EE3\u7406
VITE_PROXY = /api

# https\u914D\u7F6E
VITE_HTTPS = false

# \u662F\u5426\u5F00\u542F\u538B\u7F29\u8F93\u51FA\uFF0C\u4E00\u822Cnginx\u914D\u7F6E\u4E86\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u524D\u7AEF\u8FDB\u884C\u538B\u7F29\u8F93\u51FA
# \u652F\u6301\u7684\u9009\u9879\uFF1Agzip | brotli | none\uFF0C\u53EF\u4EE5\u4F7F\u7528,\u53F7\u9694\u5F00
VITE_BUILD_COMPRESS = &#39;none&#39;

# \u914D\u5408\u4E0A\u9762\u7684\u9009\u9879\uFF0C\u662F\u5426\u5220\u9664\u6E90\u6587\u4EF6
VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE = false

# \u662F\u5426\u5220\u9664\u9879\u76EE\u4E2Dconsole
VITE_DROP_CONSOLE = false

# \u6587\u4EF6\u4E0A\u4F20\u76EE\u5F55
VITE_GLOB_UPLOAD_URL = /upload

# \u63A5\u53E3\u524D\u7F00 
VITE_GLOB_API_URL_PREFIX = 

# \u662F\u5426\u542F\u7528\u56FE\u50CF\u538B\u7F29
VITE_USE_IMAGEMIN= true

# \u4F7F\u7528 pwa
VITE_USE_PWA = false

# \u662F\u5426\u4E0E\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9
VITE_LEGACY = false
</code></pre></div><h2 id="\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E</h2><p>::: tip</p><p>\u601D\u8003\uFF1A\u5982\u4F55\u5728\u751F\u4EA7\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u4EE3\u7801\uFF0C\u4E5F\u80FD\u4F7F\u7528.env\u76F8\u5173\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u5462\uFF1F</p><p>\u65B9\u4FBF\u5728\u6253\u5305\u4E4B\u540E\uFF0C\u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539\u7EBF\u4E0A\u7684\u90E8\u5206\u53C2\u6570\u3002</p><p>:::</p><p>\u601D\u8DEF\uFF1A</p><ul><li>\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u628A.env.*\u6587\u4EF6\u4E2D\uFF0C\u76F8\u5173\u7684\u7684\u53D8\u91CF\u8BFB\u53D6\u5E76\u8F93\u51FA\u5230\u7279\u5B9A\u7684\u6587\u4EF6<code>_app.config.js</code>\uFF1B</li><li>\u5728\u7EBF\u4E0A\u7684\u4EE3\u7801\uFF0C\u8BFB\u53D6<code>_app.config.js</code>\uFF0C\u5E76\u4F7F\u7528\u5176\u4E2D\u7684\u53D8\u91CF\uFF1B</li></ul><p>\u8FD9\u6837\uFF0C\u76F8\u5F53\u4E8E\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>// _app.config.js
window.__PRODUCTION__VUETOIMCADMIN__CONF__ = {
	VITE_GLOB_API_URL: &quot;/api&quot;
  VITE_GLOB_API_URL_PREFIX: &quot;&quot;
  VITE_GLOB_APP_SHORT_NAME: &quot;VueToimcAdmin&quot;
  VITE_GLOB_APP_TITLE: &quot;VueToimcAdmin-\u57FA\u4E8EVue3+ElementPlus\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F&quot;
  VITE_GLOB_UPLOAD_URL: &quot;/upload&quot;
}
</code></pre></div><p>\u5177\u4F53\u505A\u6CD5\uFF1A\u5F53\u6267\u884C<code>npm run build</code>\u6784\u5EFA\u9879\u76EE\u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210 <code>_app.config.js</code> \u6587\u4EF6\u5E76\u63D2\u5165 <code>index.html</code>\u3002</p><p><strong>\u6CE8\u610F: \u5F00\u53D1\u73AF\u5883\u4E0D\u4F1A\u751F\u6210</strong></p><h3 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h3><p><code>_app.config.js</code> \u7528\u4E8E\u9879\u76EE\u5728\u6253\u5305\u540E\uFF0C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u7684\u9700\u6C42\uFF0C\u5982\u63A5\u53E3\u5730\u5740\u3002\u4E0D\u7528\u91CD\u65B0\u8FDB\u884C\u6253\u5305\uFF0C\u53EF\u5728\u6253\u5305\u540E\u4FEE\u6539 <code>/dist/_app.config.js</code> \u5185\u7684\u53D8\u91CF\uFF0C\u5237\u65B0\u5373\u53EF\u66F4\u65B0\u4EE3\u7801\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><h3 id="\u5982\u4F55\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u83B7\u53D6" aria-hidden="true">#</a> \u5982\u4F55\u83B7\u53D6</h3><p>\u60F3\u8981\u83B7\u53D6 <code>_app.config.js</code> \u5185\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts" target="_blank" rel="noopener noreferrer">src/hooks/useGlobSetting.ts</a> \u63D0\u4F9B\u7684\u51FD\u6570\u6765\u8FDB\u884C\u83B7\u53D6\u3002</p><h3 id="\u5982\u4F55\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u65B0\u589E" aria-hidden="true">#</a> \u5982\u4F55\u65B0\u589E</h3><ol><li><p>\u9996\u5148\u5728 <code>.env</code> \u6216\u8005\u5BF9\u5E94\u7684\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u5185\uFF0C\u65B0\u589E\u9700\u8981\u53EF\u52A8\u6001\u914D\u7F6E\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u4EE5 <code>VITE_GLOB_</code>\u5F00\u5934</p></li><li><p><code>VITE_GLOB_</code> \u5F00\u5934\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u52A0\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u901A\u8FC7\u5728 <code>types/config.d.ts</code> \u5185\u4FEE\u6539 <code>GlobEnvConfig</code> \u548C <code>GlobConfig</code> \u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\u7684\u503C\u6765\u5B9A\u4E49\u65B0\u6DFB\u52A0\u7684\u7C7B\u578B\uFF1B</p></li><li><p><a href="https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts" target="_blank" rel="noopener noreferrer">src/hooks/useGlobSetting.ts</a> \u4E2D\u6DFB\u52A0\u65B0\u589E\u7684\u8FD4\u56DE\u503C\u5373\u53EF\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>import type { GlobConfig } from &#39;types/config&#39;

import { warn } from &#39;@/utils/log&#39;
import { getAppEnvConfig } from &#39;@/utils/env&#39;

// \u83B7\u53D6\u7531esno\u5F62\u6210\u7684\u5168\u5C40\u7684\u914D\u7F6E\u6587\u4EF6_app.config.js\u4E2D\u7684\u914D\u7F6E
export const useGlobSetting = (): Readonly&lt;GlobConfig&gt; =&gt; {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL
  } = getAppEnvConfig()

  if (!/[a-zA-Z\\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      &#39;VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.&#39;
    )
  }

  // Take global configuration
  const glob: Readonly&lt;GlobConfig&gt; = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  }
  return glob as Readonly&lt;GlobConfig&gt;
}
</code></pre></div></li></ol><h2 id="script-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#script-\u914D\u7F6E" aria-hidden="true">#</a> script \u914D\u7F6E</h2><div class="language-json ext-json"><pre class="language-json"><code>// package.json \u4EE3\u7801
&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite&quot;, // \u8FD0\u884C\u9879\u76EE
    &quot;serve&quot;: &quot;npm run dev&quot;, // \u8FD0\u884C\u9879\u76EE
    &quot;build:emit&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;, // \u6784\u5EFA\u9879\u76EE
    &quot;build&quot;: &quot;vite build&quot;, // \u6784\u5EFA\u9879\u76EE
    &quot;report&quot;: &quot;rimraf dist &amp;&amp; vite build&quot;, // \u5220\u9664dist\u540E \u6784\u5EFA\u9879\u76EE
    &quot;preview&quot;: &quot;npm run build &amp;&amp; vite preview&quot;, // \u8FD0\u884C\u5E76\u9884\u89C8
    &quot;preview:dist&quot;: &quot;vite preview&quot;, // \u9884\u89C8\u6784\u5EFA\u540E\u7684\u9879\u76EE
    &quot;log&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;, // changelog
    &quot;lint:eslint&quot;: &quot;eslint \\&quot;{src,mock}/**/*.{vue,ts,tsx}\\&quot; --fix&quot;, // eslint \u4FEE\u590D
    &quot;lint:prettier&quot;: &quot;prettier --write --loglevel warn \\&quot;src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;, // prettier \u683C\u5F0F\u5316
    &quot;lint:lint-staged&quot;: &quot;lint-staged -c ./.husky/lintstagedrc.js&quot;, // \u7528\u4E8Ehusky\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C
    &quot;lint:stylelint&quot;: &quot;stylelint --cache --fix \\&quot;**/*.{vue,less,postcss,css,scss}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;, // stylelint\u683C\u5F0F\u5316\u4FEE\u590D
    &quot;prepare&quot;: &quot;husky install&quot; // \u5B89\u88C5husky\uFF08https://typicode.github.io/husky/#/\uFF09
  },
</code></pre></div>`,35),s=[i];function r(c,l){return n(),t("div",null,s)}var p=e(a,[["render",r],["__file","project-configs.html.vue"]]);export{p as default};
