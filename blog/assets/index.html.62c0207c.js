import{c as a}from"./app.8ae60c0e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},e=a(`<h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> Issue</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>Failed to call execv <span class="token punctuation">(</span>no such <span class="token function">file</span> or directory<span class="token punctuation">)</span>
Error: The <span class="token builtin class-name">command</span> was not executed correctly
Error: Unable to commit <span class="token keyword">for</span> processing <span class="token punctuation">(</span>failed to run transaction hook <span class="token keyword">function</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="solve" tabindex="-1"><a class="header-anchor" href="#solve" aria-hidden="true">#</a> Solve</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S pacman-contrib
</code></pre></div>`,4);function o(c,t){return e}var l=s(n,[["render",o]]);export{l as default};
