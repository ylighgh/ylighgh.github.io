import{c as s}from"./app.9036987c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>FTP\u662FFile Transfer Protocol\uFF08\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09\u7684\u82F1\u6587\u7B80\u79F0\uFF0C\u7528\u4E8EInternet\u4E0A\u7684\u6587\u4EF6\u7684\u53CC\u5411\u4F20\u8F93\u3002\u4F7F\u7528FTP \u6765\u4F20\u8F93\u65F6\uFF0C\u662F\u5177\u6709\u4E00\u5B9A\u7A0B\u5EA6\u7684\u5371\u9669\u6027\uFF0C\u56E0\u4E3A\u6570\u636E\u5728\u56E0\u7279\u7F51\u4E0A\u9762\u662F\u5B8C\u5168\u6CA1\u6709\u53D7\u5230\u4FDD\u62A4\u7684\u660E\u6587\u4F20\u8F93\u65B9\u5F0F</p><p>VSFTP\u662F\u4E00\u4E2A\u57FA\u4E8EGPL\u53D1\u5E03\u7684\u7C7BUnix\u7CFB\u7EDF\u4E0A\u4F7F\u7528\u7684FTP\u670D\u52A1\u5668\u8F6F\u4EF6,\u5B83\u7684\u5168\u79F0\u662FVery Secure FTP\uFF0C\u4ECE\u540D\u79F0\u5B9A\u4E49\u4E0A\u57FA\u672C\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u662F\u4E3A\u4E86\u89E3\u51B3ftp\u4F20\u8F93\u5B89\u5168\u6027\u95EE\u9898\u7684</p><h2 id="\u8FDE\u63A5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u7C7B\u578B" aria-hidden="true">#</a> \u8FDE\u63A5\u7C7B\u578B</h2><p>\u63A7\u5236\u8FDE\u63A5(\u6301\u7EED\u8FDE\u63A5)--&gt;TCP21(\u547D\u4EE4\u4FE1\u9053)--&gt;\u7528\u6237\u6536\u53D1FTP\u547D\u4EE4</p><p>\u6570\u636E\u8FDE\u63A5(\u6309\u9700\u8FDE\u63A5)--&gt;TCP20(\u6570\u636E\u4FE1\u9053)--&gt;\u7528\u6237\u4E0A\u4F20\u4E0B\u8F7D\u6570\u636E</p><h2 id="\u5DE5\u4F5C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u4F5C\u6A21\u5F0F</h2><ul><li><p>\u4E3B\u52A8\u6A21\u5F0F(Port)</p><p>FTP\u5BA2\u6237\u7AEF\u9996\u5148\u548C\u670D\u52A1\u5668\u7684TCP 21\u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u7528\u6765\u53D1\u9001\u547D\u4EE4\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u63A5\u6536\u6570\u636E\u7684\u65F6\u5019\u5728\u8FD9\u4E2A\u901A\u9053\u4E0A\u53D1\u9001PORT\u547D\u4EE4\u3002PORT\u547D\u4EE4\u5305\u542B\u4E86\u5BA2\u6237\u7AEF\u7528\u4EC0\u4E48\u7AEF\u53E3\u63A5\u6536\u6570\u636E\u3002\u5728\u4F20\u9001\u6570\u636E\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u7AEF\u901A\u8FC7\u81EA\u5DF1\u7684TCP 20\u7AEF\u53E3\u8FDE\u63A5\u81F3\u5BA2\u6237\u7AEF\u7684\u6307\u5B9A\u7AEF\u53E3\u53D1\u9001\u6570\u636E\u3002FTP server\u5FC5\u987B\u548C\u5BA2\u6237\u7AEF\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u7528\u6765\u4F20\u9001\u6570\u636E</p></li><li><p>\u88AB\u52A8\u6A21\u5F0F(Passive)</p><p>FTP\u5BA2\u6237\u7AEF\u9996\u5148\u548C\u670D\u52A1\u5668\u7684TCP 21\u7AEF\u53E3\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u7528\u6765\u5EFA\u7ACB\u63A7\u5236\u901A\u9053\u53D1\u9001\u547D\u4EE4\uFE50\u4F46\u5EFA\u7ACB\u8FDE\u63A5\u540E\u5BA2\u6237\u7AEF\u53D1\u9001Pasv\u547D\u4EE4\u3002\u670D\u52A1\u5668\u6536\u5230Pasv\u547D\u4EE4\u540E,\u6253\u5F00\u4E00\u4E2A\u4E34\u65F6\u7AEF\u53E3(\u7AEF\u53E3\u5927\u4E8E1023\u5C0F\u4E8E65535\uFF09\u5E76\u4E14\u901A\u77E5\u5BA2\u6237\u7AEF\u5728\u8FD9\u4E2A\u7AEF\u53E3\u4E0A\u4F20\u9001\u6570\u636E\u7684\u8BF7\u6C42\uFF0C\u5BA2\u6237\u7AEF\u8FDE\u63A5FTP\u670D\u52A1\u5668\u7684\u4E34\u65F6\u7AEF\u53E3\uFF0C\u7136\u540EFTP\u670D\u52A1\u5668\u5C06\u901A\u8FC7\u8FD9\u4E2A\u7AEF\u53E3\u4F20\u8F93\u6570\u636E</p></li></ul><h2 id="\u4F20\u8F93\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F20\u8F93\u6A21\u5F0F" aria-hidden="true">#</a> \u4F20\u8F93\u6A21\u5F0F</h2><ul><li><p>Binary\u6A21\u5F0F\uFF1A\u4E0D\u5BF9\u6570\u636E\u8FDB\u884C\u4EFB\u4F55\u5904\u7406\uFF0C\u9002\u5408\u8FDB\u884C\u53EF\u6267\u884C\u6587\u4EF6\u3001\u538B\u7F29\u6587\u4EF6\u3001\u56FE\u7247\u7B49</p></li><li><p>ASCII\u6A21\u5F0F\uFF1A\u8FDB\u884C\u6587\u672C\u4F20\u8F93\u65F6\uFF0C\u81EA\u52A8\u9002\u5E94\u76EE\u6807\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7ED3\u675F\u7B26\uFF0C\u5982\u56DE\u8F66\u7B26\u7B49</p></li></ul><h2 id="\u8F6F\u4EF6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u4FE1\u606F" aria-hidden="true">#</a> \u8F6F\u4EF6\u4FE1\u606F</h2><p>\u670D\u52A1\u7AEF\u8F6F\u4EF6\uFF1A<code>vsftpd</code></p><p>\u5BA2\u6237\u7AEF\u8F6F\u4EF6\uFF1A<code>ftp</code></p><p>\u670D\u52A1\u540D\uFF1A<code>vsftpd</code></p><p>\u7AEF\u53E3\u53F7:<code>20</code> <code>21</code> <code>\u6307\u5B9A\u8303\u56F4\u5185\u968F\u673A\u7AEF\u53E3</code></p><p>\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/vsftpd/vsftpd.conf</code></p><h2 id="\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C" aria-hidden="true">#</a> \u5B9E\u9A8C</h2><p><strong>\u5B89\u88C5</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5vsftpd\u670D\u52A1</span>
yum -y <span class="token function">install</span> vsftpd <span class="token function">ftp</span>

<span class="token function">cp</span> /etc/vsftpd/vsftpd.conf  /etc/vsftpd/vsftpd.conf.default
<span class="token comment"># \u542F\u52A8\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F</span>
systemctl <span class="token builtin class-name">enable</span> vsftpd
systemctl start vsftpd
</code></pre></div><p><strong>\u67E5\u770B\u72B6\u6001</strong></p><p><code>systemctl status vsftpd</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@server ~<span class="token punctuation">]</span><span class="token comment"># systemctl status vsftpd</span>
\u25CF vsftpd.service - Vsftpd <span class="token function">ftp</span> daemon
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/vsftpd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Fri <span class="token number">2022</span>-04-29 <span class="token number">10</span>:49:27 CST<span class="token punctuation">;</span> 5s ago
  Process: <span class="token number">17565</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">17566</span> <span class="token punctuation">(</span>vsftpd<span class="token punctuation">)</span>
   CGroup: /system.slice/vsftpd.service
           \u2514\u250017566 /usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf

