import{_ as n,e as a}from"./app.f62d93fe.js";var s="/vue3-toimc-admin-doc/assets/build-analyse.c25b78e6.png";const e={},t=a(`<h1 id="\u6784\u5EFA\u4E0E\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u4E0E\u90E8\u7F72" aria-hidden="true">#</a> \u6784\u5EFA\u4E0E\u90E8\u7F72</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7531\u4E8E\u662F\u5C55\u793A\u9879\u76EE\uFF0C\u6240\u4EE5\u6253\u5305\u540E\u76F8\u5BF9\u8F83\u5927\uFF0C\u9879\u76EE\u4E2D\u4E0D\u9700\u8981\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5220\u9664\u5BF9\u5E94\u7684\u6587\u4EF6\u6216\u8005\u8DEF\u7531\uFF0C\u4E0D\u5F15\u7528\u5373\u53EF\uFF0C<strong>\u6CA1\u6709\u5F15\u7528\u5C31\u4E0D\u4F1A\u6253\u5305</strong>\u3002</p></div><h2 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h2><p>\u9879\u76EE\u5F00\u53D1\u5B8C\u6210\u4E4B\u540E\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u6784\u5EFA\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># with yarn</span>
<span class="token function">yarn</span> build

<span class="token comment"># with pnpm</span>
<span class="token function">pnpm</span> build
</code></pre></div><p>\u6784\u5EFA\u6253\u5305\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 <code>dist</code> \u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u5C31\u662F\u6784\u5EFA\u6253\u5305\u597D\u7684\u6587\u4EF6\u3002</p><h3 id="\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8" aria-hidden="true">#</a> \u9884\u89C8</h3><p>\u53D1\u5E03\u4E4B\u524D\u53EF\u4EE5\u5728\u672C\u5730\u8FDB\u884C\u9884\u89C8\uFF0C\u6709\u591A\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u4E24\u79CD\u3002</p><p><strong>\u4E0D\u80FD</strong>\u76F4\u63A5\u6253\u5F00\u6784\u5EFA\u540E\u7684 <strong>html</strong> \u6587\u4EF6</p><ul><li>\u4F7F\u7528\u9879\u76EE\u81EA\u5B9A\u4E49\u547D\u4EE4\u8FDB\u884C\u9884\u89C8\uFF08\u63A8\u8350\uFF09</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5148\u6253\u5305\u5728\u8FDB\u884C\u9884\u89C8</span>
<span class="token function">yarn</span> preview

<span class="token comment"># or use &quot;pnpm preview&quot;</span>

<span class="token comment"># \u76F4\u63A5\u9884\u89C8\u672C\u5730 dist \u6587\u4EF6\u76EE\u5F55</span>
<span class="token function">yarn</span> preview:dist

<span class="token comment"># or use &quot;pnpm preview:dist&quot;</span>
</code></pre></div><ul><li>\u4F7F\u7528 <code>live-server</code> \u8FDB\u884C\u9884\u89C8</li></ul><p>\u5C06<code>.env.production</code>\u4E2D\uFF0C\u8BBE\u7F6E<strong>public path</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># public path</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre></div><p>\u4F7F\u7528 <code>yarn</code> \u6216\u8005 <code>pnpm</code> \u8FDB\u884C\u6253\u5305</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> build

<span class="token comment"># or use pnpm &quot;pnpm build&quot;</span>
</code></pre></div><p>\u5B89\u88C5 <strong>live-server</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i -g live-server
</code></pre></div><p>\u8FDB\u884C\u672C\u5730\u9884\u89C8</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165build\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> dist
<span class="token comment"># \u542F\u52A8\u670D\u52A1</span>
live-server
<span class="token comment"># \u6216\u8005\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3\u542F\u52A8</span>
live-server --port<span class="token operator">=</span><span class="token number">9000</span>
</code></pre></div><h3 id="\u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668" aria-hidden="true">#</a> \u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668</h3><p>\u5728 <code>.env.production</code> \u5185</p><p>\u8BBE\u7F6E <code>VITE_LEGACY=true</code> \u5373\u53EF\u6253\u5305\u51FA\u517C\u5BB9\u65E7\u7248\u6D4F\u89C8\u5668\u7684\u4EE3\u7801</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code># Is it compatible <span class="token keyword">with</span> older browsers
<span class="token constant">VITE_LEGACY</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><h3 id="\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF" aria-hidden="true">#</a> \u5206\u6790\u6784\u5EFA\u6587\u4EF6\u4F53\u79EF</h3><p>\u5982\u679C\u4F60\u7684\u6784\u5EFA\u6587\u4EF6\u5F88\u5927\uFF0C\u8FDB\u884C\u901A\u8FC7\u8FD0\u884C <code>yarn report</code> \u547D\u4EE4\uFF0C\u8FDB\u884C\u4EE3\u7801<strong>\u4F53\u79EF\u5206\u6790</strong>\uFF0C\u4ECE\u800C\u4F18\u5316\u4F60\u7684\u4EE3\u7801\u3002</p><p>\u8FD0\u884C\u4E4B\u540E\uFF0C\u5728\u81EA\u52A8\u6253\u5F00\u7684\u9875\u9762\u53EF\u4EE5\u770B\u5230\u5177\u4F53\u7684\u4F53\u79EF\u5206\u5E03\uFF0C\u4EE5\u5206\u6790\u54EA\u4E9B\u4F9D\u8D56\u6709\u95EE\u9898\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5DE6\u4E0A\u89D2\u53EF\u4EE5\u5207\u6362\u663E\u793A <strong>Gzip</strong> \u6216\u8005 <strong>Brotli</strong>\u3002</p></div><p><img src="`+s+`" alt="build-analyse"></p><h2 id="\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29" aria-hidden="true">#</a> \u538B\u7F29</h2><h3 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542F gzip \u538B\u7F29</h3><p>\u5F00\u542F <code>gzip</code>\uFF0C\u7ED3\u5408 <code>nginx</code> \u5C06\u5927\u5927\u52A0\u5FEB\u9875\u9762\u8BBF\u95EE\u901F\u5EA6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Whether to enable gzip or brotli compression</span>
<span class="token comment"># Optional: gzip | brotli | none</span>
<span class="token comment"># If you need multiple forms, you can use \`,\` to separate</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;gzip&#39;</span>
</code></pre></div><h3 id="\u5F00\u542F-brotli-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-brotli-\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542F brotli \u538B\u7F29</h3><p><code>brotli</code> \u662F\u6BD4 <code>gzip</code> \u538B\u7F29\u7387\u66F4\u9AD8\u7684\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u4E0E <code>gzip</code> \u5171\u5B58<strong>\u4E0D\u4F1A\u51B2\u7A81</strong>\uFF0C\u9700\u8981 <code>nginx</code> \u5B89\u88C5\u6307\u5B9A\u6A21\u5757\u5E76\u5F00\u542F\u5373\u53EF\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Whether to enable gzip or brotli compression</span>
<span class="token comment"># Optional: gzip | brotli | none</span>
<span class="token comment"># If you need multiple forms, you can use \`,\` to separate</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;brotli&#39;</span>
</code></pre></div><h3 id="\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u5F00\u542F-gzip-\u4E0E-brotli" aria-hidden="true">#</a> \u540C\u65F6\u5F00\u542F gzip \u4E0E brotli</h3><p>\u4E8C\u8005\u540C\u65F6\u5F00\u542F\uFF0C\u5373\u53EF\u5728\u6253\u5305\u7684\u540C\u65F6\u751F\u6210 <code>.gz</code> \u548C <code>.br</code> \u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Whether to enable gzip or brotli compression</span>
<span class="token comment"># Optional: gzip | brotli | none</span>
<span class="token comment"># If you need multiple forms, you can use \`,\` to separate</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;brotli,gzip&#39;</span>
</code></pre></div><h3 id="gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gzip-\u4E0E-brotli-\u5728-nginx-\u5185\u7684\u914D\u7F6E" aria-hidden="true">#</a> gzip \u4E0E brotli \u5728 nginx \u5185\u7684\u914D\u7F6E</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  <span class="token comment"># \u5F00\u542Fgzip</span>
  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  <span class="token comment"># \u5F00\u542Fgzip_static</span>
  <span class="token comment"># gzip_static \u5F00\u542F\u540E\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u6A21\u5757, \u5177\u4F53\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2</span>
  <span class="token comment"># \u53EA\u6709\u8FD9\u4E2A\u5F00\u542F\uFF0Cvue\u6587\u4EF6\u6253\u5305\u7684.gz\u6587\u4EF6\u624D\u4F1A\u6709\u6548\u679C\uFF0C\u5426\u5219\u4E0D\u9700\u8981\u5F00\u542Fgzip\u8FDB\u884C\u6253\u5305</span>
  gzip_static on<span class="token punctuation">;</span>
  gzip_proxied any<span class="token punctuation">;</span>
  gzip_min_length 1k<span class="token punctuation">;</span>
  gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>
  <span class="token comment">#\u5982\u679Cnginx\u4E2D\u4F7F\u7528\u4E86\u591A\u5C42\u4EE3\u7406 \u5FC5\u987B\u8BBE\u7F6E\u8FD9\u4E2A\u624D\u53EF\u4EE5\u5F00\u542Fgzip\u3002</span>
  gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
  gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>
  gzip_vary off<span class="token punctuation">;</span>
  gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>

  <span class="token comment"># \u5F00\u542F brotli\u538B\u7F29</span>
  <span class="token comment"># \u9700\u8981\u5B89\u88C5\u5BF9\u5E94\u7684nginx\u6A21\u5757,\u5177\u4F53\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2</span>
  <span class="token comment"># \u53EF\u4EE5\u4E0Egzip\u5171\u5B58\u4E0D\u4F1A\u51B2\u7A81</span>
  brotli on<span class="token punctuation">;</span>
  brotli_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
  brotli_buffers <span class="token number">16</span> 8k<span class="token punctuation">;</span>
  brotli_min_length <span class="token number">20</span><span class="token punctuation">;</span>
  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="\u901A\u8FC7nginx\u7B80\u5355\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7nginx\u7B80\u5355\u53D1\u5E03" aria-hidden="true">#</a> \u901A\u8FC7nginx\u7B80\u5355\u53D1\u5E03</h3><p>\u7B80\u5355\u7684\u90E8\u7F72\u53EA\u9700\u8981\u5C06\u6700\u7EC8\u751F\u6210\u7684<strong>\u9759\u6001\u6587\u4EF6</strong>\uFF0C<code>dist</code> \u6587\u4EF6\u5939\u7684\u9759\u6001\u6587\u4EF6\u53D1\u5E03\u5230\u4F60\u7684\u670D\u52A1\u5668\u5373\u53EF\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5176\u4E2D\u7684 <code>index.html</code> \u901A\u5E38\u4F1A\u662F\u4F60\u540E\u53F0\u670D\u52A1\u7684\u5165\u53E3\u9875\u9762\uFF0C\u8FD9\u91CC\u9700\u8981\u683C\u5916\u6CE8\u610F\u9759\u6001\u6587\u4EF6 <code>js</code> \u548C <code>css</code> \u7684<strong>\u8DEF\u5F84</strong>\u3002</p><p>\u4F8B\u5982\u4F7F\u7528 <code>nginx</code> \u90E8\u7F72\uFF0C\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3 <code>/usr/share/nginx/html</code> .</p><div class="language-bash ext-sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  <span class="token comment"># \u8FD9\u91CC\u662Fvue\u6253\u5305\u6587\u4EF6dist\u5185\u7684\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84</span>
  root /usr/share/nginx/html<span class="token punctuation">;</span>
  index index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u90E8\u7F72\u65F6\u53EF\u80FD\u4F1A\u53D1\u73B0\u8D44\u6E90\u8DEF\u5F84\u4E0D\u5BF9\uFF0C\u53EA\u9700\u8981\u4FEE\u6539 <code>.env.production</code> \u6587\u4EF6\u5373\u53EF\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6839\u636E\u81EA\u5DF1\u8DEF\u5F84\u6765\u914D\u7F6E\u66F4\u6539</span>
<span class="token comment"># \u6CE8\u610F\u9700\u8981\u4EE5 / \u5F00\u5934\u548C\u7ED3\u5C3E</span>
<span class="token comment"># public path</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre></div><h3 id="\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408" aria-hidden="true">#</a> \u524D\u7AEF\u8DEF\u7531\u4E0E\u670D\u52A1\u7AEF\u7684\u7ED3\u5408</h3><p>\u9879\u76EE\u524D\u7AEF\u8DEF\u7531\u4F7F\u7528\u7684\u662F <code>vue-router</code>\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u9009\u62E9\u4E24\u79CD\u65B9\u5F0F\uFF1A<code>history</code> \u548C <code>hash</code> .</p><p><code>hash</code> \u9ED8\u8BA4\u4F1A\u5728 <code>url</code> \u540E\u9762\u62FC\u63A5<code>#</code>.</p><p><code>history</code> \u5219\u4E0D\u4F1A\uFF0C\u4E0D\u8FC7 <code>history</code> \u9700\u8981\u670D\u52A1\u5668\u914D\u5408.</p><p>\u53EF\u5728 <code>src/router/index.ts</code> \u5185\u8FDB\u884C <code>mode</code> \u4FEE\u6539\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token comment">// or</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#history-\u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E" aria-hidden="true">#</a> <code>history</code> \u8DEF\u7531\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u914D\u7F6E</h3><p>\u4FEE\u6539<code>.env</code>\u6587\u4EF6\uFF0C\u6765\u4FEE\u6539\u8DEF\u7531\u9ED8\u8BA4\u7684\u6A21\u5F0F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code># \u6839\u636E\u81EA\u5DF1\u5E94\u7528\u573A\u666F\u6765\u914D\u7F6E
# Optional: hash | html5
VITE_APP_ROUTE_MODE = &quot;hash&quot;
</code></pre></div><p>\u5F00\u542F <code>history</code> \u6A21\u5F0F\u9700\u8981\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u5426\u5219\u5237\u65B0\u4F1A\u62A5<strong>404</strong>\u3002</p><p>\u8FD9\u91CC\u4EE5 <code>nginx</code> \u914D\u7F6E\u4E3A\u4F8B</p><div class="language-bash ext-sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  root /usr/share/nginx/html<span class="token punctuation">;</span>
   <span class="token comment"># \u7528\u4E8E\u914D\u5408 History \u4F7F\u7528</span>
  try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @router<span class="token punctuation">;</span>
  index index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location @router <span class="token punctuation">{</span>
  rewrite ^.*$ /index.html last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u6216\u8005</span>

location / <span class="token punctuation">{</span>
  <span class="token comment"># \u7528\u4E8E\u914D\u5408 History \u4F7F\u7528</span>
  try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4F7F\u7528nginx\u5904\u7406\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nginx\u5904\u7406\u8DE8\u57DF" aria-hidden="true">#</a> \u4F7F\u7528nginx\u5904\u7406\u8DE8\u57DF</h3><p>\u4F7F\u7528 nginx \u5904\u7406\u9879\u76EE\u90E8\u7F72\u540E\u7684\u8DE8\u57DF\u95EE\u9898</p><ul><li>\u914D\u7F6E\u524D\u7AEF\u9879\u76EE\u63A5\u53E3\u5730\u5740</li></ul><div class="language-text ext-text"><pre class="language-text"><code># \u5728.env.production\u5185\uFF0C\u914D\u7F6E\u63A5\u53E3\u5730\u5740
VITE_GLOB_API_URL=/api
</code></pre></div><ul><li>\u5728 nginx \u914D\u7F6E\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u53F0</li></ul><div class="language-text ext-text"><pre class="language-text"><code>server {
  listen       8080;
  server_name  www.yourdomain.com;
  
  # \u63A5\u53E3\u4EE3\u7406\uFF0C\u7528\u4E8E\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898
  location /api {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		# \u540E\u53F0\u63A5\u53E3\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\uFF0C\u4E5F\u53EF\u4EE5\u662FIP
    proxy_pass http://yourhost.com.or.ip/api;
    proxy_redirect default;
    
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Headers X-Requested-With;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
  }
}
</code></pre></div><h3 id="\u51CF\u5C11\u9879\u76EE\u4F53\u79EF" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C11\u9879\u76EE\u4F53\u79EF" aria-hidden="true">#</a> \u51CF\u5C11\u9879\u76EE\u4F53\u79EF</h3><p>\u601D\u8DEF\u901A\u8FC7CND\u52A0\u901F\uFF1A</p><ul><li><p>\u4F7F\u7528CDN\u52A0\u901F\u4E4B\u540E\uFF0C\u5728<code>index.html</code>\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1B</p></li><li><p>\u4F7F\u7528vite\u6253\u5305\u65F6\uFF0C\u53EF\u4EE5\u6DFB\u52A0<code>optimizeDeps.exclude</code>\u5C5E\u6027\uFF0C\u6765\u5FFD\u7565\u90E8\u5206\u5305\u7684\u5F15\u5165\uFF1B</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
    exclude<span class="token operator">:</span> <span class="token punctuation">[</span>      
    	<span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;react-dom&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul>`,70);function o(p,c){return t}var r=n(e,[["render",o],["__file","deploy.html.vue"]]);export{r as default};
