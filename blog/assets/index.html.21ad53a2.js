import{c as e}from"./app.276f34a3.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const d={},r=e(`<h2 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B</h2><ol><li>\u6E90\u7801\u5305 (\u81EA\u7531\u9009\u62E9\u529F\u80FD,\u7F16\u8BD1\u5B89\u88C5,\u7A33\u5B9A\u6548\u7387\u9AD8)</li><li>\u4E8C\u8FDB\u5236\u5305(\u5305\u7BA1\u7406\u7CFB\u7EDF\u7B80\u5355,\u5B89\u88C5\u901F\u5EA6\u5FEB)</li></ol><h2 id="\u6E90\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5305" aria-hidden="true">#</a> \u6E90\u7801\u5305</h2><h2 id="\u4E8C\u8FDB\u5236\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5305" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u5305</h2><ul><li><p>DPKG\u5305</p></li><li><p>RPM\u5305</p></li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><h4 id="\u5B89\u88C5\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F4D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u4F4D\u7F6E</h4><table><thead><tr><th>\u8DEF\u5F84</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>/etc/</td><td>\u914D\u7F6E\u5B89\u88C5\u6587\u4EF6\u76EE\u5F55</td></tr><tr><td>/usr/bin/</td><td>\u53EF\u6267\u884C\u7684\u547D\u4EE4\u5B89\u88C5\u76EE\u5F55</td></tr><tr><td>/usr/lib/</td><td>\u7A0B\u5E8F\u6240\u4F7F\u7528\u7684\u51FD\u6570\u5E93\u4FDD\u5B58\u4F4D\u7F6E</td></tr><tr><td>/usr/share/doc/</td><td>\u57FA\u672C\u7684\u8F6F\u4EF6\u4F7F\u7528\u624B\u518C\u76EE\u5F55</td></tr><tr><td>/usr/share/man/</td><td>\u5E2E\u52A9\u6587\u4EF6\u4FDD\u5B58\u76EE\u5F55</td></tr></tbody></table><h4 id="\u5B89\u88C5\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u547D\u4EE4" aria-hidden="true">#</a> \u5B89\u88C5\u547D\u4EE4</h4><p><code>rpm -ivh \u5305\u540D</code></p><p>\u5176\u4ED6\u62D3\u5C55\u9009\u9879</p><ul><li>--nodeps \u4E0D\u68C0\u6D4B\u4F9D\u8D56\u6027\u5B89\u88C5</li><li>--replacefiles \u66FF\u6362\u6587\u4EF6\u5B89\u88C5</li><li>--replacepkgs \u66FF\u6362\u8F6F\u4EF6\u5305\u5B89\u88C5</li><li>--force \u5F3A\u5236\u5B89\u88C5</li><li>--test \u6D4B\u8BD5\u5B89\u88C5(\u68C0\u6D4B\u4F9D\u8D56\u6027)</li><li>--prefix \u6267\u884C\u5B89\u88C5\u8DEF\u5F84</li></ul><h4 id="\u5347\u7EA7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u547D\u4EE4" aria-hidden="true">#</a> \u5347\u7EA7\u547D\u4EE4</h4><p><code>rpm -Uvh \u5305\u540D</code></p><ul><li><p>-U \u5347\u7EA7\u5B89\u88C5,\u5982\u679C\u6CA1\u6709\u88C5\u8FC7,\u7CFB\u7EDF\u76F4\u63A5\u5B89\u88C5,\u5982\u679C\u88C5\u8FC7,\u7248\u672C\u8F83\u65E7,\u5219\u4F1A\u5347\u7EA7\u5230\u5FC3\u7248\u672C</p></li><li><p>-F \u5347\u7EA7\u5B89\u88C5,\u5982\u679C\u6CA1\u6709\u88C5\u8FC7,\u5219\u4E0D\u4F1A\u5B89\u88C5</p></li></ul><h4 id="\u5378\u8F7D\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u547D\u4EE4" aria-hidden="true">#</a> \u5378\u8F7D\u547D\u4EE4</h4><p><code>rpm -e \u5305\u540D</code></p><ul><li>--nodeps \u4E0D\u68C0\u6D4B\u4F9D\u8D56\u6027</li></ul><h4 id="\u67E5\u8BE2\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u547D\u4EE4" aria-hidden="true">#</a> \u67E5\u8BE2\u547D\u4EE4</h4><p><code>rpm -q \u5305\u540D</code></p><p>\u67E5\u8BE2\u7CFB\u7EDF\u6240\u6709\u8F6F\u4EF6\u5305</p><p><code>rpm -qa</code></p><p>\u67E5\u8BE2\u8F6F\u4EF6\u8BE6\u7EC6\u4FE1\u606F</p><p><code>rpm -qi \u5305\u540D</code></p><p>\u67E5\u8BE2\u672A\u5B89\u88C5\u8F6F\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F</p><p><code>rpm -qip \u5305\u540D</code></p><p>\u67E5\u8BE2\u5305\u4E2D\u7684\u6587\u4EF6\u76EE\u5F55</p><p><code>rpm -ql \u5305\u540D</code></p><p>\u67E5\u8BE2\u672A\u5B89\u88C5\u5305\u5C06\u8981\u5B89\u88C5\u7684\u6587\u4EF6\u76EE\u5F55</p><p><code>rpm -qlp \u5305\u540D</code></p><p>\u67E5\u8BE2\u6587\u4EF6\u7CFB\u7EDF\u5C5E\u4E8E\u54EA\u4E2A\u5305</p><p><code>rpm -qf \u5305\u540D</code></p><p>\u67E5\u8BE2\u8F6F\u4EF6\u5305\u6240\u4F9D\u8D56\u7684\u8F6F\u4EF6\u5305</p><p><code>rpm -qR \u5305\u540D</code></p><ul><li>-p \u67E5\u8BE2\u672A\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u6240\u9700\u7684\u4F9D\u8D56\u8F6F\u4EF6\u5305</li></ul><h3 id="\u7F16\u8BD1\u5B89\u88C5apache" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5apache" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5Apache</h3><div class="language-text ext-text"><pre class="language-text"><code>Todo... 
</code></pre></div>`,37);function t(i,h){return r}var l=a(d,[["render",t]]);export{l as default};
