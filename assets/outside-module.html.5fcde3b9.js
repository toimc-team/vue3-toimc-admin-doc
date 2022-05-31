import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as t,a as o}from"./app.b3032eaf.js";const a={},l=o(`<h1 id="\u5916\u90E8\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u6A21\u5757" aria-hidden="true">#</a> \u5916\u90E8\u6A21\u5757</h1><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u9664\u4E86\u81EA\u5E26\u7EC4\u4EF6\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u5165\u5176\u4ED6\u5916\u90E8\u6A21\u5757\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5<code>element-plus</code> \u4E3A\u4F8B\uFF1A</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5 <code>element-plus</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u5168\u5C40\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F7F\u7528" aria-hidden="true">#</a> \u5168\u5C40\u4F7F\u7528</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code>// main.ts
import { createApp } from &#39;vue&#39;
import ElementPlus from &#39;element-plus&#39;
import &#39;element-plus/dist/index.css&#39;
import App from &#39;./App.vue&#39;

const app = createApp(App)

app.use(ElementPlus)
app.mount(&#39;#app&#39;)

</code></pre></div><h3 id="\u6309\u9700\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a> \u6309\u9700\u5BFC\u5165</h3><ul><li>\u81EA\u52A8\u5BFC\u5165\uFF1A</li></ul><p>\u9996\u5148\u4F60\u9700\u8981\u5B89\u88C5 <code>unplugin-vue-components</code> \u548C <code>unplugin-auto-import</code> \u8FD9\u4E24\u6B3E\u63D2\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npm install -D unplugin-vue-components unplugin-auto-import
</code></pre></div><p>\u7136\u540E\u628A\u4E0B\u5217\u4EE3\u7801\u63D2\u5165\u5230\u9879\u76EE\u6839\u76EE\u5F55\u7684 <code>Vite</code> \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>// vite.config.ts
import AutoImport from &#39;unplugin-auto-import/vite&#39;
import Components from &#39;unplugin-vue-components/vite&#39;
import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
</code></pre></div><ul><li>\u624B\u52A8\u5BFC\u5165:</li></ul><p><code>Element Plus</code> \u63D0\u4F9B\u4E86\u57FA\u4E8E <code>ES Module</code> \u5F00\u7BB1\u5373\u7528\u7684 <code>Tree Shaking</code> \u529F\u80FD\u3002</p><p>\u4F46\u662F\u9700\u8981\u5B89\u88C5 <code>unplugin-element-plus</code> \u6765\u5BFC\u5165\u6837\u5F0F\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;el-button&gt;I am ElButton&lt;/el-button&gt;
&lt;/template&gt;
&lt;script&gt;
  import { defineComponent } from &#39;vue&#39;;
  import { ElButton } from &#39;element-plus&#39;
  export default defineComponent({
    components: { ElButton },
  });
&lt;/script&gt;
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code>// vite.config.ts
import ElementPlus from &#39;unplugin-element-plus/vite&#39;

export default {
  plugins: [ElementPlus()],
}
</code></pre></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>\u5982\u679C\u7EC4\u4EF6\u6709<strong>\u4F9D\u8D56\u6837\u5F0F</strong>\uFF0C\u5219\u9700\u8981\u518D<strong>\u5F15\u5165</strong>\u6837\u5F0F\u6587\u4EF6\u3002</p>`,21),s=[l];function p(r,i){return n(),t("div",null,s)}var c=e(a,[["render",p],["__file","outside-module.html.vue"]]);export{c as default};
