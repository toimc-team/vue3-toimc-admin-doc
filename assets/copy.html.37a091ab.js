import{_ as s,e as n}from"./app.f123a866.js";var a="/vue3-toimc-admin-doc/assets/copy.253731c4.png";const o={},p=n('<h1 id="\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236" aria-hidden="true">#</a> \u590D\u5236</h1><p>\u4F7F\u7528useClipboard\u51FD\u6570\u6269\u5C55\u590D\u5236\u529F\u80FD</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+a+`" alt="copy"></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #header<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;flex items-center&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mr-4&quot;</span><span class="token operator">&gt;</span>\u4E0B\u8F7D\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>qr<span class="token operator">-</span>code ref<span class="token operator">=</span><span class="token string">&quot;qrRef&quot;</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;url&quot;</span> <span class="token operator">:</span>logo<span class="token operator">=</span><span class="token string">&quot;logoImg&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>qr<span class="token operator">-</span>code<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;w-96 pr-4&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>el<span class="token operator">-</span>input
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;url&quot;</span>
            clearable
            placeholder<span class="token operator">=</span><span class="token string">&quot;\u8F93\u5165\u94FE\u63A5\u5730\u5740...&quot;</span>
            <span class="token decorator"><span class="token at operator">@</span><span class="token function">input</span></span><span class="token operator">=</span><span class="token string">&quot;(val) =&gt; (url = val)&quot;</span>
          <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>input<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;() =&gt; copyText(url)&quot;</span><span class="token operator">&gt;</span>\u590D\u5236\u94FE\u63A5<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>tooltip content<span class="token operator">=</span><span class="token string">&quot;(\u5728\u7EBFlogo\u4F1A\u5BFC\u81F4\u56FE\u7247\u8DE8\u57DF\uFF0C\u9700\u8981\u4E0B\u8F7D\u56FE\u7247\u9700\u8981\u81EA\u884C\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898)&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;download&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>icon <span class="token operator">:</span>size<span class="token operator">=</span><span class="token string">&quot;18&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;cursor-pointer&quot;</span> icon<span class="token operator">=</span><span class="token string">&quot;ep:download&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>\u4E0B\u8F7D\u4E8C\u7EF4\u7801
          <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tooltip<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> logoImg <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images/brian.jpg&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> QrCodeActionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/QrCode/types&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;https://github.com/toimc-team/vue-toimc-admin&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> qrRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Nullable<span class="token operator">&lt;</span>QrCodeActionType<span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> qrEl <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>qrRef<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>qrEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
        qrEl<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\u540D&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">copyText</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useClipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">copy</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;\u590D\u5236\u6210\u529F&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        qrRef<span class="token punctuation">,</span>
        url<span class="token punctuation">,</span>
        logoImg<span class="token punctuation">,</span>
        download<span class="token punctuation">,</span>
        copyText
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div>`,6);function t(e,r){return p}var l=s(o,[["render",t],["__file","copy.html.vue"]]);export{l as default};
