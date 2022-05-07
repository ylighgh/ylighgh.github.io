import{c as n}from"./app.4625bfa0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/blog/img/in-post/2022-04-15/vue_issue.png";const e={},t=n(`<h2 id="bug" tabindex="-1"><a class="header-anchor" href="#bug" aria-hidden="true">#</a> BUG</h2><p>\u5C06vuepress\u9879\u76EE\u6253\u5305\u4E0A\u4F20\u5230nginx\u670D\u52A1\u5668\u4E0A,\u9759\u6001\u8D44\u6E90\u52A0\u8F7D\u4E0D\u51FA\u6765,\u6240\u6709\u8D44\u6E90\u90FD\u5E26\u4E0A\u4E86\u6839\u8DEF\u5F84</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Request URL: http://xxxx:6080/blog/assets/app.8e97bc7b.js
Request Method: GET
Status Code: <span class="token number">200</span> OK
Remote Address: xxxx:6080
Referrer Policy: strict-origin-when-cross-origin

</code></pre></div><p><img src="`+a+`" alt="vue_issue"></p><h2 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h2><p>vuepress\u9879\u76EE\u8BBE\u7F6E\u4E86\u6839\u8DEF\u5F84,build\u4E4B\u540E\u6240\u6709\u8D44\u6E90\u90FD\u4F1A\u5E26\u4E0A\u6839\u8DEF\u5F84</p><div class="language-vue ext-vue"><pre class="language-vue"><code>module.exports = {
  base:&quot;/blog/&quot;, //\u8BBE\u7F6E\u7AD9\u70B9\u6839\u8DEF\u5F84
  title: &quot;yss&quot;,
  description: &quot;Just for code.&quot;,
</code></pre></div><h2 id="\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u529E\u6CD5</h2><p>\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6,\u53CD\u5411\u4EE3\u7406/blog/\u8DEF\u5F84\u81F3\u6839\u8DEF\u5F84,\u4FEE\u6539\u540E\u7684\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">6080</span><span class="token punctuation">;</span>
    root /data/web/blog<span class="token punctuation">;</span>
    server_name  blog.com<span class="token punctuation">;</span>
    error_log /var/log/nginx/blog.com_error.log<span class="token punctuation">;</span>
    access_log /var/log/nginx/blog.com_access.log<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        index index.html<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location /blog/<span class="token punctuation">{</span>   //\u53CD\u5411\u4EE3\u7406
        proxy_pass http://127.0.0.1:6080/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function o(p,c){return t}var u=s(e,[["render",o]]);export{u as default};
