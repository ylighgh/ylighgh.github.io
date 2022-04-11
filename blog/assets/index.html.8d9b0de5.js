import{c as n}from"./app.2878162d.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u987A\u5E8F\u8868\u5B58\u50A8\u6570\u636E\u65F6\uFF0C\u4F1A\u63D0\u524D\u7533\u8BF7\u4E00\u6574\u5757\u8DB3\u591F\u5927\u5C0F\u7684\u7269\u7406\u7A7A\u95F4\uFF0C\u7136\u540E\u5C06\u6570\u636E\u4F9D\u6B21\u5B58\u50A8\u8D77\u6765\uFF0C\u5B58\u50A8\u65F6\u505A\u5230\u6570\u636E\u5143\u7D20\u4E4B\u95F4\u4E0D\u7559\u4E00\u4E1D\u7F1D\u9699</p><p>\u4F7F\u7528\u987A\u5E8F\u8868\u5B58\u50A8\u6570\u636E\u4E4B\u524D\uFF0C\u9664\u4E86\u8981\u7533\u8BF7\u8DB3\u591F\u5927\u5C0F\u7684\u7269\u7406\u7A7A\u95F4\u4E4B\u5916\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u540E\u671F\u4F7F\u7528\u8868\u4E2D\u7684\u6570\u636E\uFF0C\u987A\u5E8F\u8868\u8FD8\u9700\u8981\u5B9E\u65F6\u8BB0\u5F55\u4EE5\u4E0B 2 \u9879\u6570\u636E\uFF1A</p><ol><li>\u987A\u5E8F\u8868\u7533\u8BF7\u7684\u5B58\u50A8\u5BB9\u91CF\uFF1B</li><li>\u987A\u5E8F\u8868\u7684\u957F\u5EA6\uFF0C\u4E5F\u5C31\u662F\u8868\u4E2D\u5B58\u50A8\u6570\u636E\u5143\u7D20\u7684\u4E2A\u6570\uFF1B</li></ol><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INITSIZE</span> <span class="token expression"><span class="token number">10</span> </span><span class="token comment">//\u5BF9INITSIZE\u8FDB\u884C\u5B8F\u5B9A\u4E49\uFF0C\u8868\u793A\u987A\u5E8F\u8868\u7533\u8BF7\u7A7A\u95F4\u7684\u5927\u5C0F</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Seq</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>data<span class="token punctuation">;</span><span class="token comment">//\u58F0\u660E\u4E86\u4E00\u4E2A\u540D\u4E3Adata\u7684\u957F\u5EA6\u4E0D\u786E\u5B9A\u7684\u6570\u7EC4\uFF0C\u4E5F\u53EB\u201C\u52A8\u6001\u6570\u7EC4\u201D</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span><span class="token comment">//\u8BB0\u5F55\u5F53\u524D\u987A\u5E8F\u8868\u7684\u957F\u5EA6</span>
    <span class="token keyword">int</span> MaxSize<span class="token punctuation">;</span><span class="token comment">//\u8BB0\u5F55\u987A\u5E8F\u8868\u5206\u914D\u7684\u5B58\u50A8\u5BB9\u91CF</span>
