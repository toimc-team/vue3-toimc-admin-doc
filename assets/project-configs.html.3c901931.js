import{_ as e,r as p,o as c,c as l,a as n,b as o,F as r,e as a,d as s}from"./app.84bbd91c.js";const i={},u=a(`<h1 id="\u9879\u76EE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E</h1><h2 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u914D\u7F6E</h2><blockquote><p>src \u6587\u4EF6\u5939\u4E0B\u627E\u5230 theme.config.ts \u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u4E3A\u9879\u76EE\u6574\u4F53\u7684\u4E3B\u9898\u914D\u7F6E</p></blockquote><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre></div><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8BE5\u6587\u4EF6\u4E3A\u6240\u6709\u6A21\u5F0F\u5171\u4EAB\u914D\u7F6E\u9879\u3002</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># port</span>
VITE_PORT <span class="token operator">=</span> <span class="token number">5500</span>

<span class="token comment"># spa-title</span>
VITE_GLOB_APP_TITLE <span class="token operator">=</span> VueToimcAdmin-\u57FA\u4E8EVue3+ElementPlus\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F

<span class="token comment"># spa shortname</span>
VITE_GLOB_APP_SHORT_NAME <span class="token operator">=</span> VueToimcAdmin

<span class="token comment"># config file</span>
VITE_APP_CONFIG_FILE_NAME <span class="token operator">=</span> <span class="token string">&quot;_app.config.js&quot;</span>

<span class="token comment"># dist path</span>
<span class="token assign-left variable">VITE_APP_OUTPUT_DIR</span><span class="token operator">=</span>dist

<span class="token comment"># Optional: hash | html5</span>
VITE_APP_ROUTE_MODE <span class="token operator">=</span> <span class="token string">&quot;hash&quot;</span>
</code></pre></div><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u662F\u5426\u5F00\u542Fmock</span>
VITE_USE_MOCK <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># \u516C\u5171\u6587\u4EF6\u76EE\u5F55</span>
VITE_PUBLIC_PATH <span class="token operator">=</span> /

<span class="token comment"># Cross-domain proxy, you can configure multiple</span>
<span class="token comment"># Please note that no line breaks</span>
VITE_PROXY <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;/dev-api&quot;</span>,<span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;/upload&quot;</span>,<span class="token string">&quot;http://localhost:3300/upload&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># Delete console</span>
VITE_DROP_CONSOLE <span class="token operator">=</span> <span class="token boolean">false</span>

VITE_HTTPS <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment"># Basic interface address SPA</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/dev-api

<span class="token comment"># File upload address\uFF0C optional</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload

<span class="token comment"># Interface prefix</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
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
</code></pre></div><h2 id="\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883\u52A8\u6001\u914D\u7F6E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u601D\u8003\uFF1A\u5982\u4F55\u5728\u751F\u4EA7\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u4EE3\u7801\uFF0C\u4E5F\u80FD\u4F7F\u7528.env\u76F8\u5173\u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u5462\uFF1F</p><p>\u65B9\u4FBF\u5728\u6253\u5305\u4E4B\u540E\uFF0C\u901A\u8FC7\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539\u7EBF\u4E0A\u7684\u90E8\u5206\u53C2\u6570\u3002</p></div><p>\u601D\u8DEF\uFF1A</p><ul><li>\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u628A.env.*\u6587\u4EF6\u4E2D\uFF0C\u76F8\u5173\u7684\u7684\u53D8\u91CF\u8BFB\u53D6\u5E76\u8F93\u51FA\u5230\u7279\u5B9A\u7684\u6587\u4EF6<code>_app.config.js</code>\uFF1B</li><li>\u5728\u7EBF\u4E0A\u7684\u4EE3\u7801\uFF0C\u8BFB\u53D6<code>_app.config.js</code>\uFF0C\u5E76\u4F7F\u7528\u5176\u4E2D\u7684\u53D8\u91CF\uFF1B</li></ul><p>\u8FD9\u6837\uFF0C\u76F8\u5F53\u4E8E\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// _app.config.js</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUETOIMCADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&quot;VueToimcAdmin&quot;</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&quot;VueToimcAdmin-\u57FA\u4E8EVue3+ElementPlus\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F&quot;</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&quot;/upload&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5177\u4F53\u505A\u6CD5\uFF1A\u5F53\u6267\u884C<code>npm run build</code>\u6784\u5EFA\u9879\u76EE\u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210 <code>_app.config.js</code> \u6587\u4EF6\u5E76\u63D2\u5165 <code>index.html</code>\u3002</p><p><strong>\u6CE8\u610F: \u5F00\u53D1\u73AF\u5883\u4E0D\u4F1A\u751F\u6210</strong></p><h3 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h3><p><code>_app.config.js</code> \u7528\u4E8E\u9879\u76EE\u5728\u6253\u5305\u540E\uFF0C\u9700\u8981\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u7684\u9700\u6C42\uFF0C\u5982\u63A5\u53E3\u5730\u5740\u3002\u4E0D\u7528\u91CD\u65B0\u8FDB\u884C\u6253\u5305\uFF0C\u53EF\u5728\u6253\u5305\u540E\u4FEE\u6539 <code>/dist/_app.config.js</code> \u5185\u7684\u53D8\u91CF\uFF0C\u5237\u65B0\u5373\u53EF\u66F4\u65B0\u4EE3\u7801\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><h3 id="\u5982\u4F55\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u83B7\u53D6" aria-hidden="true">#</a> \u5982\u4F55\u83B7\u53D6</h3>`,25),k=s("\u60F3\u8981\u83B7\u53D6 "),d=n("code",null,"_app.config.js",-1),_=s(" \u5185\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),m={href:"https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts",target:"_blank",rel:"noopener noreferrer"},g=s("src/hooks/useGlobSetting.ts"),h=s(" \u63D0\u4F9B\u7684\u51FD\u6570\u6765\u8FDB\u884C\u83B7\u53D6\u3002"),E=n("h3",{id:"\u5982\u4F55\u65B0\u589E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5982\u4F55\u65B0\u589E","aria-hidden":"true"},"#"),s(" \u5982\u4F55\u65B0\u589E")],-1),q=a("<li><p>\u9996\u5148\u5728 <code>.env</code> \u6216\u8005\u5BF9\u5E94\u7684\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u5185\uFF0C\u65B0\u589E\u9700\u8981\u53EF\u52A8\u6001\u914D\u7F6E\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u4EE5 <code>VITE_GLOB_</code>\u5F00\u5934</p></li><li><p><code>VITE_GLOB_</code> \u5F00\u5934\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u52A0\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u901A\u8FC7\u5728 <code>types/config.d.ts</code> \u5185\u4FEE\u6539 <code>GlobEnvConfig</code> \u548C <code>GlobConfig</code> \u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\u7684\u503C\u6765\u5B9A\u4E49\u65B0\u6DFB\u52A0\u7684\u7C7B\u578B\uFF1B</p></li>",2),v={href:"https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/hooks/useGlobSetting.ts",target:"_blank",rel:"noopener noreferrer"},I=s("src/hooks/useGlobSetting.ts"),T=s(" \u4E2D\u6DFB\u52A0\u65B0\u589E\u7684\u8FD4\u56DE\u503C\u5373\u53EF\uFF1A"),f=a(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GlobConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;types/config&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> warn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/log&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAppEnvConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/env&#39;</span>

<span class="token comment">// \u83B7\u53D6\u7531esno\u5F62\u6210\u7684\u5168\u5C40\u7684\u914D\u7F6E\u6587\u4EF6_app.config.js\u4E2D\u7684\u914D\u7F6E</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getAppEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z\\_]*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.&#39;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Take global configuration</span>
  <span class="token keyword">const</span> glob<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    apiUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    shortName<span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    urlPrefix<span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    uploadUrl<span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),b=a(`<h2 id="script-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#script-\u914D\u7F6E" aria-hidden="true">#</a> script \u914D\u7F6E</h2><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// package.json \u4EE3\u7801</span>
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
</code></pre></div>`,2);function P(y,L){const t=p("ExternalLinkIcon");return c(),l(r,null,[u,n("p",null,[k,d,_,n("a",m,[g,o(t)]),h]),E,n("ol",null,[q,n("li",null,[n("p",null,[n("a",v,[I,o(t)]),T]),f])]),b],64)}var V=e(i,[["render",P],["__file","project-configs.html.vue"]]);export{V as default};
