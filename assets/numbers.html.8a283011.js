import{_ as n,e as s}from"./app.84bbd91c.js";var a="/vue3-toimc-admin-doc/assets/count-to.363928f3.png";const t={},p=s('<h1 id="\u52A8\u6001\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6570\u5B57" aria-hidden="true">#</a> \u52A8\u6001\u6570\u5B57</h1><p>\u6570\u5B57\u52A8\u753B\u7EC4\u4EF6</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+a+`" alt="count-to"></p><h2 id="\u57FA\u7840\u6848\u4F8B\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6848\u4F8B\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u6848\u4F8B\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u52A8\u6001\u6570\u5B57\u589E\u957F&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>basic<span class="token operator">-</span>form <span class="token operator">:</span>schemas<span class="token operator">=</span><span class="token string">&quot;formSchema&quot;</span> inline label<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">&quot;80px&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">change</span></span><span class="token operator">=</span><span class="token string">&quot;handleChange&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>template #action<span class="token operator">=</span><span class="token string">&quot;{ form: formRef }&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;() =&gt; handleFormReset(formRef)&quot;</span><span class="token operator">&gt;</span>\u91CD\u7F6E\u8868\u683C<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>basic<span class="token operator">-</span>form<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u8BA1\u65F6\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> counter <span class="token punctuation">}</span><span class="token punctuation">}</span>s<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-center py-6 break-words&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>d<span class="token operator">-</span>numbers
          ref<span class="token operator">=</span><span class="token string">&quot;ctrl&quot;</span>
          <span class="token operator">:</span>end<span class="token operator">=</span><span class="token string">&quot;form.end&quot;</span>
          <span class="token operator">:</span>begin<span class="token operator">=</span><span class="token string">&quot;form.begin&quot;</span>
          <span class="token operator">:</span>dot<span class="token operator">=</span><span class="token string">&quot;form.dot&quot;</span>
          <span class="token operator">:</span>duration<span class="token operator">=</span><span class="token string">&quot;form.duration&quot;</span>
          <span class="token operator">:</span>auto<span class="token operator">=</span><span class="token string">&quot;form.auto&quot;</span>
          <span class="token operator">:</span>size<span class="token operator">=</span><span class="token string">&quot;48&quot;</span>
          <span class="token operator">:</span><span class="token keyword">break</span><span class="token operator">-</span>all<span class="token operator">=</span><span class="token string">&quot;form.breakAll&quot;</span>
          <span class="token operator">:</span>classes<span class="token operator">=</span><span class="token string">&quot;&#39;d-text&#39;&quot;</span>
          split<span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>template #prefix<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> form<span class="token punctuation">.</span>prefix <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>template #suffix<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> form<span class="token punctuation">.</span>suffix <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>d<span class="token operator">-</span>numbers<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleStart&quot;</span><span class="token operator">&gt;</span>\u5F00\u59CB<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handlePause&quot;</span><span class="token operator">&gt;</span>\u6682\u505C<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;info&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleResume&quot;</span><span class="token operator">&gt;</span>\u6062\u590D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleReset&quot;</span><span class="token operator">&gt;</span>\u91CD\u7F6E<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;warning&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleTerminate&quot;</span><span class="token operator">&gt;</span>\u7EC8\u6B62<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form/types/types&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ctrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> ctrl1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

      <span class="token keyword">let</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        begin<span class="token operator">:</span> <span class="token number">1.12312</span><span class="token punctuation">,</span>
        end<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        duration<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        dot<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        auto<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        breakAll<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        suffix<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIntervalFn</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">/* your function */</span>
          counter<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value <span class="token operator">&gt;=</span> form<span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>

      <span class="token keyword">const</span> formSchema<span class="token operator">:</span> FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>begin<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5F00\u59CB\u503C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;begin&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>end<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u505C\u6B62\u503C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;end&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>duration<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u6301\u7EED\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;duration&#39;</span><span class="token punctuation">,</span>
          attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
            step<span class="token operator">:</span> <span class="token number">1000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>dot<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u4F4D\u6570&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;dot&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>prefix<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u524D\u7F00&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;prefix&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>suffix<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u540E\u7F00&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;suffix&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>breakAll<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u662F\u5426\u6362\u884C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;breakAll&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>auto<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u81EA\u52A8\u6267\u884C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span> <span class="token keyword">as</span> FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">handleStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// count-to\u6848\u4F8B</span>
        ctrl1<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handlePause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleResume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// count-to\u6848\u4F8B</span>
        ctrl1<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleFormReset</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        form<span class="token operator">?.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        form<span class="token punctuation">.</span>dot <span class="token operator">=</span> val<span class="token punctuation">.</span>dot
        form<span class="token punctuation">.</span>prefix <span class="token operator">=</span> val<span class="token punctuation">.</span>prefix
        form<span class="token punctuation">.</span>suffix <span class="token operator">=</span> val<span class="token punctuation">.</span>suffix
        form<span class="token punctuation">.</span>duration <span class="token operator">=</span> val<span class="token punctuation">.</span>duration
        form<span class="token punctuation">.</span>begin <span class="token operator">=</span> val<span class="token punctuation">.</span>begin
        form<span class="token punctuation">.</span>end <span class="token operator">=</span> val<span class="token punctuation">.</span>end
        form<span class="token punctuation">.</span>auto <span class="token operator">=</span> val<span class="token punctuation">.</span>auto
        form<span class="token punctuation">.</span>breakAll <span class="token operator">=</span> val<span class="token punctuation">.</span>breakAll
        <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        form<span class="token punctuation">.</span>auto <span class="token operator">&amp;&amp;</span> <span class="token function">handleStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        ctrl<span class="token punctuation">,</span>
        ctrl1<span class="token punctuation">,</span>
        formSchema<span class="token punctuation">,</span>
        form<span class="token punctuation">,</span>
        handleStart<span class="token punctuation">,</span>
        handlePause<span class="token punctuation">,</span>
        handleResume<span class="token punctuation">,</span>
        handleReset<span class="token punctuation">,</span>
        handleTerminate<span class="token punctuation">,</span>
        handleChange<span class="token punctuation">,</span>
        handleFormReset<span class="token punctuation">,</span>
        counter
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token punctuation">.</span>d<span class="token operator">-</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    background<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #3493c3<span class="token punctuation">,</span> #688c3c<span class="token punctuation">,</span> #df6b27<span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>clip<span class="token operator">:</span> text<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>text<span class="token operator">-</span>fill<span class="token operator">-</span>color<span class="token operator">:</span> transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre></div><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">begin</td><td style="text-align:left;">\u5F00\u59CB\u503C</td><td style="text-align:left;">number\uFF5Cstring</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">end</td><td style="text-align:left;">\u505C\u6B62\u503C</td><td style="text-align:left;">number\uFF5Cstring</td><td style="text-align:left;">\u5FC5\u4F20</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">setupDuration</td><td style="text-align:left;">\u8BBE\u7F6E\u6301\u7EED\u65F6\u95F4</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:left;">dot</td><td style="text-align:left;">\u4FDD\u7559\u5C0F\u6570\u70B9\u4F4D\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">classes</td><td style="text-align:left;">\u7C7B\u540D</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">d-numbers</td></tr><tr><td style="text-align:left;">auto</td><td style="text-align:left;">\u81EA\u52A8\u6267\u884C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">breakAll</td><td style="text-align:left;">\u662F\u5426\u6362\u884C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">\u5B57\u4F53\u5927\u5C0F</td><td style="text-align:left;">number</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">\u6837\u5F0F</td><td style="text-align:left;">object</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">split</td><td style="text-align:left;">\u5206\u9694\u7B26</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;">\u683C\u5F0F\u5316</td><td style="text-align:left;">function</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">null</td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">\u524D\u7F00</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">\u540E\u7F00</td></tr></tbody></table><h2 id="usetransition\u6848\u4F8B\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#usetransition\u6848\u4F8B\u7528\u6CD5" aria-hidden="true">#</a> useTransition\u6848\u4F8B\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;p-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u52A8\u6001\u6570\u5B57\u589E\u957F&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>basic<span class="token operator">-</span>form <span class="token operator">:</span>schemas<span class="token operator">=</span><span class="token string">&quot;formSchema&quot;</span> inline label<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">&quot;80px&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">change</span></span><span class="token operator">=</span><span class="token string">&quot;handleChange&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>template #action<span class="token operator">=</span><span class="token string">&quot;{ form: formRef }&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;() =&gt; handleFormReset(formRef)&quot;</span><span class="token operator">&gt;</span>\u91CD\u7F6E\u8868\u683C<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>basic<span class="token operator">-</span>form<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u8BA1\u65F6\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> counter <span class="token punctuation">}</span><span class="token punctuation">}</span>s<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;pt-3&quot;</span><span class="token operator">&gt;</span>\u4F7F\u7528useTransition\u7684\u6848\u4F8B\uFF1A<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-left py-6 text-4xl&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>count<span class="token operator">-</span>to
          ref<span class="token operator">=</span><span class="token string">&quot;ctrl1&quot;</span>
          <span class="token operator">:</span>end<span class="token operator">-</span>val<span class="token operator">=</span><span class="token string">&quot;form.end&quot;</span>
          <span class="token operator">:</span>start<span class="token operator">-</span>val<span class="token operator">=</span><span class="token string">&quot;form.begin&quot;</span>
          <span class="token operator">:</span>decimals<span class="token operator">=</span><span class="token string">&quot;form.dot&quot;</span>
          <span class="token operator">:</span>duration<span class="token operator">=</span><span class="token string">&quot;form.duration&quot;</span>
          <span class="token operator">:</span>autoplay<span class="token operator">=</span><span class="token string">&quot;form.auto&quot;</span>
          <span class="token operator">:</span>classes<span class="token operator">=</span><span class="token string">&quot;&#39;d-text&#39;&quot;</span>
          separator<span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
          <span class="token operator">:</span>prefix<span class="token operator">=</span><span class="token string">&quot;form.prefix&quot;</span>
          <span class="token operator">:</span>suffix<span class="token operator">=</span><span class="token string">&quot;form.suffix&quot;</span>
        <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>count<span class="token operator">-</span>to<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleStart&quot;</span><span class="token operator">&gt;</span>\u5F00\u59CB<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handlePause&quot;</span><span class="token operator">&gt;</span>\u6682\u505C<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;info&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleResume&quot;</span><span class="token operator">&gt;</span>\u6062\u590D<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;danger&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleReset&quot;</span><span class="token operator">&gt;</span>\u91CD\u7F6E<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>button type<span class="token operator">=</span><span class="token string">&quot;warning&quot;</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">&quot;handleTerminate&quot;</span><span class="token operator">&gt;</span>\u7EC8\u6B62<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>card<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form/types/types&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ctrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> ctrl1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

      <span class="token keyword">let</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        begin<span class="token operator">:</span> <span class="token number">1.12312</span><span class="token punctuation">,</span>
        end<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        duration<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        dot<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        auto<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        breakAll<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        suffix<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIntervalFn</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">/* your function */</span>
          counter<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value <span class="token operator">&gt;=</span> form<span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>

      <span class="token keyword">const</span> formSchema<span class="token operator">:</span> FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>begin<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5F00\u59CB\u503C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;begin&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>end<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u505C\u6B62\u503C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;end&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>duration<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u6301\u7EED\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;duration&#39;</span><span class="token punctuation">,</span>
          attrs<span class="token operator">:</span> <span class="token punctuation">{</span>
            step<span class="token operator">:</span> <span class="token number">1000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>dot<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u4F4D\u6570&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;dot&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>prefix<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u524D\u7F00&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;prefix&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>suffix<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u540E\u7F00&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;suffix&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>breakAll<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u662F\u5426\u6362\u884C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;breakAll&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          component<span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> form<span class="token punctuation">.</span>auto<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">&#39;\u81EA\u52A8\u6267\u884C&#39;</span><span class="token punctuation">,</span>
          prop<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span> <span class="token keyword">as</span> FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">handleStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// count-to\u6848\u4F8B</span>
        ctrl1<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handlePause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleResume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// count-to\u6848\u4F8B</span>
        ctrl1<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">handleTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        counter<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        ctrl<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleFormReset</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        form<span class="token operator">?.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        form<span class="token punctuation">.</span>dot <span class="token operator">=</span> val<span class="token punctuation">.</span>dot
        form<span class="token punctuation">.</span>prefix <span class="token operator">=</span> val<span class="token punctuation">.</span>prefix
        form<span class="token punctuation">.</span>suffix <span class="token operator">=</span> val<span class="token punctuation">.</span>suffix
        form<span class="token punctuation">.</span>duration <span class="token operator">=</span> val<span class="token punctuation">.</span>duration
        form<span class="token punctuation">.</span>begin <span class="token operator">=</span> val<span class="token punctuation">.</span>begin
        form<span class="token punctuation">.</span>end <span class="token operator">=</span> val<span class="token punctuation">.</span>end
        form<span class="token punctuation">.</span>auto <span class="token operator">=</span> val<span class="token punctuation">.</span>auto
        form<span class="token punctuation">.</span>breakAll <span class="token operator">=</span> val<span class="token punctuation">.</span>breakAll
        <span class="token function">handleReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        form<span class="token punctuation">.</span>auto <span class="token operator">&amp;&amp;</span> <span class="token function">handleStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        ctrl<span class="token punctuation">,</span>
        ctrl1<span class="token punctuation">,</span>
        formSchema<span class="token punctuation">,</span>
        form<span class="token punctuation">,</span>
        handleStart<span class="token punctuation">,</span>
        handlePause<span class="token punctuation">,</span>
        handleResume<span class="token punctuation">,</span>
        handleReset<span class="token punctuation">,</span>
        handleTerminate<span class="token punctuation">,</span>
        handleChange<span class="token punctuation">,</span>
        handleFormReset<span class="token punctuation">,</span>
        counter
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token punctuation">.</span>d<span class="token operator">-</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    background<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #3493c3<span class="token punctuation">,</span> #688c3c<span class="token punctuation">,</span> #df6b27<span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>clip<span class="token operator">:</span> text<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>text<span class="token operator">-</span>fill<span class="token operator">-</span>color<span class="token operator">:</span> transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre></div><h3 id="\u5C5E\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027-1" aria-hidden="true">#</a> \u5C5E\u6027</h3><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">startVal</td><td style="text-align:left;">\u8D77\u59CB\u503C</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">endVal</td><td style="text-align:left;">\u7ED3\u675F\u503C</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">2021</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">1500</td></tr><tr><td style="text-align:left;">autoplay</td><td style="text-align:left;">\u81EA\u52A8\u6267\u884C</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">decimals</td><td style="text-align:left;">\u4FDD\u7559\u5C0F\u6570\u70B9\u4F4D\u6570</td><td style="text-align:left;">number</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">\u524D\u7F00</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">\u540E\u7F00</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">separator</td><td style="text-align:left;">\u5206\u9694\u7B26</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">,</td></tr><tr><td style="text-align:left;">decimal</td><td style="text-align:left;">\u5C0F\u6570\u70B9\u5206\u9694\u7B26</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">.</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">\u5B57\u4F53\u989C\u8272</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">\u2014</td></tr><tr><td style="text-align:left;">useEasing</td><td style="text-align:left;">\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;">boolean</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">\u52A8\u753B\u6548\u679C</td><td style="text-align:left;">string</td><td style="text-align:left;">\u2014</td><td style="text-align:left;">linear</td></tr></tbody></table><h3 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">onStarted</td><td style="text-align:left;">\u5F00\u59CB\u6267\u884C\u52A8\u753B</td><td style="text-align:left;">()=&gt;void</td></tr><tr><td style="text-align:left;">onFinished</td><td style="text-align:left;">\u505C\u6B62\u6267\u884C\u52A8\u753B</td><td style="text-align:left;">()=&gt;void</td></tr></tbody></table>`,16);function o(e,l){return p}var r=n(t,[["render",o],["__file","numbers.html.vue"]]);export{r as default};
