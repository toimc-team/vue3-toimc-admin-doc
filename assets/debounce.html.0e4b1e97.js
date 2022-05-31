import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,a as o}from"./app.b3032eaf.js";var a="/vue3-toimc-admin-doc/assets/throttle_debounce.effc8193.gif";const r={},u=o('<h1 id="userequest" tabindex="-1"><a class="header-anchor" href="#userequest" aria-hidden="true">#</a> useRequest</h1><p>\u4E3B\u8981\u4F5C\u7528\u662F\u5728\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u9632\u6B62\u7528\u6237\u9891\u7E41\u70B9\u51FB\u6216\u8005\u8BEF\u89E6\u3002</p><h2 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u6838\u5FC3\u6982\u5FF5</h2><p>\u4F55\u8C13\u8282\u6D41\u548C\u9632\u6296\uFF1F</p><p><img src="'+a+`" alt="throttle_debounce\u793A\u4F8B"></p><h3 id="\u8282\u6D41-\u9650\u9891" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41-\u9650\u9891" aria-hidden="true">#</a> \u8282\u6D41 (\u9650\u9891)</h3><p>\u5728\u4E8B\u4EF6\u6301\u7EED\u89E6\u53D1\u7684\u524D\u63D0\u4E0B\uFF0C<strong>\u4FDD\u8BC1\u4E00\u5B9A\u65F6\u95F4\u6BB5\u5185\u53EA\u8C03\u7528\u4E00\u6B21\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</strong>\uFF0C\u5C31\u662F\u51FD\u6570\u8282\u6D41\u3002\u6BD4\u5982\u6211\u4EEC\u8BBE\u5B9A500ms\uFF0C\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\uFF0C\u65E0\u8BBA\u70B9\u51FB\u6309\u94AE\u591A\u5C11\u6B21\uFF0C\u5B83\u90FD\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\u3002\u5177\u4F53\u573A\u666F\u53EF\u4EE5\u662F\u62A2\u8D2D\u65F6\u5019\uFF0C\u7531\u4E8E\u6709\u65E0\u6570\u4EBA \u5FEB\u901F\u70B9\u51FB\u6309\u94AE\uFF0C\u5982\u679C\u6BCF\u6B21\u70B9\u51FB\u90FD\u53D1\u9001\u8BF7\u6C42\uFF0C\u5C31\u4F1A\u7ED9\u670D\u52A1\u5668\u9020\u6210\u5DE8\u5927\u7684\u538B\u529B\uFF0C\u4F46\u662F\u6211\u4EEC\u8FDB\u884C\u8282\u6D41\u540E\uFF0C\u5C31\u4F1A\u5927\u5927\u51CF\u5C11\u8BF7\u6C42\u7684\u6B21\u6570\u3002</p><h3 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h3><p>\u9632\u6296\u7684\u610F\u601D\u662F\uFF0C\u5728\u8FDE\u7EED\u7684\u64CD\u4F5C\u4E2D\uFF0C\u65E0\u8BBA\u8FDB\u884C\u4E86\u591A\u957F\u65F6\u95F4\uFF0C\u53EA\u6709\u67D0\u4E00\u6B21\u7684\u64CD\u4F5C\u540E<strong>\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u64CD\u4F5C</strong>\uFF0C\u8FD9\u4E00\u6B21\u624D\u88AB\u5224\u5B9A\u6709\u6548\u3002</p><p>\u5177\u4F53\u573A\u666F\u53EF\u4EE5\u641C\u7D22\u6846\u8F93\u5165\u5173\u952E\u5B57\u8FC7\u7A0B\u4E2D\u5B9E\u65F6 \u8BF7\u6C42\u670D\u52A1\u5668\u5339\u914D\u641C\u7D22\u7ED3\u679C\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u5904\u7406\uFF0C\u90A3\u4E48\u5C31\u662F\u8F93\u5165\u6846\u5185\u5BB9\u4E00\u76F4\u53D8\u5316\uFF0C\u5BFC\u81F4\u4E00\u76F4\u53D1\u9001\u8BF7\u6C42\u3002\u5982\u679C\u8FDB\u884C\u9632\u6296\u5904\u7406\uFF0C\u7ED3\u679C\u5C31\u662F\u5F53\u6211\u4EEC\u8F93\u5165\u5185\u5BB9\u5B8C\u6210\u540E\uFF0C\u4E00\u5B9A\u65F6\u95F4(\u6BD4\u5982500ms)\u6CA1\u6709\u518D \u8F93\u5165\u5185\u5BB9\uFF0C\u8FD9\u65F6\u518D\u89E6\u53D1\u8BF7\u6C42\u3002</p><p>\u7ED3\u5408\u4EE5\u4E0A\u4E24\u79CD\u60C5\u51B5\uFF0C\u56DE\u5230\u6211\u4EEC\u6700\u5B9E\u9645\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u9632\u6B62\u8868\u5355\u63D0\u4EA4\u6309\u94AE\u88AB\u591A\u6B21\u89E6\u53D1\uFF0C\u6211\u4EEC\u5E94\u8BE5\u9009\u62E9\u4F7F\u7528\u8282\u6D41\u800C\u4E0D\u662F\u9632\u6296\u65B9\u6848\u3002</p><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code>export type Service&lt;T, P extends any[]&gt; = (...args: P) =&gt; RequestResponse&lt;T&gt;;

export interface Options&lt;T, P extends any[]&gt; {
  // \u662F\u5426\u542F\u7528 \u9ED8\u8BA4false - \u4E0D\u52A0\u5165\u9632\u6296\u8282\u6D41
  manual?: boolean
  // \u9ED8\u8BA4\u53C2\u6570
  defaultParams?: P

  // \u9632\u6296\u65F6\u95F4
  // \u8BBE\u7F6E\`debounceWait\` \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u9632\u6296\u65F6\u95F4,\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\uFF0C\u5982\u679C\u518D\u6B21\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\uFF0C\u5982\u679C\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u6B21\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5219\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002 
  debounceWait?: number

  // leading  \u9632\u6296\u90E8\u5206 \u51B3\u5B9A\u5EF6\u8FDF\u524D\u540E\u5982\u4F55\u89E6\u53D1, true-\u5148\u8C03\u7528\u540E\u7B49\u5F85
  debounceLeading?: boolean
  // trailing \u9632\u6296\u90E8\u5206 \u51B3\u5B9A\u5EF6\u8FDF\u524D\u540E\u5982\u4F55\u89E6\u53D1, true-\u5148\u7B49\u5F85\u540E\u8C03\u7528
  debounceTrailing?: boolean

  // \u8282\u6D41\u65F6\u95F4
  // \u8BBE\u7F6E \`throttleWait\` \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8282\u6D41\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\uFF0C\u53EA\u89E6\u53D1\u4E00\u6B21
  throttleWait?: number
  // \u540C\u4E0A \u6587\u6863\uFF1Ahttps://www.lodashjs.com/docs/lodash.debounce
  throttleLeading?: boolean
  throttleTrailing?: boolean

  queryKey?: (...args: P) =&gt; string
}

export function useRequest&lt;T, P extends any[]&gt;(
  service: Service&lt;T, P&gt;,
  options: Options&lt;T, P&gt; = {}
) {
  // ...

  return {
    run,
    loading,
    queries,
    cancel
  }
}
</code></pre></div><h3 id="\u8BF7\u6C42\u8282\u6D41-throttle-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u8282\u6D41-throttle-\u7528\u6CD5" aria-hidden="true">#</a> \u8BF7\u6C42\u8282\u6D41 (throttle)\u7528\u6CD5</h3><p>\u8BBE\u7F6E <code>throttleWait</code> \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8282\u6D41\u65F6\u95F4\uFF0C\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\uFF0C\u53EA\u89E6\u53D1\u4E00\u6B21</p><h3 id="\u8BF7\u6C42\u9632\u6296-debounce-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u9632\u6296-debounce-\u7528\u6CD5" aria-hidden="true">#</a> \u8BF7\u6C42\u9632\u6296 (debounce)\u7528\u6CD5</h3><p>\u8BBE\u7F6E<code>debounceWait</code> \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u9632\u6296\u65F6\u95F4,\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\uFF0C\u5982\u679C\u518D\u6B21\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\uFF0C\u5982\u679C\u5728\u8FD9\u4E2A\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u6B21\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5219\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-html ext-html"><pre class="language-html"><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;text-red-500&quot;&gt; queryKey\u793A\u4F8B &lt;/div&gt;
    &lt;ul class=&quot;p-[24px]&quot;&gt;
      &lt;li v-for=&quot;user in userList&quot; :key=&quot;user.id&quot;&gt;
        &lt;div class=&quot;flex justify-between&quot;&gt;
          &lt;div&gt;{{ user.username }}&lt;/div&gt;
          {{ queries[user.id]?.data }}
          &lt;div&gt;
            &lt;el-button :loading=&quot;queries[user.id]?.loading&quot; @click=&quot;run(user.id)&quot;&gt;\u8BF7\u6C42&lt;/el-button&gt;
            &lt;el-button @click=&quot;queries[user.id]?.cancel()&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div&gt; queries: {{ queries }} &lt;/div&gt;

    &lt;div class=&quot;text-red-500&quot;&gt;
      debounce: \u53D6\u6D88\u4E86\u4E5F\u4F1A\u9632\u6296
      &lt;el-button :loading=&quot;debounceLoading&quot; @click=&quot;debounceRun(1)&quot;&gt;\u8BF7\u6C42&lt;/el-button&gt;
      &lt;el-button @click=&quot;debounceCancel?.()&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
    &lt;/div&gt;

    &lt;div class=&quot;text-red-500&quot;&gt;
      throttle
      &lt;el-button @click=&quot;throttleRun(1)&quot;&gt;\u8BF7\u6C42&lt;/el-button&gt;
      &lt;el-button @click=&quot;throttleCancel?.()&quot;&gt;\u53D6\u6D88&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt; 
&lt;script lang=&quot;ts&quot;&gt; 
  import { request } from &#39;@/hooks/useRequest/axios&#39;
  import { useRequest } from &#39;@/hooks/useRequest/useRequest&#39;

  interface IUser {
    id: number
    username: string
    email: string
    phone: string
  }

  function getUserInfo(id: number) {
    return request&lt;IUser&gt;({
      url: &#39;/getUserInfo&#39;,
      method: &#39;get&#39;,
      params: {
        id
      }
    })
  }

  export default defineComponent({
    setup() {
      const { run, queries } = useRequest&lt;IUser, [number]&gt;(getUserInfo, {
        manual: true,
        queryKey: (id) =&gt; String(id)
      })

      const {
        run: debounceRun,
        loading: debounceLoading,
        cancel: debounceCancel
      } = useRequest&lt;IUser, [number]&gt;(getUserInfo, {
        manual: true,
        // \u9632\u6296\u5EF6\u8FDF\u65F6\u95F41.5s
        debounceWait: 1500,
        defaultParams: [10000]
      })

      const {
        run: throttleRun,
        loading: throttleLoading,
        cancel: throttleCancel
      } = useRequest&lt;IUser, [number]&gt;(getUserInfo, {
        manual: true,
        // \u8282\u6D41\u8BF7\u6C42
        throttleWait: 1500,
        defaultParams: [10000]
      })

      const userList = [
        { id: 10000, username: &#39;\u5F20\u4E09&#39;, email: &#39;zhangsan@qq.com&#39;, phone: 1311111111 },
        { id: 10001, username: &#39;\u674E\u56DB&#39;, email: &#39;lisi@qq.com&#39;, phone: 1311111111 },
        { id: 10002, username: &#39;\u738B\u4E94&#39;, email: &#39;wangwu@qq.com&#39;, phone: 1311111111 }
      ]
      return {
        queries,
        run,
        debounceRun,
        debounceLoading,
        debounceCancel,
        throttleRun,
        throttleLoading,
        throttleCancel,
        userList
      }
    }
  })
&lt;/script&gt;
</code></pre></div>`,19),l=[u];function s(i,d){return t(),n("div",null,l)}var h=e(r,[["render",s],["__file","debounce.html.vue"]]);export{h as default};
