import{_ as s,e as a}from"./app.bb955598.js";var n="/vue3-toimc-admin-doc/assets/v-precode.d007351b.png";const t={},p=a('<h1 id="v-precode" tabindex="-1"><a class="header-anchor" href="#v-precode" aria-hidden="true">#</a> v-precode</h1><p>\u6269\u5C55\u81EA\u5B9A\u4E49\u6307\u4EE4\u5BCC\u6587\u672C\u6E32\u67D3\u529F\u80FD</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+n+`" alt="v-precode"></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>t<span class="token operator">-</span>card <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mt-5&quot;</span> header<span class="token operator">=</span><span class="token string">&quot;\u6D4B\u8BD5Markdown\u9884\u89C8&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>pre v<span class="token operator">-</span>precode<span class="token operator">&gt;</span>
      <span class="token operator">!</span><span class="token punctuation">[</span>image<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>uicdn<span class="token punctuation">.</span>toast<span class="token punctuation">.</span>com<span class="token operator">/</span>toastui<span class="token operator">/</span>img<span class="token operator">/</span>tui<span class="token operator">-</span>editor<span class="token operator">-</span>bi<span class="token punctuation">.</span>png<span class="token punctuation">)</span>

      # Awesome Editor<span class="token operator">!</span>

      It has been _released <span class="token keyword">as</span> opensource <span class="token keyword">in</span> 2018_ and has <span class="token operator">~</span><span class="token operator">~</span>continually<span class="token operator">~</span><span class="token operator">~</span> evolved to <span class="token operator">**</span>receive 10k GitHub \u2B50\uFE0F Stars<span class="token operator">**</span><span class="token punctuation">.</span>

      ## Create Instance

      You can create an instance <span class="token keyword">with</span> the following code and use <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getHtml()</span><span class="token template-punctuation string">\`</span></span> and <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getMarkdown()</span><span class="token template-punctuation string">\`</span></span> <span class="token keyword">of</span> the <span class="token punctuation">[</span>Editor<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>nhn<span class="token operator">/</span>tui<span class="token punctuation">.</span>editor<span class="token punctuation">)</span><span class="token punctuation">.</span>

      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js
      const editor = new Editor(options);
      </span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>

      <span class="token operator">&gt;</span> See the table below <span class="token keyword">for</span> <span class="token keyword">default</span> options
      <span class="token operator">&gt;</span> <span class="token operator">&gt;</span> More <span class="token constant">API</span> information can be found <span class="token keyword">in</span> the document

      <span class="token operator">|</span> name <span class="token operator">|</span> type <span class="token operator">|</span> description <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
      <span class="token operator">|</span> el <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">HTMLElement</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> container element <span class="token operator">|</span>

      ## Features

      <span class="token operator">*</span> CommonMark <span class="token operator">+</span> <span class="token constant">GFM</span> Specifications
        <span class="token operator">*</span> Live Preview
        <span class="token operator">*</span> Scroll Sync
        <span class="token operator">*</span> Auto Indent
        <span class="token operator">*</span> Syntax Highlight
              <span class="token number">1.</span> Markdown
              <span class="token number">2.</span> Preview

      ## Support Wrappers

      <span class="token operator">&gt;</span> <span class="token operator">*</span> Wrappers
      <span class="token operator">&gt;</span>    <span class="token number">1.</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> React
      <span class="token operator">&gt;</span>    <span class="token number">2.</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> Vue
      <span class="token operator">&gt;</span>    <span class="token number">3.</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span> Ember
      <span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre></div>`,6);function o(e,r){return p}var l=s(t,[["render",o],["__file","precode.html.vue"]]);export{l as default};
