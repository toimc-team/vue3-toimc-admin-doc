import{_ as o,r as e,o as p,c,a as n,b as r,F as l,e as s,d as a}from"./app.2c1a257e.js";const u={},i=s(`<h1 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E</h1><h2 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u914D\u7F6E</h2><blockquote><p>src \u6587\u4EF6\u5939\u4E0B\u627E\u5230 theme.config.ts \u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u4E3A\u9879\u76EE\u6574\u4F53\u7684\u4E3B\u9898\u914D\u7F6E</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u5BFC\u51FA\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E
 */</span>
<span class="token keyword">const</span> sysTheme <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// &#39;siderbar&#39; \u5DE6\u4FA7\u83DC\u5355 | &#39;mix&#39; \u5DE6\u4FA7+\u9876\u90E8\u83DC\u5355 | &#39;top&#39; \u9876\u90E8\u83DC\u5355 | &#39;mixbar&#39; \u53CC\u5217\u83DC\u5355</span>
  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;siderbar&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u56FA\u5B9A\u5934\u90E8</span>
  <span class="token literal-property property">fixHeader</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6697\u9ED1\u6A21\u5F0F</span>
  <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E3B\u9898\u989C\u8272</span>
  <span class="token literal-property property">primaryColor</span><span class="token operator">:</span> <span class="token string">&#39;#409eff&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355\u5BBD\u5EA6</span>
  <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token string">&#39;266px&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u663E\u793Atab page</span>
  <span class="token literal-property property">tabPage</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</h2><p>\u9879\u76EE\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u4EE5\u4E09\u79CD\u73AF\u5883\u914D\u7F6E\u4E3A\u4E3B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\u251C\u2500\u2500 .env                                                    # \u57FA\u7840\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.development                                        # \u5F00\u53D1\u73AF\u5883\u53D8\u91CF
\u251C\u2500\u2500 .env.production                                         # \u751F\u4EA7\u73AF\u5883\u53D8\u91CF
</code></pre></div><h2 id="\u914D\u7F6E\u89E3\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u89E3\u8BFB" aria-hidden="true">#</a> \u914D\u7F6E\u89E3\u8BFB</h2><p>\u5185\u7F6E10\u4E2A\u73AF\u5883\u53D8\u91CF<code>VITE_USE_MOCK</code>\u3001<code>VITE_PUBLIC_PATH</code>\u3001<code>VITE_PROXY</code>\u3001<code>VITE_DROP_CONSOLE</code>\u3001<code>VITE_HTTPS</code>\u3001<code>VITE_GLOB_API_URL</code>\u3001<code>VITE_GLOB_UPLOAD_URL</code>\u3001<code>VITE_GLOB_API_URL_PREFIX</code>\u3001<code>VITE_GLOB_APP_TITLE</code>\u3001<code>VITE_GLOB_APP_SHORT_NAME</code></p><div class="language-env ext-env"><pre class="language-env"><code># \u9879\u76EE\u672C\u5730\u8FD0\u884C\u7AEF\u53E3\u53F7
VITE_PORT = 5500

# spa-title
VITE_GLOB_APP_TITLE = Vue Toimc Admin

# spa shortname
VITE_GLOB_APP_SHORT_NAME = vue_toimc_admin

# \u662F\u5426\u5F00\u542Fmock
VITE_USE_MOCK = true

# \u5F00\u53D1\u73AF\u5883\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
VITE_PUBLIC_PATH = /

# \u5F00\u53D1\u73AF\u5883\u4EE3\u7406
VITE_PROXY = /api

# https\u914D\u7F6E
VITE_HTTPS = false

# \u662F\u5426\u5220\u9664\u9879\u76EE\u4E2Dconsole
VITE_DROP_CONSOLE = false

# \u6587\u4EF6\u4E0A\u4F20\u76EE\u5F55
VITE_GLOB_UPLOAD_URL = /upload

# \u63A5\u53E3\u524D\u7F00 
VITE_GLOB_API_URL_PREFIX

# \u662F\u5426\u542F\u7528\u56FE\u50CF\u538B\u7F29
VITE_USE_IMAGEMIN= true

# \u4F7F\u7528 pwa
VITE_USE_PWA = false

# \u662F\u5426\u4E0E\u65E7\u7248\u6D4F\u89C8\u5668\u517C\u5BB9
VITE_LEGACY = false
</code></pre></div><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u5728 vue \u6216 ts \u6587\u4EF6\u4E2D\u4F7F\u7528 vite \u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">UserConfig</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> root<span class="token punctuation">)</span>

  <span class="token comment">// loadEnv\u8BFB\u53D6\u7684\u5E03\u5C14\u7C7B\u578B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5E03\u5C14\u7C7B\u578B</span>
  <span class="token keyword">const</span> viteEnv <span class="token operator">=</span> <span class="token function">wrapperEnv</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_PORT</span><span class="token punctuation">,</span> <span class="token constant">VITE_PUBLIC_PATH</span><span class="token punctuation">,</span> <span class="token constant">VITE_PROXY</span><span class="token punctuation">,</span> <span class="token constant">VITE_DROP_CONSOLE</span><span class="token punctuation">,</span> <span class="token constant">VITE_HTTPS</span><span class="token punctuation">,</span> <span class="token constant">VITE_USE_MOCK</span> <span class="token punctuation">}</span> <span class="token operator">=</span> viteEnv
<span class="token punctuation">}</span>
</code></pre></div>`,13),k=a("\u66F4\u591A\u7528\u6CD5\u8BF7\u67E5\u770B "),d={href:"https://github.com/toimc-team/vue3-toimc-admin/blob/main/vite.config.ts",target:"_blank",rel:"noopener noreferrer"},m=a("vite.config.ts"),_=s(`<h2 id="script-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#script-\u914D\u7F6E" aria-hidden="true">#</a> script \u914D\u7F6E</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// package.json \u4EE3\u7801</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD0\u884C\u9879\u76EE</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD0\u884C\u9879\u76EE</span>
    <span class="token property">&quot;build:emit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-tsc --noEmit &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u9879\u76EE</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u9879\u76EE</span>
    <span class="token property">&quot;report&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf dist &amp;&amp; vite build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664dist\u540E \u6784\u5EFA\u9879\u76EE</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build &amp;&amp; vite preview&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD0\u884C\u5E76\u9884\u89C8</span>
    <span class="token property">&quot;preview:dist&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9884\u89C8\u6784\u5EFA\u540E\u7684\u9879\u76EE</span>
    <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span><span class="token punctuation">,</span> <span class="token comment">// changelog</span>
    <span class="token property">&quot;lint:eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint \\&quot;{src,mock}/**/*.{vue,ts,tsx}\\&quot; --fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// eslint \u4FEE\u590D</span>
    <span class="token property">&quot;lint:prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write --loglevel warn \\&quot;src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// prettier \u683C\u5F0F\u5316</span>
    <span class="token property">&quot;lint:lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u4E8Ehusky\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C</span>
    <span class="token property">&quot;lint:stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --cache --fix \\&quot;**/*.{vue,less,postcss,css,scss}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// stylelint\u683C\u5F0F\u5316\u4FEE\u590D</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span> <span class="token comment">// \u5B89\u88C5husky\uFF08https://typicode.github.io/husky/#/\uFF09</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,2);function h(q,g){const t=e("ExternalLinkIcon");return p(),c(l,null,[i,n("blockquote",null,[n("p",null,[k,n("a",d,[m,r(t)])])]),_],64)}var E=o(u,[["render",h],["__file","project-configs.html.vue"]]);export{E as default};
