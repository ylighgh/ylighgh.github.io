import{c as n}from"./app.b3194870.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u7D22\u5F15\u548C\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u548C\u5207\u7247" aria-hidden="true">#</a> \u7D22\u5F15\u548C\u5207\u7247</h2><p>\u7D22\u5F15\u5373\u4E0B\u6807</p><div class="language-python ext-py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;abcdef&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#\u8F93\u51FA a</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA\u5012\u6570\u7B2C\u4E00\u4E2A\u5143\u7D20 \u5373 f</span>
</code></pre></div><p><strong>\u5207\u7247</strong></p><p>\u57FA\u672C\u8BED\u6CD5:<code>str[start:end:step]</code> <mark>\u987E\u5934\u4E0D\u987E\u5C3E</mark> end\u7684\u6570\u636E\u53D6\u4E0D\u5230</p><ul><li>start:\u8D77\u59CB\u4F4D\u7F6E</li><li>end:\u7ED3\u675F\u4F4D\u7F6E</li><li>step:\u6B65\u957F\u503C(\u6B65\u957F\u4E3A-1,\u8868\u793A\u4ECE\u53F3\u5F80\u5DE6)</li></ul><div class="language-python ext-py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;abcdef&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:bc \u987E\u5934\u4E0D\u987E\u5C3E</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:def \u540E\u9762\u4EC0\u4E48\u90FD\u4E0D\u5199,\u8868\u793A\u5207\u5230\u6700\u540E</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:abc \u524D\u9762\u4EC0\u4E48\u90FD\u4E0D\u5199,\u8868\u793A\u4ECE\u5934\u5F00\u59CB\u5207</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:abcdef \u4ECE\u5934\u5230\u5C3E</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA: \u9ED8\u8BA4\u60C5\u51B5\u4E0B,\u5207\u7247\u662F\u4ECE\u5DE6\u5F80\u53F3\u5207</span>

<span class="token comment"># \u5982\u679C\u9700\u8981\u4ECE\u53F3\u5F80\u5DE6\u5207,\u9700\u8981\u7ED9\u51FA\u7B2C\u4E09\u4E2A\u53C2\u6570(\u6B65\u957F\u503C)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA edc</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA bd</span>
</code></pre></div><h2 id="\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a> \u67E5\u627E</h2><div class="language-python ext-py"><pre class="language-python"><code>startwith<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4EE5xxx\u5F00\u5934</span>

endwith<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4EE5xxx\u7ED3\u5C3E</span>

count<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u8BA1\u7B97\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u4E86\u591A\u5C11\u4E2Axxx</span>

find<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u67E5\u627E\u5B57\u7B26\u4E32,\u5982\u679C\u627E\u5230\u8FD4\u56DE\u7D22\u5F15,\u627E\u4E0D\u5230\u8FD4\u56DE-1</span>

