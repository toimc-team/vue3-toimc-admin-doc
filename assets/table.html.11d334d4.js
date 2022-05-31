import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as t,a}from"./app.b3032eaf.js";var r="/vue3-toimc-admin-doc/assets/image-20220517204849977.118b474a.png";const o={},l=a('<h1 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h1><p>\u8868\u683C\u7EC4\u4EF6\u529F\u80FD\u7279\u70B9\uFF1A</p><ul><li><p>\u6574\u5408\u4E86<code>element-plus</code>\u4E2D\u7684<code>el-table</code>\u3001<code>el-pagination</code>\uFF1B</p></li><li><p>\u5728<code>column</code>\u90E8\u5206\uFF0C\u6574\u5408\u5E38\u89C1\u7684<code>index</code>, <code>checkbox</code>\uFF1B</p></li><li><p>\u652F\u6301\u8FDB\u5EA6\u6761<code>el-progress</code>\u3001\u5934\u50CF<code>el-avatar</code>\u3001\u5FBD\u7AE0<code>el-badge</code>\u7C7B\u578B</p></li></ul><p><img src="'+r+`" alt="image-20220517204849977"></p><h2 id="\u8868\u683C\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C\u5B9A\u4E49" aria-hidden="true">#</a> \u8868\u683C\u5B9A\u4E49</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code>export interface ColumnOptions {
  // \u5217\u540D
  label: string
  // \u6570\u636E\u5BF9\u5E94\u7684key
  prop?: string
  width?: string | number
  height?: string | number
  align?: &#39;left&#39; | &#39;right&#39; | &#39;center&#39;
  // \u63D2\u69FD\u540D
  slot?: string
  fixed?: boolean | &#39;left&#39; | &#39;right&#39;
  // \u64CD\u4F5C\u5217 -&gt; \u53EF\u4EE5\u652F\u6301icon\u4E0Ebutton
  actionItems?: ActionType[]
  type?: ColumnTypes
  // \u6570\u636E\u683C\u5F0F\u5316
  format?: (value: any, row: any) =&gt; any
  // \u989D\u5916\u5C5E\u6027
  attrs?: any
}
</code></pre></div><p>\u4F8B\u5982\u6700\u4E0A\u9762\u7684\u8868\u683C\u53EF\u4EE5\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u5B9A\u4E49\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const columns = [
  {
    label: &#39;\u7D22\u5F15&#39;,
    type: &#39;index&#39;,
    align: &#39;center&#39;
  },
  {
    type: &#39;selection&#39;,
    align: &#39;center&#39;
  },
  {
    label: &#39;\u65E5\u671F&#39;,
    prop: &#39;date&#39;,
    align: &#39;center&#39;,
    attrs: {
      sortable: true
    }
  },
  {
    label: &#39;\u5934\u50CF&#39;,
    prop: &#39;url&#39;,
    align: &#39;center&#39;,
    type: &#39;image&#39;
  },
  {
    label: &#39;\u8BC4\u5206&#39;,
    prop: &#39;rate&#39;,
    align: &#39;center&#39;,
    type: &#39;rate&#39;
  },
  {
    label: &#39;\u59D3\u540D&#39;,
    prop: &#39;name&#39;,
    align: &#39;center&#39;,
    type: &#39;tag&#39;
  },
  {
    label: &#39;\u6D88\u606F&#39;,
    prop: &#39;badge&#39;,
    align: &#39;center&#39;,
    type: &#39;badge&#39;
  },
  {
    label: &#39;\u8FDB\u5EA6&#39;,
    prop: &#39;progress&#39;,
    align: &#39;center&#39;,
    type: &#39;progress&#39;,
    width: 200,
    attrs: {
      // status\u4E0Eformat\u4E92\u65A5
      color: &#39;green&#39;
    },
    format: (value) =&gt; {
      return \`\${value}%\`
    }
  },
  {
    label: &#39;\u5730\u5740&#39;,
    prop: &#39;address&#39;,
    align: &#39;center&#39;,
    slot: &#39;address&#39;,
    width: 300
  },
  {
    label: &#39;\u94FE\u63A5&#39;,
    prop: &#39;link&#39;,
    align: &#39;center&#39;,
    type: &#39;link&#39;,
    width: 120
  },
  {
    label: &#39;\u64CD\u4F5C&#39;,
    align: &#39;center&#39;,
    action: true,
    fixed: &#39;right&#39;,
    width: 200,
    actionItems: [
      {
        type: &#39;button&#39;,
        attrs: {
          type: &#39;primary&#39;
        },
        text: &#39;\u7F16\u8F91&#39;,
        click: (scope) =&gt; {
          console.log(scope)
        }
      },
      {
        type: &#39;button&#39;,
        text: &#39;\u8BE6\u60C5&#39;,
        click: (scope) =&gt; {
          console.log(scope)
        }
      }
    ]
  }
] as ColumnOptions[]
</code></pre></div><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;basic-table
  ref=&quot;table&quot;
  :data=&quot;tableData&quot;
  :columns=&quot;columns&quot;
  :pagination=&quot;pagination&quot;
  :default-sort=&quot;{ prop: &#39;date&#39;, order: &#39;descending&#39; }&quot;
&gt;
  &lt;template #address=&quot;{ row }&quot;&gt;{{ row }}&lt;/template&gt;
&lt;/basic-table&gt;
</code></pre></div><p>\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u540D\u79F0\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>...

  {
    label: &#39;\u5730\u5740&#39;,
    prop: &#39;address&#39;,
    align: &#39;center&#39;,
    slot: &#39;address&#39;,
    width: 300
  },
  
...
</code></pre></div><p>\u63D2\u69FD\u53EF\u4EE5\u83B7\u53D6\u7684\u6570\u636E<code>{ row, column, $index }</code>\uFF0C\u540C<a href="https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E6%8F%92%E6%A7%BD" target="_blank" rel="noopener noreferrer">\u5B98\u65B9</a>\u3002</p><h2 id="\u5206\u9875\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u529F\u80FD" aria-hidden="true">#</a> \u5206\u9875\u529F\u80FD</h2><p>\u6B64\u90E8\u5206\uFF0C\u76F4\u63A5\u5BF9\u63A5\u4E86element-plus\u4E2D\u7684\u5206\u9875\u529F\u80FD\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u76F4\u63A5\u6309\u7167<a href="https://element-plus.gitee.io/zh-CN/component/pagination.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u624B\u518C</a>\u8FDB\u884C\u4F7F\u7528\u3002</p><h2 id="\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a> \u6E90\u4EE3\u7801</h2><p><a href="https://github.com/toimc-team/vue3-toimc-admin/blob/main/src/components/Table/BasicTable.vue" target="_blank" rel="noopener noreferrer">\u7EC4\u4EF6</a></p>`,17),i=[l];function c(s,p){return n(),t("div",null,i)}var u=e(o,[["render",c],["__file","table.html.vue"]]);export{u as default};
