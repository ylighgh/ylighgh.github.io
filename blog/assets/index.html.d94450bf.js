import{c as t}from"./app.9036987c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=t(`<h2 id="\u65E5\u5FD7\u6587\u4EF6\u7684\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u6587\u4EF6\u7684\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u65E5\u5FD7\u6587\u4EF6\u7684\u547D\u540D\u89C4\u5219</h2><p>\u65E5\u5FD7\u8F6E\u66FF\u6700\u4E3B\u8981\u7684\u4F5C\u7528\u5C31\u662F\u628A\u65E7\u7684\u65E5\u5FD7\u6587\u4EF6\u79FB\u52A8\u5E76\u6539\u540D\uFF0C\u540C\u65F6\u5EFA\u7ACB\u65B0\u7684\u7A7A\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5F53\u65E7\u65E5\u5FD7\u6587\u4EF6\u8D85\u51FA\u4FDD\u5B58\u7684\u8303\u56F4\u4E4B\u540E\uFF0C\u5C31\u4F1A\u8FDB\u884C\u5220\u9664</p><p>\u4E3B\u8981\u4F9D\u9760<code>/etc/logrotate.conf</code>\u914D\u7F6E\u6587\u4EF6\u4E2D<code>dateext</code>\u53C2\u6570\uFF1A</p><ul><li><p>\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u4E2D\u62E5\u6709<code>dateext</code>\u53C2\u6570\uFF0C\u90A3\u4E48\u65E5\u5FD7\u4F1A\u7528\u65E5\u671F\u6765\u4F5C\u4E3A\u65E5\u5FD7\u6587\u4EF6\u7684\u540E\u7F00\uFF0C\u4F8B\u5982 <code>secure-20220505</code>\u3002\u8FD9\u6837\u7684\u8BDD\u65E5\u5FD7\u6587\u4EF6\u540D\u4E0D\u4F1A\u91CD\u53E0\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u9700\u8981\u65E5\u5FD7\u6587\u4EF6\u7684\u6539\u540D\uFF0C\u53EA\u9700\u8981\u4FDD\u5B58\u6307\u5B9A\u7684\u65E5\u5FD7\u4E2A\u6570\uFF0C\u5220\u9664\u591A\u4F59\u7684\u65E5\u5FD7\u6587\u4EF6\u5373\u53EF\u3002</p></li><li><p>\u5982\u679C\u914D\u7F6E\u6587\u4EF6\u4E2D\u6CA1\u6709<code>dateext</code>\u53C2\u6570\uFF0C\u90A3\u4E48\u65E5\u5FD7\u6587\u4EF6\u5C31\u9700\u8981\u8FDB\u884C\u6539\u540D\u4E86\u3002\u5F53\u7B2C\u4E00\u6B21\u8FDB\u884C\u65E5\u5FD7\u8F6E\u66FF\u65F6\uFF0C\u5F53\u524D\u7684<code>secure</code>\u65E5\u5FD7\u4F1A\u81EA\u52A8\u6539\u540D\u4E3A<code>secure.1</code>\uFF0C\u7136\u540E\u65B0\u5EFA<code>secure</code>\u65E5\u5FD7\uFF0C\u7528\u6765\u4FDD\u5B58\u65B0\u7684\u65E5\u5FD7\u3002\u5F53\u7B2C\u4E8C\u6B21\u8FDB\u884C\u65E5\u5FD7\u8F6E\u66FF\u65F6\uFF0C<code>secure.1</code>\u4F1A\u81EA\u52A8\u6539\u540D\u4E3A<code>secure.2</code>\uFF0C\u5F53\u524D\u7684<code>secure</code>\u65E5\u5FD7\u4F1A\u81EA\u52A8\u6539\u540D\u4E3A<code>secure.1</code>\uFF0C\u7136\u540E\u4E5F\u4F1A\u65B0\u5EFA<code>secure</code>\u65E5\u5FD7\uFF0C\u7528\u6765\u4FDD\u5B58\u65B0\u7684\u65E5\u5FD7\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p></li></ul><h2 id="logrotate-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#logrotate-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> logrotate \u914D\u7F6E\u6587\u4EF6</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># see &quot;man logrotate&quot; for details</span>
 <span class="token comment"># rotate log files weekly</span>
 weekly
 <span class="token comment">#\u6BCF\u5468\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u4E00\u6B21\u8F6E\u66FF</span>
 <span class="token comment"># keep 4 weeks worth of backlogs</span>
 rotate <span class="token number">4</span>
 <span class="token comment">#\u4FDD\u5B58 4 \u4E2A\u65E5\u5FD7\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u8FDB\u884C\u4E86 5 \u6B21\u65E5\u5FD7\u8F6E\u66FF\uFF0C\u5C31\u4F1A\u5220\u9664\u7B2C\u4E00\u4E2A\u5907\u4EFD\u65E5\u5FD7</span>
 <span class="token comment"># create new (empty) log files after rotating old ones</span>
 create
 <span class="token comment">#\u5728\u65E5\u5FD7\u8F6E\u66FF\u65F6\uFF0C\u81EA\u52A8\u521B\u5EFA\u65B0\u7684\u65E5\u5FD7\u6587\u4EF6</span>
 <span class="token comment"># use date as a suffix of the rotated file</span>
 dateext
 <span class="token comment">#\u4F7F\u7528\u65E5\u671F\u4F5C\u4E3A\u65E5\u5FD7\u8F6E\u66FF\u6587\u4EF6\u7684\u540E\u7F00</span>
 <span class="token comment"># uncomment this if you want your log files compressed</span>
 <span class="token comment">#compress</span>
 <span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u662F\u5426\u538B\u7F29\u3002\u5982\u679C\u53D6\u6D88\u6CE8\u91CA\uFF0C\u5219\u65E5\u5FD7\u4F1A\u5728\u8F6C\u50A8\u7684\u540C\u65F6\u8FDB\u884C\u538B\u7F29</span>
 <span class="token comment">#\u4EE5\u4E0A\u65E5\u5FD7\u65E5\u5FD7\u914D\u7F6E\u4E3A\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982\u679C\u9700\u8981\u8F6E\u66FF\u7684\u65E5\u5FD7\u6CA1\u6709\u8BBE\u5B9A\u72EC\u7ACB\u7684\u53C2\u6570\uFF0C\u90A3\u4E48\u90FD\u4F1A\u9075\u5B88\u4EE5\u4E0A\u53C2\u6570\u3002</span>
 <span class="token comment">#\u5982\u679C\u8F6E\u66FF\u65E5\u5FD7\u914D\u7F6E\u4E86\u72EC\u7ACB\u53C2\u6570\uFF0C\u90A3\u4E48\u72EC\u7ACB\u53C2\u6570\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002</span>
 <span class="token comment"># RPM packages drop log rotation information into this directory</span>
 include etc/logrotate.d
 <span class="token comment">#\u5305\u542B/etc/logrotate.d/\u76EE\u5F55\u4E2D\u6240\u6709\u7684\u5B50\u914D\u7F6E\u6587\u4EF6\u3002\u4E5F\u5C31\u662F\u8BF4\u4F1A\u628A\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u6240\u6709\u5B50\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u8FDB\u6765\uFF0C</span>
 <span class="token comment">#\u8FDB\u884C\u65E5\u5FD7\u8F6E\u66FF\u3002</span>
 <span class="token comment"># no packages own wtmp and btmp -- we&#39;ll rotate them here</span>
 <span class="token comment">#\u4EE5\u4E0B\u4E24\u4E2A\u8F6E\u66FF\u65E5\u5FD7\u6709\u81EA\u5DF1\u7684\u72EC\u7ACB\u53C2\u6570\uFF0C\u5982\u679C\u548C\u9ED8\u8BA4\u7684\u53C2\u6570\u51B2\u7A81\uFF0C\u5219\u72EC\u7ACB\u53C2\u6570\u751F\u6548\u3002</span>
 /var/log/wtmp <span class="token punctuation">{</span>
 <span class="token comment">#\u4EE5\u4E0B\u53C2\u6570\u4EC5\u5BF9\u6B64\u76EE\u5F55\u6709\u6548</span>
 monthly
 <span class="token comment">#\u6BCF\u6708\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u4E00\u6B21\u8F6E\u66FF</span>
 create 0664 root utmp
 <span class="token comment">#\u5EFA\u7ACB\u7684\u65B0\u65E5\u5FD7\u6587\u4EF6\uFF0C\u6743\u9650\u662F 0664\uFF0C\u6240\u6709\u8005\u662F root\uFF0C\u6240\u5C5E\u7EC4\u662F utmp \u7EC4</span>
 minsize 1M <span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u6700\u5C0F\u8F6E\u66FF\u5927\u5C0F\u662F 1MB\u3002\u4E5F\u5C31\u662F\u65E5\u5FD7\u4E00\u5B9A\u8981\u8D85\u8FC7 1MB \u624D\u4F1A\u8F6E\u66FF\uFF0C\u5426\u5219\u5C31\u7B97</span>
 <span class="token comment">#\u65F6\u95F4\u8FBE\u5230\u4E00\u4E2A\u6708\uFF0C\u4E5F\u4E0D\u8FDB\u884C\u65E5\u5FD7\u8F6C\u50A8</span>
 rotate <span class="token number">1</span>
 <span class="token comment">#\u4EC5\u4FDD\u7559\u4E00\u4E2A\u65E5\u5FD7\u5907\u4EFD\u3002\u4E5F\u5C31\u662F\u53EA\u6709 wtmp \u548C wtmp.1 \u65E5\u5FD7\u4FDD\u7559\u800C\u5DF2</span>
 <span class="token punctuation">}</span>
 /var/log/btmp <span class="token punctuation">{</span>
 <span class="token comment">#\u4EE5\u4E0B\u53C2\u6570\u53EA\u5BF9/var/log/btmp \u751F\u6548</span>
 missingok
 <span class="token comment">#\u5982\u679C\u65E5\u5FD7\u4E0D\u5B58\u5728\uFF0C\u5219\u5FFD\u7565\u8BE5\u65E5\u5FD7\u7684\u8B66\u544A\u4FE1\u606F</span>
  monthly
  create 0600 root utmp
  rotate <span class="token number">1</span>
 <span class="token punctuation">}</span>
 <span class="token comment"># system-specific logs may be also be configured here.</span>
