import{c as n}from"./app.c67e0a67.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u57DF\u540D\u7CFB\u7EDF(Domain Name System\uFF0C\u7F29\u5199:DNS\uFF09\u662F\u4E92\u8054\u7F51\u7684\u4E00\u9879\u670D\u52A1\u3002\u57DF\u540D\u89E3\u6790\u662F\u628A\u57DF\u540D\u6307\u5411\u7F51\u7AD9\u7A7A\u95F4IP\uFF0C\u8BA9\u4EBA\u4EEC\u901A\u8FC7\u6CE8\u518C\u7684\u57DF\u540D\u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u5230\u7F51\u7AD9\u7684\u4E00\u79CD\u670D\u52A1\u3002IP\u5730\u5740\u662F\u7F51\u7EDC\u4E0A\u6807\u8BC6\u7AD9\u70B9\u7684\u6570\u5B57\u5730\u5740\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8BB0\u5FC6\uFF0C\u91C7\u7528\u57DF\u540D\u6765\u4EE3\u66FFP\u5730\u5740\u6807\u8BC6\u7AD9\u70B9\u5730\u5740\u3002\u57DF\u540D\u89E3\u6790\u5C31\u662F\u57DF\u540D\u5230IP\u5730\u5740\u7684\u8F6C\u6362\u8FC7\u7A0B\u3002\u57DF\u540D\u7684\u89E3\u6790\u5DE5\u4F5C\u7531DNS\u670D\u52A1\u5668\u5B8C\u6210\u3002\u53EF\u4EE5\u7406\u89E3\u4E3ADNS\u5C31\u662F\u7FFB\u8BD1\u5B98\u3002</p><ul><li>\u6B63\u5411\u89E3\u6790\uFF1A\u57DF\u540D--&gt;IP\u5730\u5740</li><li>\u53CD\u5411\u89E3\u6790\uFF1AIP\u5730\u5740--&gt;\u57DF\u540D</li></ul><h2 id="\u89E3\u6790\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u8FC7\u7A0B" aria-hidden="true">#</a> \u89E3\u6790\u8FC7\u7A0B</h2><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u8BBF\u95EE<code>www.kernel.org</code>,\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li><p>\u5BA2\u6237\u673A\u9996\u5148\u67E5\u770B\u67E5\u627E\u672C\u5730hosts\u6587\u4EF6\uFF0C\u5982\u679C\u6709\u5219\u8FD4\u56DE\uFF0C\u5426\u5219\u8FDB\u884C\u4E0B\u4E00\u6B65</p></li><li><p>\u5BA2\u6237\u673A\u67E5\u770B\u672C\u5730\u7F13\u5B58\uFF0C\u662F\u5426\u5B58\u5728\u672C\u6761\u76EE\u7684\u7F13\u5B58\uFF0C\u5982\u754C\u6709\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\u8FDB\u884C\u4E0B\u4E00\u6B65</p></li><li><p>\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u6307\u5411\u7684DNS\u670D\u52A1\u5668</p></li><li><p>\u67E5\u770B\u57DF\u540D\u662F\u5426\u672C\u5730\u89E3\u6790\uFF0C\u662F\u5219\u672C\u5730\u89E3\u6790\u8FD4\u56DE\uFF0C\u5426\u5219\u8FDB\u884C\u4E0B\u4E00\u6B65</p></li><li><p>\u672C\u5730DNS\u670D\u52A1\u5668\u9996\u5148\u5728\u7F13\u5B58\u4E2D\u67E5\u627E\uFF0C\u6709\u5219\u8FD4\u56DE\uFF0C\u65E0\u5219\u8FDB\u884C\u4E0B\u4E00\u6B65</p></li><li><p>\u5411\u5168\u740313\u4E2A\u6839\u57DF\u670D\u52A1\u5668\u53D1\u8D77DNS\u8BF7\u6C42\uFF0C\u6839\u57DF\u8FD4\u56DEorg \u57DF\u7684\u5730\u5740\u5217\u8868</p></li><li><p>\u4F7F\u7528\u67D0\u4E00\u4E2Aorg\u57DF\u7684P\u5730\u5740\uFF0C\u53D1\u8D77DNS\u8BF7\u6C42\uFF0Corg\u57DF\u8FD4\u56DEkernel\u57DF\u670D\u52A1\u5668\u5730\u5740\u5217\u8868</p></li><li><p>\u4F7F\u7528\u67D0\u4E00\u4E2Akernel\u57DFP\u5730\u5740\uFF0C\u53D1\u8D77DNS\u8BF7\u6C42\uFF0Ckernel\u57DF\u8FD4\u56DEwww.kernel.org\u4E3B\u673A\u7684IP\u5730\u5740\uFF0C\u672C\u5730DNS\u670D\u52A1\u6536\u5230\u540E\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u673A\uFF0C\u5E76\u5728\u672C\u5730DNS\u670D\u52A1\u5668\u4FDD\u5B58\u4E00\u4EFD\u3002</p></li></ol><h2 id="\u6587\u4EF6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a> \u6587\u4EF6\u4ECB\u7ECD</h2><p>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><ul><li><p>\u4E3B\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/named.conf</code></p></li><li><p>\u8BE6\u7EC6\u8BF4\u660E:</p></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>options <span class="token punctuation">{</span>
        <span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u5668\u76D1\u542C\u7F51\u5361\uFF08\u53EF\u4EE5\u5199\u5177\u4F53\u4E00\u4E2AIP,\u4E5F\u53EF\u4EE5\u5199\u6210any\uFF09</span>
        listen-on port <span class="token number">53</span> <span class="token punctuation">{</span> <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        listen-on-v6 port <span class="token number">53</span> <span class="token punctuation">{</span> ::1<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment"># \u6570\u636E\u4FDD\u5B58\u6587\u4EF6</span>
        directory       <span class="token string">&quot;/var/named&quot;</span><span class="token punctuation">;</span>
        dump-file       <span class="token string">&quot;/var/named/data/cache_dump.db&quot;</span><span class="token punctuation">;</span>
        statistics-file <span class="token string">&quot;/var/named/data/named_stats.txt&quot;</span><span class="token punctuation">;</span>
        memstatistics-file <span class="token string">&quot;/var/named/data/named_mem_stats.txt&quot;</span><span class="token punctuation">;</span>
        recursing-file  <span class="token string">&quot;/var/named/data/named.recursing&quot;</span><span class="token punctuation">;</span>
        secroots-file   <span class="token string">&quot;/var/named/data/named.secroots&quot;</span><span class="token punctuation">;</span>
        <span class="token comment"># \u8BBE\u7F6E\u53EF\u4EE5\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u5BA2\u6237\u7AEFIP\uFF08\u53EF\u4EE5\u7528any\uFF09</span>
        allow-query     <span class="token punctuation">{</span> localhost<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><ul><li><p>\u533A\u57DF\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/named.rfc1912.zones</code></p></li><li><p>\u8BE6\u7EC6\u8BF4\u660E:</p></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u6B63\u5411\u533A\u57DF\u914D\u7F6E\u6587\u4EF6\u6807\u7B7E\uFF0C\u4FEE\u6539\u4E3A\u9700\u8981\u89E3\u6790\u7684\u57DF</span>
zone <span class="token string">&quot;localhost.localdomain&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token comment"># DNS\u670D\u52A1\u5668\u7C7B\u578B(master/slave)</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token comment"># \u6B63\u5411\u6570\u636E\u914D\u7F6E\u6587\u4EF6\u540D\u79F0(\u9ED8\u8BA4\u4FDD\u5B58\u5728/var/name/\u4E0B)</span>
        <span class="token function">file</span> <span class="token string">&quot;named.localhost&quot;</span><span class="token punctuation">;</span>
        <span class="token comment"># \u5141\u8BB8\u6570\u636E\u66F4\u65B0\u7684\u5217\u8868(\u586B\u5199IP\u5730\u5740)</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment"># \u53CD\u5411\u533A\u57DF\u914D\u7F6E\u6587\u4EF6\uFF0C\u4EC5\u4FEE\u6539IP\u4F4D\u7F6E\uFF0C\u5E76\u4E14\u5C06IP\u5199\u53CD</span>
zone <span class="token string">&quot;1.0.0.127.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;named.loopback&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u6570\u636E\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/var/named/xx.xx</code></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token variable">$TTL</span> 1D <span class="token comment"># \u57DF\u540D\u6709\u6548\u89E3\u6790\u751F\u5B58\u5468\u671F(\u4E00\u822C\u6307\u7F13\u5B58\u65F6\u95F4)</span>
@       IN SOA  @ rname.invalid. <span class="token punctuation">(</span>
                                <span class="token number">0</span>       <span class="token punctuation">;</span> serial  <span class="token comment"># \u914D\u7F6E\u6587\u4EF6\u4FEE\u6539\u7248\u672C(\u5982\uFF1A20220428)</span>
                                1D      <span class="token punctuation">;</span> refresh <span class="token comment"># \u66F4\u65B0\u9891\u7387(\u4ECE\u5411\u4E3B\u7684\u67E5\u8BE2\u5468\u671F)</span>
                                1H      <span class="token punctuation">;</span> retry <span class="token comment"># \u66F4\u65B0\u5931\u8D25\u7684\u91CD\u8BD5\u65F6\u95F4\u5468\u671F</span>
                                1W      <span class="token punctuation">;</span> expire <span class="token comment"># \u65E0\u6CD5\u66F4\u65B0\u65F6\u7684\u5931\u6548\u5468\u671F</span>
                                3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum <span class="token comment"># \u7F13\u5B58\u670D\u52A1\u5668\u65E0\u6CD5\u66F4\u65B0\u65F6\u7684\u5931\u6548\u65F6\u95F4</span>
        NS      @           <span class="token comment"># \u8BBE\u7F6EDNS\u670D\u52A1\u5668\u7684\u57DF\u540D</span>
        A       <span class="token number">127.0</span>.0.1   <span class="token comment"># IPv4\u57DF\u540DIP\u89E3\u6790\u8BB0\u5F55</span>
        AAAA    ::1         <span class="token comment"># IPv6\u57DF\u540DIP\u89E3\u6790\u8BB0\u5F55</span>

1D <span class="token comment"># \u57DF\u540D\u6709\u6548\u89E3\u6790\u751F\u5B58\u5468\u671F(\u4E00\u822C\u6307\u7F13\u5B58\u65F6\u95F4)</span>
@\uFF1A\u4EE3\u8868\u57DF\u540D\u672C\u8EAB 
SOA\uFF1ASOA\u6807\u8BB0<span class="token punctuation">(</span>\u8D77\u59CB\u6388\u4E88\u673A\u6784\u7684\u8D44\u6E90\u8BB0\u5F55\u63CF\u8FF0\u4E86\u57DF\u540D\u7684\u7BA1\u7406\u5458\uFF0C\u7535\u5B50\u90AE\u4EF6\u5730\u5740\uFF0C\u548C\u4E00\u4E9B\u65F6\u95F4\u53C2\u6570<span class="token punctuation">)</span>  
</code></pre></div><h2 id="\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C" aria-hidden="true">#</a> \u5B9E\u9A8C</h2><h3 id="\u57FA\u7840\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5B9E\u9A8C" aria-hidden="true">#</a> \u57FA\u7840\u5B9E\u9A8C</h3><ul><li><p>DNS Server\uFF1A<code>192.168.10.10</code></p></li><li><p>Client\uFF1A<code>192.168.10.20</code></p></li></ul><p><strong>DND\u670D\u52A1\u5668\u914D\u7F6E</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5DNS\u670D\u52A1</span>
yum -y <span class="token function">install</span> <span class="token builtin class-name">bind</span>

<span class="token comment"># \u5907\u4EFD\u57FA\u7840\u6587\u4EF6</span>
<span class="token function">cp</span> /etc/named.conf /etc/named.conf.bak
<span class="token function">cp</span> /etc/named.rfc1912.zones /etc/named.rfc1912.zones.bak
<span class="token function">cp</span> /var/named/named.localhost /var/named/named.localhost.bak
<span class="token function">cp</span> /var/named/named.loopback /var/named/named.loopback.bak
</code></pre></div><p><em>\u4FEE\u6539\u4E3B\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u5668\u76D1\u542C\u5730\u5740</span>
<span class="token function">sed</span> -i <span class="token string">&#39;13s/127.0.0.1/any/&#39;</span> /etc/named.conf
<span class="token comment"># \u8BBE\u7F6E\u53EF\u4EE5\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u5BA2\u6237\u7AEFIP</span>
<span class="token function">sed</span> -i <span class="token string">&#39;21s/localhost/any/&#39;</span> /etc/named.conf
</code></pre></div><p><em>\u4FEE\u6539\u533A\u57DF\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/named.rfc1912.zones
zone <span class="token string">&quot;yssuvu.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;yssuvu.localhost&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
zone <span class="token string">&quot;10.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;yssuvu.loopback&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
EOF
</code></pre></div><p><em>\u4FEE\u6539\u6570\u636E\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># yssuvu.localhost\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/yssuvu.localhost
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
dns     A       <span class="token number">192.168</span>.10.10
www     A       <span class="token number">192.168</span>.10.10
EOF
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># yssuvu.loopback\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/yssuvu.loopback
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
<span class="token number">10</span>      PTR     dns.yssuvu.com.
<span class="token number">10</span>      PTR     www.yssuvu.com.
EOF
</code></pre></div><p><em>\u91CD\u542FDNS\u670D\u52A1</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl restart named
</code></pre></div><p><strong>\u5BA2\u6237\u673A\u9A8C\u8BC1</strong></p><p>\u4F7F\u7528<code>nslookup www.yssuvu.com</code>\u548C<code>nslookup 192.168.10.10</code>\u68C0\u9A8C\u662F\u5426\u914D\u7F6E\u6210\u529F</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@clinet ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.yssuvu.com</span>
Server:         <span class="token number">192.168</span>.10.10
Address:        <span class="token number">192.168</span>.10.10<span class="token comment">#53</span>

Name:   www.yssuvu.com
Address: <span class="token number">192.168</span>.10.10

<span class="token punctuation">[</span>root@clinet ~<span class="token punctuation">]</span><span class="token comment"># nslookup 192.168.10.10</span>
<span class="token number">10.10</span>.168.192.in-addr.arpa      name <span class="token operator">=</span> dns.yssuvu.com.
<span class="token number">10.10</span>.168.192.in-addr.arpa      name <span class="token operator">=</span> www.yssuvu.com.
</code></pre></div><h3 id="\u4E3B\u4ECE\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u4ECE\u5B9E\u9A8C" aria-hidden="true">#</a> \u4E3B\u4ECE\u5B9E\u9A8C</h3><ul><li><p>DNS Master Server\uFF1A<code>192.168.10.10</code></p></li><li><p>DNS Slave Server\uFF1A<code>192.168.10.20</code></p></li><li><p>Client:<code>192.168.10.30</code></p></li></ul><p><strong>Master\u670D\u52A1\u5668\u914D\u7F6E</strong></p><p>\u4FEE\u6539\u533A\u57DF\u6587\u4EF6\u4E2D\u7684\u4ECE\u670D\u52A1\u5668\u5730\u5740</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;4s/none/192.168.10.20/&#39;</span> /etc/named.rfc1912.zones
<span class="token function">sed</span> -i <span class="token string">&#39;9s/none/192.168.10.20/&#39;</span> /etc/named.rfc1912.zones
</code></pre></div><p><strong>Slave\u670D\u52A1\u5668\u914D\u7F6E</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5DNS\u670D\u52A1</span>
yum -y <span class="token function">install</span> <span class="token builtin class-name">bind</span>

<span class="token comment"># \u5907\u4EFD\u57FA\u7840\u6587\u4EF6</span>
<span class="token function">cp</span> /etc/named.conf /etc/named.conf.bak
<span class="token function">cp</span> /etc/named.rfc1912.zones /etc/named.rfc1912.zones.bak
<span class="token function">cp</span> /var/named/named.localhost /var/named/named.localhost.bak
<span class="token function">cp</span> /var/named/named.loopback /var/named/named.loopback.bak
</code></pre></div><p><em>\u4FEE\u6539\u4E3B\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u5668\u76D1\u542C\u5730\u5740</span>
<span class="token function">sed</span> -i <span class="token string">&#39;13s/127.0.0.1/any/&#39;</span> /etc/named.conf
<span class="token comment"># \u8BBE\u7F6E\u53EF\u4EE5\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u5BA2\u6237\u7AEFIP</span>
<span class="token function">sed</span> -i <span class="token string">&#39;21s/localhost/any/&#39;</span> /etc/named.conf
</code></pre></div><p><em>\u4FEE\u6539\u533A\u57DF\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/named.rfc1912.zones
zone <span class="token string">&quot;yssuvu.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> slave<span class="token punctuation">;</span>
        masters <span class="token punctuation">{</span> <span class="token number">192.168</span>.10.10<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;slaves/yssuvu.localhost&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
zone <span class="token string">&quot;10.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> slave<span class="token punctuation">;</span>
        masters <span class="token punctuation">{</span> <span class="token number">192.168</span>.10.10<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;slaves/yssuvu.loopback&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
EOF
</code></pre></div><p><em>\u91CD\u542FDNS\u670D\u52A1</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl restart named
</code></pre></div><p><strong>Client\u914D\u7F6E</strong></p><ol><li>\u5C06\u5BA2\u6237\u673A\u7684DNS1\u8BBE\u7F6E\u4E3ASlaveDNS\u7684IP\u5730\u5740</li><li>\u4F7F\u7528<code>nslookup</code>\u547D\u4EE4\u9A8C\u8BC1\u662F\u5426\u6210\u529F</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@clinet ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.yssuvu.com</span>
Server:         <span class="token number">192.168</span>.10.20
Address:        <span class="token number">192.168</span>.10.20<span class="token comment">#53</span>

Name:   www.yssuvu.com
Address: <span class="token number">192.168</span>.10.10

<span class="token punctuation">[</span>root@clinet ~<span class="token punctuation">]</span><span class="token comment"># nslookup 192.168.10.10</span>
<span class="token number">10.10</span>.168.192.in-addr.arpa      name <span class="token operator">=</span> www.yssuvu.com.
<span class="token number">10.10</span>.168.192.in-addr.arpa      name <span class="token operator">=</span> dns.yssuvu.com.
</code></pre></div><h3 id="\u4E3B\u7F13\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u7F13\u5B9E\u9A8C" aria-hidden="true">#</a> \u4E3B\u7F13\u5B9E\u9A8C</h3><p>\u4F5C\u7528\uFF1A\u52A0\u5FEB\u89E3\u6790\u901F\u5EA6\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387</p><ul><li><p>DNS Master Server\uFF1A<code>192.168.10.10</code></p></li><li><p>DNS Cache Server\uFF1A<code>192.168.10.20</code></p></li><li><p>Client:<code>192.168.10.30</code></p></li></ul><p><strong>Master\u670D\u52A1\u5668\u914D\u7F6E</strong></p><p>\u540C\u4E0A</p><p><strong>Cache\u670D\u52A1\u5668\u914D\u7F6E</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5DNS\u670D\u52A1</span>
yum -y <span class="token function">install</span> <span class="token builtin class-name">bind</span>

<span class="token comment"># \u5907\u4EFD\u57FA\u7840\u6587\u4EF6</span>
<span class="token function">cp</span> /etc/dnsmasq.conf /etc/dnsmasq.conf.bak
</code></pre></div><p><em>\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F</em>*</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/dnsmasq.conf
<span class="token comment"># \u9700\u8981\u89E3\u6790\u7684\u57DF\u540D</span>
<span class="token assign-left variable">domain</span><span class="token operator">=</span>www.yssuvu.com 
<span class="token comment"># \u4E3BDNS\u670D\u52A1\u5668IP</span>
<span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">192.168</span>.10.10  
<span class="token comment"># \u58F0\u660E\u7F13\u5B58\u6761\u76EE</span>
cache-size<span class="token operator">=</span><span class="token number">15000</span>      
EOF
</code></pre></div><p><em>\u542F\u52A8dnsmasq\u670D\u52A1</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl start dnsmasq
</code></pre></div><p><strong>Client\u914D\u7F6E</strong></p><ol><li>\u5C06\u5BA2\u6237\u673A\u7684DNS1\u8BBE\u7F6E\u4E3ADNS\u7F13\u5B58\u670D\u52A1\u5668\u7684IP\u5730\u5740</li><li>\u4F7F\u7528<code>nslookup</code>\u547D\u4EE4\u9A8C\u8BC1\u662F\u5426\u6210\u529F</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@clinet ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.yssuvu.com</span>
Server:         <span class="token number">192.168</span>.10.20
Address:        <span class="token number">192.168</span>.10.20<span class="token comment">#53</span>

Non-authoritative answer:
Name:   www.yssuvu.com
Address: <span class="token number">192.168</span>.10.10
</code></pre></div><h3 id="\u5206\u79BB\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u79BB\u89E3\u6790" aria-hidden="true">#</a> \u5206\u79BB\u89E3\u6790</h3><ul><li><p>DNS Master Serve(\u540C\u65F6\u9700\u8981\u5F00\u542F\u8DEF\u7531\u529F\u80FD)</p></li><li><p><code>vm10 192.168.10.10</code></p></li><li><p><code>vm11 100.100.100.10</code></p></li><li><p>Web Server</p></li><li><p><code>vm10 192.168.10.20</code></p></li><li><p><code>vm11 100.100.100.20</code> \`</p></li><li><p>LanClient:<code>vm10 192.168.10.30</code></p></li><li><p>WanClient:<code>vm11 100.100.100.30</code></p></li></ul><p><strong>Master\u670D\u52A1\u5668\u914D\u7F6E</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5DNS\u670D\u52A1</span>
yum -y <span class="token function">install</span> <span class="token builtin class-name">bind</span>

<span class="token comment"># \u5907\u4EFD\u57FA\u7840\u6587\u4EF6</span>
<span class="token function">cp</span> /etc/named.conf /etc/named.conf.bak
<span class="token function">cp</span> /etc/named.rfc1912.zones /etc/named.rfc1912.zones.bak
<span class="token function">cp</span> /var/named/named.localhost /var/named/named.localhost.bak
<span class="token function">cp</span> /var/named/named.loopback /var/named/named.loopback.bak
</code></pre></div><p><em>\u4FEE\u6539\u4E3B\u914D\u7F6E\u6587\u4EF6</em> \u9700\u8981\u5C06\u539F\u672C\u7684zone\u533A\u57DF\u6570\u636E\u5220\u9664</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;&gt;</span> /etc/named.conf
view lan<span class="token punctuation">{</span>
    match-clients <span class="token punctuation">{</span> <span class="token number">192.168</span>.10.0/24<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    zone <span class="token string">&quot;.&quot;</span> IN<span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> hint<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;named.ca&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    include <span class="token string">&quot;/etc/lan.zones&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

view wan<span class="token punctuation">{</span>
    match-clients <span class="token punctuation">{</span> any<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    zone <span class="token string">&quot;.&quot;</span> IN<span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> hint<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;named.ca&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    include <span class="token string">&quot;/etc/wan.zones&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
EOF
</code></pre></div><p><em>\u4FEE\u6539\u533A\u57DF\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/lan.zones
zone <span class="token string">&quot;yssuvu.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;lan.localhost&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
zone <span class="token string">&quot;10.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;lan.loopback&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
EOF

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /etc/wan.zones
zone <span class="token string">&quot;yssuvu.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;wan.localhost&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
zone <span class="token string">&quot;100.100.100.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;wan.loopback&quot;</span><span class="token punctuation">;</span>
        allow-update <span class="token punctuation">{</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
EOF
</code></pre></div><p><em>\u4FEE\u6539\u6570\u636E\u914D\u7F6E\u6587\u4EF6</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># lan.localhost\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/lan.localhost
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
dns     A       <span class="token number">192.168</span>.10.10
www     A       <span class="token number">192.168</span>.10.20
EOF
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># lan.loopback\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/lan.loopback
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
<span class="token number">10</span>      PTR     dns.yssuvu.com.
<span class="token number">20</span>      PTR     www.yssuvu.com.
EOF
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># wan.localhost\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/wan.localhost
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
dns     A       <span class="token number">100.100</span>.100.10
www     A       <span class="token number">100.100</span>.100.20
EOF
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># wan.loopback\u6587\u4EF6\u5185\u5BB9</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /var/named/wan.loopback
<span class="token punctuation">\\</span><span class="token variable">$TTL</span> 1D
@       IN SOA  yssuvu.com. rname.invalid. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        NS      dns.yssuvu.com.
<span class="token number">10</span>      PTR     dns.yssuvu.com.
<span class="token number">20</span>      PTR     www.yssuvu.com.
EOF
</code></pre></div><p><em>\u91CD\u542FDNS\u670D\u52A1</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code>systemctl restart named
</code></pre></div><p><strong>\u9A8C\u8BC1</strong></p><p>\u5185\u7F51\u5BA2\u6237\u673A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lan ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.yssuvu.com</span>
Server:         <span class="token number">192.168</span>.10.10
Address:        <span class="token number">192.168</span>.10.10<span class="token comment">#53</span>

Name:   www.yssuvu.com
Address: <span class="token number">192.168</span>.10.20
</code></pre></div><p>\u5916\u7F51\u5BA2\u6237\u673A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@waan ~<span class="token punctuation">]</span><span class="token comment"># nslookup www.yssuvu.com</span>
Server:         <span class="token number">100.100</span>.100.10
Address:        <span class="token number">100.100</span>.100.10<span class="token comment">#53</span>

Name:   www.yssuvu.com
Address: <span class="token number">100.100</span>.100.20
</code></pre></div>`,81);function p(e,o){return t}var u=s(a,[["render",p]]);export{u as default};
