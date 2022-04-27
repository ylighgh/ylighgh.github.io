import{c as n}from"./app.8ff81d30.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><p>OS:<code>Arch Linux x86_64</code></p><p>Language:<code>C++</code></p><p>Compiler Version:<code>gcc Version 11.2.0 (GCC)</code></p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ul><li><a href="https://www.runoob.com/cplusplus/cpp-basic-input-output.html" target="_blank" rel="noopener noreferrer">Cpp\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u6D41</a></li><li><a href="https://www.runoob.com/cplusplus/cpp-dynamic-memory.html" target="_blank" rel="noopener noreferrer">Cpp\u4E2D\u7684New\u548CDelete</a></li><li>*,++,--\u7684\u4F18\u5148\u7EA7(<mark>\u540C\u7EA7,\u81EA\u53F3\u5411\u5DE6\u8FD0\u7B97</mark>)</li></ul><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">\u6CE8\u610F</p><p>e = *--S.top; ----\u6808\u9876\u6307\u9488\u51CF1,\u5C06\u6808\u9876\u5143\u7D20\u8D4B\u503C\u7ED9e</p><p>*S.top++ = e; ----\u5148\u5C06\u5143\u7D20e\u538B\u5165\u6808\u9876,\u7136\u540E\u6808\u9876\u6307\u9488\u624D\u52A01</p></div><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">int</span> Status<span class="token punctuation">;</span>    <span class="token comment">//\u5B9A\u4E49\u51FD\u6570\u6267\u884C\u72B6\u6001</span>
<span class="token keyword">int</span> OK <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> ERROR <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u5B9A\u4E49\u64CD\u4F5C\u72B6\u6001 \u6210\u529F:1 \u5931\u8D25:0</span>

<span class="token comment">//\u5B9A\u4E49\u987A\u5E8F\u6808\u5B58\u50A8\u7ED3\u6784</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">stock</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>base<span class="token punctuation">;</span>     <span class="token comment">//\u6808\u5E95\u6307\u9488</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>top<span class="token punctuation">;</span>      <span class="token comment">//\u6808\u9876\u6307\u9488</span>
    <span class="token keyword">int</span> stacksize<span class="token punctuation">;</span> <span class="token comment">//\u6808\u7684\u5927\u5C0F</span>
<span class="token punctuation">}</span> SqStack<span class="token punctuation">;</span>

<span class="token comment">/************funciton*********/</span>
Status <span class="token function">InitStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//\u521D\u59CB\u5316\u6808</span>
Status <span class="token function">DestoryStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9500\u6BC1\u6808</span>
Status <span class="token function">Push</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span> <span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5165\u6808</span>
Status <span class="token function">Pop</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u51FA\u6808</span>
<span class="token keyword">void</span> <span class="token function">PrintStack</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u6253\u5370\u6808\u5143\u7D20</span>
<span class="token keyword">void</span> <span class="token function">GetTop</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//\u53D6\u6808\u9876\u5143\u7D20</span>
<span class="token comment">/************funciton*********/</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u6784\u5EFA\u4E00\u4E2A\u7A7A\u6808</span>
    SqStack S<span class="token punctuation">;</span>

    <span class="token comment">//\u521D\u59CB\u5316\u6808</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">InitStack</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u521D\u59CB\u5316\u6808\u6210\u529F&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

        <span class="token comment">//\u5165\u6808\u64CD\u4F5C</span>
        <span class="token function">Push</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Push</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Push</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u6253\u5370\u6808\u5143\u7D20</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6808\u5185\u5143\u7D20\u4E3A:&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token function">PrintStack</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u83B7\u53D6\u6808\u9876\u5143\u7D20</span>
        <span class="token function">GetTop</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u51FA\u6808\u64CD\u4F5C</span>
        <span class="token keyword">int</span> e<span class="token punctuation">;</span>
        <span class="token function">Pop</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u51FA\u6808\u5143\u7D20\u4E3A:&quot;</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> e <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

        <span class="token comment">//\u6253\u5370\u6808\u5143\u7D20</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6808\u5185\u5269\u4F59\u5143\u7D20\u4E3A:&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token function">PrintStack</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u9500\u6BC1\u6808</span>
        <span class="token function">DestoryStack</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u521D\u59CB\u5316\u6808\u5931\u8D25,\u9000\u51FA\u7A0B\u5E8F&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521D\u59CB\u5316\u6808</span>