Apr <span class="token number">29</span> <span class="token number">10</span>:49:27 server systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Vsftpd <span class="token function">ftp</span> daemon<span class="token punctuation">..</span>.
Apr <span class="token number">29</span> <span class="token number">10</span>:49:27 server systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started Vsftpd <span class="token function">ftp</span> daemon.
</code></pre></div><h3 id="\u533F\u540D\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7528\u6237" aria-hidden="true">#</a> \u533F\u540D\u7528\u6237</h3><p>\u9ED8\u8BA4\u53EF\u4E0B\u8F7D\uFF0C\u4E0D\u53EF\u4E0A\u4F20</p><ol><li><p>\u5B89\u88C5</p></li><li><p>\u767B\u5F55:<code>ftp IP\u5730\u5740</code></p></li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@server ftp<span class="token punctuation">]</span><span class="token comment"># ftp localhost</span>
Connected to localhost <span class="token punctuation">(</span><span class="token number">127.0</span>.0.1<span class="token punctuation">)</span>.
<span class="token number">220</span> <span class="token punctuation">(</span>vsFTPd <span class="token number">3.0</span>.2<span class="token punctuation">)</span>
Name <span class="token punctuation">(</span>localhost:root<span class="token punctuation">)</span>: <span class="token function">ftp</span>
<span class="token number">331</span> Please specify the password.
Password:
<span class="token number">230</span> Login successful.
Remote system <span class="token builtin class-name">type</span> is UNIX.
Using binary mode to transfer files.
</code></pre></div><ol start="3"><li>\u5E38\u7528\u547D\u4EE4</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code>ftp<span class="token operator">&gt;</span> <span class="token builtin class-name">help</span>
Commands may be abbreviated.  Commands are:

