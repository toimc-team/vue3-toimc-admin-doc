import{_ as t,r as o,o as e,c as l,a as s,b as c,F as r,e as a,d as n}from"./app.bb955598.js";var u="/vue3-toimc-admin-doc/assets/image-20220516201726532.06ad912f.png",k="/vue3-toimc-admin-doc/assets/image-20220516202112350.f052372c.png";const i={},g=a('<h1 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h1><p>\u8BBE\u8BA1\u601D\u60F3&amp;\u529F\u80FD\uFF1A</p><ul><li>\u4F7F\u7528schema\u5B9A\u5236\u7EC4\u4EF6\uFF1B</li><li>\u517C\u5BB9upload\u529F\u80FD\uFF1B</li><li>\u591Aslot\u63D2\u69FD\u517C\u5BB9\uFF0C\u91CD\u540D\u517C\u5BB9\uFF1B</li><li>\u8868\u5355\u9A8C\u8BC1\uFF1B</li><li>inline\u6A21\u5F0F\u652F\u6301\u6805\u680F\u7CFB\u7EDF\uFF1B</li></ul><p><img src="'+u+`" alt="image-20220516201726532"></p><h2 id="\u57FA\u7840\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8868\u5355" aria-hidden="true">#</a> \u57FA\u7840\u8868\u5355</h2><p>\u5B9A\u5236\u8868\u5355\u7EC4\u4EF6\u4F7F\u7528\u4E86schema\u7684\u7ED3\u6784<code>@/components/Form/types/types</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FormSchema</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E09\u79CD\u7C7B\u578B ELement\u7EC4\u4EF6\uFF0C\u7EAF\u6587\u672C\uFF0C\u901A\u7528\u7EC4\u4EF6</span>
  component<span class="token operator">:</span> ComponentType <span class="token operator">|</span> <span class="token string">&#39;innerText&#39;</span> <span class="token operator">|</span> Component
  <span class="token comment">// \u9ED8\u8BA4\u503C</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token comment">// \u6807\u7B7E\u6587\u672C</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u5C5E\u6027</span>
  prop<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u7528\u4E8E\u6805\u680F\u7ED3\u6784</span>
  span<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// element\u7EC4\u4EF6 slot\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A</span>
  slot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u5F53\u524D\u7EC4\u4EF6\u7684slot -&gt; \u9488\u5BF9 input \u7EC4\u4EF6\u91CD\u65B0\u8BBE\u8BA1</span>
  itemSlot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u6821\u9A8C\u89C4\u5219</span>
  rules<span class="token operator">?</span><span class="token operator">:</span> RuleItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u989D\u5916\u7ED1\u5B9A\u5230item\u4E0A\u7684\u5C5E\u6027</span>
  attrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token comment">// \u5B50\u7EC4\u4EF6</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>FormSchema<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// item\u4E0A\u7684\u4E8B\u4EF6\u7ED1\u5B9A</span>
  events<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token comment">// \u989D\u5916\u7684class</span>
  <span class="token class-name"><span class="token keyword">class</span></span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u989D\u5916\u7684style\u5C5E\u6027</span>
  style<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  <span class="token comment">// \u4E0A\u4F20\u7EC4\u4EF6</span>
  upload<span class="token operator">?</span><span class="token operator">:</span> UploadComponent
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u4F20\u7EC4\u4EF6\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">UploadComponent</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0A\u4F20\u94FE\u63A5</span>
  action<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u8BF7\u6C42\u5934</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> object
  <span class="token comment">// \u8BF7\u6C42\u65B9\u5F0F</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;put&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;patch&#39;</span>
  <span class="token comment">// \u662F\u5426\u591A\u6587\u4EF6</span>
  multiple<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u6570\u636E</span>
  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token comment">// \u6587\u4EF6\u540D</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  withCredentials<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  showFileList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u62D6\u62FD\u529F\u80FD\u662F\u5426\u5F00\u6237</span>
  drag<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B</span>
  accept<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u6587\u4EF6\u5217\u8868</span>
  fileList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  listType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;picture&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;picture-card&#39;</span>
  autoUpload<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u9650\u5236\u6587\u4EF6\u6570\u91CF</span>
  limit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;icon&#39;</span>
  btnType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">class</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  onChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span> fileList<span class="token operator">:</span> UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onRemove<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span> fileList<span class="token operator">:</span> UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onSuccess<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>response<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> file<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span> fileList<span class="token operator">:</span> UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onError<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> file<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span> fileList<span class="token operator">:</span> UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onProgress<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    evt<span class="token operator">:</span> UploadProgressEvent<span class="token punctuation">,</span>
    error<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    file<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span>
    fileList<span class="token operator">:</span> UploadFile<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  onPreview<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> UploadFile<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  beforeUpload<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>file<span class="token operator">:</span> UploadRawFile<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Awaitable<span class="token operator">&lt;</span><span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> File <span class="token operator">|</span> Blob<span class="token operator">&gt;</span>
  beforeRemove<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>uploadFile<span class="token operator">:</span> UploadFile<span class="token punctuation">,</span> uploadFiles<span class="token operator">:</span> UploadFiles<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Awaitable<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>
  httpRequest<span class="token operator">?</span><span class="token operator">:</span> UploadRequestHandler
  onExceed<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>files<span class="token operator">:</span> File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> uploadFiles<span class="token operator">:</span> UploadFiles<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9),y=n("\u5176\u4ED6\u5C5E\u6027\u4E0E"),m={href:"https://element-plus.gitee.io/zh-CN/component/upload#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},d=n("element-plus\u5B98\u7F51"),b=n("\u4E00\u81F4\u3002"),q=a(`<h2 id="schema\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#schema\u5199\u6CD5" aria-hidden="true">#</a> Schema\u5199\u6CD5</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-form</span> <span class="token attr-name">:schemas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formBasicSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload1-trigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload2-trigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u4E0A\u4F20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload2-tip</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-upload__tip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>jpg/png files with a size less than 500kb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#haha</span><span class="token punctuation">&gt;</span></span> \u5BF9\u5E94append <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#haha1</span><span class="token punctuation">&gt;</span></span> prefix <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>basic-form</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-form</span> <span class="token attr-name">:schemas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formBasicSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">inline</span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload1-trigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload2-trigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u4E0A\u4F20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#upload2-tip</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-upload__tip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>jpg/png files with a size less than 500kb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#haha</span><span class="token punctuation">&gt;</span></span> \u5BF9\u5E94append <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#haha1</span><span class="token punctuation">&gt;</span></span> prefix <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>basic-form</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5176\u5BF9\u5E94\u7684schema\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">formBasicSchema</span><span class="token operator">:</span> FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u7528\u6237\u540D&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">itemSlot</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">append</span><span class="token operator">:</span> <span class="token string">&#39;haha&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&#39;haha1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u5BC6\u7801\u57286-16\u4F4D&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;role&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u89D2\u8272&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u89D2\u8272&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u89D2\u8272&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7BA1\u7406\u5458&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;option&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6D4B\u8BD5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;checkbox-group&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7231\u597D&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8DB3\u7403&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7BEE\u7403&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6E38\u6CF3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;radio-group&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u672A\u77E5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u56FE\u7247&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// slotId</span>
    <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;upload1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u6863&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;upload2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u6863&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">btnType</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u70B9\u51FB\u4E0A\u4F20&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;upload&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u56FE\u6807\u4E0A\u4F20&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Demo<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7EC4\u4EF6\u5F15\u7528&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;innerText&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7EAF\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C\u5185\u5BB9\u5199\u5728\u8FD9\u91CC&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u8868\u5355dom\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355dom\u5199\u6CD5" aria-hidden="true">#</a> \u8868\u5355DOM\u5199\u6CD5</h2><p>\u8FD9\u79CD\u5199\u6CD5\uFF0C\u5373\u662F\u4F7F\u7528element-plus\u5B98\u65B9\u7EC4\u4EF6\u8FDB\u884C\u4E66\u5199\uFF0C\u65E0schema\u7ED3\u6784\uFF0C\u9700\u8981\u81EA\u5DF1\u5B8C\u6210\u7ED3\u6784\u7684\u8F93\u51FA\u3002</p><h2 id="\u5206\u6B65\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u5206\u6B65\u8868\u5355" aria-hidden="true">#</a> \u5206\u6B65\u8868\u5355</h2><p><img src="`+k+`" alt="image-20220516202112350"></p><p>\u76F8\u5BF9\u590D\u6742\u7684\u5E94\u7528\u573A\u666F\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4 overflow-y-auto custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex justify-between items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5206\u6B65\u8868\u5355<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u6B65\u9AA4\u6761 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-steps</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align-center</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7B2C\u4E00\u6B65<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u586B\u5199\u8F6C\u8D26\u4FE1\u606F<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7B2C\u4E8C\u6B65<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7B2C\u4E09\u6B65<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5B8C\u6210<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-steps</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-form</span>
              <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active == 1<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formOne<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:schemas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.one<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labelWidth<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labelPosition<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ validate, model }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSubmitOne(validate, model)<span class="token punctuation">&quot;</span></span>
                  <span class="token punctuation">&gt;</span></span>\u4E0B\u4E00\u6B65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
                <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>basic-form</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span>
              <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active == 2<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labelWidth<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labelPosition<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in form.one<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item[<span class="token punctuation">&#39;</span>value<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u652F\u4ED8\u5BC6\u7801<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.two.value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8F93\u5165\u652F\u4ED8\u5BC6\u7801<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClickPrev<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0A\u4E00\u6B65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-main</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active === 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-result</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8F6C\u8D26\u6210\u529F<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#extra</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u518D\u8F6C\u4E00\u7B14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-result</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-main</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;StepForm&#39;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> labelPosition <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;right&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> labelWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;120px&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">one</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u4ED8\u6B3E\u8D26\u6237&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;payment&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6536\u6B3E\u8D26\u6237&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;receive-payment&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u4ED8\u6B3E\u8D26\u6237\u53F7&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u6536\u6B3E\u8D26\u6237&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6536\u6B3E\u4EBA\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;payee&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u6536\u6B3E\u4EBA\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8F6C\u8D26\u91D1\u989D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;amount&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8F6C\u8D26\u91D1\u989D&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">two</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u652F\u4ED8\u5BC6\u7801&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;payment&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;\u8F93\u5165\u652F\u4ED8\u5BC6\u7801&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">clearable</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> models <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">handleClickPrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>active<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
        active<span class="token punctuation">.</span>value <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmitOne</span><span class="token punctuation">(</span><span class="token parameter">formEl<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;formEl:&#39;</span><span class="token punctuation">,</span> formEl<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;model:&#39;</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span>
        <span class="token function">formEl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token keyword">return</span>
            form<span class="token punctuation">.</span>one <span class="token operator">=</span> form<span class="token punctuation">.</span>one<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              item<span class="token punctuation">.</span>value <span class="token operator">=</span> model<span class="token punctuation">[</span>item<span class="token punctuation">.</span>prop<span class="token punctuation">]</span>
              <span class="token keyword">return</span> item
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            active<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;step one verification failed:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">forms</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;forms:&#39;</span><span class="token punctuation">,</span> forms<span class="token punctuation">)</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u63A7\u5236\u53F0\u67E5\u770B\u6253\u5370\u6570\u636E&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          active<span class="token punctuation">.</span>value<span class="token operator">++</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">,</span>
        active<span class="token punctuation">,</span>
        labelPosition<span class="token punctuation">,</span>
        labelWidth<span class="token punctuation">,</span>
        form<span class="token punctuation">,</span>
        models<span class="token punctuation">,</span>
        handleClickPrev<span class="token punctuation">,</span>
        handleSubmitOne<span class="token punctuation">,</span>
        handleSubmit
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,10);function v(f,h){const p=o("ExternalLinkIcon");return e(),l(r,null,[g,s("p",null,[y,s("a",m,[d,c(p)]),b]),q],64)}var x=t(i,[["render",v],["__file","form.html.vue"]]);export{x as default};
