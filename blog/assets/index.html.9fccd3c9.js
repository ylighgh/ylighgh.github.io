import{c as l}from"./app.4625bfa0.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const e={},o=l('<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>TcpWrappers\u662F\u4E00\u4E2A\u5DE5\u4F5C\u5728\u7B2C\u56DB\u5C42(\u4F20\u8F93\u5C42)\u7684\u5B89\u5168\u5DE5\u5177,\u5BF9\u6709\u72B6\u6001(TCP)\u7684\u7279\u5B9A\u670D\u52A1\u8FDB\u884C\u5B89\u5168\u68C0\u6D4B\u5E76\u5B9E\u73B0\u8BBF\u95EE\u63A7\u5236,\u754C\u5B9A\u65B9\u5F0F\u662F\u51E1\u662F\u8C03\u7528<code>libwrap.so</code>\u5E93\u6587\u4EF6\u7684\u7A0B\u5E8F\u5C31\u53EF\u4EE5\u53D7 TcpWrappers\u7684\u5B89\u5168\u63A7\u5236.</p><p>\u5224\u65AD\u65B9\u5F0F:</p><ol><li>\u67E5\u770B\u5BF9\u5E94\u670D\u52A1\u547D\u4EE4\u4F4D\u7F6E:</li></ol><ul><li><code>which sshd</code></li></ul><ol start="2"><li>\u67E5\u770B\u6307\u5B9A\u547D\u4EE4\u6267\u884C\u65F6\u662F\u5426\u8C03\u7528<code>libwrap.so</code>\u6587\u4EF6</li></ol><ul><li><code>ldd /usr/sbin/sshd|grep libwrap.so</code></li><li>ldd:\u9759\u6001\u7684\u67E5\u770B\u670D\u52A1\u8C03\u7528\u65F6\u6240\u7528\u7684\u6587\u4EF6\u5217\u8868</li></ul><h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406</h2><ol><li>\u4F18\u5148\u67E5\u770B<code>/etc/hosts.allow</code>,\u5339\u914D\u5219\u505C\u6B62</li><li>\u5141\u8BB8\u4E2A\u522B,\u62D2\u7EDD\u6240\u6709:<code>hosts.allow</code>\u6587\u4EF6\u6DFB\u52A0\u5355\u4E2A\u5141\u8BB8\u7B56\u7565,<code>hosts.deny</code>\u6587\u4EF6\u6DFB\u52A0ALL</li><li>\u62D2\u7EDD\u4E2A\u522B,\u5141\u8BB8\u6240\u6709:<code>hosts.allow</code>\u6587\u4EF6\u4E3A\u7A7A,<code>hosts.deny</code>\u6587\u4EF6\u6DFB\u52A0\u5355\u4E2A\u62D2\u7EDD\u7B56\u7565</li></ol><h2 id="\u7F16\u5199\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u89C4\u5219" aria-hidden="true">#</a> \u7F16\u5199\u89C4\u5219</h2><p><code>service_list@host:client_list</code></p><ul><li>service_list:\u662F\u7A0B\u5E8F(\u670D\u52A1)\u7684\u5217\u8868,\u53EF\u4EE5\u662F\u591A\u4E2A,\u4F7F\u7528<code>,</code>\u9694\u5F00</li><li>host:\u8BBE\u7F6E\u5141\u8BB8\u6216\u8005\u7981\u6B62\u4ED6\u4EBA\u4ECE\u81EA\u5DF1\u7684\u54EA\u4E2A\u7F51\u53E3\u8FDB\u5165.\u8FD9\u4E00\u9879\u4E0D\u5199,\u5C31\u4EE3\u8868\u5168\u90E8</li><li>client_list:\u662F\u8BBF\u95EE\u8005\u7684\u5730\u5740,\u5982\u679C\u9700\u8981\u63A7\u5236\u7684\u7528\u6237\u8F83\u591A,\u53EF\u4EE5\u4F7F\u7528\u7A7A\u683C\u6216<code>,</code>\u9694\u5F00 <ul><li>\u57FA\u4E8EIP\u5730\u5740:192.158.1.1</li><li>\u57FA\u4E8E\u4E3B\u673A\u540D:www.baidu.com www.sougou.com</li><li>\u57FA\u4E8E\u7F51\u7EDC/\u63A9\u7801: 192.168.0.0/255.255.255.0</li></ul></li></ul><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><ol><li>\u62D2\u7EDD\u5355\u4E2AIP\u4F7F\u7528ssh\u8FDC\u7A0B\u8FDE\u63A5</li></ol><p>\u62D2\u7EDD\u5355\u4E2A,\u5141\u8BB8\u6240\u6709</p><p>\u914D\u7F6E\u6587\u4EF6:</p><ul><li>hosts.allow :\u7A7A\u7740</li><li>hosts.deny: sshd:192.168.10.20</li></ul><ol start="2"><li>\u62D2\u7EDD\u67D0\u4E00\u7F51\u6BB5\u4F7F\u7528ssh\u8FDC\u7A0B\u8FDE\u63A5</li></ol><p>\u914D\u7F6E\u6587\u4EF6:</p><ul><li>hosts.allow :\u7A7A\u7740</li><li>hosts.deny: sshd:192.168.10.</li></ul><ol start="3"><li>\u4EC5\u5141\u8BB8\u5355\u4E2AIP\u4F7F\u7528ssh\u8FDC\u7A0B\u8FDE\u63A5</li></ol><p>\u5141\u8BB8\u5355\u4E2A,\u62D2\u7EDD\u6240\u6709</p><p>\u914D\u7F6E\u6587\u4EF6:</p><ul><li>hosts.allow :sshd:192.168.10.20</li><li>hosts.deny: sshd:ALL</li></ul>',24);function s(d,a){return o}var t=i(e,[["render",s]]);export{t as default};