Status <span class="token function">InitStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u6784\u9020\u4E00\u4E2A\u7A7A\u6808S</span>
    S<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>S<span class="token punctuation">.</span>base<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        S<span class="token punctuation">.</span>top <span class="token operator">=</span> S<span class="token punctuation">.</span>base<span class="token punctuation">;</span>
        S<span class="token punctuation">.</span>stacksize <span class="token operator">=</span> MAXSIZE<span class="token punctuation">;</span>
        <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u9500\u6BC1\u6808</span>
Status <span class="token function">DestoryStack</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> S<span class="token punctuation">.</span>base<span class="token punctuation">;</span> <span class="token comment">//\u91CA\u653E\u6808\u9876\u6307\u9488\u5185\u5B58</span>
    S<span class="token punctuation">.</span>top <span class="token operator">=</span> S<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u6808\u9876\u6307\u9488\u548C\u6808\u5E95\u6307\u9488\u81F3\u4E3ANULL</span>
    S<span class="token punctuation">.</span>stacksize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u6808\u957F\u5EA6\u81F3\u4E3A0</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5165\u6808\u64CD\u4F5C</span>
Status <span class="token function">Push</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span> <span class="token keyword">int</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>S<span class="token punctuation">.</span>top <span class="token operator">-</span> S<span class="token punctuation">.</span>base <span class="token operator">==</span> S<span class="token punctuation">.</span>stacksize<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token operator">*</span>S<span class="token punctuation">.</span>top<span class="token operator">++</span> <span class="token operator">=</span> e<span class="token punctuation">;</span> <span class="token comment">//\u5C06\u5143\u7D20e\u538B\u5165\u6808\u9876,\u6808\u9876\u6307\u9488\u52A01 </span>
        <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u51FA\u6808</span>
Status <span class="token function">Pop</span><span class="token punctuation">(</span>SqStack <span class="token operator">&amp;</span>S<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>S<span class="token punctuation">.</span>top <span class="token operator">-</span> S<span class="token punctuation">.</span>base <span class="token operator">==</span> S<span class="token punctuation">.</span>stacksize<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        e <span class="token operator">=</span> <span class="token operator">*</span><span class="token operator">--</span>S<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">//\u6808\u9876\u6307\u9488\u51CF1,\u5C06\u6808\u9876\u5143\u7D20\u8D4B\u503C\u7ED9e</span>
        <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u904D\u5386\u6808\u5143\u7D20</span>
<span class="token keyword">void</span> <span class="token function">PrintStack</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>i <span class="token operator">=</span> S<span class="token punctuation">.</span>base<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> S<span class="token punctuation">.</span>top<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u6307\u9488i\u53BB\u6307\u5411\u6808\u5E95\u6307\u9488,\u4F9D\u6B21\u81EA\u4E0B\u81F3\u4E0A\u904D\u5386\u6240\u6709\u5143\u7D20</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>i <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53D6\u6808\u9876\u5143\u7D20</span>
<span class="token keyword">void</span> <span class="token function">GetTop</span><span class="token punctuation">(</span>SqStack S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6808\u9876\u5143\u7D20\u4E3A:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token operator">--</span>S<span class="token punctuation">.</span>top <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u6808\u9876\u5143\u7D20</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8F93\u51FA\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u7ED3\u679C" aria-hidden="true">#</a> \u8F93\u51FA\u7ED3\u679C</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>\u256D\u2500ylighgh@ylighgh ~/workspace/cpp 
\u2570\u2500$ ./Stack 
\u521D\u59CB\u5316\u6808\u6210\u529F
\u6808\u5185\u5143\u7D20\u4E3A:
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
\u6808\u9876\u5143\u7D20\u4E3A:3
\u51FA\u6808\u5143\u7D20\u4E3A:3
\u6808\u5185\u5269\u4F59\u5143\u7D20\u4E3A:
<span class="token number">1</span>
<span class="token number">2</span>
</code></pre></div>`,11);function p(o,c){return t}var u=s(a,[["render",p]]);export{u as default};
