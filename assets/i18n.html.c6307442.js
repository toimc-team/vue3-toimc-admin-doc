import{_ as o,r as p,o as c,c as l,a as n,b as t,F as u,e,d as s}from"./app.d668d1cf.js";var i="/vue3-toimc-admin-doc/assets/image-20220516220555593.1f286a43.png",r="/vue3-toimc-admin-doc/assets/image-20220516221933444.a489cc54.png",k="/vue3-toimc-admin-doc/assets/image-20220516222132283.cee5163b.png";const d={},_=e('<h1 id="\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><p>\u5185\u7F6E\u4E86\u56FD\u9645\u5316\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u56FD\u9645\u5316\u3001element-plus \u56FD\u9645\u5316</p><blockquote><p>vscode \u63D2\u4EF6</p><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u7F16\u8F91\u5668\u662F <code>vscode</code> \u8BF7\u5B89\u88C5\u63D2\u4EF6 <code>i18n Ally</code> \u4EE5\u4FBF\u5E26\u6765\u66F4\u53CB\u597D\u7684\u56FD\u9645\u5316\u63D0\u793A</p><img src="'+i+'" alt="image-20220516220555593" style="zoom:50%;display:block;text-align:left;margin-top:3m;"></blockquote><h2 id="\u6CE8\u5165\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165\u56FD\u9645\u5316" aria-hidden="true">#</a> \u6CE8\u5165\u56FD\u9645\u5316</h2>',4),m=s("\u4F7F\u7528 "),g={href:"https://www.npmjs.com/package/@intlify/vite-plugin-vue-i18n",target:"_blank",rel:"noopener noreferrer"},h=s("@intlify/vite-plugin-vue-i18n"),v=s(" \u8FD9\u4E2A\u56FD\u9645\u5316 "),f=n("code",null,"vite",-1),b=s(" \u63D2\u4EF6\u914D\u5408 "),y={href:"https://www.npmjs.com/package/vue-i18n",target:"_blank",rel:"noopener noreferrer"},q=s("vue-i18n"),x=s(" \u6765\u5B9E\u73B0\u56FD\u9645\u5316\uFF0C\u91C7\u7528\u4E86 "),w=n("code",null,"json",-1),I=s(" \u683C\u5F0F\uFF1B\u5F53\u7136\u8FD9\u6B3E\u56FD\u9645\u5316 "),j=n("code",null,"vite",-1),A=s(" \u63D2\u4EF6\u8FD8\u652F\u6301 "),E=n("code",null,"yaml",-1),C=s(" \u683C\u5F0F\uFF0C\u5177\u4F53\u770B "),V={href:"https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md#include",target:"_blank",rel:"noopener noreferrer"},N=s("vite-plugin-vue-i18n/README.md"),M=e('<p><img src="'+r+'" alt="image-20220516221933444"></p><p><img src="'+k+`" alt="image-20220516222132283"></p><p>\u5982\u4E0A\u56FE\uFF1A\u4E2D\u6587\u6DFB\u52A0\u5230 <code>zh-CN.json</code> \u6587\u4EF6\u91CC\uFF0C\u82F1\u6587\u6DFB\u52A0\u5230 <code>en.json</code> \u6587\u4EF6\u91CC \u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">$t</span><span class="token punctuation">(</span><span class="token string">&#39;Header.CustomHeader.quit&#39;</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>\u56E0\u4E3A\u5728 main.ts \u6587\u4EF6\u4E2D\u521D\u59CB\u5316\u4E86 i18n\uFF0C\u4E00\u822C\u662F\u5728template\u4E2D\u76F4\u63A5\u4F7F\u7528 <code>$t </code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
  
  <span class="token comment">// Multilingual configuration</span>
  <span class="token comment">// Asynchronous case: language files may be obtained from the server side</span>
  <span class="token keyword">await</span> <span class="token function">setupI18n</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
  
  <span class="token comment">// ..</span>
  
  app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></blockquote><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><blockquote><p>\u5982\u4F55\u914D\u5408 <code>i18n Ally</code> \u63D2\u4EF6\u5E26\u6765\u667A\u80FD\u63D0\u793A\uFF08\u65E0\u5B9E\u9645\u610F\u4E49\uFF0C\u53EA\u5BF9\u63D0\u793A\u8D77\u4F5C\u7528\uFF09</p></blockquote>`,7),$=s("\u5728 ts \u6587\u4EF6\u4E2D\u4F7F\u7528\uFF0C"),B=n("code",null,"useI18n",-1),z=s("\u5FC5\u987B\u5728"),D=n("code",null,"setup",-1),F=s("\u4E2D\u4F7F\u7528"),H={href:"https://vue-i18n.intlify.dev/guide/migration/vue3.html#usei18n-in-vue-component",target:"_blank",rel:"noopener noreferrer"},L=s("vue-i18n"),R=s("\u6587\u6863"),S=n("code",null,"useI18n in Vue Component",-1),T=e(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.component.title&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,1),G=e(`<li><p>\u5728 vue \u6587\u4EF6\u4E2D\u5C31\u76F4\u63A5\u4F7F\u7528 <code>$t()</code></p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getIndex(item)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(e) =&gt; handleMenuClick(e, item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item?.meta?.icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getIcons(item)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>{{ $t(item.meta?.title) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li>`,1),J=n("p",null,"\u56FD\u9645\u5316\u51FD\u6570\u3001\u65B9\u6CD5",-1),K=n("code",null,"useI18n",-1),O=s("\u5FC5\u987B\u5728"),P=n("code",null,"setup",-1),Q=s("\u4E2D\u4F7F\u7528"),U={href:"https://vue-i18n.intlify.dev/guide/migration/vue3.html#usei18n-in-vue-component",target:"_blank",rel:"noopener noreferrer"},W=s("vue-i18n "),X=s("\u6587\u6863"),Y=n("code",null,"useI18n in Vue Component",-1),Z=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> from <span class="token string">&quot;vue-i18n&quot;</span><span class="token punctuation">;</span>
const <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> useI18n<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> t<span class="token punctuation">(</span>item.text<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div>`,1);function nn(sn,an){const a=p("ExternalLinkIcon");return c(),l(u,null,[_,n("p",null,[m,n("a",g,[h,t(a)]),v,f,b,n("a",y,[q,t(a)]),x,w,I,j,A,E,C,n("a",V,[N,t(a)])]),M,n("ul",null,[n("li",null,[n("p",null,[$,B,z,D,F,n("a",H,[L,t(a)]),R,S]),T]),G,n("li",null,[J,n("p",null,[K,O,P,Q,n("a",U,[W,t(a)]),X,Y]),Z])])],64)}var en=o(d,[["render",nn],["__file","i18n.html.vue"]]);export{en as default};