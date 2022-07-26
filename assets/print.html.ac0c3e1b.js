import{_ as n,e as s}from"./app.ca3db993.js";var a="/vue3-toimc-admin-doc/assets/json-print.cadc81b4.png",t="/vue3-toimc-admin-doc/assets/imgprint.fd487e24.png",p="/vue3-toimc-admin-doc/assets/htmlprint.3e50df1e.png";const o={},e=s('<h1 id="\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370" aria-hidden="true">#</a> \u6253\u5370</h1><p>\u6269\u5C55json\u6253\u5370\u3001\u56FE\u7247\u6253\u5370\u3001html\u6253\u5370\u4E09\u79CD\u7528\u6CD5</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><h3 id="json\u6253\u5370\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#json\u6253\u5370\u8868\u683C" aria-hidden="true">#</a> json\u6253\u5370\u8868\u683C</h3><p><img src="'+a+'" alt="json-print"></p><h3 id="\u56FE\u7247\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u6253\u5370" aria-hidden="true">#</a> \u56FE\u7247\u6253\u5370</h3><p><img src="'+t+'" alt="imgprint"></p><h3 id="html\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#html\u6253\u5370" aria-hidden="true">#</a> html\u6253\u5370</h3><p><img src="'+p+`" alt="htmlpring"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;json\u6253\u5370\u8868\u683C&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pb-4&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;jsonPrint&quot;</span><span class="token operator">&gt;</span>\u6253\u5370<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;imagePrint&quot;</span><span class="token operator">&gt;</span>\u56FE\u7247\u6253\u5370<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;htmlPrint&quot;</span><span class="token operator">&gt;</span><span class="token constant">HTML</span>\u6253\u5370<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pb-2&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>img v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in mockData&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;w-1/2&quot;</span> <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;item&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pb-4 font-bold&quot;</span><span class="token operator">&gt;</span><span class="token constant">JSON</span>\u6570\u636E<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;html&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> json <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> printJS <span class="token keyword">from</span> <span class="token string">&#39;print-js&#39;</span>
  <span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

  <span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    username<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    phone<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    role<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    createTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    updateTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> transferData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> mockData <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;https://toimc-online.obs.cn-east-3.myhuaweicloud.com/vue-toimc-admin/shotcuts/pic1.jpg&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;https://toimc-online.obs.cn-east-3.myhuaweicloud.com/vue-toimc-admin/shotcuts/pic2.jpg&#39;</span>
      <span class="token punctuation">]</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getTansferData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/public/transfer&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data
        transferData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        printable<span class="token operator">:</span> transferData<span class="token punctuation">,</span>
        properties<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">&#39;json&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">as</span> printJS<span class="token punctuation">.</span>Configuration<span class="token punctuation">)</span>

      <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">jsonPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printJS</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">imagePrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          printable<span class="token operator">:</span> mockData<span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span>
          header<span class="token operator">:</span> <span class="token string">&#39;toimc\u7BA1\u7406\u540E\u53F0&#39;</span><span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token string">&#39;img{ width:100%; }&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">htmlPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          printable<span class="token operator">:</span> html<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
          header<span class="token operator">:</span> <span class="token string">&#39;toimc\u7BA1\u7406\u540E\u53F0&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">getTansferData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        jsonPrint<span class="token punctuation">,</span>
        imagePrint<span class="token punctuation">,</span>
        htmlPrint<span class="token punctuation">,</span>
        mockData<span class="token punctuation">,</span>
        html<span class="token punctuation">,</span>
        json
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,11);function c(r,l){return e}var i=n(o,[["render",c],["__file","print.html.vue"]]);export{i as default};
