import{_ as t,r as n,o,c as e,a as s,b as p,F as r,e as l,d as c}from"./app.ca3db993.js";var k="/vue3-toimc-admin-doc/assets/progress.a95ae65b.png";const d={},g=l('<h1 id="\u52A8\u6001\u8FDB\u5EA6\u6761" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8FDB\u5EA6\u6761" aria-hidden="true">#</a> \u52A8\u6001\u8FDB\u5EA6\u6761</h1><p>\u4E8C\u6B21\u5C01\u88C5<code>element-plus</code>\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u8FDB\u9636\u66F4\u591A\u529F\u80FD</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+k+`" alt="progress"></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u52A8\u6001\u8FDB\u5EA6\u6761&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u9ED8\u8BA4\u7528\u6CD5<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;60&quot;</span> <span class="token operator">:</span>time<span class="token operator">=</span><span class="token string">&quot;1500&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;60&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u4E0D\u540C\u7684<span class="token keyword">type</span>\u7C7B\u578B\uFF1A<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;70&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;circle&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;80&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;dashboard&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8BBE\u7F6E\u989C\u8272\uFF1A<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;45&quot;</span> color<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;90&quot;</span> color<span class="token operator">=</span><span class="token string">&quot;#10FD12&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5FAA\u73AF\u539F\u52A8\u753B\uFF1A<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress indeterminate <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;60&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u63A7\u5236\u52A8\u753B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>d<span class="token operator">-</span>progress <span class="token keyword">is</span><span class="token operator">-</span>animation <span class="token operator">:</span>percentage<span class="token operator">=</span><span class="token string">&quot;100&quot;</span> color<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>progress<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">percentage</td><td style="text-align:left;">\u767E\u5206\u6BD4</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">isAnimation</td><td style="text-align:left;">\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">\u63A7\u5236\u52A8\u753B\u8FDB\u5EA6\u6761\u901F\u5EA6</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">3000</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">\u52A8\u753B\u7C7B\u578B</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">power1.out</td></tr></tbody></table>`,8),i={href:"https://element-plus.org/zh-CN/component/progress.html#progress-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},u=c("\u5176\u4ED6\u5C5E\u6027\u53EF\u53C2\u8003element-plus\u5B98\u7F51");function h(y,f){const a=n("ExternalLinkIcon");return o(),e(r,null,[g,s("p",null,[s("a",i,[u,p(a)])])],64)}var m=t(d,[["render",h],["__file","progress.html.vue"]]);export{m as default};