index<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u67E5\u627E\u5B57\u7B26\u4E32,\u5982\u679C\u627E\u5230\u8FD4\u56DE\u7D22\u5F15,\u627E\u4E0D\u5230\u62A5\u9519</span>
</code></pre></div><h2 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a> \u5176\u4ED6\u64CD\u4F5C</h2><h3 id="\u8F6C\u6765\u8F6C\u53BB" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6765\u8F6C\u53BB" aria-hidden="true">#</a> \u8F6C\u6765\u8F6C\u53BB</h3><p><mark>\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u53D8\u5BF9\u8C61,\u4EFB\u4F55\u64CD\u4F5C\u5BF9\u539F\u5B57\u7B26\u4E32\u662F\u4E0D\u4F1A\u6709\u4EFB\u4F55\u5F71\u54CD\u7684</mark></p><div class="language-python ext-py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;i am yl&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:I am yl \u9996\u5B57\u6BCD\u53D8\u6210\u5927\u5199 </span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:i am yl \u5168\u90E8\u53D8\u6210\u5C0F\u5199</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA:I AM YL \u5168\u90E8\u53D8\u6210\u5927\u5199 #\u5FFD\u7565\u5927\u5C0F\u5199</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#\u8F93\u51FA:I AM YL \u5927\u5199\u53D8\u5C0F\u5199,\u5C0F\u5199\u53D8\u5927\u5199</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#\u8F93\u51FAI Am Yl \u6BCF\u4E2A\u5355\u8BCD\u7684\u9996\u5B57\u6BCD\u5927\u4E9B</span>
</code></pre></div><h3 id="\u5207\u6765\u5207\u53BB" tabindex="-1"><a class="header-anchor" href="#\u5207\u6765\u5207\u53BB" aria-hidden="true">#</a> \u5207\u6765\u5207\u53BB</h3><p>\u53BB\u6389\u5B57\u7B26\u4E32\u5DE6\u53F3\u4E24\u7AEF\u7684\u7A7A\u767D(\u7A7A\u683C,\\t,\\n): <code>strip()</code></p><p>\u66FF\u6362\u5B57\u7B26:<code>replace()</code></p><div class="language-python ext-py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;fuck&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;fuck&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;f**k&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA\u7ED3\u679C: f**k</span>
</code></pre></div><p>\u5B57\u7B26\u4E32\u5207\u5272:<code>split()</code></p><div class="language-python ext-py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;a_b_c_d_e&quot;</span>
<span class="token builtin">list</span> <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]</span>
</code></pre></div><p>\u5217\u8868\u7EC4\u5408:<code>join()</code>(\u628A\u4E00\u4E2A\u5217\u8868\u7EC4\u5408\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32)</p><div class="language-python ext-py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&quot;_l_&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token comment"># \u8F93\u51FA\u7ED3\u679C:a_l_b_l_c_l_d_l_e</span>
</code></pre></div><h3 id="\u5B57\u7B26\u4E32\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u957F\u5EA6" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u957F\u5EA6</h3><p><code>len()</code></p><h3 id="\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3" aria-hidden="true">#</a> \u8FED\u4EE3</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">for</span> \u53D8\u91CF <span class="token keyword">in</span> \u53EF\u8FED\u4EE3\u5BF9\u8C61
    <span class="token keyword">pass</span>
</code></pre></div><p><code>in</code>\u4E24\u79CD\u7528\u6CD5:</p><ul><li>\u5728for\u91CC\u9762,\u662F\u628A\u6BCF\u4E00\u4E2A\u5143\u7D20\u83B7\u53D6\u8D4B\u503C\u5230\u524D\u9762\u7684\u53D8\u91CF</li><li>\u4E0D\u5728for,\u5224\u65ADxxx\u662F\u5426\u51FA\u73B0\u5728str\u4E2D</li></ul><h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><ol><li><p>upper(),\u628A\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u7684\u5B57\u6BCD\u90FD\u53D8\u6210\u5927\u5199,\u4E3B\u8981\u4F7F\u7528\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u65F6\u5019</p></li><li><p>strip(),\u9ED8\u8BA4\u53BB\u6389\u5DE6\u53F3\u4E24\u7AEF\u7684\u7A7A\u767D,\u5305\u62EC(\\n,\\t,\u7A7A\u683C)</p></li><li><p>replace(),\u5B57\u7B26\u4E32\u66FF\u6362</p></li><li><p>split(),\u5B57\u7B26\u4E32\u5207\u5272,\u5F97\u5230\u5B57\u7B26\u4E32\u5217\u8868</p></li><li><p>join(),\u628A\u5217\u8868\u91CD\u65B0\u7EC4\u5408\u6210\u5B57\u7B26\u4E32</p></li><li><p>startwith,\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4EE5xxx\u5F00\u5934</p></li><li><p>find(),\u67E5\u627Exxx</p></li><li><p>count(),\u6570\u6570,\u67E5\u627Exxx\u5728\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570</p></li><li><p>isdigit(),\u5224\u65AD\u8BE5\u5B57\u7B26\u662F\u5426\u662F\u6570\u5B57\u7EC4\u6210</p></li><li><p>len(),\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</p></li></ol>`,29);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
