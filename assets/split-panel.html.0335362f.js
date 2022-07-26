import{_ as s,e as a}from"./app.bb955598.js";var n="/vue3-toimc-admin-doc/assets/split-panel.f7c6bf98.png";const t={},p=a('<h1 id="\u5207\u5272\u9762\u677F" tabindex="-1"><a class="header-anchor" href="#\u5207\u5272\u9762\u677F" aria-hidden="true">#</a> \u5207\u5272\u9762\u677F</h1><p>\u53EF\u901A\u8FC7\u62D6\u62FD\u5206\u5272\u7EBF\u6765\u6539\u53D8\u9762\u677F\u5C3A\u5BF8\u5927\u5C0F</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+n+`" alt="splitpanel"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>template #header<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card-header&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;font-medium&quot;</span><span class="token operator">&gt;</span>\u5207\u5272\u9762\u677F<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;split-panel&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>splitpanel <span class="token operator">:</span>split<span class="token operator">-</span>set<span class="token operator">=</span><span class="token string">&quot;settingLR&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> #paneL \u8868\u793A\u6307\u5B9A\u8BE5\u7EC4\u4EF6\u4E3A\u5DE6\u4FA7\u9762\u677F <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>template #pageL<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u81EA\u5B9A\u4E49\u5DE6\u4FA7\u9762\u677F\u7684\u5185\u5BB9 <span class="token operator">--</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;panel&quot;</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> #paneR \u8868\u793A\u6307\u5B9A\u8BE5\u7EC4\u4EF6\u4E3A\u53F3\u4FA7\u9762\u677F <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>template #pageR<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;panel&quot;</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>splitpanel<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> splitpanel<span class="token punctuation">,</span> <span class="token punctuation">{</span> ContextProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/SplitPanel&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> settingLR <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>ContextProps<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    minPercent<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    defaultPercent<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    split<span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
  $panel<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  $panel<span class="token operator">-</span>height<span class="token operator">:</span> 70vh<span class="token punctuation">;</span>

  <span class="token punctuation">.</span>split<span class="token operator">-</span>panel <span class="token punctuation">{</span>
    width<span class="token operator">:</span> 70vw<span class="token punctuation">;</span>
    height<span class="token operator">:</span> $panel<span class="token operator">-</span>height<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
    color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    border<span class="token operator">:</span> 1px solid #e5e6eb<span class="token punctuation">;</span>

    <span class="token punctuation">.</span>panel <span class="token punctuation">{</span>
      width<span class="token operator">:</span> $panel<span class="token operator">-</span>width<span class="token punctuation">;</span>
      height<span class="token operator">:</span> $panel<span class="token operator">-</span>width<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> $panel<span class="token operator">-</span>height<span class="token punctuation">;</span>
      color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$color<span class="token operator">:</span> dodgerblue<span class="token punctuation">,</span> $alpha<span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>dv<span class="token operator">-</span>b <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$color<span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">,</span> $alpha<span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre></div><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><p>\u53EF\u901A\u8FC7\u63D2\u69FD\u6269\u5C55\u591A\u79CD\u5E03\u5C40</p><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">pageL</td><td style="text-align:left;">\u5DE6\u4FA7\u9762\u677F</td></tr><tr><td style="text-align:left;">pageR</td><td style="text-align:left;">\u53F3\u4FA7\u9762\u677F</td></tr></tbody></table>`,9);function o(e,r){return p}var c=s(t,[["render",o],["__file","split-panel.html.vue"]]);export{c as default};
