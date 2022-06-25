import{c as n}from"./app.9036987c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u5355\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5355\u94FE\u8868" aria-hidden="true">#</a> \u5355\u94FE\u8868</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>\u94FE\u8868\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u5728\u8FD9\u91CC\u5F97\u5230\u4E86\u5145\u5206\u7684\u5229\u7528\u3002\u94FE\u8868\u53EF\u4EE5\u52A8\u6001\u7684\u8FDB\u884C\u5B58\u50A8\u5206\u914D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u94FE\u8868\u662F\u4E00\u4E2A\u529F\u80FD\u6781\u4E3A\u5F3A\u5927\u7684\u6570\u7EC4\uFF0C\u4ED6\u53EF\u4EE5\u5728\u8282\u70B9\u4E2D\u5B9A\u4E49\u591A\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u968F\u610F\u589E\u6DFB\uFF0C\u5220\u9664\uFF0C\u63D2\u5165\u8282\u70B9\u3002\u94FE\u8868\u90FD\u6709\u4E00\u4E2A<code>\u5934\u6307\u9488</code>\uFF0C\u4E00\u822C\u4EE5<code>headNode</code>\u6765\u8868\u793A\uFF0C\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u5730\u5740\u3002\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u5206\u4E3A\u4E24\u7C7B\uFF0C<code>\u5934\u7ED3\u70B9</code>\u548C<code>\u4E00\u822C\u8282\u70B9</code>\uFF0C\u5934\u7ED3\u70B9\u662F\u6CA1\u6709\u6570\u636E\u57DF\u7684\u3002\u94FE\u8868\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u4E00\u4E2A<code>\u6570\u636E\u57DF</code>\uFF0C\u4E00\u4E2A\u662F<code>\u6307\u9488\u57DF</code></p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LNode</span>
<span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span> <span class="token comment">//\u6570\u636E\u57DF</span>
    <span class="token keyword">struct</span> <span class="token class-name">LNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span> <span class="token comment">//\u6307\u9488\u57DF</span>
