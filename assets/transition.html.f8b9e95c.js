import{_ as n,e as s}from"./app.bb955598.js";var a="/vue3-toimc-admin-doc/assets/transitions.03e4dcfe.gif";const t={},p=s('<h1 id="\u8FC7\u6E21\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6E21\u52A8\u753B" aria-hidden="true">#</a> \u8FC7\u6E21\u52A8\u753B</h1><p>\u6709\u4E24\u4E2A\u57FA\u7840\u7EC4\u4EF6\uFF1A<code>ExpandTransition.vue</code>\u548C<code>SimpleTransition.vue</code>\uFF0C\u5168\u5C40\u7684css\u6837\u5F0F\u5728<code>src/assets/style/transitions.scss</code>\uFF0C\u57FA\u672C\u7684\u539F\u7406\u4F7F\u7528\u7684\u662F\u63D2\u69FD\u3002</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+a+`" alt="transitions"></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>simple-transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>expand-x-transition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>in-out<span class="token punctuation">&quot;</span></span> <span class="token attr-name">delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0s<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>simple-transition</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>expand-transition</span> <span class="token attr-name">:x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>expand-transition</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u57FA\u7840\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5C5E\u6027" aria-hidden="true">#</a> \u57FA\u7840\u5C5E\u6027</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Mode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;in-out&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;top center 0&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;0.3s&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timingFunction</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;cubic-bezier(0.25, 0.8, 0.5, 1)&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5176\u4E2D\uFF0C\u652F\u6301\u7684\u540D\u79F0\uFF0C\u683C\u5F0F\u4E3A<code>[\u52A8\u753B\u540D\u79F0]-transition</code>\uFF0C\u4F8B\u5982\uFF1A<code>fade-transition</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5DE5\u5177\u7C7B<code>toLine</code>\u65B9\u6CD5\u6765\u8FDB\u884C\u8F6C\u6362\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TransitionNameEnum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/enums/menuEnum&#39;</span>

<span class="token comment">// \u4F7F\u7528Enum</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>TransitionNameEnum<span class="token punctuation">.</span>Fade<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6269\u5C55-\u52A8\u753B\u5217\u8868\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-\u52A8\u753B\u5217\u8868\u7EC4\u4EF6" aria-hidden="true">#</a> [\u6269\u5C55]\u52A8\u753B\u5217\u8868\u7EC4\u4EF6</h2><p>\u4F7F\u7528<code>component</code>\u52A8\u6001\u7EC4\u4EF6\uFF0C\u6269\u5C55\u57FA\u7840\u52A8\u753B\u7EC4\u4EF6\u7528\u6CD5\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span>
    <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/Expand/.test(name) ? <span class="token punctuation">&#39;</span>expand-transition<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>simple-transition<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toLine(name + <span class="token punctuation">&#39;</span>Transition<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name === <span class="token punctuation">&#39;</span>ExpandX<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delay<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> toLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> TransitionList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>
  <span class="token keyword">import</span> SimpleTransition <span class="token keyword">from</span> <span class="token string">&#39;./SimpleTransition.vue&#39;</span>
  <span class="token keyword">import</span> ExpandTransition <span class="token keyword">from</span> <span class="token string">&#39;./ExpandTransition.vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      SimpleTransition<span class="token punctuation">,</span>
      ExpandTransition
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>TransitionList<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;0.3s&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        toLine
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u652F\u6301\u7684\u6240\u6709\u7684\u52A8\u753B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TransitionList</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;Fade&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;Scale&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;SlideY&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ScrollY&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;SlideYReverse&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ScrollYReverse&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;SlideX&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ScrollX&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;SlideXReverse&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ScrollXReverse&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ScaleRotate&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;ExpandX&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;Expand&#39;</span>
</code></pre></div>`,15);function o(e,c){return p}var r=n(t,[["render",o],["__file","transition.html.vue"]]);export{r as default};
