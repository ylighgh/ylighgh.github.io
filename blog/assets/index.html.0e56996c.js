import{c as n}from"./app.c67e0a67.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883</h2><p>OS:<code>Arch Linux x86_64</code></p><p>Language:<code>C++</code></p><p>Compiler Version:<code>gcc Version 11.2.0 (GCC)</code></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-cpp ext-cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">book</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> book_no<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> book_name<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> book_price<span class="token punctuation">;</span>
<span class="token punctuation">}</span> BOOK<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LNode</span>
<span class="token punctuation">{</span>
    BOOK BK<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">LNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> LNode<span class="token punctuation">,</span> <span class="token operator">*</span>LinkList<span class="token punctuation">;</span>

<span class="token comment">/************\u51FD\u6570*****************/</span>
<span class="token keyword">bool</span> <span class="token function">InitList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//\u521D\u59CB\u5316\u5355\u94FE\u8868</span>
<span class="token keyword">void</span> <span class="token function">DestroyList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//\u9500\u6BC1\u5355\u94FE\u8868</span>
<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//\u6253\u5370\u94FE\u8868\u6570\u636E</span>
<span class="token keyword">void</span> <span class="token function">List_HeadInsert</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u5934\u63D2\u6CD5\u5EFA\u7ACB\u5355\u94FE\u8868</span>
<span class="token keyword">int</span> <span class="token function">menuSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">//\u9009\u62E9\u83DC\u5355</span>
<span class="token keyword">void</span> <span class="token function">SearchByNo</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u67E5\u627E\u56FE\u4E66\u4FE1\u606F</span>
<span class="token keyword">void</span> <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//\u6253\u5370\u6307\u5B9A\u8BB0\u5F55</span>
LNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u83B7\u53D6\u8282\u70B9</span>
<span class="token keyword">void</span> <span class="token function">DeleteByNo</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u5220\u9664\u56FE\u4E66\u4FE1\u606F</span>
<span class="token keyword">bool</span> <span class="token function">DeleteNode</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5220\u9664\u6307\u5B9A\u8282\u70B9</span>
<span class="token keyword">void</span> <span class="token function">ModifyByNo</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u5220\u9664\u56FE\u4E66\u4FE1\u606F</span>
<span class="token comment">/***********************************/</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    LinkList L<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">InitList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
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
                <span class="token function">DeleteByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token comment">//\u4FEE\u6539\u56FE\u4E66\u8BB0\u5F55</span>
                <span class="token function">ModifyByNo</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token comment">//\u63D2\u5165\u56FE\u4E66\u8BB0\u5F55</span>
                <span class="token function">List_HeadInsert</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span> <span class="token comment">//\u9000\u51FA\u7CFB\u7EDF</span>
                <span class="token function">DestroyList</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5185\u5B58\u4E0D\u8DB3,\u521D\u59CB\u5316\u94FE\u8868\u5931\u8D25!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521D\u59CB\u5316\u5355\u94FE\u8868</span>
<span class="token keyword">bool</span> <span class="token function">InitList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    L <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5206\u914D\u4E00\u4E2A\u5934\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>L <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span> <span class="token comment">//\u5185\u5B58\u4E0D\u8DB3,\u5206\u914D\u5931\u8D25</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u5934\u8282\u70B9\u4E4B\u540E\u6682\u65F6\u6CA1\u6709\u8282\u70B9</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u9500\u6BC1</span>
<span class="token keyword">void</span> <span class="token function">DestroyList</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>p<span class="token punctuation">;</span> <span class="token comment">//\u7528\u4E8E\u6307\u5411\u8981\u9500\u6BC1\u7684\u7ED3\u70B9</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>L<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>                <span class="token comment">//\u5FAA\u73AF\u6761\u4EF6\uFF0CL \u975E\u7A7A</span>
        p <span class="token operator">=</span> L<span class="token punctuation">;</span>       <span class="token comment">//\u5C06 \u5934\u6307\u9488L \u6307\u5411\u7684\u5730\u5740\u8D4B\u503C\u7ED9 \u6307\u9488P\uFF0C\u4F7F \u6307\u9488P \u6307\u5411\u5934\u7ED3\u70B9</span>
        L <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u8BA9 \u5934\u6307\u9488L \u6307\u5411\u4E0B\u4E00\u4E2A\u7ED3\u70B9</span>
        <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//\u91CA\u653E \u6307\u9488P \u6307\u5411\u7684\u7ED3\u70B9</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;LinkList\u5DF2\u7ECF\u9500\u6BC1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u9009\u62E9\u83DC\u5355</span>
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

<span class="token comment">//\u6253\u5370\u94FE\u8868\u6570\u636E</span>
<span class="token keyword">void</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u56FE\u4E66\u7F16\u53F7\\t\u56FE\u4E66\u540D\u79F0\\t\u56FE\u4E66\u4EF7\u683C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u521B\u5EFA\u79FB\u52A8\u8282\u70B9</span>
    LNode <span class="token operator">*</span>pMove <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">//\u6253\u5370\u8282\u70B9(\u5F53\u79FB\u52A8\u8282\u70B9\u4E0D\u4E3A\u7A7A\u65F6)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pMove<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\t\\t%s\\t\\t%.2lf\\n&quot;</span><span class="token punctuation">,</span> pMove<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> pMove<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> pMove<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pMove <span class="token operator">=</span> pMove<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5934\u63D2\u6CD5\u5EFA\u7ACB\u5355\u94FE\u8868</span>
<span class="token keyword">void</span> <span class="token function">List_HeadInsert</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>newNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        newNode <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u56FE\u4E66\u4FE1\u606F:(\u7F16\u53F7 \u540D\u79F0 \u4EF7\u683C):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6E05\u7A7A\u7F13\u51B2\u533A</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %s %lf&quot;</span><span class="token punctuation">,</span> newNode<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> newNode<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">(</span>newNode<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        newNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u65B0\u8282\u70B9\u7684\u6307\u9488\u57DF\u6307\u5411NULL</span>
        L<span class="token operator">-&gt;</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>       <span class="token comment">//\u5934\u8282\u70B9\u7684\u6307\u9488\u57DF\u6307\u5411\u65B0\u8282\u70B9</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u662F\u5426\u7EE7\u7EED\u63D2\u5165\u56FE\u4E66\u4FE1\u606F(Y|N):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> choice <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token char">&#39;N&#39;</span> <span class="token operator">||</span> choice <span class="token operator">==</span> <span class="token char">&#39;n&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u83B7\u53D6\u8282\u70B9</span>
LNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>no<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    LNode <span class="token operator">*</span>p <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//\u4ECE\u7B2C\u4E00\u4E2A\u8282\u70B9\u5F00\u59CB\u67E5\u627E\u6570\u636E\u57DF\u4E3Ae\u7684\u8282\u70B9</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> <span class="token function">strcmp</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> no<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p <span class="token operator">==</span> <span class="token constant">NULL</span> <span class="token operator">?</span> <span class="token constant">NULL</span> <span class="token operator">:</span> p<span class="token punctuation">;</span> <span class="token comment">//\u4E09\u76EE\u8FD0\u7B97\u7B26 \u6761\u4EF6\u4E3A\u771F\u8FD4\u56DENULL,\u5047\u4E3Ap\u8282\u70B9</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6253\u5370\u6307\u5B9A\u8BB0\u5F55</span>
<span class="token keyword">void</span> <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u56FE\u4E66\u7F16\u53F7\\t\u56FE\u4E66\u540D\u79F0\\t\u56FE\u4E66\u4EF7\u683C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\t\\t%s\\t\\t%.2lf\\n&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_name<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u67E5\u627E\u56FE\u4E66\u4FE1\u606F</span>
<span class="token keyword">void</span> <span class="token function">SearchByNo</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u67E5\u627E ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u67E5\u627E\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u5165\u5F85\u67E5\u627E\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    LNode <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5220\u9664\u6307\u5B9A\u8282\u70B9</span>
<span class="token keyword">bool</span> <span class="token function">DeleteNode</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>no<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E</span>
    LNode <span class="token operator">*</span>posNodeFront <span class="token operator">=</span> L<span class="token punctuation">;</span>
    LNode <span class="token operator">*</span>posNode <span class="token operator">=</span> L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

    <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u94FE\u8868</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>posNode <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>posNode<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">,</span> no<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>

            <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u94FE\u8868</span>
            posNodeFront <span class="token operator">=</span> posNode<span class="token punctuation">;</span>
            posNode <span class="token operator">=</span> posNodeFront<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>posNode <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//\u5C06\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u8282\u70B9\u7684\u6307\u9488\u57DF\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u6307\u9488\u57DF</span>
        posNodeFront<span class="token operator">-&gt;</span>next <span class="token operator">=</span> posNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

        <span class="token comment">//\u91CA\u653E\u5F85\u5220\u9664\u8282\u70B9\u7684\u5185\u5B58(\u5220\u9664\u8282\u70B9)</span>
        <span class="token function">free</span><span class="token punctuation">(</span>posNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6839\u636E\u56FE\u4E66\u7F16\u53F7\u5220\u9664\u56FE\u4E66\u4FE1\u606F</span>
<span class="token keyword">void</span> <span class="token function">DeleteByNo</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u5220\u9664 ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u5220\u9664\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u5165\u5F85\u67E5\u627E\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">DeleteNode</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4FEE\u6539</span>
<span class="token keyword">void</span> <span class="token function">ModifyByNo</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> no<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u5F85\u67E5\u627E\u56FE\u4E66\u7F16\u53F7</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>       <span class="token comment">//\u4FDD\u5B58\u67E5\u627E\u5230\u8BE5\u7ED3\u70B9\u7684\u5E8F\u53F7</span>
                 <span class="token comment">// system(&quot;clear&quot;);</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*************************** \u56FE\u4E66\u7F16\u53F7\u4FEE\u6539 ***************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;                                                                  \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u4FEE\u6539\u7684\u56FE\u4E66\u7F16\u53F7\uFF1A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u5165\u5F85\u4FEE\u6539\u5B66\u53F7</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//\u6D88\u9664\u56DE\u8F66\u952E\u5F71\u54CD</span>
    LNode <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u5982\u679C\u6574\u6570i\u503C\u4E0D\u7B49\u4E8E-1\uFF0C\u8BF4\u660E\u6CA1\u627E\u5230</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;======\u4FEE\u6539\u524D======\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u627E\u5230\uFF0C\u8C03\u7528\u663E\u793A\u51FD\u6570\u663E\u793A\u8BB0\u5F55</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7F16\u53F7:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_no<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u540D\u79F0:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4EF7\u683C:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>BK<span class="token punctuation">.</span>book_price<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;======\u4FEE\u6539\u540E======\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">PrintOneValue</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
        <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u56FE\u4E66\u7F16\u53F7\u4E3A%s\u7684\u56FE\u4E66\uFF01\\n&quot;</span><span class="token punctuation">,</span> no<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function p(o,c){return t}var k=s(a,[["render",p]]);export{k as default};