<span class="token punctuation">}</span>LNode<span class="token punctuation">,</span><span class="token operator">*</span>LinkList<span class="token punctuation">;</span>
</code></pre></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">\u6CE8\u610F</p><p><code>LinkList</code> \u7B49\u4EF7\u4E8E <code>LNode *</code></p><p>\u5F3A\u8C03\u8FD9\u662F\u4E00\u4E2A\u8282\u70B9 --\u4F7F\u7528<code>LNode *</code></p><p>\u5F3A\u8C03\u8FD9\u662F\u4E00\u4E2A\u94FE\u8868 --\u4F7F\u7528<code>LinkList</code></p></div><h2 id="\u521D\u59CB\u5316\u4E0E\u9500\u6BC1" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E0E\u9500\u6BC1" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E0E\u9500\u6BC1</h2><h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><p><strong>\u5E26\u5934\u8282\u70B9\u7684\u5355\u94FE\u8868\u521D\u59CB\u5316</strong></p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">InitList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5206\u914D\u4E00\u4E2A\u5934\u8282\u70B9</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5185\u5B58\u4E0D\u8DB3,\u5206\u914D\u5931\u8D25</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        L<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u5934\u8282\u70B9\u4E4B\u540E\u6682\u65F6\u6CA1\u6709\u8282\u70B9</span>
        retrun <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5355\u94FE\u8868\u7684\u5EFA\u7ACB" tabindex="-1"><a class="header-anchor" href="#\u5355\u94FE\u8868\u7684\u5EFA\u7ACB" aria-hidden="true">#</a> \u5355\u94FE\u8868\u7684\u5EFA\u7ACB</h3><h4 id="\u5934\u63D2\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5934\u63D2\u6CD5" aria-hidden="true">#</a> \u5934\u63D2\u6CD5</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>LinkList <span class="token function">List_HeadInsert</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>s<span class="token punctuation">;</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        s<span class="token operator">=</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> x<span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5C3E\u63D2\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5C3E\u63D2\u6CD5" aria-hidden="true">#</a> \u5C3E\u63D2\u6CD5</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>Todo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre></div><h3 id="\u9500\u6BC1" tabindex="-1"><a class="header-anchor" href="#\u9500\u6BC1" aria-hidden="true">#</a> \u9500\u6BC1</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>Status <span class="token function">DestroyList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Lnode <span class="token operator">*</span>p<span class="token punctuation">;</span> <span class="token comment">//\u7528\u4E8E\u6307\u5411\u8981\u9500\u6BC1\u7684\u7ED3\u70B9</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5FAA\u73AF\u6761\u4EF6\uFF0CL \u975E\u7A7A</span>
        p <span class="token operator">=</span> L<span class="token punctuation">;</span><span class="token comment">//\u5C06 \u5934\u6307\u9488L \u6307\u5411\u7684\u5730\u5740\u8D4B\u503C\u7ED9 \u6307\u9488P\uFF0C\u4F7F \u6307\u9488P \u6307\u5411\u5934\u7ED3\u70B9</span>
        L <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//\u8BA9 \u5934\u6307\u9488L \u6307\u5411\u4E0B\u4E00\u4E2A\u7ED3\u70B9</span>
        <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u91CA\u653E \u6307\u9488P \u6307\u5411\u7684\u7ED3\u70B9</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span> <span class="token comment">//\u5FAA\u73AF\u7ED3\u675F\uFF0C\u8FD4\u56DEOK</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D2\u5165\u4E0E\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u4E0E\u5220\u9664" aria-hidden="true">#</a> \u63D2\u5165\u4E0E\u5220\u9664</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><h4 id="\u6309\u4F4D\u5E8F\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u5E8F\u63D2\u5165" aria-hidden="true">#</a> \u6309\u4F4D\u5E8F\u63D2\u5165</h4><p><strong>\u5E26\u5934\u8282\u70B9\u7684\u6309\u4F4D\u5E8F\u63D2\u5165\u64CD\u4F5C</strong></p><p><code>LinkInsert(&amp;L,i,e)</code>:\u63D2\u5165\u64CD\u4F5C.\u5728\u8868L\u7684\u7B2Ci\u4E2A\u4F4D\u7F6E\u4E0A\u63D2\u5165\u6307\u5B9A\u5143\u7D20e</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">LinkInsert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">,</span>i<span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5224\u65ADi\u503C\u662F\u5426\u5408\u6CD5</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>p<span class="token punctuation">;</span>  <span class="token comment">//\u6307\u9488p\u6307\u5411\u5F53\u524D\u626B\u63CF\u5230\u7684\u8282\u70B9</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u524Dp\u626B\u63CF\u5230\u7684\u7B2C\u51E0\u4E2A\u8282\u70B9</span>
    p <span class="token operator">=</span> L<span class="token punctuation">;</span> <span class="token comment">//L\u6307\u5411\u5934\u8282\u70B9,\u5934\u8282\u70B9\u662F\u7B2C0\u4E2A\u8282\u70B9(\u4E0D\u542B\u6570\u636E)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5FAA\u73AF\u627E\u5230\u7B2Ci-1\u4E2A\u8282\u70B9</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//i\u503C\u4E0D\u5408\u6CD5</span>
        retrun <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span> s <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//\u5C06\u8282\u70B9s\u94FE\u63A5\u5230p\u540E</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6307\u5B9A\u8282\u70B9\u540E\u63D2" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u8282\u70B9\u540E\u63D2" aria-hidden="true">#</a> \u6307\u5B9A\u8282\u70B9\u540E\u63D2</h4><p><code>InsertNextNode(LNode *p,ElemType e)</code>\u540E\u63D2\u64CD\u4F5C,\u5728p\u8282\u70B9\u4E4B\u540E\u63D2\u5165\u5143\u7D20e</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">InsertNextNode</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span>p<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5185\u5B58\u5206\u914D\u5931\u8D25</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> e<span class="token punctuation">;</span> <span class="token comment">//\u7528\u8282\u70B9s\u4FDD\u5B58\u6570\u636E\u5143\u7D20e</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//\u5C06\u8282\u70B9s\u94FE\u63A5\u5230p\u4E4B\u540E</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6307\u5B9A\u8282\u70B9\u524D\u63D2" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u8282\u70B9\u524D\u63D2" aria-hidden="true">#</a> \u6307\u5B9A\u8282\u70B9\u524D\u63D2</h4><p><code>InsertPriorNode(LNode *p,ElemType e)</code>\u540E\u63D2\u64CD\u4F5C,\u5728p\u8282\u70B9\u4E4B\u540E\u63D2\u5165\u5143\u7D20e</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">InsertPriorNode</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span>p<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5185\u5B58\u5206\u914D\u5931\u8D25</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5077\u5929\u6362\u65E5</span>
    s<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">//\u65B0\u8282\u70B9s\u8FDE\u5230p\u4E4B\u540E</span>
    s<span class="token operator">-&gt;</span>data <span class="token operator">=</span> p<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span> <span class="token comment">//\u5C06p\u4E2D\u5143\u7D20\u590D\u5236\u5230p</span>
    p<span class="token operator">-&gt;</span>data <span class="token operator">=</span> e<span class="token punctuation">;</span> <span class="token comment">//\u5C06p\u4E2D\u5143\u7D20\u8986\u76D6\u4E3Ae</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5077\u5929\u6362\u65E5</strong></p><ol><li>\u5C06p\u8282\u70B9\u6307\u9488\u57DF\u6307\u5411\u7684\u4E0B\u4E00\u8282\u70B9\u7684\u5730\u5740\u8D4B\u7ED9s\u8282\u70B9</li><li>\u5C06p\u8282\u70B9\u6307\u9488\u57DF\u6307\u5411s</li><li>\u5C06p\u8282\u70B9\u4E2D\u6570\u636E\u57DF\u7684\u503C\u8D4B\u7ED9s\u8282\u70B9</li><li>\u5C06e\u8D4B\u503C\u7ED9p\u8282\u70B9</li></ol><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><h4 id="\u6309\u4F4D\u5E8F\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u5E8F\u5220\u9664" aria-hidden="true">#</a> \u6309\u4F4D\u5E8F\u5220\u9664</h4><p><code>LinkDelete(&amp;L,i,&amp;e)</code>:\u63D2\u5165\u64CD\u4F5C.\u5728\u8868L\u7684\u7B2Ci\u4E2A\u4F4D\u7F6E\u4E0A\u63D2\u5165\u6307\u5B9A\u5143\u7D20e</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">LinkInsert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5224\u65ADi\u503C\u662F\u5426\u5408\u6CD5</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>p<span class="token punctuation">;</span>  <span class="token comment">//\u6307\u9488p\u6307\u5411\u5F53\u524D\u626B\u63CF\u5230\u7684\u8282\u70B9</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u524Dp\u626B\u63CF\u5230\u7684\u7B2C\u51E0\u4E2A\u8282\u70B9</span>
    p <span class="token operator">=</span> L<span class="token punctuation">;</span> <span class="token comment">//L\u6307\u5411\u5934\u8282\u70B9,\u5934\u8282\u70B9\u662F\u7B2C0\u4E2A\u8282\u70B9(\u4E0D\u542B\u6570\u636E)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5FAA\u73AF\u627E\u5230\u7B2Ci-1\u4E2A\u8282\u70B9</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//i\u503C\u4E0D\u5408\u6CD5</span>
        retrun <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u7B2Ci-1\u4E2A\u8282\u70B9\u4E4B\u540E\u5DF2\u7ECF\u65E0\u5176\u4ED6\u8282\u70B9</span>
        retrun <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>q <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u4EE4q\u6307\u5411\u88AB\u5220\u9664\u7684\u8282\u70B9</span>
    e <span class="token operator">=</span> q<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span> <span class="token comment">//\u7528e\u8FD4\u56DE\u5143\u7D20\u7684\u503C</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u5C06*q\u8282\u70B9\u4ECE\u94FE\u4E2D\u65AD\u5F00</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u91CA\u653E\u8282\u70B9\u7684\u5B58\u50A8\u7A7A\u95F4</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6307\u5B9A\u8282\u70B9\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u8282\u70B9\u5220\u9664" aria-hidden="true">#</a> \u6307\u5B9A\u8282\u70B9\u5220\u9664</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">DeleteNode</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span>ElemeType data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>posNodeFront <span class="token operator">=</span> L<span class="token punctuation">;</span>
    LNode <span class="token operator">*</span>posNode <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>posNode <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>posNode<span class="token operator">-&gt;</span>data<span class="token operator">!=</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
            posNodeFront <span class="token operator">=</span> posNode<span class="token punctuation">;</span>
            posNode <span class="token operator">=</span> posNodeFront<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>posNode<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        posNodeFront<span class="token operator">-&gt;</span>next<span class="token operator">=</span>posNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>posNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a> \u67E5\u627E</h2><h3 id="\u6309\u4F4D\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u67E5\u627E" aria-hidden="true">#</a> \u6309\u4F4D\u67E5\u627E</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>LNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    LNode <span class="token operator">*</span>p<span class="token punctuation">;</span> <span class="token comment">//\u6307\u9488p\u6307\u5411\u5F53\u524D\u626B\u63CF\u5230\u7684\u8282\u70B9</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u524Dp\u6307\u5411\u7684\u7B2C\u51E0\u4E2A\u8282\u70B9</span>
    p <span class="token operator">=</span> L<span class="token punctuation">;</span> <span class="token comment">//L\u6307\u5411\u5934\u8282\u70B9,\u5934\u8282\u70B9\u662F\u7B2C0\u4E2A\u8282\u70B9(\u4E0D\u5B58\u6570\u636E)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5FAA\u73AF\u627E\u5230\u7B2Ci\u4E2A\u8282\u70B9</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6309\u503C\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u6309\u503C\u67E5\u627E" aria-hidden="true">#</a> \u6309\u503C\u67E5\u627E</h3><p>\u6309\u503C\u67E5\u627E,\u627E\u5230\u6570\u636E\u57DF==e\u7684\u8282\u70B9</p><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>LNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u4ECE\u7B2C\u4E00\u4E2A\u8282\u70B9\u5F00\u59CB\u67E5\u627E\u6570\u636E\u57DF\u4E3Ae\u7684\u8282\u70B9</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>data <span class="token operator">!=</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u5176\u4ED6\u64CD\u4F5C</h2><h3 id="\u6C42\u8868\u957F" tabindex="-1"><a class="header-anchor" href="#\u6C42\u8868\u957F" aria-hidden="true">#</a> \u6C42\u8868\u957F</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">Length</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    LNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        len<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8F93\u51FA\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u64CD\u4F5C" aria-hidden="true">#</a> \u8F93\u51FA\u64CD\u4F5C</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFA\u79FB\u52A8\u8282\u70B9</span>
    LNode <span class="token operator">*</span>pMove <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    
    <span class="token comment">//\u6253\u5370\u8282\u70B9(\u5F53\u79FB\u52A8\u8282\u70B9\u4E0D\u4E3A\u7A7A\u65F6)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pMove<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span>pMove<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pMove <span class="token operator">=</span> pMove<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5224\u7A7A\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5224\u7A7A\u64CD\u4F5C" aria-hidden="true">#</a> \u5224\u7A7A\u64CD\u4F5C</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,49);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