</code></pre></div><p><code>logrotate</code>\u914D\u7F6E\u6587\u4EF6\u7684\u4E3B\u8981\u53C2\u6570\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td>daily</td><td>\u65E5\u5FD7\u7684\u8F6E\u66FF\u5468\u671F\u662F\u6BCF\u5929</td></tr><tr><td>weekly</td><td>\u65E5\u5FD7\u7684\u8F6E\u66FF\u5468\u671F\u662F\u6BCF\u5468</td></tr><tr><td>monthly</td><td>\u65E5\u5FD7\u7684\u8F6E\u66FF\u5468\u671F\u662F\u6BCF\u6708</td></tr><tr><td>rotate</td><td>\u6570\u5B57 \u4FDD\u7559\u7684\u65E5\u5FD7\u6587\u4EF6\u7684\u4E2A\u6570\u30020 \u6307\u6CA1\u6709\u5907\u4EFD</td></tr><tr><td>compress</td><td>\u65E5\u5FD7\u8F6E\u66FF\u65F6\uFF0C\u65E7\u7684\u65E5\u5FD7\u8FDB\u884C\u538B\u7F29</td></tr><tr><td>create mode owner group</td><td>\u5EFA\u7ACB\u65B0\u65E5\u5FD7\uFF0C\u540C\u65F6\u6307\u5B9A\u65B0\u65E5\u5FD7\u7684\u6743\u9650\u4E0E\u6240\u6709\u8005\u548C\u6240\u5C5E\u7EC4\u3002\u5982create 0600 root utmp</td></tr><tr><td>mail address</td><td>\u5F53\u65E5\u5FD7\u8F6E\u66FF\u65F6\uFF0C\u8F93\u51FA\u5185\u5BB9\u901A\u8FC7\u90AE\u4EF6\u53D1\u9001\u5230\u6307\u5B9A\u7684\u90AE\u4EF6\u5730\u5740\u3002\u5982mail shenc@lamp.net</td></tr><tr><td>missingok</td><td>\u5982\u679C\u65E5\u5FD7\u4E0D\u5B58\u5728\uFF0C\u5219\u5FFD\u7565\u8BE5\u65E5\u5FD7\u7684\u8B66\u544A\u4FE1\u606F</td></tr><tr><td>notifempty</td><td>\u5982\u679C\u65E5\u5FD7\u4E3A\u7A7A\u6587\u4EF6\uFF0C\u5219\u4E0D\u8FDB\u884C\u65E5\u5FD7\u8F6E\u66FF</td></tr><tr><td>minsize</td><td>\u5927\u5C0F \u65E5\u5FD7\u8F6E\u66FF\u7684\u6700\u5C0F\u503C\u3002\u4E5F\u5C31\u662F\u65E5\u5FD7\u4E00\u5B9A\u8981\u8FBE\u5230\u8FD9\u4E2A\u6700\u5C0F\u503C\u624D\u4F1A\u8F6E\u66FF\uFF0C\u5426\u5219\u5C31\u7B97\u65F6\u95F4\u8FBE\u5230\u4E5F\u4E0D\u8F6E\u66FF</td></tr><tr><td>size</td><td>\u5927\u5C0F \u65E5\u5FD7\u53EA\u6709\u5927\u4E8E\u6307\u5B9A\u5927\u5C0F\u624D\u8FDB\u884C\u65E5\u5FD7\u8F6E\u66FF\uFF0C\u800C\u4E0D\u662F\u6309\u7167\u65F6\u95F4\u8F6E\u66FF\u3002\u5982 size 100k</td></tr><tr><td>dateext</td><td>\u4F7F\u7528\u65E5\u671F\u4F5C\u4E3A\u65E5\u5FD7\u8F6E\u66FF\u6587\u4EF6\u7684\u540E\u7F00\u3002\u5982 secure-20210805</td></tr><tr><td>sharedscripts</td><td>\u5728\u6B64\u5173\u952E\u5B57\u4E4B\u540E\u7684\u811A\u672C\u53EA\u6267\u884C\u4E00\u6B21</td></tr><tr><td>prerotate/endscript</td><td>\u5728\u65E5\u5FD7\u8F6E\u66FF\u4E4B\u524D\u6267\u884C\u811A\u672C\u547D\u4EE4\u3002endscript \u6807\u793A prerotate \u811A\u672C\u7ED3\u675F</td></tr><tr><td>postrotate/endscript</td><td>\u5728\u65E5\u5FD7\u8F6E\u66FF\u4E4B\u540E\u6267\u884C\u811A\u672C\u547D\u4EE4\u3002endscript \u6807\u793A postrotate \u811A\u672C\u7ED3\u675F</td></tr></tbody></table><h2 id="\u628A\u81EA\u5DF1\u7684\u65E5\u5FD7\u52A0\u5165\u65E5\u5FD7\u8F6E\u66FF" tabindex="-1"><a class="header-anchor" href="#\u628A\u81EA\u5DF1\u7684\u65E5\u5FD7\u52A0\u5165\u65E5\u5FD7\u8F6E\u66FF" aria-hidden="true">#</a> \u628A\u81EA\u5DF1\u7684\u65E5\u5FD7\u52A0\u5165\u65E5\u5FD7\u8F6E\u66FF</h2><p>\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li>\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u76F4\u63A5\u5728<code>/etc/logrotate.conf</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u5199\u5165\u8BE5\u65E5\u5FD7\u7684\u8F6E\u66FF\u7B56\u7565\uFF0C\u4ECE\u800C\u628A\u65E5\u5FD7\u52A0\u5165\u8F6E\u66FF</li><li>\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u662F\u5728<code>/etc/logrotate.d/</code>\u76EE\u5F55\u4E2D\u65B0\u5EFA\u7ACB\u8BE5\u65E5\u5FD7\u7684\u8F6E\u66FF\u6587\u4EF6\uFF0C\u5728\u8BE5\u8F6E\u66FF\u6587\u4EF6\u4E2D\u5199\u5165\u6B63\u786E\u7684\u8F6E\u66FF\u7B56\u7565\uFF0C\u56E0\u4E3A\u8BE5\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u201Cinclude\u201D\u5230\u4E3B\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6240\u4EE5\u4E5F\u53EF\u4EE5\u628A\u65E5\u5FD7\u52A0\u5165\u8F6E\u66FF</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment">#\u5148\u7ED9\u65E5\u5FD7\u6587\u4EF6\u8D4B\u4E88 chattr \u7684 a \u5C5E\u6027\uFF0C\u4FDD\u8BC1\u65E5\u5FD7\u7684\u5B89\u5168</span>
chattr +a /var/log/alert.log

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/logrotate.d/alter
<span class="token comment">#\u521B\u5EFA alter \u8F6E\u66FF\u6587\u4EF6\uFF0C\u628A/var/log/alert.log \u52A0\u5165\u8F6E\u66FF</span>
 /var/log/alert.log <span class="token punctuation">{</span>
  weekly
  <span class="token comment">#\u6BCF\u5468\u8F6E\u66FF\u4E00\u6B21</span>
  rotate <span class="token number">1</span>
  <span class="token comment">#\u4FDD\u7559 1 \u4E2A\u8F6E\u66FF\u65E5\u5FD7</span>
  create
  dateext
  sharedscripts
  <span class="token comment">#\u4EE5\u4E0B\u547D\u4EE4\u53EA\u6267\u884C\u4E00\u6B21</span>
  prerotate
  <span class="token comment">#\u5728\u65E5\u5FD7\u8F6E\u66FF\u4E4B\u524D\u6267\u884C</span>
  /usr/bin/chattr -a /var/log/alert.log
 <span class="token comment">#\u5728\u65E5\u5FD7\u8F6E\u66FF\u4E4B\u524D\u53D6\u6D88 a \u5C5E\u6027\uFF0C\u4EE5\u4FBF\u8BA9\u65E5\u5FD7\u53EF\u4EE5\u8F6E\u66FF</span>
  endscript
  <span class="token comment">#\u811A\u672C\u7ED3\u675F</span>
  sharedscripts
  postrotate
  /bin/kill -HUP <span class="token variable"><span class="token variable">$(</span>/bin/cat /var/run/syslogd.pid <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token variable">)</span></span> <span class="token operator">&amp;&gt;</span>/dev/null
  /usr/bin/chattr +a /var/log/alert.log
  endscript
 <span class="token comment">#\u91CD\u542F rsyslog \u670D\u52A1\uFF0C\u4FDD\u8BC1\u65E5\u5FD7\u8F6E\u66FF\u6B63\u5E38</span>
 <span class="token punctuation">}</span>
EOF
</code></pre></div><h2 id="logrotate-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#logrotate-\u547D\u4EE4" aria-hidden="true">#</a> logrotate \u547D\u4EE4</h2><p>\u65E5\u5FD7\u8F6E\u66FF\u4E4B\u540E\u53EF\u4EE5\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u5907\u4EFD\u65E5\u5FD7\uFF0C\u5176\u5B9E\u4E5F\u8981\u4F9D\u8D56\u7CFB\u7EDF\u5B9A\u65F6\u4EFB\u52A1</p><p>\u53EF\u4EE5\u4F7F\u7528<code>logrotate</code>\u547D\u4EE4\u5F3A\u884C\u8F6E\u66FF</p><ul><li><code>logrotate -f xxx</code></li></ul>`,16);function s(o,c){return a}var d=n(e,[["render",s]]);export{d as default};
