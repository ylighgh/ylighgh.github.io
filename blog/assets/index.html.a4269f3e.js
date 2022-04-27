import{c as n}from"./app.519d0170.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u5217\u51FA\u5206\u533A\u8868" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u5206\u533A\u8868" aria-hidden="true">#</a> \u5217\u51FA\u5206\u533A\u8868</h2><p><code>fdisk -l</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u256D\u2500ylighgh@ylighgh ~ 
\u2570\u2500$ <span class="token function">sudo</span> <span class="token function">fdisk</span> -l         
Disk /dev/sdb\uFF1A223.58 GiB\uFF0C240065183744 \u5B57\u8282\uFF0C468877312 \u4E2A\u6247\u533A
\u78C1\u76D8\u578B\u53F7\uFF1ASSD PLUS <span class="token number">240</span>    
\u5355\u5143\uFF1A\u6247\u533A / <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> \u5B57\u8282
\u6247\u533A\u5927\u5C0F<span class="token punctuation">(</span>\u903B\u8F91/\u7269\u7406<span class="token punctuation">)</span>\uFF1A512 \u5B57\u8282 / <span class="token number">512</span> \u5B57\u8282
I/O \u5927\u5C0F<span class="token punctuation">(</span>\u6700\u5C0F/\u6700\u4F73<span class="token punctuation">)</span>\uFF1A4096 \u5B57\u8282 / <span class="token number">33553920</span> \u5B57\u8282
\u78C1\u76D8\u6807\u7B7E\u7C7B\u578B\uFF1Agpt
\u78C1\u76D8\u6807\u8BC6\u7B26\uFF1A3446E790-30DD-424F-8650-D95EE75055FA

\u8BBE\u5907            \u8D77\u70B9      \u672B\u5C3E      \u6247\u533A   \u5927\u5C0F \u7C7B\u578B
/dev/sdb1       <span class="token number">2048</span>    <span class="token number">616447</span>    <span class="token number">614400</span>   300M EFI \u7CFB\u7EDF
/dev/sdb2     <span class="token number">616448</span>   <span class="token number">4810751</span>   <span class="token number">4194304</span>     2G Linux swap
/dev/sdb3    <span class="token number">4810752</span> <span class="token number">214525951</span> <span class="token number">209715200</span>   100G Linux \u6587\u4EF6\u7CFB\u7EDF
/dev/sdb4  <span class="token number">214525952</span> <span class="token number">468877278</span> <span class="token number">254351327</span> <span class="token number">121</span>.3G Linux \u6587\u4EF6\u7CFB\u7EDF
</code></pre></div><h2 id="\u624B\u52A8\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5206\u533A" aria-hidden="true">#</a> \u624B\u52A8\u5206\u533A</h2><p><code>fdisk /dev/sd?</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code>  DOS <span class="token punctuation">(</span>MBR<span class="token punctuation">)</span>
   a   \u5F00\u5173 \u53EF\u542F\u52A8 \u6807\u5FD7
   b   \u7F16\u8F91\u5D4C\u5957\u7684 BSD \u78C1\u76D8\u6807\u7B7E
   c   \u5F00\u5173 dos \u517C\u5BB9\u6027\u6807\u5FD7

  \u5E38\u89C4
   d   \u5220\u9664\u5206\u533A
   F   \u5217\u51FA\u672A\u5206\u533A\u7684\u7A7A\u95F2\u533A
   l   \u5217\u51FA\u5DF2\u77E5\u5206\u533A\u7C7B\u578B
   n   \u6DFB\u52A0\u65B0\u5206\u533A
   p   \u6253\u5370\u5206\u533A\u8868
   t   \u66F4\u6539\u5206\u533A\u7C7B\u578B
   <span class="token function">v</span>   \u68C0\u67E5\u5206\u533A\u8868
   i   \u6253\u5370\u67D0\u4E2A\u5206\u533A\u7684\u76F8\u5173\u4FE1\u606F

  \u6742\u9879
   m   \u6253\u5370\u6B64\u83DC\u5355
   u   \u66F4\u6539 \u663E\u793A/\u8BB0\u5F55 \u5355\u4F4D
   x   \u66F4\u591A\u529F\u80FD<span class="token punctuation">(</span>\u4EC5\u9650\u4E13\u4E1A\u4EBA\u5458<span class="token punctuation">)</span>

  \u811A\u672C
   I   \u4ECE sfdisk \u811A\u672C\u6587\u4EF6\u52A0\u8F7D\u78C1\u76D8\u5E03\u5C40
   O   \u5C06\u78C1\u76D8\u5E03\u5C40\u8F6C\u50A8\u4E3A sfdisk \u811A\u672C\u6587\u4EF6

  \u4FDD\u5B58\u5E76\u9000\u51FA
   w   \u5C06\u5206\u533A\u8868\u5199\u5165\u78C1\u76D8\u5E76\u9000\u51FA
   q   \u9000\u51FA\u800C\u4E0D\u4FDD\u5B58\u66F4\u6539

  \u65B0\u5EFA\u7A7A\u78C1\u76D8\u6807\u7B7E
   g   \u65B0\u5EFA\u4E00\u4EFD GPT \u5206\u533A\u8868
   G   \u65B0\u5EFA\u4E00\u4EFD\u7A7A GPT <span class="token punctuation">(</span>IRIX<span class="token punctuation">)</span> \u5206\u533A\u8868
   o   \u65B0\u5EFA\u4E00\u4EFD\u7684\u7A7A DOS \u5206\u533A\u8868
   s   \u65B0\u5EFA\u4E00\u4EFD\u7A7A Sun \u5206\u533A\u8868

</code></pre></div><h2 id="\u683C\u5F0F\u5316\u5206\u533A-\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u5206\u533A-\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u5206\u533A(\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF)</h2><p><code>mkfs -t FILETYPE /dev/sd?</code></p>`,8);function p(t,c){return e}var d=s(a,[["render",p]]);export{d as default};
