import{_ as n,e as s}from"./app.d668d1cf.js";const a={},e=s(`<h1 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h1><blockquote><p><strong>\u83DC\u5355\u5FC5\u987B\u914D\u5408\u8DEF\u7531\u8FDB\u884C\u4F7F\u7528</strong></p></blockquote><h2 id="\u83DC\u5355\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u7C7B\u578B" aria-hidden="true">#</a> \u83DC\u5355\u7C7B\u578B</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RouteMeta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span>
  menuType<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">//\u83DC\u5355\u7C7B\u578B: 0\u4E00\u7EA7\u83DC\u5355 1\u5B50\u83DC\u5355 2\u6309\u94AE/\u6743\u9650</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u83DC\u5355\u540D\u79F0/\u6309\u94AE/\u6743\u9650\u540D\u79F0</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u8BBF\u95EE\u8DEF\u5F84</span>
  component<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">//\u524D\u7AEF\u7EC4\u4EF6</span>
  redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u9ED8\u8BA4\u8DF3\u8F6C\u5730\u5740</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u83DC\u5355\u56FE\u6807</span>
  sortNo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">//\u6392\u5E8F</span>
  route<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u662F\u5426\u8DEF\u7531\u83DC\u5355</span>
  hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u9690\u85CF\u8DEF\u7531</span>
  hideTab<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u9690\u85CFTab</span>
  keepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u662F\u5426\u7F13\u5B58\u8DEF\u7531</span>
  alwaysShow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u662F\u5426\u805A\u5408\u8DEF\u7531</span>
  internalOrExternal<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//\u6253\u5F00\u65B9\u5F0F\uFF1Atrue\uFF1A\u5916\u90E8\u8DEF\u7531 false:\u5185\u90E8\u8DEF\u7531</span>
  parentId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u4E0A\u7EA7\u83DC\u5355ID</span>
  perms<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u6388\u6743\u6807\u8BC6</span>
  permsType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u6388\u6743\u7B56\u7565 1\u53EF\u89C1/\u53EF\u8BBF\u95EE 2\u53EF\u7F16\u8F91</span>
  status<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u72B6\u6001 1 \u6709\u6548/0 \u65E0\u6548</span>

  id<span class="token operator">:</span> <span class="token builtin">string</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span>
  createBy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  meta<span class="token operator">:</span> RouteMeta
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u65B0\u589E\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u83DC\u5355" aria-hidden="true">#</a> \u65B0\u589E\u83DC\u5355</h2><p>\u76F4\u63A5\u5728 <code>src/router/modules</code> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u3002</p><p>\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728<code>src/router/modules</code>\u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p><p>\u53EF\u53C2\u8003\u65B0\u589E\u8DEF\u7531\u90E8\u5206\u3002</p><h2 id="\u83DC\u5355\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u6392\u5E8F" aria-hidden="true">#</a> \u83DC\u5355\u6392\u5E8F</h2><p>\u901A\u8FC7\u8BBE\u7F6E <code>order</code> \u5C5E\u6027\u5B9E\u73B0\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u6392\u5E8F\u8D8A\u9760\u540E\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>meta<span class="token operator">:</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  order<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&#39;House&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11);function p(t,o){return e}var r=n(a,[["render",p],["__file","menu.html.vue"]]);export{r as default};
