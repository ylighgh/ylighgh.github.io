import{c as e}from"./app.2a13a090.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},n=e(`<h2 id="\u67E5\u770B\u7528\u6237\u540D" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7528\u6237\u540D" aria-hidden="true">#</a> \u67E5\u770B\u7528\u6237\u540D</h2><p><code>git config user.name</code></p><h2 id="\u5207\u6362\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u7528\u6237" aria-hidden="true">#</a> \u5207\u6362\u7528\u6237</h2><p><code>git config --global user.name &quot;xxx&quot; </code></p><h2 id="\u5207\u6362\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u90AE\u7BB1" aria-hidden="true">#</a> \u5207\u6362\u90AE\u7BB1</h2><p><code>git config --global user.email &quot;xxx&quot;</code></p><h2 id="git\u591A\u7528\u6237\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#git\u591A\u7528\u6237\u8BBE\u7F6E" aria-hidden="true">#</a> Git\u591A\u7528\u6237\u8BBE\u7F6E</h2><h3 id="\u6DFB\u52A0\u79C1\u94A5" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u79C1\u94A5" aria-hidden="true">#</a> \u6DFB\u52A0\u79C1\u94A5</h3><ol><li>\u6253\u5F00ssh-agent</li></ol><p><code>eval $(ssh-agent -s)</code></p><ol start="2"><li>\u6DFB\u52A0\u79C1\u94A5</li></ol><p><code>ssh-add ~/.ssh/id_rsa_one</code></p><p><code>ssh-add ~/.ssh/id_rsa_two</code></p><h3 id="\u4FEE\u6539config\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539config\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539config\u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;&gt;</span> ~/.ssh/config
Host one.github.com
HostName github.com
User ID1 <span class="token comment"># \u7528\u6237\u540D1</span>
IdentityFile ~/.ssh/id_rsa_one

Host two.github.com  <span class="token comment"># \u524D\u7F00\u540D\u53EF\u4EE5\u4EFB\u610F\u8BBE\u7F6E</span>
HostName github.com
User ID2 <span class="token comment"># \u7528\u6237\u540D2</span>
IdentityFile ~/.ssh/id_rsa_two
EOF
</code></pre></div><h3 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h3><p><code>ssh -T git@one.github.com</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u256D\u2500ylighgh@ylighgh ~/.ssh 
\u2570\u2500$ <span class="token function">ssh</span> -T git@ylighgh.github.com
Hi ylighgh<span class="token operator">!</span> You<span class="token string">&#39;ve successfully authenticated, but GitHub does not provide shell access.
\u256D\u2500ylighgh@ylighgh ~/.ssh 
\u2570\u2500$ ssh -T git@ylighgh-01.github.com                                                                                   1 \u21B5
Hi ylighgh-01! You&#39;</span>ve successfully authenticated, but GitHub does not provide shell access.
</code></pre></div><h2 id="\u62C9\u53D6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u6587\u4EF6" aria-hidden="true">#</a> \u62C9\u53D6\u6587\u4EF6</h2><p>\u4F8B\u5982\u6211\u8981\u514B\u9686\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7684ssh\u5730\u5740\u662F\uFF1A<code>git@github.com:happyCoding1024/FrontendLearningTool.git</code></p><p>\u5047\u8BBE\u8FD9\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u662F\u5728GitHub\u8D26\u53F7\u4E3AID1\u7684\u4ED3\u5E93\u4E2D\uFF0C\u90A3\u4E48\u514B\u9686\u65F6\u9700\u8981\u6539\u6210\u4E0B\u9762\u7684\u5F62\u5F0F\uFF1A</p><p><code>git clone git@one.github.com:happyCoding1024/FrontendLearningTool.git</code></p><h2 id="\u672C\u5730\u5316" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5316" aria-hidden="true">#</a> \u672C\u5730\u5316</h2><p>\u7531\u4E8E\u73B0\u5728\u4E0D\u662F\u5168\u5C40\u914D\u7F6E\u4E86\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u4ED3\u5E93\u90FD\u9700\u8981\u914D\u7F6E\u5404\u81EA\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1\u6765\u786E\u5B9A\u8FD9\u4E2A\u4ED3\u5E93\u662F\u548C\u54EA\u4E2A GitHub \u8D26\u53F7\u8FDE\u63A5\u7684\u3002</p><p>\u5728\u9879\u76EE\u6587\u4EF6\u5939\u4E2D\u53F3\u952E\u6253\u5F00 GitBash\uFF0C\u7136\u540E\u6267\u884C\u4E0B\u9762 \u7684\u8BED\u53E5\uFF0C\u8BBE\u7F6E\u8D26\u53F7\u548C\u76F8\u5E94\u7684\u9879\u76EE\u5173\u8054\uFF1A</p><p><code>git config user.name xxx</code></p><p><code>git config user.email xxx@qq.com</code></p>`,27);function o(i,t){return n}var d=a(s,[["render",o]]);export{d as default};
