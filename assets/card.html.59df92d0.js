import{_ as s,e as a}from"./app.ca3db993.js";var n="/vue3-toimc-admin-doc/assets/card.a72d0151.png";const p={},t=a('<h1 id="\u5361\u7247" tabindex="-1"><a class="header-anchor" href="#\u5361\u7247" aria-hidden="true">#</a> \u5361\u7247</h1><p>\u57FA\u4E8E <code>el-card</code> \u4E8C\u6B21\u5C01\u88C5\u7684\u5361\u7247\u7EC4\u4EF6</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+n+`" alt="card"></p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4 grid grid-cols-4 gap-3&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span>\u666E\u901A\u7684\u7528\u6CD5<span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card shadow<span class="token operator">=</span><span class="token string">&quot;hover&quot;</span> header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span>\u8BBE\u7F6Ehover<span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #header<span class="token operator">&gt;</span>template header<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #footer<span class="token operator">&gt;</span>template footer<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>template\u652F\u6301header<span class="token punctuation">,</span>footer<span class="token punctuation">,</span>body<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card body<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4 text-blue-600&quot;</span> footer<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-red-500&quot;</span> header<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-gray-300&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #header<span class="token operator">&gt;</span>template header<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #footer<span class="token operator">&gt;</span>template footer<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      \u53EF\u4EE5\u7ED9body<span class="token punctuation">,</span> footer<span class="token punctuation">,</span> header \u8BBE\u7F6E<span class="token keyword">class</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> collapse<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8BBE\u7F6E collapse \u5C5E\u6027\u652F\u6301<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> collapse<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8BBE\u7F6E size \u5C5E\u6027\u2014\u2014small<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> collapse<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8BBE\u7F6E size \u5C5E\u6027\u2014\u2014<span class="token keyword">default</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;large&quot;</span> collapse<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u8BBE\u7F6E size \u5C5E\u6027\u2014\u2014large<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u53EF\u6298\u53E0\u7684card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> tips<span class="token operator">=</span><span class="token string">&quot;\u8FD9\u91CC\u662Ftips&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;{ content: &#39;\u8FD9\u91CC\u662Ftips&#39;, placement: &#39;top&#39; }&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token punctuation">,</span> \u8BBE\u7F6Eplacement<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card
      header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
      <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;{ content: &#39;\u8FD9\u91CC\u662Ftips&#39;, placement: &#39;top&#39; }&quot;</span>
      tips<span class="token operator">-</span>icon<span class="token operator">=</span><span class="token string">&quot;ant-design:alert-filled&quot;</span>
    <span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token punctuation">,</span> \u66F4\u6362icon<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> reverse <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #tips<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:home-filled&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:postcard&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:user&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token punctuation">,</span> \u66F4\u6362\u6210\u6309\u94AE\u7EC4<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> reverse <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #suffix<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:home-filled&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:postcard&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:user&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token punctuation">,</span> \u66F4\u6362\u6210\u6309\u94AE\u7EC4<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> reverse <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #tips<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon icon<span class="token operator">=</span><span class="token string">&quot;ep:user&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #suffix<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag type<span class="token operator">=</span><span class="token string">&quot;success&quot;</span><span class="token operator">&gt;</span>\u8FD9\u5468\u5FC3\u60C5\u4E0D\u9519<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>tips\u793A\u4F8B<span class="token punctuation">,</span> \u66F4\u6362\u6210\u6309\u94AE\u7EC4<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;test&quot;</span> <span class="token operator">:</span>tips<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> collapse<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template #collapse<span class="token operator">=</span><span class="token string">&quot;{ show }&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;show&quot;</span> icon<span class="token operator">=</span><span class="token string">&quot;ant-design:caret-down-outlined&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>icon v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;!show&quot;</span> icon<span class="token operator">=</span><span class="token string">&quot;ant-design:caret-up-filled&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>icon<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u81EA\u5B9A\u4E49collapse\u7684icon<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5185\u5BB9<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><p>\u5168\u90E8\u5C5E\u6027</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// \u5361\u7247\u6807\u9898</span>
header<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// body\u7684\u6837\u5F0F</span>
bodyStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>CSSProperties<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
headerClass<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
bodyClass<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
footerClass<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u662F\u5426\u6298\u53E0</span>
collapse<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u8BBE\u7F6E\u9634\u5F71\u663E\u793A\u65F6\u673A</span>
shadow<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token string">&#39;always&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;never&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u5927\u5C0F</span>
size<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token string">&#39;small&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;large&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u63D0\u793A\u6587\u672C</span>
tips<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Boolean<span class="token punctuation">,</span> Object<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> ToolTipsType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u5E03\u5C40</span>
layout<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>CardLayoutType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// \u63D0\u793A\u56FE\u6807</span>
tipsIcon<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;ep:info-filled&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// title\u4E0Etips\u8C03\u6362\u4F4D\u7F6E</span>
reverse<span class="token operator">:</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre></div>`,9);function o(e,r){return t}var c=s(p,[["render",o],["__file","card.html.vue"]]);export{c as default};