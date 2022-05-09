import{c as n}from"./app.23258179.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>\u7531\u4E8EWindows\u81EA\u52A8\u66F4\u65B0\u800C\u5F15\u53D1GRUB\u5F15\u5BFC\u5206\u533A\u627E\u4E0D\u5230ArchLinux\u4ECB\u8D28\u7684\u95EE\u9898</p><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h2><p><strong>\u5173\u4E8EBIOS\u627E\u4E0D\u5230\u5F15\u5BFC\u4ECB\u8D28\u7684\u89E3\u51B3\u65B9\u6CD5</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mount</span> /dev/sdc3 /mnt

<span class="token function">mkdir</span> /mnt/home
<span class="token function">mount</span> /dev/sdc4 /mnt/home

<span class="token function">mkdir</span> /mnt/efi
<span class="token function">mount</span> /dev/sdc1 /mnt/efi

<span class="token comment">#\u5207\u6362\u5230\u6302\u8F7D\u7CFB\u7EDF</span>
arch-chroot /mnt

grub-install --target<span class="token operator">=</span>x86_64-efi --efi-directory<span class="token operator">=</span>efi --removeable --bootloader<span class="token operator">=</span>GRUB --recheck

<span class="token comment">##--removeable \u8868\u793A\u662F\u79FB\u52A8\u4ECB\u8D28</span>
<span class="token comment">##--recheck \u68C0\u67E5\u8BBE\u5907</span>

<span class="token comment">#\u91CD\u65B0\u751F\u6210grub\u6587\u4EF6</span>
<span class="token function">grub-mkconfig</span> -o /boot/grub/grub.cfg
</code></pre></div><p><em>\u5F00\u673A\u63D0\u793Atimed out waiting for device</em></p><p>\u5F15\u5BFC\u627E\u4E0D\u5230\uFF0C\u5BFC\u81F4UUID\u66F4\u6539\uFF0C\u6062\u590D\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment">#\u6267\u884C\u547D\u4EE4\u8BB0\u5F55EFI\u5206\u533A\u7684UUID</span>
blkid

<span class="token comment">#\u7F16\u8F91fstab\u6587\u4EF6\u5C06UUID\u91CD\u65B0\u5199\u5165</span>
<span class="token function">vim</span> /etc/fstab
</code></pre></div>`,8);function t(o,c){return e}var i=a(s,[["render",t]]);export{i as default};
