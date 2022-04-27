import{c as a}from"./app.8ff81d30.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},n=a(`<h2 id="\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F" aria-hidden="true">#</a> \u5F00\u542F</h2><p><strong>\u67E5\u770B\u662F\u5426\u5F00\u542F</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@aliyun ~<span class="token punctuation">]</span><span class="token comment"># dumpe2fs -h /dev/vda1|grep acl</span>
dumpe2fs <span class="token number">1.42</span>.9 <span class="token punctuation">(</span><span class="token number">28</span>-Dec-2013<span class="token punctuation">)</span>
Default <span class="token function">mount</span> options:    user_xattr acl
</code></pre></div><p>\u5982\u679C\u6CA1\u6709\u5F00\u542F,\u5219\u9700\u8981\u624B\u52A8\u5F00\u542F\u5206\u533A\u7684ACL\u7684\u6743\u9650</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u91CD\u65B0\u6302\u8F7D\u6839\u5206\u533A,\u5E76\u6302\u8F7D\u52A0\u5165acl\u6743\u9650</span>
<span class="token function">mount</span> -o remout,acl /
</code></pre></div><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><p>\u67E5\u8BE2\u6587\u4EF6\u7684ACL\u6743\u9650:<code>getfacl FILENAME</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@aliyun ~<span class="token punctuation">]</span><span class="token comment"># getfacl workspace/</span>
<span class="token comment"># file: workspace/</span>
<span class="token comment"># owner: root</span>
<span class="token comment"># group: root</span>
user::rwx
group::r-x
other::r-x
</code></pre></div><p>\u8BBE\u5B9AACL\u6743\u9650:<code>setacl OPTION FILENAME</code></p><ul><li>-m \u8BBE\u5B9AACL\u6743\u9650</li><li>-b \u5220\u9664ACL\u6743\u9650</li><li>-x \u5220\u9664\u5355\u4E2A\u7528\u6237\u7684ACL\u6743\u9650</li></ul><h2 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h2><ol><li>\u7ED9/test\u76EE\u5F55\u8D4B\u4E88user\u8BFB\u5199\u6267\u884C\u6743\u9650</li></ol><p><code>setacl -m u:user:rwx /test</code></p><p>u-&gt;g \u8868\u793A\u8D4B\u4E88\u7EC4</p><ol start="2"><li>\u8D4B\u4E88\u9012\u5F52ACL\u6743\u9650,\u53EA\u80FD\u8D4B\u4E88\u76EE\u5F55</li></ol><p><mark>\u53EA\u80FD\u4E89\u5BF9\u5DF2\u7ECF\u5B58\u5728\u7684\u6587\u4EF6</mark></p><p><code>setacl -m u:user:rwx -R /test</code></p><p><mark>\u53EA\u80FD\u4E89\u5BF9\u65B0\u5EFA\u7684\u6587\u4EF6</mark></p><p><code>setacl -m d:u:user:rwx -R /test</code></p><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><ol><li>\u5220\u9664\u6307\u5B9A\u7528\u6237\u548C\u7528\u6237\u7EC4\u7684ACL\u6743\u9650</li></ol><p><code>setacl -x u:st /project</code></p><ol start="2"><li>\u5220\u9664\u6587\u4EF6\u7684\u6240\u6709ACL\u6743\u9650</li></ol><p><code>setacl -b /project</code></p><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">\u6CE8\u610F</p><p>ACL\u6743\u9650,\u4E00\u65E6\u9012\u5F52\u4E4B\u540E,\u4E0D\u53EF\u907F\u514D\u7684\u4F1A\u51FA\u73B0\u6743\u9650\u6EA2\u51FA</p></div>`,25);function t(o,c){return n}var p=e(s,[["render",t]]);export{p as default};
