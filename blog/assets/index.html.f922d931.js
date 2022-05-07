import{c as n}from"./app.edc38812.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><p>OS:<code>Arch Linux x86_64</code></p><p>Language:<code>C++</code></p><p>Compiler Version:<code>gcc Version 11.2.0 (GCC)</code></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">InitSize</span> <span class="token expression"><span class="token number">10</span></span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">book</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> book_no<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> book_name<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> book_price<span class="token punctuation">;</span>
<span class="token punctuation">}</span> BOOK<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Seq</span>
<span class="token punctuation">{</span>
    BOOK <span class="token operator">*</span>BK<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Sq<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">menuSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9009\u62E9\u83DC\u5355</span>
<span class="token keyword">void</span> <span class="token function">InitList</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u521D\u59CB\u5316\u987A\u5E8F\u8868</span>
<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5370\u5FAA\u5E8F\u8868</span>
<span class="token keyword">void</span> <span class="token function">InsertValue</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u63D2\u5165\u8BB0\u5F55</span>
<span class="token keyword">void</span> <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6253\u5370\u4E00\u6761\u6307\u5B9A\u8BB0\u5F55</span>
<span class="token keyword">int</span> <span class="token function">GetElemByNo</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>book_no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u4E00\u6761\u8BB0\u5F55\u7684\u7D22\u5F15\u503C</span>
<span class="token keyword">void</span> <span class="token function">SearchByNo</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u67E5\u627E\u4E00\u6761\u8BB0\u5F55</span>
<span class="token keyword">void</span> <span class="token function">DeleteElemByNo</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5220\u9664\u4E00\u6761\u8BB0\u5F55</span>
<span class="token keyword">void</span> <span class="token function">ModifyElemByNo</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4FEE\u6539\u4E00\u6761\u8BB0\u5F55</span>
<span class="token keyword">void</span> <span class="token function">DestroyList</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9500\u6BC1\u987A\u5E8F\u6807</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u987A\u5E8F\u8868\u521D\u59CB\u5316</span>
    Sq L<span class="token punctuation">;</span>
    <span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">menuSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token comment">//\u67E5\u770B\u56FE\u4E66\u4FE1\u606F</span>
            <span class="token function">PrintList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token comment">//\u67E5\u627E\u56FE\u4E66\u8BB0\u5F55</span>
            <span class="token function">SearchByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token comment">//\u5220\u9664\u56FE\u4E66\u8BB0\u5F55</span>
            <span class="token function">DeleteElemByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token comment">//\u4FEE\u6539\u56FE\u4E66\u8BB0\u5F55</span>
            <span class="token function">ModifyElemByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token comment">//\u63D2\u5165\u56FE\u4E66\u8BB0\u5F55</span>
            <span class="token function">InsertValue</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span> <span class="token comment">//\u9000\u51FA\u7CFB\u7EDF</span>
            <span class="token function">DestroyList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">menuSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;****************************** \u4E3B\u83DC\u5355 ****************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|                                                                  |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           0. \u67E5\u770B\u56FE\u4E66\u4FE1\u606F                         |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           1. \u67E5\u627E\u56FE\u4E66\u8BB0\u5F55                         |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           2. \u5220\u9664\u56FE\u4E66\u8BB0\u5F55                         |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           3. \u4FEE\u6539\u56FE\u4E66\u8BB0\u5F55                         |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           4. \u63D2\u5165\u56FE\u4E66\u8BB0\u5F55                         |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|		           5. \u9000\u51FA\u7A0B\u5E8F                             |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;|                                                                  |\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;******************************************************************\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n	\u8F93\u5165\u60A8\u7684\u83DC\u5355\u9009\u9879\u7F16\u53F7\uFF080-5):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u63D0\u793A\u8F93\u5165\u9009\u9879</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment">//\u8F93\u5165\u9009\u62E9\u9879											//\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u6574\u578B\u6570</span>
        <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                 <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\t\u60A8\u8F93\u5165\u7684\u5E8F\u53F7\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01\uFF01\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9009\u9879\u4E0D\u57280~5\u4E4B\u95F4\u91CD\u8F93</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>                 <span class="token comment">//\u8FD4\u56DE\u9009\u62E9\u9879\uFF0C\u4E3B\u7A0B\u5E8F\u6839\u636E\u8BE5\u6570\u8C03\u7528\u76F8\u5E94\u7684\u51FD\u6570</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">InitList</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    L<span class="token punctuation">.</span>BK <span class="token operator">=</span> <span class="token punctuation">(</span>BOOK <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>BOOK<span class="token punctuation">)</span> <span class="token operator">*</span> InitSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    L<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">InsertValue</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u56FE\u4E66\u4FE1\u606F:(\u7F16\u53F7 \u540D\u79F0 \u4EF7\u683C)\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6E05\u7A7A\u7F13\u51B2\u533A</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %lf&quot;</span><span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>L<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>L<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>L<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        L<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u662F\u5426\u7EE7\u7EED\u63D2\u5165\u56FE\u4E66\u4FE1\u606F(Y|N)\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> choice <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token char">&#39;N&#39;</span> <span class="token operator">||</span> choice <span class="token operator">==</span> <span class="token char">&#39;n&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u56FE\u4E66\u7F16\u53F7\\t\u56FE\u4E66\u540D\u79F0\\t\u56FE\u4E66\u4EF7\u683C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\t\\t%s\\t\\t%.2lf\\n&quot;</span><span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u56FE\u4E66\u7F16\u53F7\\t\u56FE\u4E66\u540D\u79F0\\t\u56FE\u4E66\u4EF7\u683C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\t\\t%s\\t\\t%.2lf\\n&quot;</span><span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">GetElemByNo</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>no<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> no<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">SearchByNo</span><span class="token punctuation">(</span>Sq L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u67E5\u627E ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u67E5\u627E\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//\u8F93\u5165\u5F85\u67E5\u627E\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    i <span class="token operator">=</span> <span class="token function">GetElemByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8C03\u7528GetElemByNo\u51FD\u6570\uFF0C\u5F97\u5230\u4E00\u4E2A\u6574\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>             <span class="token comment">//\u5982\u679C\u6574\u6570i\u503C\u4E0D\u7B49\u4E8E-1\uFF0C\u8BF4\u660E\u6CA1\u627E\u5230</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u627E\u5230\uFF0C\u8C03\u7528\u663E\u793A\u51FD\u6570\u663E\u793A\u8BB0\u5F55</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">DeleteElemByNo</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u5220\u9664 ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u5220\u9664\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//\u8F93\u5165\u5F85\u67E5\u627E\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    i <span class="token operator">=</span> <span class="token function">GetElemByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528GetElemByNo\u51FD\u6570\uFF0C\u5F97\u5230\u4E00\u4E2A\u6574\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span> <span class="token comment">//\u5982\u679C\u6574\u6570i\u503C\u4E0D\u7B49\u4E8E-1\uFF0C\u8BF4\u660E\u6CA1\u627E\u5230</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u5143\u7D20\u524D\u79FB</span>
        <span class="token punctuation">}</span>
        L<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">//\u957F\u5EA6\u51CF1</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u7F16\u53F7\u4E3A%s\u7684\u4E66\u7C4D&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">DestroyList</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>BK<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>                <span class="token comment">// \u68C0\u67E5\u662F\u5426\u4E3A\u7A7A</span>
        <span class="token function">free</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>BK<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u5220\u9664\u5206\u914D\u7684\u5185\u5B58</span>
        L<span class="token punctuation">.</span>BK <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">// \u57FA\u5730\u5740\u8BBE\u4E3A\u7A7A</span>
    <span class="token punctuation">}</span>
    L<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8868\u957F\u8BBE\u4E3A0</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Sq\u987A\u5E8F\u8868\u5DF2\u7ECF\u9500\u6BC1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">ModifyElemByNo</span><span class="token punctuation">(</span>Sq <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u4FEE\u6539 ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u4FEE\u6539\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//\u8F93\u5165\u5F85\u4FEE\u6539\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    i <span class="token operator">=</span> <span class="token function">GetElemByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528GetElemByNo\u51FD\u6570\uFF0C\u5F97\u5230\u4E00\u4E2A\u6574\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span> <span class="token comment">//\u5982\u679C\u6574\u6570i\u503C\u4E0D\u7B49\u4E8E-1\uFF0C\u8BF4\u660E\u6CA1\u627E\u5230</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;======\u4FEE\u6539\u524D======\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u627E\u5230\uFF0C\u8C03\u7528\u663E\u793A\u51FD\u6570\u663E\u793A\u8BB0\u5F55</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7F16\u53F7:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u540D\u79F0:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4EF7\u683C:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>BK<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;======\u4FEE\u6539\u540E======\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
        <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ol><li>\u5982\u679C\u9700\u8981\u79FB\u690D\u5230Windows\u4E0A\u6267\u884C,\u90E8\u5206\u4EE3\u7801\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</li></ol><div class="language-cpp ext-cpp"><pre class="language-cpp"><code>\u6E05\u5C4F\u547D\u4EE4<span class="token operator">:</span>
Linux<span class="token operator">:</span> <span class="token function">System</span><span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span>
Windows<span class="token operator">:</span> <span class="token function">System</span><span class="token punctuation">(</span><span class="token string">&quot;cls&quot;</span><span class="token punctuation">)</span> 
</code></pre></div>`,9);function p(o,c){return t}var k=s(a,[["render",p]]);export{k as default};