<span class="token operator">!</span>               debug           mdir            sendport        site
$               <span class="token function">dir</span>             mget            put             size
account         disconnect      <span class="token function">mkdir</span>           <span class="token builtin class-name">pwd</span>             status
append          <span class="token builtin class-name">exit</span>            mls             quit            struct
ascii           form            mode            quote           system
bell            get             modtime         recv            sunique
binary          glob            mput            reget           tenex
bye             <span class="token builtin class-name">hash</span>            newer           rstatus         tick
<span class="token keyword">case</span>            <span class="token builtin class-name">help</span>            nmap            rhelp           trace
<span class="token builtin class-name">cd</span>              idle            nlist           <span class="token function">rename</span>          <span class="token builtin class-name">type</span>
cdup            image           ntrans          reset           user
<span class="token function">chmod</span>           lcd             <span class="token function">open</span>            restart         <span class="token builtin class-name">umask</span>
close           <span class="token function">ls</span>              prompt          <span class="token function">rmdir</span>           verbose
cr              macdef          passive         runique         ?
delete          mdelete         proxy           send

</code></pre></div><h3 id="\u672C\u5730\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u7528\u6237" aria-hidden="true">#</a> \u672C\u5730\u7528\u6237</h3><p>\u7528\u6237\u8D26\u53F7\u540D\u79F0\uFF1A<code>/etc/passwd</code></p><p>\u7528\u6237\u8D26\u53F7\u5BC6\u7801\uFF1A<code>/etc/shadow</code></p><p>\u672C\u5730\u7528\u6237\u9ED8\u8BA4\u7684\u767B\u9646\u5730\u70B9\u5C31\u662F\u7528\u6237\u7684\u5BB6\u76EE\u5F55</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u672C\u5730\u7528\u6237</span>
<span class="token function">useradd</span> -s /sbin/nologin yl

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">sed</span> -i <span class="token string">&#39;4s/auth/#auth/&#39;</span> /etc/pam.d/vsftpd

<span class="token comment"># \u4FEE\u6539\u5BC6\u7801</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;123&quot;</span><span class="token operator">|</span><span class="token function">passwd</span> --stdin yl

<span class="token comment"># \u767B\u9646</span>
<span class="token function">ftp</span> localhost
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@baiduyun ~<span class="token punctuation">]</span><span class="token comment"># ftp localhost</span>
Trying ::1<span class="token punctuation">..</span>.
Connected to localhost <span class="token punctuation">(</span>::1<span class="token punctuation">)</span>.
<span class="token number">220</span> <span class="token punctuation">(</span>vsFTPd <span class="token number">3.0</span>.2<span class="token punctuation">)</span>
Name <span class="token punctuation">(</span>localhost:root<span class="token punctuation">)</span>: yl
<span class="token number">331</span> Please specify the password.
Password:
<span class="token number">230</span> Login successful.
Remote system <span class="token builtin class-name">type</span> is UNIX.
Using binary mode to transfer files
</code></pre></div><h3 id="\u865A\u62DF\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u7528\u6237" aria-hidden="true">#</a> \u865A\u62DF\u7528\u6237</h3><ol><li>\u521B\u5EFA\u865A\u62DF\u7528\u6237\u6765\u4EE3\u66FF\u672C\u5730\u7528\u6237,\u51CF\u5C11\u672C\u5730\u7528\u6237\u66DD\u5149\u7387</li><li>\u4F7F\u7528\u672C\u5730\u7528\u6237\u4F5C\u4E3A\u865A\u62DF\u7528\u6237\u7684\u6620\u5C04\u7528\u6237,\u4E3A\u865A\u62DF\u7528\u6237\u63D0\u4F9B\u5DE5\u4F5C\u76EE\u5F55\u548C\u6743\u9650\u63A7\u5236</li><li>\u80FD\u591F\u8BBE\u7F6E\u4E25\u683C\u7684\u6743\u9650(\u4E3A\u6BCF\u4E00\u4E2A\u7528\u6237\u751F\u6210\u5355\u72EC\u7684\u914D\u7F6E\u6587\u4EF6)</li></ol>`,36);function t(p,o){return e}var i=n(a,[["render",t]]);export{i as default};
