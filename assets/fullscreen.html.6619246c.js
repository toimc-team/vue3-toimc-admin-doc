import{_ as s,e as n}from"./app.df6d3d6f.js";const a={},e=n(`<h1 id="\u5168\u5C4F" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C4F" aria-hidden="true">#</a> \u5168\u5C4F</h1><p>\u9879\u76EE\u4E2D\u5DF2\u7ECF\u96C6\u6210 <code>&#39;@vueuse/core&#39;</code> \u4E2D\u7684 <code>useFullscreen</code> \u5E76\u5DF2\u7ECF\u9ED8\u8BA4\u5BFC\u5165</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u5168\u5C4F\u6D4F\u89C8\u5668\u9875\u9762</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isFullscreen<span class="token punctuation">,</span> enter<span class="token punctuation">,</span> exit<span class="token punctuation">,</span> toggle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5168\u5C4F\u6307\u5B9A\u5143\u7D20</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> isFullscreen<span class="token punctuation">,</span> enter<span class="token punctuation">,</span> exit<span class="token punctuation">,</span> toggle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFullscreen</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;videoref=&#39;el&#39;&gt; </span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a> \u7C7B\u578B\u58F0\u660E</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UseFullscreenOptions</span> <span class="token keyword">extends</span> <span class="token class-name">ConfigurableDocument</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Automatically exit fullscreen when component is unmounted
   *
   * <span class="token keyword">@default</span> false
   */</span>
  autoExit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Reactive Fullscreen API.
 *
 * <span class="token keyword">@see</span> https://vueuse.org/useFullscreen
 * <span class="token keyword">@param</span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token parameter">options</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useFullscreen</span><span class="token punctuation">(</span>
  target<span class="token operator">?</span><span class="token operator">:</span> MaybeElementRef<span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> UseFullscreenOptions
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  isSupported<span class="token operator">:</span> <span class="token builtin">boolean</span>
  isFullscreen<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>
  <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
  <span class="token function-variable function">exit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
  <span class="token function-variable function">toggle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseFullscreenReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useFullscreen<span class="token operator">&gt;</span>
</code></pre></div>`,10);function t(p,o){return e}var l=s(a,[["render",t],["__file","fullscreen.html.vue"]]);export{l as default};
