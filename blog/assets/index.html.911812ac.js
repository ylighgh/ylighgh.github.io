import{c as n}from"./app.f7976be9.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="\u6309\u7167\u6587\u4EF6\u540D\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u6587\u4EF6\u540D\u641C\u7D22" aria-hidden="true">#</a> \u6309\u7167\u6587\u4EF6\u540D\u641C\u7D22</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -name \u6309\u7167\u6587\u4EF6\u540D\u641C\u7D22
    -iname \u6309\u7167\u6587\u4EF6\u540D\u641C\u7D22,\u4E0D\u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199
    -inum \u6309\u7167inode\u53F7\u641C\u7D22
</code></pre></div><p>eg:\u641C\u7D22/tmp\u76EE\u5F55\u4E0B\u540E\u7F00\u540D\u4E3A.log\u7684\u6587\u4EF6</p><p><code>find /tmp -name &#39;*.log&#39;</code></p><h2 id="\u6309\u7167\u6587\u4EF6\u5927\u5C0F\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u6587\u4EF6\u5927\u5C0F\u641C\u7D22" aria-hidden="true">#</a> \u6309\u7167\u6587\u4EF6\u5927\u5C0F\u641C\u7D22</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -size <span class="token punctuation">[</span>+<span class="token punctuation">]</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>\u5927\u5C0F \u6309\u7167\u6307\u5B9A\u5927\u5C0F\u641C\u7D22\u6587\u4EF6
</code></pre></div><ul><li><code>+</code>:\u6BD4\u6307\u5B9A\u5927\u5C0F\u8FD8\u8981\u5927\u7684\u6587\u4EF6</li><li><code>-</code>:\u6BD4\u6307\u5B9A\u5927\u5C0F\u8FD8\u8981\u5C0F\u7684\u6587\u4EF6</li></ul><p>eg:\u641C\u7D22workspace\u76EE\u5F55\u4E0B\u5927\u4E8E100MB\u7684\u6587\u4EF6</p><p><code>find workspace -size +100M</code></p><h2 id="\u6309\u7167\u4FEE\u6539\u65F6\u95F4\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u4FEE\u6539\u65F6\u95F4\u641C\u7D22" aria-hidden="true">#</a> \u6309\u7167\u4FEE\u6539\u65F6\u95F4\u641C\u7D22</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -atime <span class="token punctuation">[</span>+<span class="token punctuation">]</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>\u65F6\u95F4:  \u6309\u7167\u6587\u4EF6\u8BBF\u95EE\u65F6\u95F4\u641C\u7D22
    -mtime <span class="token punctuation">[</span>+<span class="token punctuation">]</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>\u65F6\u95F4:  \u6309\u7167\u6587\u4EF6\u6570\u636E\u4FEE\u6539\u65F6\u95F4\u641C\u7D22
    -ctime <span class="token punctuation">[</span>+<span class="token punctuation">]</span><span class="token punctuation">[</span>-<span class="token punctuation">]</span>\u65F6\u95F4:  \u6309\u7167\u6587\u4EF6\u72B6\u6001\u4FEE\u6539\u65F6\u95F4\u641C\u7D22
</code></pre></div><ul><li><code>-5</code>:\u4EE3\u88685\u5929\u5185\u4FEE\u6539\u7684\u6587\u4EF6</li><li><code>5</code>:\u4EE3\u8868\u524D5~6\u5929\u5185\u4FEE\u6539\u7684\u6587\u4EF6</li><li><code>+5</code>:\u4EE3\u88686\u5929\u524D\u4FEE\u6539\u7684\u6587\u4EF6</li></ul><h2 id="\u6309\u7167\u6743\u9650\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u6743\u9650\u641C\u7D22" aria-hidden="true">#</a> \u6309\u7167\u6743\u9650\u641C\u7D22</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -uid \u7528\u6237ID:     \u6309\u7167\u7528\u6237ID\u67E5\u627E\u6240\u6709\u8005\u662F\u6307\u5B9AID\u7684\u6587\u4EF6
    -gid \u7EC4ID:       \u6309\u7167\u7528\u6237\u7EC4ID\u67E5\u627E\u6240\u5C5E\u7EC4\u662F\u6307\u5B9AID\u7684\u6587\u4EF6
    -user \u7528\u6237\u540D:    \u6309\u7167\u7528\u6237\u540D\u67E5\u627E\u6240\u6709\u8005\u662F\u6307\u5B9A\u7528\u6237\u7684\u6587\u4EF6
    -group \u7EC4\u540D:     \u6309\u7167\u7EC4\u540D\u67E5\u627E\u6240\u5C5E\u8005\u662F\u6307\u5B9A\u7528\u6237\u7684\u6587\u4EF6
    -nouser:        \u67E5\u627E\u6CA1\u6709\u6240\u6709\u8005\u7684\u6587\u4EF6
</code></pre></div><h2 id="\u6309\u7167\u6587\u4EF6\u7C7B\u578B\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6309\u7167\u6587\u4EF6\u7C7B\u578B\u641C\u7D22" aria-hidden="true">#</a> \u6309\u7167\u6587\u4EF6\u7C7B\u578B\u641C\u7D22</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -type d:        \u67E5\u627E\u76EE\u5F55
    -type f:        \u67E5\u627E\u666E\u901A\u6587\u4EF6
    -type l:        \u67E5\u627E\u8F6F\u94FE\u63A5\u6587\u4EF6
</code></pre></div><h2 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97\u7B26</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9
\u9009\u9879:
    -a:     and \u903B\u8F91\u4E0E
    -o:     or  \u903B\u8F91\u6216
    -not:   not \u903B\u8F91\u975E
</code></pre></div><p>eg:</p><ol><li><p>\u67E5\u627E<code>workspace</code>\u76EE\u5F55\u4E0B\u6587\u4EF6\u7C7B\u578B\u4E3A\u666E\u901A\u7C7B\u578B,\u5E76\u4E14\u5927\u5C0F\u5927\u4E8E100MB\u7684\u4EE5<code>.txt</code>\u7ED3\u5C3E\u7684\u6587\u4EF6</p><p><code>find workspace -name &#39;*.txt&#39; -a -size +100M -a -type f</code></p></li></ol><h2 id="\u5176\u4ED6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u9009\u9879" aria-hidden="true">#</a> \u5176\u4ED6\u9009\u9879</h2><p><code>-exec\u9009\u9879</code>:\u5C06find\u67E5\u8BE2\u7684\u7ED3\u679C\u4EA4\u7ED9<code>exec</code>\u8C03\u7528\u7684<code>command</code>\u6765\u6267\u884C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">find</span> \u641C\u7D22\u8DEF\u5F84 <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u641C\u7D22\u5185\u5BB9 -exec <span class="token builtin class-name">command</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre></div><p>eg:\u5217\u51FA\u5F53\u524D\u76EE\u5F55\u4E0B\u6587\u4EF6\u7C7B\u578B\u4E3A\u8F6F\u94FE\u63A5\u6587\u4EF6\u7684\u4FE1\u606F</p><p><code>find . -type l -exec ls -l {} \\;</code></p>`,25);function c(t,p){return e}var d=a(s,[["render",c]]);export{d as default};
