import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as r,a as t}from"./app.b3032eaf.js";const n={},s=t(`<h1 id="\u6C34\u5370" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5370" aria-hidden="true">#</a> \u6C34\u5370</h1><p>\u5E73\u53F0\u5DF2\u7ECF\u96C6\u6210\u6C34\u5370\u80FD\u529B\u7684\u652F\u6301\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 hook \u7684\u65B9\u5F0F\u8F7B\u677E\u7684\u5728\u4F60\u9700\u8981\u7684\u4F4D\u7F6E\u4E0A\u6DFB\u52A0\u4E0A\u6C34\u5370\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code>import { useWatermark } from &#39;@/hooks/useWatermark&#39;
const { setWatermark, clear } = useWatermark();

setWatermark(&#39;\u8FD9\u662F\u6C34\u5370\u6587\u5B57&#39;);
</code></pre></div><h2 id="\u56FE\u7247\u6C34\u5370" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u6C34\u5370" aria-hidden="true">#</a> \u56FE\u7247\u6C34\u5370</h2><p>\u5982\u679C\u7EAF\u6587\u672C\u7684\u6C34\u5370\u4E0D\u6EE1\u8DB3\u60A8\u7684\u663E\u793A\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u53EF\u4EE5\u76F4\u63A5\u76F4\u63A5\u4F20\u5165\u4E00\u4E2A\u5730\u5740\u6765\u5C06\u56FE\u7247\u4F5C\u4E3A\u6C34\u5370\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E3A\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>setWatermark({ imgUrl: &#39;https://xxx.png&#39; });
</code></pre></div><h2 id="\u5176\u4ED6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u914D\u7F6E" aria-hidden="true">#</a> \u5176\u4ED6\u914D\u7F6E</h2><p>\u9664\u4E86\u57FA\u7840\u7684\u6587\u5B57\u548C\u56FE\u7247\u4F5C\u4E3A\u6C34\u5370\u652F\u6301\u4E4B\u5916\uFF0C\u5E73\u53F0\u8FD8\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u8BBE\u7F6E\u6C34\u5370\u7684\u5176\u4ED6\u914D\u7F6E\uFF0C\u5173\u4E8E <code>setWatermark</code> \u7684\u53C2\u6570\u8BF4\u660E\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WatermarkOptions = string | {
  // \u6C34\u5370\u6587\u5B57
  str?: string
  // \u6587\u5B57\u5927\u5C0F
  fontSize?: number
  // \u56FE\u7247\u6C34\u5370\u7684\u5730\u5740
  imgUrl?: string
  // \u6C34\u5370\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u5BBD\u5EA6
  width?: number
  // \u6C34\u5370\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u9AD8\u5EA6
  height?: number
  // \u6C34\u5370\u4E4B\u95F4\u7684\u8DDD\u79BB
  gap?: &#39;small&#39; | &#39;default&#39; | &#39;large&#39;
}
</code></pre></div><h2 id="\u5168\u5C40\u6C34\u5370\u548C\u5C40\u90E8\u6C34\u5370" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6C34\u5370\u548C\u5C40\u90E8\u6C34\u5370" aria-hidden="true">#</a> \u5168\u5C40\u6C34\u5370\u548C\u5C40\u90E8\u6C34\u5370</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6C34\u5370\u662F\u88AB\u6DFB\u52A0\u7684\u5168\u5C40\u7684\u3002</p><p>\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u53EA\u9700\u8981\u5C06\u5176\u5E94\u7528\u5230\u67D0\u4E2A\u5143\u7D20\u5185\u90E8\uFF0C\u6B64\u65F6\u60A8\u53EF\u4EE5\u5728 <code>useWatermark</code> \u4F20\u5165\u4E2D\u4E00\u4E2A\u5143\u7D20\uFF0C\u6B64\u65F6\u6C34\u5370\u5C06\u53EA\u88AB\u5E94\u7528\u5230\u8FD9\u4E2A\u5143\u7D20\u5185\u90E8\u3002</p><p>\u5173\u4E8E <code>useWatermark</code> \u7684\u7B7E\u540D\u5982\u4E0B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>useWatermark(
  appendEl: Ref&lt;HTMLElement | null&gt; = ref(document.body) as Ref&lt;HTMLElement&gt;
): {
  setWatermark: (options: WatermarkOptions) =&gt; void
  clear: () =&gt; void
}
</code></pre></div>`,15),d=[s];function i(c,o){return a(),r("div",null,d)}var h=e(n,[["render",i],["__file","waterprint.html.vue"]]);export{h as default};
