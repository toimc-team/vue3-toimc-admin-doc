import{_ as p,r as o,o as e,c,a as s,b as l,F as u,e as a,d as n}from"./app.f28d0a6b.js";var r="/vue3-toimc-admin-doc/assets/image-20220518225700168.bc7884eb.png";const k={},i=a(`<h1 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><p>\u9879\u76EE\u8DEF\u7531\u914D\u7F6E\u5B58\u653E\u4E8E<code>src/router</code>\u4E0B\u9762\u3002 <code>src/router/modules</code>\u7528\u4E8E\u5B58\u653E\u8DEF\u7531\u6A21\u5757\uFF0C\u5728\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u6CE8\u518C\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u6A21\u5757\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u8BF4\u660E" aria-hidden="true">#</a> \u6A21\u5757\u8BF4\u660E</h3><p>\u5728<code>src/router/modules</code>\u5185\u7684<code>.ts</code>\u6587\u4EF6\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u3002</p><p>\u4E00\u4E2A\u8DEF\u7531\u6A21\u5757\u5305\u62EC\u4EE5\u4E0B\u7ED3\u6784\uFF0C\u8FD9\u91CC\u4EE5<code>about</code>\u6A21\u5757\u7684\u8DEF\u7531\u4E3A\u4F8B</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useI18n&#39;</span>
<span class="token keyword">import</span> LayoutsDefault <span class="token keyword">from</span> <span class="token string">&#39;@/layouts/default.vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>

<span class="token keyword">const</span> aboutRoutes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>AppRouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.about.title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      order<span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;InfoFilled&#39;</span><span class="token punctuation">,</span>
      hideChildrenInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      alone<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> LayoutsDefault<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/about/index&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;AboutPage&#39;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.about.about-us&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/about/index.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> aboutRoutes
</code></pre></div><h3 id="\u591A\u7EA7\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u8DEF\u7531" aria-hidden="true">#</a> \u591A\u7EA7\u8DEF\u7531</h3><blockquote><p><strong>\u6CE8\u610F\u4E8B\u9879\uFF1A</strong></p><p>\u6574\u4E2A\u9879\u76EE\u6240\u6709\u8DEF\u7531 <code>name</code> \u4E0D\u80FD\u91CD\u590D</p><p>\u6240\u6709\u7684\u591A\u7EA7\u8DEF\u7531\u6700\u7EC8\u90FD\u4F1A\u8F6C\u6210\u4E8C\u7EA7\u8DEF\u7531\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5185\u5D4C\u5B50\u8DEF\u7531</p><p>\u9664\u4E86 <code>layout</code> \u5BF9\u5E94\u7684 <code>path</code> \u524D\u9762\u9700\u8981\u52A0 <code>/</code>\uFF0C\u5176\u4F59\u5B50\u8DEF\u7531\u90FD\u4E0D\u8981\u4EE5<code>/</code>\u5F00\u5934</p></blockquote><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useI18n&#39;</span>
<span class="token keyword">import</span> LayoutsDefault <span class="token keyword">from</span> <span class="token string">&#39;@/layouts/default.vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>

<span class="token keyword">const</span> componentsRoutes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>AppRouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;MenusDemo&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      order<span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/menus&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> LayoutsDefault<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/menus/menu&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Menus1&#39;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.menu1&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/menus/menu1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Menu1-1&#39;</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/menus/menu1-1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.menu1-1&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Menu1-1-1&#39;</span><span class="token punctuation">,</span>
                path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/menus/menu1-1-1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                  title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.menu1-1-1&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Menus1-2&#39;</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">&#39;menu1-2&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/menus/menu1-2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.menu1-2&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Menus2&#39;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&#39;menu2&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.nest-menus.menu2&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/menus/menu2.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> componentsRoutes
</code></pre></div><h3 id="meta-\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#meta-\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> Meta \u914D\u7F6E\u8BF4\u660E</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u6807\u9898</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u662F\u5426\u9690\u85CF\u4E8C\u7EA7\u83DC\u5355</span>
  hideChildrenInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u662F\u5426\u72EC\u7ACB\u5C55\u793A</span>
  alone<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u662F\u5426\u5FFD\u7565\u6743\u9650</span>
  ignoreAuth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u89D2\u8272\u4FE1\u606F</span>
  roles<span class="token operator">?</span><span class="token operator">:</span> RoleEnum<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u662F\u5426\u7F13\u5B58</span>
  ignoreKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u56FE\u6807</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u94FE\u63A5</span>
  frameSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u4E0D\u518D\u83DC\u5355\u663E\u793A</span>
  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u9690\u85CF\u8BE5\u8DEF\u7531\u5728\u9762\u5305\u5C51\u4E0A\u9762\u7684\u663E\u793A</span>
  hideBreadcrumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5916\u90E8\u9875\u9762\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u9875\u9762\u5D4C\u5957" aria-hidden="true">#</a> \u5916\u90E8\u9875\u9762\u5D4C\u5957</h3><p>\u53EA\u9700\u8981\u5C06 <code>frameSrc</code> \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684\u5730\u5740\u5373\u53EF</p><p>\u5B8C\u6574\u793A\u4F8B\u53EF\u89C1<code>src/router/modules/iframe.ts</code></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;IframeIndex&#39;</span><span class="token punctuation">,</span>
  path<span class="token operator">:</span> <span class="token string">&#39;iframe&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/iframe/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.iframe.iframe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    frameSrc<span class="token operator">:</span> <span class="token string">&#39;https://toimc-team.github.io/notes-page/&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre></div><h3 id="\u5916\u94FE" tabindex="-1"><a class="header-anchor" href="#\u5916\u94FE" aria-hidden="true">#</a> \u5916\u94FE</h3><p>\u53EA\u9700\u8981\u5C06 <code>path</code> \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684 HTTP \u5730\u5740\u5373\u53EF</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;External&#39;</span><span class="token punctuation">,</span>
  path<span class="token operator">:</span> <span class="token string">&#39;https://toimc-team.github.io/notes-page/&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/iframe/blank.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menu.iframe.external&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u65B0\u589E\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531" aria-hidden="true">#</a> \u65B0\u589E\u8DEF\u7531</h2><h3 id="\u65B0\u589E\u8DEF\u7531-1" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u8DEF\u7531-1" aria-hidden="true">#</a> \u65B0\u589E\u8DEF\u7531</h3><p>\u5728 <code>src/router/modules</code> \u5185\u65B0\u589E\u4E00\u4E2A\u6A21\u5757\u6587\u4EF6<code>test.ts</code>\uFF08\u5EFA\u8BAE\uFF1A\u6309\u7167\u529F\u80FD\u547D\u540D\uFF09\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6B64\u65F6\u8DEF\u7531\u5DF2\u6DFB\u52A0\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165\uFF0C\u653E\u5728 <code>src/router/modules</code> \u5185\u7684\u6587\u4EF6\u4F1A\u81EA\u52A8\u88AB\u52A0\u8F7D\u3002</p></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useI18n&#39;</span>
<span class="token keyword">import</span> LayoutsDefault <span class="token keyword">from</span> <span class="token string">&#39;@/layouts/default.vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>

<span class="token keyword">const</span> testRoutes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>AppRouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
      order<span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&#39;Histogram&#39;</span><span class="token punctuation">,</span>
      hideChildrenInMenu<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      alone<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> LayoutsDefault<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;/test/index&#39;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;TestPage&#39;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;test page&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/test/index.vue&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> testRoutes

</code></pre></div><h3 id="\u6807\u9898\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u6807\u9898\u56FD\u9645\u5316" aria-hidden="true">#</a> \u6807\u9898\u56FD\u9645\u5316</h3>`,25),d=n("\u4E3A\u4E86\u914D\u5408vscode\u7684"),m={href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},g=n("i18n\u63D2\u4EF6"),h=n("\uFF0C\u6DFB\u52A0\u4E86\u4E00\u4E2A\u201C\u65E0\u610F\u4E49\u201D\u7684\u65B9\u6CD5\uFF1A"),f=a(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useI18n&#39;</span>

<span class="token comment">// \u6587\u4EF6\u5185\u5BB9</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">t</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> key
</code></pre></div><p>\u6548\u679C\uFF1A</p><p><img src="`+r+'" alt="image-20220518225700168"></p>',3);function y(b,w){const t=o("ExternalLinkIcon");return e(),c(u,null,[i,s("p",null,[d,s("a",m,[g,l(t)]),h]),f],64)}var x=p(k,[["render",y],["__file","router.html.vue"]]);export{x as default};
