import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as l}from"./app.b3032eaf.js";var o="/vue3-toimc-admin-doc/assets/image-20220516201726532.06ad912f.png",a="/vue3-toimc-admin-doc/assets/image-20220516202112350.f052372c.png";const i={},r=l('<h1 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h1><p>\u8BBE\u8BA1\u601D\u60F3&amp;\u529F\u80FD\uFF1A</p><ul><li>\u4F7F\u7528schema\u5B9A\u5236\u7EC4\u4EF6\uFF1B</li><li>\u517C\u5BB9upload\u529F\u80FD\uFF1B</li><li>\u591Aslot\u63D2\u69FD\u517C\u5BB9\uFF0C\u91CD\u540D\u517C\u5BB9\uFF1B</li><li>\u8868\u5355\u9A8C\u8BC1\uFF1B</li><li>inline\u6A21\u5F0F\u652F\u6301\u6805\u680F\u7CFB\u7EDF\uFF1B</li></ul><p><img src="'+o+`" alt="image-20220516201726532"></p><h2 id="\u57FA\u7840\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8868\u5355" aria-hidden="true">#</a> \u57FA\u7840\u8868\u5355</h2><p>\u5B9A\u5236\u8868\u5355\u7EC4\u4EF6\u4F7F\u7528\u4E86schema\u7684\u7ED3\u6784<code>@/components/Form/types/types</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>export type FormSchema = {
  // \u4E09\u79CD\u7C7B\u578B ELement\u7EC4\u4EF6\uFF0C\u7EAF\u6587\u672C\uFF0C\u901A\u7528\u7EC4\u4EF6
  component: ComponentType | &#39;innerText&#39; | Component
  // \u9ED8\u8BA4\u503C
  value?: any
  // \u6807\u7B7E\u6587\u672C
  label?: string
  // \u5C5E\u6027
  prop: string
  // \u7528\u4E8E\u6805\u680F\u7ED3\u6784
  span?: number
  // element\u7EC4\u4EF6 slot\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A
  slot?: string | string[]
  // \u5F53\u524D\u7EC4\u4EF6\u7684slot -&gt; \u9488\u5BF9 input \u7EC4\u4EF6\u91CD\u65B0\u8BBE\u8BA1
  itemSlot?: string | { [key: string]: string }
  // \u6821\u9A8C\u89C4\u5219
  rules?: RuleItem[]
  // \u989D\u5916\u7ED1\u5B9A\u5230item\u4E0A\u7684\u5C5E\u6027
  attrs?: any
  // \u5B50\u7EC4\u4EF6
  children?: Partial&lt;FormSchema&gt;[]
  // item\u4E0A\u7684\u4E8B\u4EF6\u7ED1\u5B9A
  events?: any
  // \u989D\u5916\u7684class
  class?: string
  // \u989D\u5916\u7684style\u5C5E\u6027
  style?: CSSProperties
  // \u4E0A\u4F20\u7EC4\u4EF6
  upload?: UploadComponent
}
</code></pre></div><p>\u4E0A\u4F20\u7EC4\u4EF6\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>export type UploadComponent = {
  // \u4E0A\u4F20\u94FE\u63A5
  action?: string
  // \u8BF7\u6C42\u5934
  headers?: object
  // \u8BF7\u6C42\u65B9\u5F0F
  method?: &#39;post&#39; | &#39;put&#39; | &#39;patch&#39;
  // \u662F\u5426\u591A\u6587\u4EF6
  multiple?: boolean
  // \u6570\u636E
  data?: any
  // \u6587\u4EF6\u540D
  name?: string
  withCredentials?: boolean
  showFileList?: boolean
  // \u62D6\u62FD\u529F\u80FD\u662F\u5426\u5F00\u6237
  drag?: boolean
  // \u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B
  accept?: string
  // \u6587\u4EF6\u5217\u8868
  fileList?: any[]
  listType?: &#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39;
  autoUpload?: boolean
  disabled?: boolean
  // \u9650\u5236\u6587\u4EF6\u6570\u91CF
  limit?: number
  type?: &#39;button&#39; | &#39;icon&#39;
  btnType?: &#39;primary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39; | &#39;info&#39; | &#39;text&#39;
  text?: string
  class?: string
  icon?: string
  onChange?: (file: UploadFile, fileList: UploadFile[]) =&gt; void
  onRemove?: (file: UploadFile, fileList: UploadFile[]) =&gt; void
  onSuccess?: (response: any, file: UploadFile, fileList: UploadFile[]) =&gt; void
  onError?: (error: any, file: UploadFile, fileList: UploadFile[]) =&gt; void
  onProgress?: (
    evt: UploadProgressEvent,
    error: any,
    file: UploadFile,
    fileList: UploadFile[]
  ) =&gt; void
  onPreview?: (file: UploadFile) =&gt; void
  beforeUpload?: (file: UploadRawFile) =&gt; Awaitable&lt;void | undefined | null | boolean | File | Blob&gt;
  beforeRemove?: (uploadFile: UploadFile, uploadFiles: UploadFiles) =&gt; Awaitable&lt;boolean&gt;
  httpRequest?: UploadRequestHandler
  onExceed?: (files: File[], uploadFiles: UploadFiles) =&gt; void
}
</code></pre></div><p>\u5176\u4ED6\u5C5E\u6027\u4E0E<a href="https://element-plus.gitee.io/zh-CN/component/upload#%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">element-plus\u5B98\u7F51</a>\u4E00\u81F4\u3002</p><h2 id="schema\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#schema\u5199\u6CD5" aria-hidden="true">#</a> Schema\u5199\u6CD5</h2><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;basic-form :schemas=&quot;formBasicSchema&quot; label-width=&quot;120px&quot;&gt;
  &lt;template #upload1-trigger&gt;
    &lt;el-button type=&quot;primary&quot;&gt;\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E&lt;/el-button&gt;
  &lt;/template&gt;
  &lt;template #upload2-trigger&gt;
    &lt;el-button type=&quot;primary&quot;&gt;\u70B9\u51FB\u4E0A\u4F20&lt;/el-button&gt;
  &lt;/template&gt;
  &lt;template #upload2-tip&gt;
    &lt;div class=&quot;el-upload__tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #haha&gt; \u5BF9\u5E94append &lt;/template&gt;
  &lt;template #haha1&gt; prefix &lt;/template&gt;
&lt;/basic-form&gt;

&lt;basic-form :schemas=&quot;formBasicSchema&quot; inline label-width=&quot;120px&quot;&gt;
  &lt;template #upload1-trigger&gt;
    &lt;el-button type=&quot;primary&quot;&gt;\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E&lt;/el-button&gt;
  &lt;/template&gt;
  &lt;template #upload2-trigger&gt;
    &lt;el-button type=&quot;primary&quot;&gt;\u70B9\u51FB\u4E0A\u4F20&lt;/el-button&gt;
  &lt;/template&gt;
  &lt;template #upload2-tip&gt;
    &lt;div class=&quot;el-upload__tip&quot;&gt;jpg/png files with a size less than 500kb&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #haha&gt; \u5BF9\u5E94append &lt;/template&gt;
  &lt;template #haha1&gt; prefix &lt;/template&gt;
&lt;/basic-form&gt;
</code></pre></div><p>\u5176\u5BF9\u5E94\u7684schema\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const formBasicSchema: FormSchema[] = [
  {
    component: &#39;input&#39;,
    value: &#39;&#39;,
    label: &#39;\u7528\u6237\u540D&#39;,
    prop: &#39;name&#39;,
    rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;, trigger: &#39;blur&#39; }],
    attrs: {
      placeholder: &#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;
    },
    itemSlot: { append: &#39;haha&#39;, prefix: &#39;haha1&#39; },
    span: 12
  },
  {
    component: &#39;input&#39;,
    value: &#39;&#39;,
    label: &#39;\u5BC6\u7801&#39;,
    prop: &#39;password&#39;,
    rules: [
      {
        required: true,
        message: &#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;,
        trigger: &#39;blur&#39;
      },
      {
        min: 6,
        max: 16,
        message: &#39;\u5BC6\u7801\u57286-16\u4F4D&#39;,
        trigger: &#39;blur&#39;
      }
    ],
    attrs: {
      placeholder: &#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;
    },
    span: 12
  },
  {
    component: &#39;select&#39;,
    value: &#39;&#39;,
    prop: &#39;role&#39;,
    label: &#39;\u89D2\u8272&#39;,
    rules: [
      {
        required: true,
        message: &#39;\u8BF7\u9009\u62E9\u89D2\u8272&#39;,
        trigger: &#39;change&#39;
      }
    ],
    attrs: {
      placeholder: &#39;\u8BF7\u9009\u62E9\u89D2\u8272&#39;
    },
    children: [
      {
        component: &#39;option&#39;,
        label: &#39;\u7BA1\u7406\u5458&#39;,
        value: &#39;admin&#39;
      },
      {
        component: &#39;option&#39;,
        label: &#39;\u7528\u6237&#39;,
        value: &#39;user&#39;
      },
      {
        component: &#39;option&#39;,
        label: &#39;\u6D4B\u8BD5&#39;,
        value: &#39;test&#39;
      }
    ],
    span: 24
  },
  {
    component: &#39;checkbox-group&#39;,
    value: [&#39;1&#39;],
    prop: &#39;like&#39;,
    label: &#39;\u7231\u597D&#39;,
    rules: [],
    attrs: {},
    children: [
      {
        component: &#39;checkbox&#39;,
        label: &#39;\u8DB3\u7403&#39;,
        value: &#39;1&#39;,
        attrs: {
          disabled: true
        }
      },
      {
        component: &#39;checkbox&#39;,
        label: &#39;\u7BEE\u7403&#39;,
        value: &#39;2&#39;
      },
      {
        component: &#39;checkbox&#39;,
        label: &#39;\u6E38\u6CF3&#39;,
        value: &#39;3&#39;
      }
    ],
    span: 12
  },
  {
    component: &#39;radio-group&#39;,
    value: &#39;2&#39;,
    prop: &#39;gender&#39;,
    label: &#39;\u6027\u522B&#39;,
    children: [
      {
        component: &#39;radio&#39;,
        label: &#39;\u7537&#39;,
        value: &#39;1&#39;
      },
      {
        component: &#39;radio&#39;,
        label: &#39;\u5973&#39;,
        value: &#39;2&#39;
      },
      {
        component: &#39;radio&#39;,
        label: &#39;\u672A\u77E5&#39;,
        value: &#39;3&#39;
      }
    ],
    span: 12
  },
  {
    component: &#39;upload&#39;,
    label: &#39;\u56FE\u7247&#39;,
    prop: &#39;file&#39;,
    // slotId
    slot: &#39;upload1&#39;,
    upload: {
      action: &#39;&#39;
    },
    span: 24
  },
  {
    component: &#39;upload&#39;,
    label: &#39;\u6587\u6863&#39;,
    prop: &#39;file&#39;,
    slot: &#39;upload2&#39;,
    upload: {
      action: &#39;&#39;
    }
  },
  {
    component: &#39;upload&#39;,
    label: &#39;\u6587\u6863&#39;,
    prop: &#39;file&#39;,
    upload: {
      type: &#39;button&#39;,
      btnType: &#39;success&#39;,
      text: &#39;\u70B9\u51FB\u4E0A\u4F20&#39;,
      action: &#39;&#39;
    },
    span: 24
  },
  {
    component: &#39;upload&#39;,
    label: &#39;\u56FE\u6807\u4E0A\u4F20&#39;,
    prop: &#39;file&#39;,
    upload: {
      action: &#39;&#39;,
      type: &#39;icon&#39;,
      onChange: (file, list) =&gt; {
        console.log(file, list)
      }
    },
    span: 24
  },
  {
    component: Demo,
    label: &#39;\u7EC4\u4EF6\u5F15\u7528&#39;,
    prop: &#39;demo&#39;,
    span: 24
  },
  {
    component: &#39;innerText&#39;,
    label: &#39;\u7EAF\u6587\u672C&#39;,
    prop: &#39;inner&#39;,
    value: &#39;\u6587\u672C\u5185\u5BB9\u5199\u5728\u8FD9\u91CC&#39;,
    span: 24
  }
]
</code></pre></div><h2 id="\u8868\u5355dom\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355dom\u5199\u6CD5" aria-hidden="true">#</a> \u8868\u5355DOM\u5199\u6CD5</h2><p>\u8FD9\u79CD\u5199\u6CD5\uFF0C\u5373\u662F\u4F7F\u7528element-plus\u5B98\u65B9\u7EC4\u4EF6\u8FDB\u884C\u4E66\u5199\uFF0C\u65E0schema\u7ED3\u6784\uFF0C\u9700\u8981\u81EA\u5DF1\u5B8C\u6210\u7ED3\u6784\u7684\u8F93\u51FA\u3002</p><h2 id="\u5206\u6B65\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u5206\u6B65\u8868\u5355" aria-hidden="true">#</a> \u5206\u6B65\u8868\u5355</h2><p><img src="`+a+`" alt="image-20220516202112350"></p><p>\u76F8\u5BF9\u590D\u6742\u7684\u5E94\u7528\u573A\u666F\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;p-4 overflow-y-auto custom&quot;&gt;
      &lt;el-card&gt;
        &lt;template #header&gt;
          &lt;div class=&quot;flex justify-between items-center&quot;&gt;
            &lt;span class=&quot;flex-1&quot;&gt;\u5206\u6B65\u8868\u5355&lt;/span&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;!-- \u6B65\u9AA4\u6761 --&gt;
        &lt;el-steps :active=&quot;active&quot; align-center&gt;
          &lt;el-step title=&quot;\u7B2C\u4E00\u6B65&quot; description=&quot;\u586B\u5199\u8F6C\u8D26\u4FE1\u606F&quot; /&gt;
          &lt;el-step title=&quot;\u7B2C\u4E8C\u6B65&quot; description=&quot;\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F&quot; /&gt;
          &lt;el-step title=&quot;\u7B2C\u4E09\u6B65&quot; description=&quot;\u5B8C\u6210&quot; /&gt;
        &lt;/el-steps&gt;
        &lt;el-row justify=&quot;center&quot; class=&quot;mt-10&quot;&gt;
          &lt;el-col :span=&quot;12&quot;&gt;
            &lt;basic-form
              v-if=&quot;active == 1&quot;
              ref=&quot;formOne&quot;
              :schemas=&quot;form.one&quot;
              :label-width=&quot;labelWidth&quot;
              :label-position=&quot;labelPosition&quot;
              size=&quot;large&quot;
            &gt;
              &lt;template #action=&quot;{ validate, model }&quot;&gt;
                &lt;el-button type=&quot;primary&quot; @click=&quot;handleSubmitOne(validate, model)&quot;
                  &gt;\u4E0B\u4E00\u6B65&lt;/el-button
                &gt;
              &lt;/template&gt;
            &lt;/basic-form&gt;
            &lt;el-form
              v-if=&quot;active == 2&quot;
              :label-width=&quot;labelWidth&quot;
              :label-position=&quot;labelPosition&quot;
              size=&quot;large&quot;
            &gt;
              &lt;el-form-item v-for=&quot;(item, index) in form.one&quot; :key=&quot;index&quot; :label=&quot;item.label&quot;&gt;
                &lt;el-input v-model=&quot;item[&#39;value&#39;]&quot; disabled&gt;&lt;/el-input&gt;
              &lt;/el-form-item&gt;
              &lt;el-form-item label=&quot;\u652F\u4ED8\u5BC6\u7801&quot; prop=&quot;password&quot;&gt;
                &lt;el-input v-model=&quot;form.two.value&quot; placeholder=&quot;\u8F93\u5165\u652F\u4ED8\u5BC6\u7801&quot; /&gt;
              &lt;/el-form-item&gt;
              &lt;el-form-item&gt;
                &lt;el-button :loading=&quot;loading&quot; @click=&quot;handleSubmit&quot;&gt;\u63D0\u4EA4&lt;/el-button&gt;
                &lt;el-button type=&quot;primary&quot; @click=&quot;handleClickPrev&quot;&gt;\u4E0A\u4E00\u6B65&lt;/el-button&gt;
              &lt;/el-form-item&gt;
            &lt;/el-form&gt;
            &lt;el-main v-if=&quot;active === 3&quot;&gt;
              &lt;el-result icon=&quot;success&quot; title=&quot;\u8F6C\u8D26\u6210\u529F&quot;&gt;
                &lt;template #extra&gt;
                  &lt;el-button type=&quot;primary&quot;&gt;\u518D\u8F6C\u4E00\u7B14&lt;/el-button&gt;
                &lt;/template&gt;
              &lt;/el-result&gt;
            &lt;/el-main&gt;
          &lt;/el-col&gt;
        &lt;/el-row&gt;
      &lt;/el-card&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
  import { defineComponent } from &#39;vue&#39;
  import { ElMessage } from &#39;element-plus&#39;

  export default defineComponent({
    name: &#39;StepForm&#39;,
    setup() {
      const loading = ref(false)
      const active = ref(1)
      const labelPosition = ref(&#39;right&#39;)
      const labelWidth = ref(&#39;120px&#39;)
      const form = reactive({
        one: [
          {
            component: &#39;input&#39;,
            value: &#39;&#39;,
            label: &#39;\u4ED8\u6B3E\u8D26\u6237&#39;,
            prop: &#39;payment&#39;,
            rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;, trigger: &#39;blur&#39; }],
            attrs: {
              placeholder: &#39;\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;,
              clearable: true
            }
          },
          {
            component: &#39;input&#39;,
            value: &#39;&#39;,
            label: &#39;\u6536\u6B3E\u8D26\u6237&#39;,
            prop: &#39;receive-payment&#39;,
            rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;, trigger: &#39;blur&#39; }],
            attrs: {
              placeholder: &#39;\u6536\u6B3E\u8D26\u6237&#39;,
              clearable: true
            }
          },
          {
            component: &#39;input&#39;,
            value: &#39;&#39;,
            label: &#39;\u6536\u6B3E\u4EBA\u59D3\u540D&#39;,
            prop: &#39;payee&#39;,
            rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D&#39;, trigger: &#39;blur&#39; }],
            attrs: {
              placeholder: &#39;\u6536\u6B3E\u4EBA\u59D3\u540D&#39;,
              clearable: true
            }
          },
          {
            component: &#39;input&#39;,
            value: &#39;&#39;,
            label: &#39;\u8F6C\u8D26\u91D1\u989D&#39;,
            prop: &#39;amount&#39;,
            rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D&#39;, trigger: &#39;blur&#39; }],
            attrs: {
              placeholder: &#39;\u8F6C\u8D26\u91D1\u989D&#39;,
              clearable: true
            }
          }
        ],
        two: {
          component: &#39;input&#39;,
          value: &#39;&#39;,
          label: &#39;\u652F\u4ED8\u5BC6\u7801&#39;,
          prop: &#39;payment&#39;,
          rules: [{ required: true, message: &#39;\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801&#39;, trigger: &#39;blur&#39; }],
          attrs: {
            placeholder: &#39;\u8F93\u5165\u652F\u4ED8\u5BC6\u7801&#39;,
            clearable: true
          }
        }
      })

      const models = ref()

      function handleClickPrev() {
        if (active.value === 0) return
        active.value -= 1
      }

      async function handleSubmitOne(formEl, model) {
        console.log(&#39;formEl:&#39;, formEl)
        if (!formEl) return
        console.log(&#39;model:&#39;, model)
        formEl()
          .then((res) =&gt; {
            if (!res) return
            form.one = form.one.map((item) =&gt; {
              item.value = model[item.prop]
              return item
            })
            active.value += 1
          })
          .catch((error) =&gt; console.error(&#39;step one verification failed:&#39;, error))
      }

      function handleSubmit(forms: any) {
        console.log(&#39;forms:&#39;, forms)
        loading.value = true
        setTimeout(() =&gt; {
          loading.value = false
          ElMessage({
            type: &#39;success&#39;,
            message: &#39;\u63A7\u5236\u53F0\u67E5\u770B\u6253\u5370\u6570\u636E&#39;
          })
          active.value++
        }, 3000)
      }

      return {
        loading,
        active,
        labelPosition,
        labelWidth,
        form,
        models,
        handleClickPrev,
        handleSubmitOne,
        handleSubmit
      }
    }
  })
&lt;/script&gt;

&lt;style scoped lang=&quot;&quot;&gt;&lt;/style&gt;
</code></pre></div>`,20),p=[r];function u(s,c){return t(),e("div",null,p)}var d=n(i,[["render",u],["__file","form.html.vue"]]);export{d as default};
