import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,a as o}from"./app.b3032eaf.js";var a="/vue3-toimc-admin-doc/assets/image-20220516220555593.1f286a43.png",i="/vue3-toimc-admin-doc/assets/image-20220516221933444.a489cc54.png",c="/vue3-toimc-admin-doc/assets/image-20220516222132283.cee5163b.png";const s={},l=o('<h1 id="\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><p>\u5185\u7F6E\u4E86\u56FD\u9645\u5316\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u56FD\u9645\u5316\u3001element-plus \u56FD\u9645\u5316</p><blockquote><p>vscode \u63D2\u4EF6</p><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u7F16\u8F91\u5668\u662F <code>vscode</code> \u8BF7\u5B89\u88C5\u63D2\u4EF6 <code>i18n Ally</code> \u4EE5\u4FBF\u5E26\u6765\u66F4\u53CB\u597D\u7684\u56FD\u9645\u5316\u63D0\u793A</p><img src="'+a+'" alt="image-20220516220555593" style="zoom:50%;display:block;text-align:left;margin-top:3m;"></blockquote><h2 id="\u6CE8\u5165\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165\u56FD\u9645\u5316" aria-hidden="true">#</a> \u6CE8\u5165\u56FD\u9645\u5316</h2><p>\u4F7F\u7528 <a href="https://www.npmjs.com/package/@intlify/vite-plugin-vue-i18n" target="_blank" rel="noopener noreferrer">@intlify/vite-plugin-vue-i18n</a> \u8FD9\u4E2A\u56FD\u9645\u5316 <code>vite</code> \u63D2\u4EF6\u914D\u5408 <a href="https://www.npmjs.com/package/vue-i18n" target="_blank" rel="noopener noreferrer">vue-i18n</a> \u6765\u5B9E\u73B0\u56FD\u9645\u5316\uFF0C\u91C7\u7528\u4E86 <code>json</code> \u683C\u5F0F\uFF1B\u5F53\u7136\u8FD9\u6B3E\u56FD\u9645\u5316 <code>vite</code> \u63D2\u4EF6\u8FD8\u652F\u6301 <code>yaml</code> \u683C\u5F0F\uFF0C\u5177\u4F53\u770B <a href="https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md#include" target="_blank" rel="noopener noreferrer">vite-plugin-vue-i18n/README.md</a></p><p><img src="'+i+'" alt="image-20220516221933444"></p><p><img src="'+c+`" alt="image-20220516222132283"></p><p>\u5982\u4E0A\u56FE\uFF1A\u4E2D\u6587\u6DFB\u52A0\u5230 <code>zh-CN.json</code> \u6587\u4EF6\u91CC\uFF0C\u82F1\u6587\u6DFB\u52A0\u5230 <code>en.json</code> \u6587\u4EF6\u91CC \u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>$t(&#39;Header.CustomHeader.quit&#39;)
</code></pre></div><blockquote><p>\u56E0\u4E3A\u5728 main.ts \u6587\u4EF6\u4E2D\u521D\u59CB\u5316\u4E86 i18n\uFF0C\u4E00\u822C\u662F\u5728template\u4E2D\u76F4\u63A5\u4F7F\u7528 <code>$t </code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>async function bootstrap() {
  const app = createApp(App)

  // ...
  
  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app)
  
  // ..
  
  app.mount(&#39;#app&#39;)
}

bootstrap()
</code></pre></div></blockquote><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><blockquote><p>\u5982\u4F55\u914D\u5408 <code>i18n Ally</code> \u63D2\u4EF6\u5E26\u6765\u667A\u80FD\u63D0\u793A\uFF08\u65E0\u5B9E\u9645\u610F\u4E49\uFF0C\u53EA\u5BF9\u63D0\u793A\u8D77\u4F5C\u7528\uFF09</p></blockquote><ul><li><p>\u5728 ts \u6587\u4EF6\u4E2D\u4F7F\u7528\uFF0C<code>useI18n</code>\u5FC5\u987B\u5728<code>setup</code>\u4E2D\u4F7F\u7528<a href="https://vue-i18n.intlify.dev/guide/migration/vue3.html#usei18n-in-vue-component" target="_blank" rel="noopener noreferrer">vue-i18n</a>\u6587\u6863<code>useI18n in Vue Component</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>import { useI18n } from &#39;vue-i18n&#39;;

const { t } = useI18n()
const title = t(&#39;menu.component.title&#39;)
</code></pre></div></li><li><p>\u5728 vue \u6587\u4EF6\u4E2D\u5C31\u76F4\u63A5\u4F7F\u7528 <code>$t()</code></p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;el-menu-item :index=&quot;getIndex(item)&quot; @click=&quot;(e) =&gt; handleMenuClick(e, item)&quot;&gt;
    &lt;icon v-if=&quot;item?.meta?.icon&quot; class=&quot;menu-icon&quot; :type=&quot;getIcons(item)&quot; /&gt;
    &lt;template #title&gt;{{ $t(item.meta?.title) }}&lt;/template&gt;
  &lt;/el-menu-item&gt;
&lt;/template&gt;
</code></pre></div></li><li><p>\u56FD\u9645\u5316\u51FD\u6570\u3001\u65B9\u6CD5</p><p><code>useI18n</code>\u5FC5\u987B\u5728<code>setup</code>\u4E2D\u4F7F\u7528<a href="https://vue-i18n.intlify.dev/guide/migration/vue3.html#usei18n-in-vue-component" target="_blank" rel="noopener noreferrer">vue-i18n </a>\u6587\u6863<code>useI18n in Vue Component</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>import { useI18n } from &quot;vue-i18n&quot;;
const { t } = useI18n();
{{ t(item.text) }}
</code></pre></div></li></ul>`,13),r=[l];function p(d,u){return t(),n("div",null,r)}var v=e(s,[["render",p],["__file","i18n.html.vue"]]);export{v as default};
