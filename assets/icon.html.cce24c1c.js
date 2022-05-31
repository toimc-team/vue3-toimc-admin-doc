import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,a as o}from"./app.b3032eaf.js";var a="/vue3-toimc-admin-doc/assets/image-20220515233127723.45fbca08.png",l="/vue3-toimc-admin-doc/assets/image-20220516002911046.764cee55.png";const c={},i=o('<h1 id="\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h1><p>\u5E73\u53F0\u5185\u7F6E\u4E86 <code>element-plus</code>\u7684<code>icons</code>\u3001<code>iconify</code>\u3001<code>iconfont</code>(\u5F00\u53D1\u4E2D)\u3001<code>\u81EA\u5B9A\u4E49svg</code>\u7B49\uFF0C\u6EE1\u8DB3\u60A8<code>99.99%</code>\u7684\u56FE\u6807\u9700\u6C42\u3002</p><p>\u672C\u9879\u76EE\u96C6\u6210\u4E86\u81EA\u52A8\u5BFC\u5165\u529F\u80FD\uFF0C\u6240\u4EE5\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u653E\u5FC3\u5927\u80C6\u7684\u4F7F\u7528\u56FE\u6807\u5E93\uFF0C\u5728\u751F\u4EA7\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u7684tree shaking\u6389\u6CA1\u6709\u4F7F\u7528\u7684\u5185\u5BB9\u3002</p><h2 id="element\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#element\u56FE\u6807" aria-hidden="true">#</a> Element\u56FE\u6807</h2><p>\u5BFC\u5165Element\u6240\u6709\u56FE\u6807\u7684\u76EE\u7684\u662F\u540E\u7EED\u4F1A\u6709\u4E00\u4E2A\u56FE\u6807\u9009\u62E9\u5668\u9700\u8981\u6709\u6570\u636E\uFF1A</p><p><img src="'+a+`" alt="image-20220515233127723"></p><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;p-4 wrapper&quot;&gt;
    &lt;el-card&gt;
      &lt;template #header&gt;
  			&lt;!--\u5C5E\u6027\u63A7\u5236--&gt;
      &lt;/template&gt;
      &lt;icon-list
        :items=&quot;items&quot;
        :show-icon=&quot;showIcon&quot;
        :show-text=&quot;showText&quot;
        :classes=&quot;classes&quot;
        @click=&quot;handleCopy&quot;
      &gt;&lt;/icon-list&gt;
    &lt;/el-card&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
  import { IconData } from &#39;@/components/Icon/data&#39;
  import type { IconTypes } from &#39;@/components/Icon/types&#39;

  export default defineComponent({
    setup() {
      // ...

      return {
        items: IconData as IconTypes[],
        // ...
      }
    }
  })
&lt;/script&gt;
</code></pre></div><p>\u6570\u636E\u6E90<code>@/components/Icon/data</code>\uFF0C\u5176\u5B9E\u5C31\u662F\u5BFC\u5165\u4E86\u6240\u6709Element-plus\u7684\u56FE\u6807\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>export const IconData = [
  &#39;AddLocation&#39;,
  &#39;Aim&#39;,
  &#39;AlarmClock&#39;,
  &#39;Apple&#39;,
  &#39;ArrowDown&#39;,
  ...
</code></pre></div><p>\u5176\u4E2D\u7684<code>icon-list</code>\u4F7F\u7528\u7684\u662F\u57FA\u7840\u7EC4\u4EF6<code>icon</code>\uFF0C\u57FA\u7840\u7EC4\u4EF6\u517C\u5BB9\u4E86iconfiy\u56FE\u6807\u96C6\u3002</p><h2 id="iconify\u56FE\u6807\u96C6" tabindex="-1"><a class="header-anchor" href="#iconify\u56FE\u6807\u96C6" aria-hidden="true">#</a> Iconify\u56FE\u6807\u96C6</h2><p>Vue\u5B98\u65B9\u4E3B\u63A8\uFF0C\u4E5F\u662F\u6700\u5168\u7684\u56FE\u6807\u96C6\uFF0C\u5B98\u65B9\u5730\u5740\uFF1A<a href="https://iconify.design/" target="_blank" rel="noopener noreferrer">https://iconify.design/</a></p><p>\u7528\u6CD5\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;p-4&quot;&gt;
    &lt;el-card header=&quot;iconify\u56FE\u6807\u793A\u610F&quot;&gt;
      &lt;div&gt;\u4F7F\u7528collections + type\u7684\u7EC4\u5408(\u63A8\u8350)&lt;/div&gt;
      &lt;el-row justify=&quot;space-between&quot;&gt;
        &lt;icon collection=&quot;fa-regular&quot; type=&quot;angry&quot; size=&quot;24px&quot; color=&quot;red&quot; /&gt;
        &lt;icon collection=&quot;mdi&quot; type=&quot;access-point&quot; size=&quot;28px&quot; color=&quot;blue&quot; /&gt;
        &lt;icon collection=&quot;bi&quot; type=&quot;arrow-down-left-square-fill&quot; size=&quot;28px&quot; color=&quot;blue&quot; /&gt;
        &lt;icon collection=&quot;ant-design&quot; type=&quot;audio-outlined&quot; size=&quot;2rem&quot; color=&quot;blue&quot; /&gt;
      &lt;/el-row&gt;
      &lt;div&gt;\u76F4\u63A5\u4F7F\u7528icon(\u61D2\u4EBA\u9002\u5408)&lt;/div&gt;
      &lt;el-row&gt;
        &lt;icon icon=&quot;bi:arrow-clockwise&quot; size=&quot;4em&quot; color=&quot;green&quot; /&gt;
        &lt;icon icon=&quot;logos:ant-design&quot; size=&quot;2rem&quot; color=&quot;red&quot; /&gt;
        &lt;icon icon=&quot;ant-design:android-filled&quot; size=&quot;1.5rem&quot; color=&quot;purple&quot; /&gt;
        &lt;icon icon=&quot;ant-design:ant-design-outlined&quot; size=&quot;1.5rem&quot; color=&quot;green&quot; /&gt;
      &lt;/el-row&gt;
      &lt;div&gt;\u4F7F\u7528vite\u63D2\u4EF6\u76F4\u63A5\u4F7F\u7528 i \u6807\u7B7E&lt;/div&gt;
      &lt;el-row&gt;
        &lt;i-carbon-accessibility /&gt;
        &lt;i-mdi-account-box style=&quot;font-size: 2em; color: red;&quot; /&gt;
      &lt;/el-row&gt;
    &lt;/el-card&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><p>\u5C5E\u6027\u8BF4\u660E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>// \u56FE\u6807\u96C6
collection: {
  type: String,
  default: &#39;ep&#39;
},
// \u989C\u8272
color: {
  type: String,
  default: &#39;auto&#39;
},
// \u5927\u5C0F\uFF0C\u652F\u6301\u5B57\u7B26\u4E32
size: {
  type: String,
  default: &#39;&#39;
},
// \u7C7B\u578B\uFF0C\u914D\u5408collection\u8FDB\u884C\u4F7F\u7528
type: {
  type: String,
  default: &#39;&#39;
},
// \u989D\u5916\u8BBE\u7F6E\u6837\u5F0F
classes: {
  type: String,
  default: &#39;&#39;
},
// \u76F4\u63A5\u8BBE\u7F6Eicon\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u4F1A\u8986\u76D6collection\u7684type
icon: {
  type: String,
  default: &#39;&#39;
}
</code></pre></div><h2 id="svg\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#svg\u56FE\u6807" aria-hidden="true">#</a> svg\u56FE\u6807</h2><p>\u96C6\u6210<code>vite-plugin-svg-icons</code>\uFF0C\u5728<code>vite.config.ts</code>\u4E2D\u8FDB\u884C\u8BBE\u7F6Esvg\u7684\u56FE\u6807\u76EE\u5F55\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>createSvgIconsPlugin({
  // \u6307\u5B9A\u9700\u8981\u7F13\u5B58\u7684\u56FE\u6807\u6587\u4EF6\u5939
  iconDirs: [pathResolve(&#39;src/assets/svg&#39;)],
  // \u6307\u5B9AsymbolId\u683C\u5F0F
  symbolId: &#39;icon-[dir]-[name]&#39;
}),
</code></pre></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5728\u8BE5\u76EE\u5F55\u4E2D\u653E\u5165svg\u7684\u56FE\u7247\u3002</p><p>\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u7684\u65B9\u5F0F\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;p-4 wrapper&quot;&gt;
    &lt;el-card header=&quot;svg\u56FE\u6807\u96C6\u6210&quot;&gt;
    &lt;svg-icon icon-class=&quot;example-27&quot; size=&quot;20rem&quot;&gt;&lt;/svg-icon&gt;
    &lt;svg-icon icon-class=&quot;example-3&quot; width=&quot;220px&quot; height=&quot;110px&quot;&gt;&lt;/svg-icon&gt;
    &lt;/el-card&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><p>\u4F7F\u7528<code>svg-icon</code>\u7EC4\u4EF6\uFF0C\u7136\u540E\u53EF\u4EE5\u8BBE\u7F6E\u5982\u4E0B\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>// \u56FE\u6807\u7C7B\u540D
iconClass: {
  type: String,
  required: true
},
// svg\u56FE\u6807\u7684\u7C7B\u540D
className: {
  type: String,
  default: &#39;&#39;
},
// \u5BBD\u5EA6
width: {
  type: [Number, String],
  default: &#39;&#39;
},
// \u9AD8\u5EA6
height: {
  type: [Number, String],
  default: &#39;&#39;
},
// \u5982\u679C\u8BBE\u7F6E\u4E86size\uFF0C\u53EF\u4EE5\u4E0D\u7528\u8BBE\u7F6Ewidth\u548Cheight
size: {
  type: [Number, String],
  default: &#39;&#39;
}
</code></pre></div><h2 id="\u56FE\u6807\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807\u9009\u62E9\u5668" aria-hidden="true">#</a> \u56FE\u6807\u9009\u62E9\u5668</h2><p>\u9ED8\u8BA4\u7684\u6570\u636E\u6E90\u4E3AElement-plus\u7684\u56FE\u6807\u6570\u636E\u6E90\u3002</p><p><img src="`+l+`" alt="image-20220516002911046"></p><p>\u652F\u6301\u7684\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>// \u5F53\u524D\u9009\u4E2D\u7684\u56FE\u6807
choose: {
  type: [String, Number],
  default: &#39;&#39;
},
// \u6807\u9898
title: {
  type: String,
  default: &#39;\u9009\u62E9\u56FE\u6807&#39;
},
// \u56FE\u6807\u5EA5
items: {
  type: Array as PropType&lt;IconTypes[]&gt;,
  default: () =&gt; IconData
},
// \u662F\u5426\u663E\u793A\u56FE\u6807
showIcon: {
  type: Boolean,
  default: true
},
// \u662F\u5426\u663E\u793A\u6587\u5B57
showText: {
  type: Boolean,
  default: false
},
// \u662F\u5426\u663E\u793A\u63A7\u5236\u6309\u94AE
footer: {
  type: Boolean,
  default: false
},
// \u8BBE\u7F6E\u56FE\u6807\u5217\u8868\u7684\u7C7B\u540D
classes: {
  type: String,
  default: &#39;p-1&#39;
}
</code></pre></div>`,30),s=[i];function r(u,d){return e(),n("div",null,s)}var q=t(c,[["render",r],["__file","icon.html.vue"]]);export{q as default};
