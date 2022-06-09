import{_ as s,e as n}from"./app.f62d93fe.js";var a="/vue3-toimc-admin-doc/assets/download.5f891882.png";const t={},o=n('<h1 id="\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> \u6587\u4EF6\u4E0B\u8F7D</h1><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+a+`" alt="download"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u6587\u4EF6\u4E0B\u8F7D\u793A\u4F8B&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>alert title<span class="token operator">=</span><span class="token string">&quot;\u6839\u636E\u540E\u53F0\u63A5\u53E3\u6587\u4EF6\u6D41\u4E0B\u8F7D&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span> <span class="token operator">:</span>closable<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;py-4&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleDownByData&quot;</span><span class="token operator">&gt;</span>\u6587\u4EF6\u6D41\u4E0B\u8F7D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>alert title<span class="token operator">=</span><span class="token string">&quot;\u6839\u636E\u6587\u4EF6\u5730\u5740\u4E0B\u8F7D\u6587\u4EF6&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span> <span class="token operator">:</span>closable<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;py-4&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleDownloadByUrl&quot;</span><span class="token operator">&gt;</span>\u6587\u4EF6\u5730\u5740\u4E0B\u8F7D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>alert title<span class="token operator">=</span><span class="token string">&quot;base64\u6D41\u4E0B\u8F7D&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span> <span class="token operator">:</span>closable<span class="token operator">=</span><span class="token string">&quot;false&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;py-4&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleDownloadByBase64&quot;</span><span class="token operator">&gt;</span>base64\u6D41\u4E0B\u8F7D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>alert
        title<span class="token operator">=</span><span class="token string">&quot;\u56FE\u7247Url\u4E0B\u8F7D,\u5982\u679C\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u9700\u8981\u5904\u7406\u56FE\u7247\u8DE8\u57DF&quot;</span>
        type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span>
        <span class="token operator">:</span>closable<span class="token operator">=</span><span class="token string">&quot;false&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;py-4&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleDownloadByOnlineUrl&quot;</span><span class="token operator">&gt;</span>\u56FE\u7247<span class="token constant">URL</span>\u4E0B\u8F7D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    downloadByUrl<span class="token punctuation">,</span>
    downloadByData<span class="token punctuation">,</span>
    downloadByBase64<span class="token punctuation">,</span>
    downloadByOnlineUrl
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/file/download&#39;</span>

  <span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">&#39;./base64-data&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">handleDownByData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">downloadByData</span><span class="token punctuation">(</span>
          <span class="token string">&#39;toimc\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/toimc-team/vue3-toimc-admin&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;README.txt&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">function</span> <span class="token function">handleDownloadByUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">downloadByUrl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          url<span class="token operator">:</span> <span class="token string">&#39;https://toimc-online.obs.cn-east-3.myhuaweicloud.com/vue-toimc-admin/shotcuts/image106.jpg&#39;</span><span class="token punctuation">,</span>
          target<span class="token operator">:</span> <span class="token string">&#39;_self&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token function">downloadByUrl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          url<span class="token operator">:</span> <span class="token string">&#39;https://toimc-online.obs.cn-east-3.myhuaweicloud.com/brian.jpg&#39;</span><span class="token punctuation">,</span>
          target<span class="token operator">:</span> <span class="token string">&#39;_self&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleDownloadByBase64</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">downloadByBase64</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;qrcode.png&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleDownloadByOnlineUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">downloadByOnlineUrl</span><span class="token punctuation">(</span>
          <span class="token string">&#39;https://toimc-online.obs.cn-east-3.myhuaweicloud.com/vue-toimc-admin/shotcuts/image1.jpg&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;\u7F8E\u5973.png&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        handleDownloadByUrl<span class="token punctuation">,</span>
        handleDownByData<span class="token punctuation">,</span>
        handleDownloadByBase64<span class="token punctuation">,</span>
        handleDownloadByOnlineUrl
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre></div>`,5);function p(e,l){return o}var r=s(t,[["render",p],["__file","download.html.vue"]]);export{r as default};
