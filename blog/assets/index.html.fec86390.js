import{c as e}from"./app.23258179.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=e('<h2 id="linux\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#linux\u57FA\u7840" aria-hidden="true">#</a> Linux\u57FA\u7840</h2><h3 id="\u8FD0\u884C\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u7EA7\u522B" aria-hidden="true">#</a> \u8FD0\u884C\u7EA7\u522B</h3><h2 id="linux\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B-linux\u7CFB\u7EDF\u67097\u4E2A\u8FD0\u884C\u7EA7\u522B-\u4E0D\u540C\u7684\u8FD0\u884C\u7EA7\u522B\u8FD0\u884C\u7684\u7A0B\u5E8F\u548C\u529F\u80FD\u90FD\u4E0D\u4E00\u6837-\u800Clinux\u7CFB\u7EDF\u9ED8\u8BA4\u662F\u8FD0\u884C\u5728\u4E00\u4E2A\u6807\u51C6\u7684\u7EA7\u522B\u4E0A-\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B\u6587\u4EF6-etc-inittab\u6587\u4EF6-source-note" tabindex="-1"><a class="header-anchor" href="#linux\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B-linux\u7CFB\u7EDF\u67097\u4E2A\u8FD0\u884C\u7EA7\u522B-\u4E0D\u540C\u7684\u8FD0\u884C\u7EA7\u522B\u8FD0\u884C\u7684\u7A0B\u5E8F\u548C\u529F\u80FD\u90FD\u4E0D\u4E00\u6837-\u800Clinux\u7CFB\u7EDF\u9ED8\u8BA4\u662F\u8FD0\u884C\u5728\u4E00\u4E2A\u6807\u51C6\u7684\u7EA7\u522B\u4E0A-\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B\u6587\u4EF6-etc-inittab\u6587\u4EF6-source-note" aria-hidden="true">#</a> Linux\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B:Linux\u7CFB\u7EDF\u67097\u4E2A\u8FD0\u884C\u7EA7\u522B,\u4E0D\u540C\u7684\u8FD0\u884C\u7EA7\u522B\u8FD0\u884C\u7684\u7A0B\u5E8F\u548C\u529F\u80FD\u90FD\u4E0D\u4E00\u6837,\u800CLinux\u7CFB\u7EDF\u9ED8\u8BA4\u662F\u8FD0\u884C\u5728\u4E00\u4E2A\u6807\u51C6\u7684\u7EA7\u522B\u4E0A,\u7CFB\u7EDF\u8FD0\u884C\u7EA7\u522B\u6587\u4EF6/etc/inittab\u6587\u4EF6 [source,note]</h2><p>\u8FD0\u884C\u7EA7\u522B0:\u6240\u6709\u8FDB\u7A0B\u88AB\u7EC8\u6B62,\u673A\u5668\u5C06\u6709\u5E8F\u7684\u505C\u6B62,\u5173\u673A\u65F6\u7CFB\u7EDF\u5904\u4E8E\u8FD9\u4E2A\u8FD0\u884C\u7EA7\u522B(\u5173\u673A) \u8FD0\u884C\u7EA7\u522B1:\u5355\u7528\u6237\u6A21\u5F0F,(root\u7528\u6237\u8FDB\u884C\u7CFB\u7EDF\u7EF4\u62A4),\u7CFB\u7EDF\u91CC\u8FD0\u884C\u7684\u6240\u6709\u670D\u52A1\u90FD\u4E0D\u4F1A\u542F\u52A8 \u8FD0\u884C\u7EA7\u522B2:\u591A\u7528\u6237\u6A21\u5F0F(\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDFNFS\u670D\u52A1\u4E3A\u6CA1\u6709\u88AB\u542F\u52A8) \u8FD0\u884C\u7EA7\u522B3:\u5B8C\u5168\u591A\u7528\u6237\u6A21\u5F0F,(\u6709NFS\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF)\u6807\u51C6\u7684\u8FD0\u884C\u7EA7\u522B \u8FD0\u884C\u7EA7\u522B4:\u7CFB\u7EDF\u672A\u4F7F\u7528 \u8FD0\u884C\u7EA7\u522B5:\u767B\u9646\u540E,\u8FDB\u5165\u5E26GUI\u7684\u56FE\u5F62\u5316\u754C\u9762,\u6807\u51C6\u7684\u8FD0\u884C\u7EA7\u522B \u8FD0\u884C\u7EA7\u522B6:\u7CFB\u7EDF\u6B63\u5E38\u5173\u95ED\u5E76\u91CD\u542F</p><p>#\u67E5\u770B\u5F53\u524D\u7684\u8FD0\u884C\u7EA7\u522B runlevel</p><p>#\u5207\u6362\u8FD0\u884C\u7EA7\u522B init \u6570\u5B57</p><p>#\u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u9ED8\u8BA4\u8FD0\u884C\u7EA7\u522B systemctl get-default</p><h2 id="\u4FEE\u6539\u7CFB\u7EDF\u9ED8\u8BA4\u8FD0\u884C\u7EA7\u522Bsystemctl-set-default-target-target" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7CFB\u7EDF\u9ED8\u8BA4\u8FD0\u884C\u7EA7\u522Bsystemctl-set-default-target-target" aria-hidden="true">#</a> #\u4FEE\u6539\u7CFB\u7EDF\u9ED8\u8BA4\u8FD0\u884C\u7EA7\u522B systemctl set-default TARGET.target</h2><h2 id="\u5173\u673A\u548C\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u5173\u673A\u548C\u91CD\u542F" aria-hidden="true">#</a> \u5173\u673A\u548C\u91CD\u542F</h2><h2 id="source-bash" tabindex="-1"><a class="header-anchor" href="#source-bash" aria-hidden="true">#</a> [source,bash]</h2><p>#\u5173\u673A halt init 0 poweroff shutdown shutdown -h 10 //10\u5206\u949F\u540E\u5173\u673A shutdown -h now //\u7ACB\u523B\u5173\u673A</p><h2 id="\u91CD\u542Finit-6rebootshutdown-r-nowshutdown-r-10-10\u5206\u949F\u540E\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Finit-6rebootshutdown-r-nowshutdown-r-10-10\u5206\u949F\u540E\u91CD\u542F" aria-hidden="true">#</a> #\u91CD\u542F init 6 reboot shutdown -r now shutdown -r 10 //10\u5206\u949F\u540E\u91CD\u542F</h2><h2 id="\u8F6F\u94FE\u63A5\u4E0E\u786C\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u94FE\u63A5\u4E0E\u786C\u94FE\u63A5" aria-hidden="true">#</a> \u8F6F\u94FE\u63A5\u4E0E\u786C\u94FE\u63A5</h2><p>.\u8F6F\u94FE\u63A5 \u7279\u70B9:\u8F6F\u94FE\u63A5\u53EF\u4EE5\u8DE8\u5206\u533A,\u53EF\u4EE5\u5BF9\u76EE\u5F55\u8FDB\u884C\u94FE\u63A5,\u6E90\u6587\u4EF6\u5220\u9664\u540E,\u94FE\u63A5\u6587\u4EF6\u4E0D\u53EF\u7528</p><p>\u683C\u5F0F: <code>ln -s \u6E90\u6587\u4EF6\u8DEF\u5F84 \u76EE\u6807\u6587\u4EF6\u8DEF\u5F84</code></p><p>.\u786C\u94FE\u63A5 \u7279\u70B9:\u786C\u94FE\u63A5\u4E0D\u53EF\u4EE5\u8DE8\u5206\u533A,\u4E0D\u53EF\u4EE5\u5BF9\u76EE\u5F55\u8FDB\u884C\u94FE\u63A5,\u6E90\u6587\u4EF6\u5220\u9664\u540E,\u94FE\u63A5\u6587\u4EF6\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528</p><p>\u683C\u5F0F: <code>ln \u6E90\u6587\u4EF6\u8DEF\u5F84 \u76EE\u6807\u6587\u4EF6\u8DEF\u5F84</code></p><h2 id="\u7CFB\u7EDF\u786C\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u786C\u4EF6" aria-hidden="true">#</a> \u7CFB\u7EDF\u786C\u4EF6</h2><p>\u5185\u6838(kernel)</p><h2 id="\u547D\u4EE4-uname-rs-source-shell" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4-uname-rs-source-shell" aria-hidden="true">#</a> \u547D\u4EE4: <code>uname -rs</code> [source.shell]</h2><p>[root@localhost ~]# uname -rs Linux 3.10.0-1062.el7.x86_64</p><h2 id="linux-\u5185\u6838\u540D\u79F03-\u4E3B\u7248\u672C10-\u6B21\u7248\u672C0-\u4FEE\u6539\u7248\u672C1062-\u8865\u4E01\u6B21\u6570el7-enterprise-linux-\u4F01\u4E1A\u7248linux-x86-64-cpu\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#linux-\u5185\u6838\u540D\u79F03-\u4E3B\u7248\u672C10-\u6B21\u7248\u672C0-\u4FEE\u6539\u7248\u672C1062-\u8865\u4E01\u6B21\u6570el7-enterprise-linux-\u4F01\u4E1A\u7248linux-x86-64-cpu\u67B6\u6784" aria-hidden="true">#</a> Linux #\u5185\u6838\u540D\u79F0 3 #\u4E3B\u7248\u672C 10 #\u6B21\u7248\u672C 0 #\u4FEE\u6539\u7248\u672C 1062 #\u8865\u4E01\u6B21\u6570 el7 #Enterprise Linux(\u4F01\u4E1A\u7248Linux) X86_64 #CPU\u67B6\u6784</h2><p>CPU</p><p>\u547D\u4EE4: <code>lscpu</code></p><p>\u7CFB\u7EDF\u5185\u5B58</p><p>\u547D\u4EE4: <code>free -mh</code></p><p>\u7F51\u5361</p><p>\u547D\u4EE4: <code>ifconfig \u7F51\u5361\u540D</code></p><h2 id="\u4E3B\u673A\u540D-source-shell" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u673A\u540D-source-shell" aria-hidden="true">#</a> \u4E3B\u673A\u540D [source.shell]</h2><h2 id="hostname-\u65B0\u540D\u79F0-\u4E34\u65F6\u751F\u6548-\u91CD\u542F\u6062\u590Dhostnamectl-set-hostname-\u65B0\u540D\u79F0-\u6C38\u4E45\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#hostname-\u65B0\u540D\u79F0-\u4E34\u65F6\u751F\u6548-\u91CD\u542F\u6062\u590Dhostnamectl-set-hostname-\u65B0\u540D\u79F0-\u6C38\u4E45\u751F\u6548" aria-hidden="true">#</a> hostname [\u65B0\u540D\u79F0] //\u4E34\u65F6\u751F\u6548,\u91CD\u542F\u6062\u590D hostnamectl set-hostname [\u65B0\u540D\u79F0] //\u6C38\u4E45\u751F\u6548</h2><h2 id="\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u7BA1\u7406</h2><p>\u7528\u6237\u6A21\u677F\u76EE\u5F55: <code>/etc/skel</code></p><p>\u9ED8\u8BA4\u4FE1\u606F\u76EE\u5F55: <code>/etc/default/useradd</code></p><p>\u521B\u5EFA\u7528\u6237: <code>useraddd</code></p><ul><li>\u5E38\u7528\u9009\u9879:</li></ul><ul><li><p>-u \u6307\u5B9A\u7528\u6237UID</p></li><li><p>-d \u6307\u5B9A\u7528\u6237\u5BB6\u76EE\u5F55</p></li><li><p>-c \u7528\u6237\u63CF\u8FF0\u4FE1\u606F</p></li><li><p>-g \u6307\u5B9A\u7528\u6237\u57FA\u672C\u7EC4</p></li><li><p>-G \u6307\u5B9A\u7528\u6237\u9644\u52A0\u7EC4</p></li><li><p>-s \u6307\u5B9A\u7528\u6237\u7684shell</p></li></ul><h2 id="\u5BC6\u7801\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801\u7BA1\u7406" aria-hidden="true">#</a> \u5BC6\u7801\u7BA1\u7406</h2><p>\u547D\u4EE4\u683C\u5F0F: <code>passwd [-\u9009\u9879] \u7528\u6237\u540D</code></p><p>\u5BC6\u7801\u89C4\u8303: \u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E8\u4E2A\u5B57\u7B26,\u590D\u6742\u5EA6(\u6570\u5B57,\u5B57\u6BCD\u533A\u5206\u5927\u5C0F\u5199,\u7279\u6B8A\u5B57\u7B26)</p><ul><li>\u5E38\u7528\u9009\u9879:</li></ul><ul><li><p>-S \u67E5\u770B\u5BC6\u7801\u4FE1\u606F</p></li><li><p>-l \u9501\u5B9A\u7528\u6237\u5BC6\u7801</p></li><li><p>-u \u89E3\u9501\u7528\u6237\u5BC6\u7801</p></li><li><p>-d \u5220\u9664\u5BC6\u7801</p></li><li><p>--stdin \u901A\u8FC7\u7BA1\u9053\u65B9\u5F0F\u8BBE\u7F6E\u7528\u6237\u5BC6\u7801</p></li></ul><ul><li><p>\u975E\u4EA4\u4E92\u5F0F\u8BBE\u7F6E\u7528\u6237\u5BC6\u7801</p></li><li><p>\u547D\u4EE4\u683C\u5F0F: <code>echo \u5BC6\u7801|passwd --stdin \u7528\u6237\u540D</code></p></li></ul><p>\u7528\u6237\u5BC6\u7801\u6587\u4EF6: <code>/etc/shadow</code></p><ul><li>\u5B57\u6BB5\u542B\u4E49:</li></ul><ul><li><p>\u7B2C\u4E09\u4E2A\u5B57\u6BB5:\u5BC6\u7801\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u65E5\u671F</p></li><li><p>\u7B2C\u56DB\u4E2A\u5B57\u6BB5:\u5BC6\u7801\u7684\u4FEE\u6539\u671F\u9650,\u4E3A0\u8868\u793A\u968F\u65F6\u53EF\u4EE5\u4FEE\u6539,\u4E3A10\u8868\u793A10\u5929\u4E4B\u5185\u4E0D\u80FD\u4FEE\u6539</p></li><li><p>\u7B2C\u4E94\u4E2A\u5B57\u6BB5:\u5BC6\u7801\u6709\u6548\u671F</p></li><li><p>\u7B2C\u516D\u4E2A\u5B57\u6BB5:\u5BC6\u7801\u5230\u671F\u524D\u8B66\u544A\u65F6\u95F4</p></li><li><p>\u7B2C\u4E03\u4E2A\u5B57\u6BB5:\u5BC6\u7801\u8FC7\u671F\u540E\u7684\u5BBD\u9650\u65F6\u95F4</p></li><li><p>\u7B2C\u516B\u4E2A\u5B57\u6BB5:\u8D26\u53F7\u5931\u6548\u65F6\u95F4(\u65E5\u671F\u4ECE1970\u5E741\u67081\u65E5\u8D77)</p></li><li><p>\u7B2C\u516B\u4E2A\u5B57\u6BB5:\u4FDD\u7559</p></li></ul><p>\u65B0\u5EFA\u7528\u6237\u767B\u5F55\u5C31\u63D0\u793A\u4FEE\u6539\u5BC6\u7801: <code>chage -d 0 \u7528\u6237\u540D</code></p>',46);function r(l,h){return d}var s=a(i,[["render",r]]);export{s as default};
