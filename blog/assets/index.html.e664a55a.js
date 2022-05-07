import{c as n}from"./app.d8bd959b.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="shell\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#shell\u7B80\u4ECB" aria-hidden="true">#</a> Shell\u7B80\u4ECB</h2><p>Shell \u662F\u4E00\u4E2A\u7528 C \u8BED\u8A00\u7F16\u5199\u7684\u7A0B\u5E8F\uFF0C\u5B83\u662F\u7528\u6237\u4F7F\u7528 Linux \u7684\u6865\u6881</p><p><strong>\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u6709\u54EA\u4E9B\u89E3\u91CA\u5668</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u2570\u2500$ <span class="token function">cat</span> /etc/shells
<span class="token comment"># Pathnames of valid login shells.</span>
<span class="token comment"># See shells(5) for details.</span>

/bin/sh
/bin/bash
/usr/bin/git-shell
/bin/zsh
/usr/bin/zsh
</code></pre></div><h2 id="shell\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#shell\u4F7F\u7528" aria-hidden="true">#</a> Shell\u4F7F\u7528</h2><h3 id="\u5B9A\u4E49\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u548C\u5220\u9664" aria-hidden="true">#</a> \u5B9A\u4E49\u548C\u5220\u9664</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF</span>
<span class="token assign-left variable">variable_name</span><span class="token operator">=</span><span class="token number">2</span>

<span class="token comment"># \u5220\u9664\u53D8\u91CF</span>
<span class="token builtin class-name">unset</span> variable_name
</code></pre></div><h3 id="\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> \u53C2\u6570\u4F20\u9012</h3><table><thead><tr><th>\u53C2\u6570\u5904\u7406</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$n</td><td>$0 : \u811A\u672C\u540D\u79F0(\u5305\u542B\u6267\u884C\u7684\u8DEF\u5F84) <br> $1 : \u811A\u672C\u7684\u4E00\u4E2A\u53C2\u6570</td></tr><tr><td>$#</td><td>\u53C2\u6570\u7684\u4E2A\u6570</td></tr><tr><td>$*</td><td>\u4EE5\u4E00\u4E2A\u5355\u5B57\u7B26\u4E32\u663E\u793A\u6240\u6709\u5411\u811A\u672C\u4F20\u9012\u7684\u53C2\u6570</td></tr><tr><td>$@</td><td>\u57FA\u672C\u7684\u8F6F\u4EF6\u4F7F\u4E0E$*\u76F8\u540C\uFF0C\u4F46\u662F\u4F7F\u7528\u65F6\u52A0\u5F15\u53F7\uFF0C\u5E76\u5728\u5F15\u53F7\u4E2D\u8FD4\u56DE\u6BCF\u4E2A\u53C2\u6570\u7528\u624B\u518C\u76EE\u5F55</td></tr><tr><td>$?</td><td>\u663E\u793A\u6700\u540E\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001 <br> 0\u8868\u793A\u6CA1\u6709\u9519\u8BEF\uFF0C\u5176\u4ED6\u4EFB\u4F55\u503C\u8868\u660E\u6709\u9519\u8BEF\u3002</td></tr></tbody></table><p><em><em>$</em> \u4E0E $@ \u533A\u522B\uFF1A</em>*</p><ul><li>\u76F8\u540C\u70B9\uFF1A\u90FD\u662F\u5F15\u7528\u6240\u6709\u53C2\u6570\u3002</li><li>\u4E0D\u540C\u70B9\uFF1A\u53EA\u6709\u5728\u53CC\u5F15\u53F7\u4E2D\u4F53\u73B0\u51FA\u6765\u3002\u5047\u8BBE\u5728\u811A\u672C\u8FD0\u884C\u65F6\u5199\u4E86\u4E09\u4E2A\u53C2\u6570 1\u30012\u30013\uFF0C\uFF0C\u5219 &quot; * &quot; \u7B49\u4EF7\u4E8E &quot;1 2 3&quot;\uFF08\u4F20\u9012\u4E86\u4E00\u4E2A\u53C2\u6570\uFF09\uFF0C\u800C &quot;@&quot; \u7B49\u4EF7\u4E8E &quot;1&quot; &quot;2&quot; &quot;3&quot;\uFF08\u4F20\u9012\u4E86\u4E09\u4E2A\u53C2\u6570\uFF09</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5411\u811A\u672C\u8FFD\u52A0\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> test.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-- \\<span class="token variable">$*</span> \u6F14\u793A ---&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-- \\<span class="token variable">$@</span> \u6F14\u793A ---&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment"># \u6DFB\u52A0\u6743\u9650</span>
<span class="token function">chmod</span> +x test.sh

