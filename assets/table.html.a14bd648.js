import{_ as p,r as o,o as e,c,a as n,b as t,F as l,e as r,d as s}from"./app.df6d3d6f.js";var u="/vue3-toimc-admin-doc/assets/image-20220517204849977.118b474a.png";const i={},k=r('<h1 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h1><p>\u8868\u683C\u7EC4\u4EF6\u529F\u80FD\u7279\u70B9\uFF1A</p><ul><li><p>\u6574\u5408\u4E86<code>element-plus</code>\u4E2D\u7684<code>el-table</code>\u3001<code>el-pagination</code>\uFF1B</p></li><li><p>\u5728<code>column</code>\u90E8\u5206\uFF0C\u6574\u5408\u5E38\u89C1\u7684<code>index</code>, <code>checkbox</code>\uFF1B</p></li><li><p>\u652F\u6301\u8FDB\u5EA6\u6761<code>el-progress</code>\u3001\u5934\u50CF<code>el-avatar</code>\u3001\u5FBD\u7AE0<code>el-badge</code>\u7C7B\u578B</p></li></ul><p><img src="'+u+`" alt="image-20220517204849977"></p><h2 id="\u8868\u683C\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C\u5B9A\u4E49" aria-hidden="true">#</a> \u8868\u683C\u5B9A\u4E49</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ColumnOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5217\u540D</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u6570\u636E\u5BF9\u5E94\u7684key</span>
  prop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
  height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
  align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>
  <span class="token comment">// \u63D2\u69FD\u540D</span>
  slot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token comment">// \u64CD\u4F5C\u5217 -&gt; \u53EF\u4EE5\u652F\u6301icon\u4E0Ebutton</span>
  actionItems<span class="token operator">?</span><span class="token operator">:</span> ActionType<span class="token punctuation">[</span><span class="token punctuation">]</span>
  type<span class="token operator">?</span><span class="token operator">:</span> ColumnTypes
  <span class="token comment">// \u6570\u636E\u683C\u5F0F\u5316</span>
  format<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span>
  <span class="token comment">// \u989D\u5916\u5C5E\u6027</span>
  attrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F8B\u5982\u6700\u4E0A\u9762\u7684\u8868\u683C\u53EF\u4EE5\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u5B9A\u4E49\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u7D22\u5F15&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u65E5\u671F&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
      sortable<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u5934\u50CF&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;image&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u8BC4\u5206&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;rate&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;rate&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;badge&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;badge&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u8FDB\u5EA6&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;progress&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;progress&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// status\u4E0Eformat\u4E92\u65A5</span>
      color<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">format</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    slot<span class="token operator">:</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">300</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u94FE\u63A5&#39;</span><span class="token punctuation">,</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">120</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">&#39;\u64CD\u4F5C&#39;</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    action<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    fixed<span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    actionItems<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
        attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&#39;\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span>scope<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> ColumnOptions<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-table</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pagination<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:default-sort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ prop: <span class="token punctuation">&#39;</span>date<span class="token punctuation">&#39;</span>, order: <span class="token punctuation">&#39;</span>descending<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ row }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ row }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>basic-table</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u540D\u79F0\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>...

  {
    label: &#39;\u5730\u5740&#39;,
    prop: &#39;address&#39;,
    align: &#39;center&#39;,
    slot: &#39;address&#39;,
    width: 300
  },
  
...
</code></pre></div>`,12),g=s("\u63D2\u69FD\u53EF\u4EE5\u83B7\u53D6\u7684\u6570\u636E"),d=n("code",null,"{ row, column, $index }",-1),m=s("\uFF0C\u540C"),b={href:"https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"},h=s("\u5B98\u65B9"),_=s("\u3002"),f=n("h2",{id:"\u5206\u9875\u529F\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5206\u9875\u529F\u80FD","aria-hidden":"true"},"#"),s(" \u5206\u9875\u529F\u80FD")],-1),v=s("\u6B64\u90E8\u5206\uFF0C\u76F4\u63A5\u5BF9\u63A5\u4E86element-plus\u4E2D\u7684\u5206\u9875\u529F\u80FD\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u76F4\u63A5\u6309\u7167"),y={href:"https://element-plus.gitee.io/zh-CN/component/pagination.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u5B98\u65B9\u624B\u518C"),q=s("\u8FDB\u884C\u4F7F\u7528\u3002"),w=n("h2",{id:"\u6E90\u4EE3\u7801",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6E90\u4EE3\u7801","aria-hidden":"true"},"#"),s(" \u6E90\u4EE3\u7801")],-1),C={href:"https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/components/Table/BasicTable.vue",target:"_blank",rel:"noopener noreferrer"},N=s("\u7EC4\u4EF6");function B(E,T){const a=o("ExternalLinkIcon");return e(),c(l,null,[k,n("p",null,[g,d,m,n("a",b,[h,t(a)]),_]),f,n("p",null,[v,n("a",y,[x,t(a)]),q]),w,n("p",null,[n("a",C,[N,t(a)])])],64)}var V=p(i,[["render",B],["__file","table.html.vue"]]);export{V as default};
