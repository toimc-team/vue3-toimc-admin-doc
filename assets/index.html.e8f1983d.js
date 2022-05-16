import{_ as n,e as s}from"./app.01c5f115.js";var a="/vue3-toimc-admin-doc/assets/image-20220516234240983.4d9994b3.png";const e={},t=s(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><blockquote><p>\u83DC\u5355\u914D\u7F6E\u3001\u8DEF\u7531\u53C2\u6570\u3001\u6743\u9650\u7B49</p></blockquote><p>\u76EE\u524D\u83DC\u5355\u76F8\u5173\u5185\u5BB9\u91C7\u7528mock\u65B9\u5F0F\uFF0C\u540E\u7EED\u4F1A\u63A8\u51FA\u7BA1\u7406\u540E\u53F0API\uFF0C\u5BF9\u63A5\u8D77\u521D\u7684\u83DC\u5355\u6743\u9650\u3002</p><p>\u8FD9\u4E2A\u7BC7\u7AE0\u4E3B\u8981\u662F\u524D\u7AEF\u7684\u8BBE\u8BA1\u4E0E\u9875\u9762\u4ECB\u7ECD\u3002</p><p>\u5176\u4E2Dmock\u670D\u52A1\u5668\u7684\u914D\u7F6E\u5982\u4E0B<code>vite.config.ts</code>\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\_</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">mockPath</span><span class="token operator">:</span> <span class="token string">&#39;mock&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">supportTs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prodEnabled</span><span class="token operator">:</span> <span class="token constant">VITE_USE_MOCK</span><span class="token punctuation">,</span>
  <span class="token comment">// \u76F8\u5F53\u4E8E\u5728src/main.ts\u4E2Dinject\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u6CE8\u610F\u6587\u4EF6\u7684\u8DEF\u5F84\u95EE\u9898</span>
  <span class="token literal-property property">injectCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    import { setupProdMockServer } from &#39;../mock/_createProductionServer&#39;;
    setupProdMockServer();
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>\u83DC\u5355\u76F8\u5173\u7684mock\u63A5\u53E3\uFF1A</p><p><img src="`+a+'" alt="image-20220516234240983"></p>',8);function p(o,r){return t}var l=n(e,[["render",p],["__file","index.html.vue"]]);export{l as default};