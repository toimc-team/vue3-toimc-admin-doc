import{_ as t,e as n}from"./app.3c0316d5.js";var s="/vue3-toimc-admin-doc/assets/desc.3ba994d1.png";const a={},e=n('<h1 id="\u8BE6\u60C5\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u60C5\u9762\u677F" aria-hidden="true">#</a> \u8BE6\u60C5\u9762\u677F</h1><p>\u57FA\u4E8E<code>el-descriptions</code>\u4E8C\u6B21\u5C01\u88C5 <code>descriptions</code>\u8BE6\u60C5\u9762\u677F\u7EC4\u4EF6\uFF0C\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u4E1A\u52A1\u8FDB\u884C\u6269\u5C55\u4F7F\u7528\u3002</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+s+`" alt="desc"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u8BE6\u60C5\u9762\u677F&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>descriptions title<span class="token operator">=</span><span class="token string">&quot;\u5173\u4E8EBrain&quot;</span> <span class="token operator">:</span>items<span class="token operator">=</span><span class="token string">&quot;items&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>descriptions<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> DescItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Descriptions/types&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">&#39;toimc&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u7535\u8BDD&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">&#39;1340000000&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">&#39;18&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span>
          tag<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5B66\u6821&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token string">&#39;\u897F\u5B89\u4EA4\u5927&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u4E2A\u4EBA\u4E3B\u9875&#39;</span><span class="token punctuation">,</span>
          field<span class="token operator">:</span> <span class="token punctuation">{</span>
            link<span class="token operator">:</span> <span class="token string">&#39;https://www.toimc.com&#39;</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u70B9\u51FB\u8BBF\u95EE&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span> <span class="token keyword">as</span> DescItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        items
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">\u5C55\u793A\u5E03\u5C40</td><td style="text-align:left;">string</td><td style="text-align:left;">vertical\uFF5Chorizontal</td><td style="text-align:left;">horizontal</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u5927\u5C0F</td><td style="text-align:left;">string</td><td style="text-align:left;">large\uFF5Cdefault\uFF5C small</td><td style="text-align:left;">default</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">\u8BE6\u60C5\u9762\u677F\u6807\u9898</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">extra</td><td style="text-align:left;"></td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;">\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">\u662F\u5426\u6298\u53E0</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">items</td><td style="text-align:left;">\u8BE6\u60C5\u5185\u5BB9</td><td style="text-align:left;">array</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">column</td><td style="text-align:left;">\u5217\u7684\u6570\u91CF</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">3</td></tr></tbody></table>`,8);function p(o,l){return e}var r=t(a,[["render",p],["__file","desc.html.vue"]]);export{r as default};