<span class="token comment"># \u6267\u884C\u7ED3\u679C</span>
./test.sh
-- <span class="token variable">$*</span> \u6F14\u793A ---
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
-- <span class="token variable">$@</span> \u6F14\u793A ---
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
</code></pre></div><h3 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h3><h4 id="\u5173\u7CFB\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5173\u7CFB\u8FD0\u7B97\u7B26</h4><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-eq</td><td>\u68C0\u6D4B\u4E24\u4E2A\u6570\u662F\u5426\u76F8\u7B49\uFF0C\u76F8\u7B49\u8FD4\u56DE true</td></tr><tr><td>-ne</td><td>\u68C0\u6D4B\u4E24\u4E2A\u6570\u662F\u5426\u4E0D\u76F8\u7B49\uFF0C\u4E0D\u76F8\u7B49\u8FD4\u56DE true</td></tr><tr><td>-eq</td><td>\u68C0\u6D4B\u5DE6\u8FB9\u7684\u6570\u662F\u5426\u5927\u4E8E\u53F3\u8FB9\u7684\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u8FD4\u56DE true</td></tr><tr><td>-eq</td><td>\u68C0\u6D4B\u5DE6\u8FB9\u7684\u6570\u662F\u5426\u5C0F\u4E8E\u53F3\u8FB9\u7684\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u8FD4\u56DE true</td></tr><tr><td>-eq</td><td>\u68C0\u6D4B\u5DE6\u8FB9\u7684\u6570\u662F\u5426\u5927\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u7684\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u8FD4\u56DE true</td></tr><tr><td>-eq</td><td>\u68C0\u6D4B\u5DE6\u8FB9\u7684\u6570\u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u7684\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u8FD4\u56DE true</td></tr></tbody></table><h3 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h3><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h4><p><strong>if</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    command2
    <span class="token punctuation">..</span>.
    commandN 
<span class="token keyword">fi</span>
</code></pre></div><p><strong>if else</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
    command2
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">else</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">fi</span>
</code></pre></div><p><strong>if elif else</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition
<span class="token keyword">then</span>
    command1 
<span class="token keyword">elif</span>
<span class="token keyword">then</span>
    command2
<span class="token keyword">else</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">fi</span>
</code></pre></div><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u589E\u5F3A\u578Bfor\u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> item1 item2 <span class="token punctuation">..</span>. itemN
<span class="token keyword">do</span>
    command1
    command2
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">done</span>

<span class="token comment"># \u7B80\u5355for\u5FAA\u73AF</span>
<span class="token keyword">for</span> init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment
<span class="token keyword">do</span>
    command1
    command2
    <span class="token punctuation">..</span>.
    commandN
<span class="token keyword">done</span>
</code></pre></div><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">while</span> condition
<span class="token keyword">do</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">done</span>
</code></pre></div><h4 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h4><p><code>;;</code>\u7C7B\u4F3C\u4E8E<code>break</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">case</span> \u503C <span class="token keyword">in</span>
\u6A21\u5F0F1<span class="token punctuation">)</span>
    command1
    command2
    <span class="token punctuation">..</span>.
    commandN
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
\u6A21\u5F0F2<span class="token punctuation">)</span>
    command1
    command2
    <span class="token punctuation">..</span>.
    commandN
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span> <span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5</span>
    command1
    command2
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token keyword">function</span> <span class="token punctuation">]</span> funname <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token punctuation">{</span>

    action<span class="token punctuation">;</span>

    <span class="token punctuation">[</span>return int<span class="token punctuation">;</span><span class="token punctuation">]</span>

<span class="token punctuation">}</span>

<span class="token number">1</span>\u3001\u53EF\u4EE5\u5E26function fun<span class="token punctuation">(</span><span class="token punctuation">)</span> \u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5fun<span class="token punctuation">(</span><span class="token punctuation">)</span> \u5B9A\u4E49,\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\u3002

<span class="token number">2</span>\u3001\u53C2\u6570\u8FD4\u56DE\uFF0C\u53EF\u4EE5\u663E\u793A\u52A0\uFF1Areturn \u8FD4\u56DE\uFF0C\u5982\u679C\u4E0D\u52A0\uFF0C\u5C06\u4EE5\u6700\u540E\u4E00\u6761\u547D\u4EE4\u8FD0\u884C\u7ED3\u679C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u503C\u3002 return\u540E\u8DDF\u6570\u503Cn<span class="token punctuation">(</span><span class="token number">0</span>-255
</code></pre></div><h2 id="\u8F93\u5165\u8F93\u51FA\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u8F93\u51FA\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u8F93\u5165\u8F93\u51FA\u91CD\u5B9A\u5411</h2><p>\u8F93\u51FA\u91CD\u5B9A\u5411:<code>command1 &gt; file1</code></p><p>\u8F93\u5165\u91CD\u5B9A\u5411:<code>command1 &lt; file1</code></p><p><strong>/dev/null \u6587\u4EF6</strong></p><p>\u5982\u679C\u5E0C\u671B\u6267\u884C\u67D0\u4E2A\u547D\u4EE4\uFF0C\u4F46\u53C8\u4E0D\u5E0C\u671B\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u8F93\u51FA\u7ED3\u679C</p><p>\u90A3\u4E48\u53EF\u4EE5\u5C06\u8F93\u51FA\u91CD\u5B9A\u5411\u5230 /dev/null\uFF1A<code>command &gt; /dev/null</code></p><p>\u5982\u679C\u5E0C\u671B\u5C4F\u853D stdout \u548C stderr\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199:<code>command &gt; /dev/null 2&gt;&amp;1</code></p><h2 id="\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5176\u4ED6\u6CE8\u610F\u4E8B\u9879</h2><p><strong>\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7</strong></p><p>\u5355\u5F15\u53F7 : \u88AB\u5355\u5F15\u53F7\u5F15\u8D77\u6765\u7684\u5185\u5BB9\u4F1A\u539F\u6837\u8F93\u51FA</p><p>\u53CC\u5F15\u53F7 : \u88AB\u53CC\u5F15\u53F7\u5F15\u8D77\u6765\u7684\u5185\u5BB9\u53EF\u4EE5\u8F93\u51FA\u53D8\u91CF</p>`,43);function t(o,p){return e}var d=a(s,[["render",t]]);export{d as default};
