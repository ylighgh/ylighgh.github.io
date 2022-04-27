import{c as n}from"./app.519d0170.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>DHCP (Dynamic Host Configuration Protocol\uFF0C\u52A8\u6001\u4E3B\u673A\u914D\u7F6E\u534F\u8BAE\uFF09\u662F\u4E00\u4E2A\u5DE5\u4F5C\u5728\u5E94\u7528\u5C42\u7684\u5C40\u57DF\u7F51\u7F51\u7EDC\u534F\u8BAE\uFF0C\u6570\u636E\u4F20\u8F93\u65F6\u4F7F\u7528UDP\u4E0D\u53EF\u9760\u4F20\u8F93\u534F\u8BAE\u5DE5\u4F5C\uFF0C\u901A\u5E38\u88AB\u5E94\u7528\u5728\u5927\u578B\u7684\u5C40\u57DF\u7F51\u7EDC\u73AF\u5883\u4E2D\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u96C6\u4E2D\u7684\u7BA1\u7406\u3001\u5206\u914D\u7F51\u7EDC\u8D44\u6E90\uFF0C\u4F7F\u7F51\u7EDC\u73AF\u5883\u4E2D\u7684\u4E3B\u673A\u80FD\u52A8\u6001\u7684\u83B7\u5F97IP\u5730\u5740\u3001Gateway\u5730\u5740\u3001DNS\u670D\u52A1\u5668\u5730\u5740\u7B49\u4FE1\u606F\uFF0C\u5E76\u80FD\u591F\u63D0\u5347\u5730\u5740\u7684\u4F7F\u7528\u7387\u3002</p><h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406</h2><p><strong>\u79DF\u7EA6\u56DB\u90E8\u66F2</strong></p><p>Client--&gt;DHCP Discover--&gt;Server</p><p>Client&lt;--DHCP Offer&lt;--Server</p><p>Client--&gt;DHCP Request--&gt;Server</p><p>Client&lt;--DHCP ACK(NCK)&lt;--Server</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Apr <span class="token number">27</span> <span class="token number">17</span>:20:33 server dhcpd: DHCPDISCOVER from 00:0c:29:16:91:27 via ens32
Apr <span class="token number">27</span> <span class="token number">17</span>:20:34 server dhcpd: DHCPOFFER on <span class="token number">192.168</span>.0.101 to 00:0c:29:16:91:27 <span class="token punctuation">(</span>clinet<span class="token punctuation">)</span> via ens32
Apr <span class="token number">27</span> <span class="token number">17</span>:20:34 server dhcpd: DHCPREQUEST <span class="token keyword">for</span> <span class="token number">192.168</span>.0.101 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.60<span class="token punctuation">)</span> from 00:0c:29:16:91:27 <span class="token punctuation">(</span>clinet<span class="token punctuation">)</span> via ens32
Apr <span class="token number">27</span> <span class="token number">17</span>:20:34 server dhcpd: DHCPACK on <span class="token number">192.168</span>.0.101 to 00:0c:29:16:91:27 <span class="token punctuation">(</span>clinet<span class="token punctuation">)</span> via ens32
</code></pre></div><p><em>DCHP\u5BA2\u6237\u7AEF\u8FDB\u884CIP\u8BF7\u6C42</em></p><p>\u5BA2\u6237\u7AEF\u4F7F\u75280.0.0.0\u7684\u5730\u5740\u4F5C\u4E3A\u6E90\u5730\u5740\uFF0C\u4F7F\u7528255.255.255.255\u4F5C\u4E3A\u76EE\u6807\u5730\u5740\uFF0C\u4F7F\u7528UDP 67\u7AEF\u53E3\u4F5C\u4E3A\u76EE\u7684\u7AEF\u53E3\u6765\u5E7F\u64AD\u8BF7\u6C42IP\u5730\u5740\u4FE1\u606F\u3002\u5E7F\u64AD\u4FE1\u606F\u5305\u62ECDHCP\u5BA2\u6237\u673A\u7684MAC\u5730\u5740\u548C\u8BA1\u7B97\u673A\u540D</p><p><em>DCHP\u670D\u52A1\u5668\u76F8\u5E94\u8BF7\u6C42</em></p><p>DHCP\u670D\u52A1\u5668\u4F7F\u7528\u81EA\u5DF1\u7684IP\u5730\u5740\u4F5C\u4E3A\u6E90\u5730\u5740\uFF0C\u4F7F\u7528255.255.255.255\u4F5C\u4E3A\u76EE\u6807\u5730\u5740\uFF0C\u4F7F\u7528UDP 68\u7AEF\u53E3\u4F5C\u4E3A\u6E90\u7AEF\u53E3\u6765\u5E7F\u64ADDHCP OFFER\u4FE1\u606F\u3002 \u5E7F\u64AD\u4FE1\u606F\u5305\u62EC\uFF1A</p><ul><li>DHCP\u670D\u52A1\u5668/\u5BA2\u6237\u7AEF\u7684MAC\u5730\u5740</li><li>DHCP\u670D\u52A1\u5668\u63D0\u4F9B\u7684\u5408\u6CD5IP\u5730\u5740</li><li>\u5B50\u7F51\u63A9\u7801\uFF0C\u9ED8\u8BA4\u7F51\u5173\uFF0C\u79DF\u7EA6\u671F\u9650</li></ul><p><em>\u7EED\u79DF\u79DF\u7EA6</em></p><p>DHCP\u5BA2\u6237\u673A\u4F1A\u5728\u79DF\u671F\u8FC7\u53BB50%\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u5411\u4E3A\u5176\u63D0\u4F9BIP\u5730\u5740\u7684DHCP\u670D\u52A1\u5668\u53D1\u9001DHCP REQUEST\u6D88\u606F\u5305\u3002\u5982\u679C\u5BA2\u6237\u673A\u63A5\u6536\u5230\u8BE5\u670D\u52A1\u5668\u56DE\u5E94\u7684DHCP ACK\u6D88\u606F\u5305\uFF0C\u5BA2\u6237\u673A\u5C31\u6839\u636E\u5305\u4E2D\u6240\u63D0\u4F9B\u7684\u65B0\u7684\u79DF\u671F\u4EE5\u53CA\u5176\u5B83\u5DF2\u7ECF\u66F4\u65B0\u7684TCP/IP\u53C2\u6570\uFF0C\u66F4\u65B0\u81EA\u5DF1\u7684\u914D\u7F6E\uFF0CIP\u79DF\u7528\u66F4\u65B0\u5B8C\u6210\u3002\u5982\u679C\u6CA1\u6709\u6536\u5230\u8BE5\u670D\u52A1\u5668\u7684\u56DE\u590D\uFF0C\u5219\u5BA2\u6237\u673A\u7EE7\u7EED\u4F7F\u7528\u73B0\u6709\u7684IP\u5730\u5740\uFF0C\u56E0\u4E3A\u5F53\u524D\u79DF\u671F\u8FD8\u670950%\u3002\u5982\u679C\u5728\u79DF\u671F\u8FC7\u53BB50%\u7684\u65F6\u5019\u6CA1\u6709\u66F4\u65B0\uFF0C\u5219DHCP\u5BA2\u6237\u673A\u5C06\u5728\u79DF\u671F\u8FC7\u53BB87.5%\u7684\u65F6\u5019\u518D\u6B21\u5411\u4E3A\u5176\u63D0\u4F9BIP\u5730\u5740\u7684DHCP\u670D\u52A1\u5668\u8054\u7CFB\u3002<strong>\u5982\u679C\u8FD8\u4E0D\u6210\u529F\uFF0C\u5230\u79DF\u7EA6\u7684100%\u65F6\u5019\uFF0CDHCP\u5BA2\u6237\u673A\u5FC5\u987B\u653E\u5F03\u8FD9\u4E2AIP\u5730\u5740\uFF0C\u91CD\u65B0\u7533\u8BF7\u3002\u5982\u679C\u6B64\u65F6\u65E0DHCP\u670D\u52A1\u5668\u53EF\u7528\uFF0CDHCP\u5BA2\u6237\u673A\u4F1A\u4F7F\u7528169.254.0.0/16\u4E2D\u968F\u673A\u7684\u4E00\u4E2A\u5730\u5740\uFF0C\u5E76\u4E14\u6BCF\u96945\u5206\u949F\u518D\u8FDB\u884C\u5C1D\u8BD5\u3002</strong></p><h2 id="dhcp\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#dhcp\u642D\u5EFA" aria-hidden="true">#</a> DHCP\u642D\u5EFA</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p><code>yum -y install dhcp</code></p><p><strong>\u914D\u7F6E\u6587\u4EF6</strong></p><ul><li>\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/dhcp/dhcpd.conf</code></li><li>\u6A21\u677F\u6587\u4EF6\uFF1A<code>/usr/share/doc/dhcp-4.*.*/dhcpd.conf.example</code></li><li>\u4E2D\u7EE7\u914D\u7F6E\u6587\u4EF6\uFF1A<code>/etc/sysconfig/dhcrelay</code></li></ul><p><strong>\u6587\u4EF6\u8BE6\u60C5</strong> subnet 192.168.88.0 netmask 255.255.255.0{ #\u58F0\u660E\u8981\u5206\u914D\u7684\u7F51\u6BB5\u548C\u5B50\u7F51\u63A9\u7801 range 192.168.88.3 192.168.88.10; #\u58F0\u660E\u53EF\u7528IP\u5730\u5740\u6C60 option domain-name &quot;yssuvu.com&quot;; #\u8BBE\u7F6EDNS\u57DF option domain-name-servers 8.8.8.8; #\u8BBE\u7F6EDNS\u670D\u52A1\u5668\u5730\u5740 option routers 192.168.88.254; #\u9ED8\u8BA4\u7F51\u5173\u7684\u5730\u5740 option broadcast-address 192.168.88.255; #\u5E7F\u64AD\u5730\u5740\uFF08\u53EF\u4E0D\u5199) default-lease-time 600; #\u9ED8\u8BA4\u79DF\u7EA6(s\uFF09 max-lease-time 720; #\u6700\u5927\u79DF\u7EA6(s) }</p><h3 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u7840\u914D\u7F6E</h3><p>Server:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mv</span> /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.bak
<span class="token function">cp</span> -a /usr/share/doc/dhcp-4.*.*/dhcpd.conf.example /etc/dhcp/dhcpd.conf

