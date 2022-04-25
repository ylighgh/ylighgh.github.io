import{c as n}from"./app.205148aa.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="fork\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#fork\u9879\u76EE" aria-hidden="true">#</a> Fork\u9879\u76EE</h2><h2 id="\u6DFB\u52A0\u4E3B\u9879\u76EE\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E3B\u9879\u76EE\u4ED3\u5E93" aria-hidden="true">#</a> \u6DFB\u52A0\u4E3B\u9879\u76EE\u4ED3\u5E93</h2><p><code>git remote add upstream git@github.com:xxx/xxx.git</code></p><p>\u68C0\u6D4B\u662F\u5426\u6DFB\u52A0\u6210\u529F: <code>git remote -v</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>origin  git@github.com:ylighgh/ChiKeXing.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin  git@github.com:ylighgh/ChiKeXing.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
upstream        git@github.com:ylighgh-01/ChiKeXing.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
upstream        git@github.com:ylighgh-01/ChiKeXing.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h2><p>\u67E5\u770B\u5F53\u524D\u5206\u652F: <code>git branch</code></p><p>\u65B0\u5EFA\u5206\u652F:</p><ul><li>\u65E7\u7248: <code>git checkout -b xxx</code></li><li>\u65B0\u7248: <code>git switch -c xxx</code></li></ul><p>\u5207\u6362\u5206\u652F:</p><ul><li>\u65E7\u7248:<code>git checkout xxx</code></li><li>\u65B0\u7248: <code>git switch xxx</code></li></ul><p>\u67E5\u770B\u5206\u652F\u72B6\u6001:<code>git status</code></p><p>\u5220\u9664\u5206\u652F:<code>git branch -d xxx</code></p><p>\u5408\u5E76\u5206\u652F:<code>git merge xxx</code></p><h2 id="\u51B2\u7A81\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u51B2\u7A81\u95EE\u9898" aria-hidden="true">#</a> \u51B2\u7A81\u95EE\u9898</h2><p>\u5728<code>push</code> Todo....</p><h2 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h2><p>\u63A8\u9001\u81EA\u5DF1\u7684\u4ED3\u5E93:<code>git push origin HEAD:xxx</code> (\u63A8\u9001\u5230xxx\u5206\u652F\u4E0B)</p><h2 id="\u9879\u76EE\u64CD\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u64CD\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> \u9879\u76EE\u64CD\u4F5C\u6D41\u7A0B</h2><ol><li><p>\u6BCF\u6B21\u5F00\u53D1\u65F6,\u8FDB\u5165\u5230<code>main</code>\u5206\u652F,\u6267\u884C:<code>git pull upstream main</code>(\u62C9\u53BB\u8FDC\u7A0B\u4E3B\u4ED3\u5E93\u6700\u65B0\u7248\u672C\u7684\u5185\u5BB9)</p></li><li><p>\u65B0\u5EFAdev\u5206\u652F: <code>git switch -c dev</code></p></li><li><p>\u5207\u6362\u5230dev\u5206\u652F: <code>git switch dev</code></p></li><li><p>\u5F00\u53D1\u5B8C\u6210\u540E\u6267\u884C:</p></li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;xxx&#39;</span>

<span class="token comment"># \u5207\u6362\u5230main\u5206\u652F</span>
<span class="token function">git</span> switch main

<span class="token comment"># \u5408\u5E76dev\u7684\u5206\u652F\u64CD\u4F5C</span>
<span class="token function">git</span> merge dev

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;xxx&#39;</span>

<span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0Bmain\u4ED3\u5E93</span>
<span class="token function">git</span> push origin HEAD:main
</code></pre></div><ol start="5"><li>\u53BB<code>GitHub</code>\u4E0A\u521B\u5EFAPR\u8BF7\u6C42,\u8FDB\u884C\u4EE3\u7801\u5408\u5E76</li></ol>`,22);function i(t,c){return e}var d=a(s,[["render",i]]);export{d as default};
