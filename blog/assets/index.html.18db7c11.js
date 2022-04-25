import{c as n}from"./app.c92189e8.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h2 id="\u901A\u7528\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u88C5\u9970\u5668" aria-hidden="true">#</a> \u901A\u7528\u88C5\u9970\u5668</h2><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">Decorators</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u8C03\u7528\u4E4B\u524D&quot;&quot;&quot;</span>&quot;
        ret <span class="token operator">=</span> fn<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># \u5904\u7406\u76EE\u6807\u51FD\u6570\u7684\u8FD4\u56DE\u503C</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u8C03\u7528\u4E4B\u540E&quot;&quot;&quot;</span>&quot;
        <span class="token keyword">return</span> ret
    <span class="token keyword">return</span> inner
</code></pre></div><p>\u8C03\u7528 : <code>@Decorators</code></p><h2 id="\u9AD8\u9636\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u88C5\u9970\u5668" aria-hidden="true">#</a> \u9AD8\u9636\u88C5\u9970\u5668</h2><p>todo...</p><h2 id="\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> *\u548C**\u7684\u533A\u522B</h2><ul><li><p>\u4E00\u4E2A\u661F\uFF08*\uFF09\uFF1A\u8868\u793A\u63A5\u6536\u7684\u53C2\u6570\u4F5C\u4E3A\u5143\u7EC4\u6765\u5904\u7406</p></li><li><p>\u4E24\u4E2A\u661F\uFF08**\uFF09\uFF1A\u8868\u793A\u63A5\u6536\u7684\u53C2\u6570\u4F5C\u4E3A\u5B57\u5178\u6765\u5904\u7406</p></li></ul><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><ul><li>\u51FD\u6570\u540D\u7684\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u53D8\u91CF,\u53EF\u4EE5\u88AB\u8D4B\u503C,\u53EF\u4EE5\u7ED9\u522B\u7684\u53D8\u91CF\u8D4B\u503C,\u505A\u53C2\u6570\u4F20\u9012,\u505A\u8FD4\u56DE\u503C</li><li>\u95ED\u5305:\u5185\u5C42\u51FD\u6570\u5BF9\u5916\u5C42\u51FD\u6570\u53D8\u91CF\u7684\u4F7F\u7528 <ol><li>\u8BA9\u4E00\u4E2A\u53D8\u91CF\u80FD\u591F\u5E38\u9A7B\u5185\u5B58</li><li>\u4FDD\u62A4\u53D8\u91CF\u4E0D\u88AB\u4FEE\u6539</li></ol></li></ul><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">return</span> inner

fn <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><em>\u8C03\u7528\u7ED3\u679C</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">10</span>
</code></pre></div>`,12);function e(p,o){return t}var u=a(s,[["render",e]]);export{u as default};