<span class="token punctuation">}</span> SeqList<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u521D\u59CB\u5316\u4E0E\u9500\u6BC1" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E0E\u9500\u6BC1" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E0E\u9500\u6BC1</h2><h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InitList</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> INITSIZE<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6784\u9020\u4E00\u4E2A\u7A7A\u7684\u987A\u5E8F\u8868\uFF0C\u52A8\u6001\u7533\u8BF7\u5B58\u50A8\u7A7A\u95F4</span>
    L<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u7A7A\u8868\u7684\u957F\u5EA6\u521D\u59CB\u5316\u4E3A0</span>
    L<span class="token punctuation">.</span>MaxSize <span class="token operator">=</span> INITSIZE<span class="token punctuation">;</span><span class="token comment">//\u7A7A\u8868\u7684\u521D\u59CB\u5B58\u50A8\u7A7A\u95F4\u4E3AINITSIZE</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u9500\u6BC1" tabindex="-1"><a class="header-anchor" href="#\u9500\u6BC1" aria-hidden="true">#</a> \u9500\u6BC1</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">DestroyList</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u68C0\u67E5\u662F\u5426\u4E3A\u7A7A</span>
        <span class="token function">free</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u5206\u914D\u7684\u5185\u5B58</span>
        L<span class="token punctuation">.</span>data<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">// \u57FA\u5730\u5740\u8BBE\u4E3A\u7A7A</span>
    <span class="token punctuation">}</span>
    L<span class="token punctuation">.</span>length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8868\u957F\u8BBE\u4E3A0</span>
    L<span class="token punctuation">.</span>MaxSize<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// \u8868\u7A7A\u95F4\u8BBE\u4E3A0</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;SeqList\u987A\u5E8F\u8868\u5DF2\u7ECF\u9500\u6BC1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63D2\u5165\u4E0E\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u4E0E\u5220\u9664" aria-hidden="true">#</a> \u63D2\u5165\u4E0E\u5220\u9664</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">listInsert</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> i <span class="token punctuation">,</span><span class="token keyword">int</span> elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>i<span class="token operator">&gt;</span>L<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5224\u65ADi\u7684\u8303\u56F4\u662F\u5426\u6709\u6548</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>length<span class="token operator">==</span>MaxSize<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5B58\u50A8\u7A7A\u95F4\u5DF2\u6EE1</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">&gt;=</span>i<span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5C06\u7B2Ci\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u53CA\u4E4B\u540E\u7684\u5143\u7D20\u540E\u79FB</span>
        L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>elem<span class="token punctuation">;</span> <span class="token comment">//\u5728i\u4F4D\u7F6E\u653E\u5165element</span>
    L<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>      <span class="token comment">//\u8868\u957F\u81EA\u589E1\u4E2A\u5355\u4F4D\u957F\u5EA6</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u63D2\u5165\u64CD\u4F5C\u4E2D,\u63D2\u5165\u7684\u5F62\u53C2\u662F\u6211\u4EEC\u4EBA\u4E3A\u6307\u5B9A\u7684\u4F4D\u7F6E.</p><p>\u4F46\u662F\u5728\u7A0B\u5E8F\u4E2D,\u4E0B\u6807\u662F\u4ECE0\u5F00\u59CB\u7684,\u6240\u4EE5\u5B9E\u9645\u63D2\u5165\u7684\u4F4D\u7F6E\u5E94\u8BE5\u4E3A:<code>i-1</code></p></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><h4 id="\u6309\u503C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6309\u503C\u5220\u9664" aria-hidden="true">#</a> \u6309\u503C\u5220\u9664</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">DeleteNodeByValue</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span>location <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//\u904D\u5386\u6574\u4E2A\u7ED3\u6784\u4F53,\u627E\u5230\u5F85\u5220\u9664\u5143\u7D20\u7684\u5750\u6807\u503C</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
            location <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;=</span>L<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u503C\u4E3A%d\u7684\u5143\u7D20\\n&quot;</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u6839\u636E\u83B7\u53D6\u7684\u5750\u6807\u503C,\u4F9D\u6B21\u5C06\u5143\u7D20\u5F80\u524D\u79FB\u4F4D</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>location<span class="token punctuation">;</span>j<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    L<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">//\u8868\u957F\u81EA\u51CF1\u4E2A\u5355\u4F4D\u957F\u5EA6</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664%d\u5143\u7D20\\n&quot;</span><span class="token punctuation">,</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6309\u4F4D\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u5220\u9664" aria-hidden="true">#</a> \u6309\u4F4D\u5220\u9664</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">DeleteNodeByPos</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> location<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65ADlocation\u5750\u6807\u662F\u5426\u8D8A\u754C</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>location<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>location<span class="token operator">&gt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;location\u503C\u5F02\u5E38,\u8BF7\u68C0\u67E5\u540E\u518D\u8F93\u5165!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> elem <span class="token operator">=</span> L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>location<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u5F85\u5220\u9664\u7684\u5143\u7D20\u503C\u8D4B\u7ED9elem</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> location<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u5C06\u7B2Clocation\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u5F80\u524D\u79FB\u4F4D</span>
        L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    L<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">//\u8868\u957F\u81EA\u51CF1\u4E2A\u5355\u4F4D\u957F\u5EA6</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u7B2C%d\u4E2A\u4F4D\u7F6E\u4E0A\u5143\u7D20,\u503C\u4E3A:%d\\n&quot;</span><span class="token punctuation">,</span>location<span class="token punctuation">,</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u67E5\u627E\u4E0E\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u4E0E\u66F4\u6539" aria-hidden="true">#</a> \u67E5\u627E\u4E0E\u66F4\u6539</h2><h3 id="\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a> \u67E5\u627E</h3><h4 id="\u6309\u4F4D\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u67E5\u627E" aria-hidden="true">#</a> \u6309\u4F4D\u67E5\u627E</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">GetElemByPos</span><span class="token punctuation">(</span>SeqList L<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u8BE5\u4F4D\u5E8F\u7684\u503C</span>
<span class="token punctuation">}</span> 
</code></pre></div><h4 id="\u6309\u503C\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u6309\u503C\u67E5\u627E" aria-hidden="true">#</a> \u6309\u503C\u67E5\u627E</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">GetElemByValue</span><span class="token punctuation">(</span>SeqList L<span class="token punctuation">,</span><span class="token keyword">int</span> elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//\u6570\u7EC4\u4E0B\u6807\u7684\u5143\u7D20\u503C\u7B49\u4E8Eelem,\u8FD4\u56DE\u5176\u4F4D\u5E8F\u4E3Ai+1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539" aria-hidden="true">#</a> \u66F4\u6539</h3><h4 id="\u6309\u4F4D\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u6309\u4F4D\u66F4\u6539" aria-hidden="true">#</a> \u6309\u4F4D\u66F4\u6539</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">ModifyElemByPos</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> location <span class="token operator">=</span> <span class="token function">GetElemByPos</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>location<span class="token punctuation">]</span><span class="token operator">=</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6309\u503C\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u6309\u503C\u66F4\u6539" aria-hidden="true">#</a> \u6309\u503C\u66F4\u6539</h4><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">ModifyElemByValue</span><span class="token punctuation">(</span>SeqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> elem<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> location <span class="token operator">=</span> <span class="token function">GetElemByValue</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>location<span class="token punctuation">]</span><span class="token operator">=</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u5176\u4ED6\u64CD\u4F5C</h2><h3 id="\u6C42\u8868\u957F" tabindex="-1"><a class="header-anchor" href="#\u6C42\u8868\u957F" aria-hidden="true">#</a> \u6C42\u8868\u957F</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">GetListLength</span><span class="token punctuation">(</span>SeqList L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8F93\u51FA\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u64CD\u4F5C" aria-hidden="true">#</a> \u8F93\u51FA\u64CD\u4F5C</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>SeqList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;data[%d]=%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5224\u7A7A\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5224\u7A7A\u64CD\u4F5C" aria-hidden="true">#</a> \u5224\u7A7A\u64CD\u4F5C</h3><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>SeqList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,37);function t(o,e){return p}var l=a(s,[["render",t]]);export{l as default};
