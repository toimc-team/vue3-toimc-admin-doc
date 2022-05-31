import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,a}from"./app.b3032eaf.js";var o="/vue3-toimc-admin-doc/assets/image-20220511110332072.dd1c5b58.png",i="/vue3-toimc-admin-doc/assets/image-20220511110422168.e62ba3bf.png";const n={},s=a('<h1 id="\u9875\u9762\u6309\u94AE\u6743\u9650\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6309\u94AE\u6743\u9650\u7528\u6CD5" aria-hidden="true">#</a> \u9875\u9762\u6309\u94AE\u6743\u9650\u7528\u6CD5</h1><ul><li>\u540E\u53F0\u8FDB\u5165\u83DC\u5355\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u6309\u94AE\u6743\u9650\u83DC\u5355</li></ul><p><img src="'+o+'" alt="image-20220511110332072"></p><ul><li>\u8FDB\u5165\u89D2\u8272\u7BA1\u7406\u6388\u6743\u6309\u94AE\uFF08\u6388\u6743\u540E\u5373\u53EF\u770B\u89C1\u6309\u94AE\uFF09</li></ul><p><img src="'+i+`" alt="image-20220511110422168"></p><p>\u5907\u6CE8\uFF1A \u6388\u6743\u6807\u8BC6\u652F\u6301\u591A\u4E2A\uFF0C\u591A\u4E2A\u9017\u53F7\u5206\u9694</p><ul><li>\u6309\u94AE\u663E\u793A\u9690\u85CF\u53EF\u901A\u8FC7\u51FD\u6570\u548C\u6307\u4EE42\u79CD\u65B9\u5F0F\u8FDB\u884C\u63A7\u5236</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>import { usePermission } from &#39;/@/hooks/web/usePermission&#39;;
const { hasPermission } = usePermission();
</code></pre></div><div class="language-html ext-html"><pre class="language-html"><code>&lt;!-- \u51FD\u6570\u65B9\u5F0F(hasPermission) user:add \u4E3A\u540E\u53F0\u6DFB\u52A0\u7684\u6743\u9650\u7F16\u7801 --&gt; 
&lt;el-button @click=&quot;handleAdd&quot; v-has=&quot;&#39;user:add&#39;&quot; type=&quot;primary&quot; icon=&quot;plus&quot;&gt;\u6DFB\u52A0\u7528\u6237&lt;/el-button&gt;

&lt;!-- \u6307\u4EE4\u65B9\u5F0F(v-auth) user:add \u4E3A\u540E\u53F0\u6DFB\u52A0\u7684\u6743\u9650\u7F16\u7801 --&gt;
&lt;el-button @click=&quot;handleAdd&quot; v-if=&quot;hasPermission(&#39;user:add&#39;)&quot; type=&quot;primary&quot; icon=&quot;plus&quot;&gt;\u6DFB\u52A0\u7528\u6237&lt;/el-button&gt;
</code></pre></div><ul><li>\u64CD\u4F5C\u5217(TableAction)\u6309\u94AE\u663E\u793A\u9690\u85CF\u63A7\u5236</li></ul><div class="language-html ext-html"><pre class="language-html"><code>{
  label: &#39;\u7F16\u8F91&#39;,
  onClick: handleEdit.bind(null, record),
  auth: &#39;other&#39;, // \u6839\u636E\u6743\u9650\u63A7\u5236\u662F\u5426\u663E\u793A: \u65E0\u6743\u9650\uFF0C\u4E0D\u663E\u793A
},
{
  label: &#39;\u5220\u9664&#39;,
  icon: &#39;ic:outline-delete-outline&#39;,
  onClick: handleDelete.bind(null, record),
  auth: &#39;user:add&#39;, // \u6839\u636E\u6743\u9650\u63A7\u5236\u662F\u5426\u663E\u793A: \u6709\u6743\u9650\uFF0C\u4F1A\u663E\u793A
}, 
</code></pre></div>`,11),u=[s];function r(d,c){return t(),l("div",null,u)}var p=e(n,[["render",r],["__file","05-\u9875\u9762\u6309\u94AE\u6743\u9650\u7528\u6CD5.html.vue"]]);export{p as default};