<span class="token function">vim</span> /etc/dhcp/dhcpd.conf
subnet <span class="token number">192.168</span>.0.0 netmask <span class="token number">255.255</span>.255.0 <span class="token punctuation">{</span>
  range <span class="token number">192.168</span>.0.101 <span class="token number">192.168</span>.0.110<span class="token punctuation">;</span>
  option routers <span class="token number">192.168</span>.0.1<span class="token punctuation">;</span>
  default-lease-time <span class="token number">600</span><span class="token punctuation">;</span>
  max-lease-time <span class="token number">7200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

systemctl restart dhcpd
</code></pre></div><p>Client:</p><ol><li>\u8BBE\u7F6E\u7F51\u7EDC\u6A21\u5F0F\u4E3ADHCP</li><li>\u91CD\u542F\u7F51\u5361<code>ifdown ens32;ifup ens32</code></li></ol><h3 id="\u5730\u5740\u4FDD\u7559" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740\u4FDD\u7559" aria-hidden="true">#</a> \u5730\u5740\u4FDD\u7559</h3><ol><li><code>arp -a</code> \u67E5\u770B\u5BA2\u6237\u673AMAC\u5730\u5740</li><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">host</span> xxx<span class="token punctuation">{</span>
    hardware ethernet MAC\u5730\u5740\uFF1B
    fixed-address IP\u5730\u5740<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><ol start="3"><li>\u91CD\u542FDCHP\u670D\u52A1\uFF1A<code>systemctl restart dhcpd</code></li><li>\u5BA2\u6237\u7AEF\u91CD\u542F\u7F51\u5361\uFF1A<code>ifdown ens32;ifup ens32</code></li></ol><h3 id="\u8D85\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8D85\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8D85\u7EA7\u4F5C\u7528\u57DF</h3><p><strong>\u5B9E\u9A8C\u73AF\u5883</strong></p><p>Server\uFF1A</p><ul><li>eth0:192.168.10.1/24</li><li>eth0:0:192.168.20.1/24</li></ul><p>Client:</p><ul><li>eth0:192.168.10.10/24</li></ul><p>Client1:</p><ul><li>eth0:192.168.20.20/24</li></ul><ol><li>\u521B\u5EFA\u5B50\u63A5\u53E3</li></ol><p><code>cp /etc/sysconfig/network-scripts/ifcfg-ens32 /etc/sysconfig/network-scripts/ifcfg-ens32:0</code></p><ol start="2"><li>\u5206\u522B\u7ED9\u4E24\u4E2A\u63A5\u53E3\u914D\u7F6EIP</li><li>\u5F00\u542F\u8DEF\u7531\u8F6C\u53D1\u529F\u80FD</li></ol><p><code>echo &quot; net.ipv4.ip_forward = 1&quot;&gt;&gt;/etc/sysctl.conf</code></p><ol start="4"><li><p>\u5237\u65B0\u5185\u6838\u53C2\u6570 <code>sysctl -p</code></p></li><li><p>\u4FEE\u6539dhcp\u914D\u7F6E\u6587\u4EF6</p></li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/dhcp/dhcpd.conf
shared-network <span class="token number">10</span>-20<span class="token punctuation">{</span>
    subnet <span class="token number">192.168</span>.10.0 netmask <span class="token number">255.255</span>.255.0<span class="token punctuation">{</span>
        range <span class="token number">192.168</span>.10.10 <span class="token number">192.168</span>.10.10<span class="token punctuation">;</span>
         option routers <span class="token number">192.168</span>.10.1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    subnet <span class="token number">192.168</span>.20.0 netmask <span class="token number">255.255</span>.255.0<span class="token punctuation">{</span>
        range <span class="token number">192.168</span>.20.20 <span class="token number">192.168</span>.20.90<span class="token punctuation">;</span>
         option routers <span class="token number">192.168</span>.20.1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="6"><li>\u91CD\u542Fdhcp\u670D\u52A1<code>systemctl restart dhcpd</code></li></ol><h3 id="\u4E2D\u7EE7" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u7EE7" aria-hidden="true">#</a> \u4E2D\u7EE7</h3><p><strong>\u5B9E\u9A8C\u73AF\u5883</strong></p><p>Server\uFF1A</p><ul><li>ens32:192.168.10.10/24 Vmnet10</li></ul><p>Relay:</p><ul><li>ens32:192.168.10.20/24 Vmnet10</li><li>ens33:100.100.100.20/24 Vmnet11</li></ul><p>Client:</p><ul><li>ens32:dhcp Vmnet11</li></ul><ol><li>\u914D\u7F6EDHCP\u670D\u52A1\u5668IP\u5730\u5740\u548C\u7F51\u6BB5</li></ol><ul><li>\u4FEE\u6539<code>/etc/dhcp/dhcp.conf</code>\u6587\u4EF6</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>subnet <span class="token number">192.168</span>.10.0 netmask <span class="token number">255.255</span>.255.0<span class="token punctuation">{</span>
    range <span class="token number">192.168</span>.10.100 <span class="token number">192.168</span>.10.110<span class="token punctuation">;</span>
    option routers <span class="token number">192.168</span>.10.20<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
subnet <span class="token number">100.100</span>.100.0 netmask <span class="token number">255.255</span>.255.0<span class="token punctuation">{</span>
    range <span class="token number">100.100</span>.100.100 <span class="token number">100.100</span>.100.110<span class="token punctuation">;</span>
    option routers <span class="token number">100.100</span>.100.20<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u914D\u7F6ERelay\u670D\u52A1\u5668IP\u5730\u5740\u548C\u7F51\u6BB5</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5dhcp</span>
yum -y <span class="token function">install</span> dhcp


<span class="token comment"># \u58F0\u660EDHCP\u670D\u52A1\u5668\u5730\u5740(\u5982\u679C\u91CD\u65B0\u589E\u52A0\u4E00\u4E2A\u5B50\u7F51\uFF0C\u5219\u9700\u8981\u91CD\u65B0\u58F0\u660E)</span>
dhcrelay <span class="token number">192.168</span>.10.10

<span class="token comment"># \u5F00\u542F\u8DEF\u7531\u8F6C\u53D1\u529F\u80FD </span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;net.ipv4.ip_forward = 1&quot;</span><span class="token operator">&gt;&gt;</span>/etc/sysctl.conf

<span class="token comment"># \u5237\u65B0\u5185\u6838\u53C2\u6570 </span>
sysctl -p 
</code></pre></div>`,59);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
