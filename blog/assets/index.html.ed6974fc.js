import{c as n}from"./app.83d3538e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="\u5355\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5355\u94FE\u8868" aria-hidden="true">#</a> \u5355\u94FE\u8868</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>\u94FE\u8868\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u5728\u8FD9\u91CC\u5F97\u5230\u4E86\u5145\u5206\u7684\u5229\u7528\u3002\u94FE\u8868\u53EF\u4EE5\u52A8\u6001\u7684\u8FDB\u884C\u5B58\u50A8\u5206\u914D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u94FE\u8868\u662F\u4E00\u4E2A\u529F\u80FD\u6781\u4E3A\u5F3A\u5927\u7684\u6570\u7EC4\uFF0C\u4ED6\u53EF\u4EE5\u5728\u8282\u70B9\u4E2D\u5B9A\u4E49\u591A\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u968F\u610F\u589E\u6DFB\uFF0C\u5220\u9664\uFF0C\u63D2\u5165\u8282\u70B9\u3002\u94FE\u8868\u90FD\u6709\u4E00\u4E2A<code>\u5934\u6307\u9488</code>\uFF0C\u4E00\u822C\u4EE5<code>headNode</code>\u6765\u8868\u793A\uFF0C\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u5730\u5740\u3002\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u5206\u4E3A\u4E24\u7C7B\uFF0C<code>\u5934\u7ED3\u70B9</code>\u548C<code>\u4E00\u822C\u8282\u70B9</code>\uFF0C\u5934\u7ED3\u70B9\u662F\u6CA1\u6709\u6570\u636E\u57DF\u7684\u3002\u94FE\u8868\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u4E00\u4E2A<code>\u6570\u636E\u57DF</code>\uFF0C\u4E00\u4E2A\u662F<code>\u6307\u9488\u57DF</code></p><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">linkNode</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span> <span class="token comment">//\u6570\u636E\u57DF</span>
    <span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token operator">*</span>next<span class="token punctuation">;</span> <span class="token comment">//\u6307\u9488\u57DF</span>
<span class="token punctuation">}</span> Node<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h2><h3 id="\u521B\u5EFA\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u94FE\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u94FE\u8868</h3><div class="language-c ext-c"><pre class="language-c"><code>Node <span class="token operator">*</span><span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>headNode <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7533\u8BF7\u5185\u5B58\u7A7A\u95F4</span>
    headNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u53D8\u91CF\u521D\u59CB\u5316</span>
    <span class="token keyword">return</span> headNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u521B\u5EFA\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9</h3><div class="language-c ext-c"><pre class="language-c"><code>
<span class="token comment">//\u65B0\u589E\u8282\u70B9</span>
Node <span class="token operator">*</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>newNode <span class="token operator">=</span> <span class="token punctuation">(</span>Node <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token operator">-&gt;</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    newNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u63D2\u5165\u6570\u636E(\u5934\u63D2\u6CD5)</span>
<span class="token keyword">void</span> <span class="token function">insertNodeByHead</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>headNode<span class="token punctuation">,</span><span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>headNode <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> headNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    headNode<span class="token operator">-&gt;</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h3><div class="language-c ext-c"><pre class="language-c"><code>Node <span class="token operator">*</span><span class="token function">deleteNodeByAppoin</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>headNode<span class="token punctuation">,</span><span class="token keyword">int</span> posData<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E</span>
    Node <span class="token operator">*</span>posNode <span class="token operator">=</span> headNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> 
    Node <span class="token operator">*</span>posNodeFront <span class="token operator">=</span> headNode<span class="token punctuation">;</span>

    <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u94FE\u8868</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>posNode <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u94FE\u8868\u4E3A\u7A7A,\u65E0\u6CD5\u5220\u9664\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7EE7\u7EED\u627E\u5230\u5F85\u5220\u9664\u7684\u8282\u70B9</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>posNode<span class="token operator">-&gt;</span>data <span class="token operator">!=</span> posData<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u79FB\u52A8\u5F53\u524D\u8282\u70B9</span>
            posNodeFront <span class="token operator">=</span> posNode<span class="token punctuation">;</span>
            posNode <span class="token operator">=</span> posNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>posNode <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u627E\u5230\u76F8\u5173\u4FE1\u606F,\u65E0\u6CD5\u5220\u9664\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5C06\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u8282\u70B9\u7684\u6307\u9488\u57DF\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u6307\u9488\u57DF</span>
        posNodeFront<span class="token operator">-&gt;</span>next <span class="token operator">=</span> posNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token comment">//\u91CA\u653E\u5F85\u5220\u9664\u8282\u70B9\u7684\u5185\u5B58(\u5220\u9664\u8282\u70B9)</span>
        <span class="token function">free</span><span class="token punctuation">(</span>posNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u6253\u5370\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u94FE\u8868" aria-hidden="true">#</a> \u6253\u5370\u94FE\u8868</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span>Node <span class="token operator">*</span>headNode<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFA\u79FB\u52A8\u8282\u70B9</span>
    Node <span class="token operator">*</span>pMove <span class="token operator">=</span> headNode<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    
    <span class="token comment">//\u6253\u5370\u8282\u70B9(\u5F53\u79FB\u52A8\u8282\u70B9\u4E0D\u4E3A\u7A7A\u65F6)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>pMove<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\t&quot;</span><span class="token punctuation">,</span>pMove<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pMove <span class="token operator">=</span> pMove<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7EFC\u5408\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u5904\u7406" aria-hidden="true">#</a> \u7EFC\u5408\u5904\u7406</h2><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u94FE\u8868</span>
    Node <span class="token operator">*</span>list <span class="token operator">=</span> <span class="token function">createList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u63D2\u5165\u8282\u70B9</span>
    <span class="token function">insertNodeByHead</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insertNodeByHead</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insertNodeByHead</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6253\u5370\u94FE\u8868</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-------\u5220\u9664\u524D-------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5220\u9664\u8282\u70B9</span>
    <span class="token function">deleteNodeByAppoin</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6253\u5370\u94FE\u8868</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-------\u5220\u9664\u540E-------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5B9E\u9645\u8F93\u51FA</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>-------\u5220\u9664\u524D-------
<span class="token number">3</span>       <span class="token number">2</span>       <span class="token number">1</span>
-------\u5220\u9664\u540E-------
<span class="token number">3</span>       <span class="token number">2</span>
</code></pre></div>`,18);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
