import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as a,c as s,b as i,e as c,w as d,a as n,d as e}from"./app.b3032eaf.js";var p="/vue3-toimc-admin-doc/assets/image-20220516234240983.4d9994b3.png";const l={},u=n(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u76EE\u524D\u83DC\u5355\u76F8\u5173\u5185\u5BB9\u91C7\u7528mock\u65B9\u5F0F\uFF0C\u540E\u7EED\u4F1A\u63A8\u51FA\u7BA1\u7406\u540E\u53F0API\uFF0C\u5BF9\u63A5\u8D77\u521D\u7684\u83DC\u5355\u6743\u9650\u3002</p><p>\u8FD9\u4E2A\u7BC7\u7AE0\u4E3B\u8981\u662F\u63A5\u53E3\u7684\u8BBE\u8BA1\u4E0E\u9875\u9762\u4ECB\u7ECD\u3002</p><p>:::tip</p><p>\u83DC\u5355\u5FC5\u987B\u914D\u5408\u8DEF\u7531\u8FDB\u884C\u4F7F\u7528\uFF0C\u524D\u7AEF\u8DEF\u7531 =&gt; \u52A8\u6001\u8DEF\u7531 =&gt; \u540E\u7AEF\u6570\u636E\u3002</p><p>:::</p><h2 id="\u83DC\u5355\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u7C7B\u578B" aria-hidden="true">#</a> \u83DC\u5355\u7C7B\u578B</h2><p>\u63A5\u53E3\u54CD\u5E94\u7684\u83DC\u5355\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>import type { RouteMeta } from &#39;vue-router&#39;

export interface MenuItem {
  menuType: number //\u83DC\u5355\u7C7B\u578B: 0\u4E00\u7EA7\u83DC\u5355 1\u5B50\u83DC\u5355 2\u6309\u94AE/\u6743\u9650
  name?: string //\u83DC\u5355\u540D\u79F0/\u6309\u94AE/\u6743\u9650\u540D\u79F0
  url?: string //\u8BBF\u95EE\u8DEF\u5F84
  component: any //\u524D\u7AEF\u7EC4\u4EF6
  redirect?: string //\u9ED8\u8BA4\u8DF3\u8F6C\u5730\u5740
  icon?: string //\u83DC\u5355\u56FE\u6807
  sortNo?: number //\u6392\u5E8F
  route?: boolean //\u662F\u5426\u8DEF\u7531\u83DC\u5355
  hidden?: boolean //\u9690\u85CF\u8DEF\u7531
  hideTab?: boolean //\u9690\u85CFTab
  keepAlive?: boolean //\u662F\u5426\u7F13\u5B58\u8DEF\u7531
  alwaysShow?: boolean //\u662F\u5426\u805A\u5408\u8DEF\u7531
  internalOrExternal?: boolean //\u6253\u5F00\u65B9\u5F0F\uFF1Atrue\uFF1A\u5916\u90E8\u8DEF\u7531 false:\u5185\u90E8\u8DEF\u7531
  parentId?: string //\u4E0A\u7EA7\u83DC\u5355ID
  perms?: string //\u6388\u6743\u6807\u8BC6
  permsType?: string // \u6388\u6743\u7B56\u7565 1\u53EF\u89C1/\u53EF\u8BBF\u95EE 2\u53EF\u7F16\u8F91
  status?: string //\u72B6\u6001 1 \u6709\u6548/0 \u65E0\u6548

  id: string
  key: string
  createBy?: string
  meta: RouteMeta
  children?: MenuItem[]
}

</code></pre></div><h2 id="\u65B0\u589E\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u83DC\u5355" aria-hidden="true">#</a> \u65B0\u589E\u83DC\u5355</h2><p>\u76F4\u63A5\u5728 <code>src/router/modules</code> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6\u3002</p><p>\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728<code>src/router/modules</code>\u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p>`,12),m=e("\u53EF\u53C2\u8003"),h=e("\u65B0\u589E\u8DEF\u7531"),_=e("\u90E8\u5206\u3002"),g=n(`<h2 id="mock\u6570\u636E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mock\u6570\u636E\u914D\u7F6E" aria-hidden="true">#</a> Mock\u6570\u636E\u914D\u7F6E</h2><p>\u5176\u4E2Dmock\u670D\u52A1\u5668\u7684\u914D\u7F6E\u5982\u4E0B<code>vite.config.ts</code>\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>viteMockServe({
  ignore: /^\\_/,
  mockPath: &#39;mock&#39;,
  supportTs: true,
  prodEnabled: VITE_USE_MOCK,
  // \u76F8\u5F53\u4E8E\u5728src/main.ts\u4E2Dinject\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u6CE8\u610F\u6587\u4EF6\u7684\u8DEF\u5F84\u95EE\u9898
  injectCode: \`
    import { setupProdMockServer } from &#39;../mock/_createProductionServer&#39;;
    setupProdMockServer();
  \`
}),
</code></pre></div><p>\u83DC\u5355\u76F8\u5173\u7684mock\u63A5\u53E3\uFF1A</p><p><img src="`+p+'" alt="image-20220516234240983"></p>',5);function v(f,k){const t=o("RouterLink");return a(),s("div",null,[u,i("p",null,[m,c(t,{to:"/guide/guide/router.html#%E6%96%B0%E5%A2%9E%E8%B7%AF%E7%94%B1"},{default:d(()=>[h]),_:1}),_]),g])}var E=r(l,[["render",v],["__file","index.html.vue"]]);export{E as default};
