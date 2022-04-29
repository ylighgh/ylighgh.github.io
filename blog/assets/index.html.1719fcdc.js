import{c as n}from"./app.d6490461.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h2 id="orm" tabindex="-1"><a class="header-anchor" href="#orm" aria-hidden="true">#</a> ORM</h2><p><code>ORM\uFF08Object Ralational Mapping\uFF0C\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\uFF09</code>\u7528\u6765\u628A\u5BF9\u8C61\u6A21\u578B\u8868\u793A\u7684\u5BF9\u8C61\u6620\u5C04\u5230\u57FA\u4E8ESQL\u7684\u5173\u7CFB\u6A21\u578B\u6570\u636E\u5E93\u7ED3\u6784\u4E2D\u53BB\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u5728\u5177\u4F53\u7684\u64CD\u4F5C\u5B9E\u4F53\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5C31\u4E0D\u9700\u8981\u518D\u53BB\u548C\u590D\u6742\u7684SQL\u8BED\u53E5\u6253\u4EA4\u9053\uFF0C\u53EA\u9700\u7B80\u5355\u7684\u64CD\u4F5C\u5B9E\u4F53\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002ORM\u6280\u672F\u662F\u5728\u5BF9\u8C61\u548C\u5173\u7CFB\u4E4B\u95F4\u63D0\u4F9B\u4E86\u4E00\u6761\u6865\u6881\uFF0C\u524D\u53F0\u7684\u5BF9\u8C61\u578B\u6570\u636E\u548C\u6570\u636E\u5E93\u4E2D\u7684\u5173\u7CFB\u578B\u7684\u6570\u636E\u901A\u8FC7\u8FD9\u4E2A\u6865\u6881\u6765\u76F8\u4E92\u8F6C\u5316</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>pip <span class="token function">install</span> flask_sqlalchemy
</code></pre></div><h3 id="\u521B\u5EFA\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6A21\u578B" aria-hidden="true">#</a> \u521B\u5EFA\u6A21\u578B</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># \u5F15\u7528\u5305</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;SQLALCHEMY_DATABASE_URI&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> DB_URI <span class="token comment"># \u6570\u636E\u5E93\u914D\u7F6E</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;SQLALCHEMY_TRACK_MODIFICATIONS&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">True</span>
db <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span>app<span class="token punctuation">,</span> use_native_unicode<span class="token operator">=</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u5B9A\u4E49ORM\u6A21\u578B</span>
<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>db<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8868\u540D</span>
    __tablename__ <span class="token operator">=</span> <span class="token string">&#39;article&#39;</span>
    <span class="token comment"># \u5B57\u6BB5\u540D</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> autoincrement<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    title <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>String<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    content <span class="token operator">=</span> db<span class="token punctuation">.</span>Column<span class="token punctuation">(</span>db<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> nullable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h2><h3 id="c-\u589E\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#c-\u589E\u52A0\u6570\u636E" aria-hidden="true">#</a> C(\u589E\u52A0\u6570\u636E)</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># \u521B\u5EFA\u5BF9\u8C61</span>
article <span class="token operator">=</span> Article<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&quot;\u94A2\u94C1\u662F\u600E\u6837\u70BC\u6210\u7684&quot;</span><span class="token punctuation">,</span> content<span class="token operator">=</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># \u6DFB\u52A0\u5230session</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>article<span class="token punctuation">)</span>
<span class="token comment"># \u63D0\u4EA4\u4FDD\u5B58\u5230\u6570\u636E\u5E93</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u5173\u95EDsession</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="r-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#r-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> R(\u67E5\u8BE2\u6570\u636E)</h3><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># filter_by :\u8FD4\u56DE\u7C7B\u5217\u8868\u5BF9\u8C61</span>
article <span class="token operator">=</span> Article<span class="token punctuation">.</span>query<span class="token punctuation">.</span>filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="u-\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#u-\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> U(\u66F4\u65B0\u6570\u636E)</h3><div class="language-python ext-py"><pre class="language-python"><code>article <span class="token operator">=</span> Article<span class="token punctuation">.</span>query<span class="token punctuation">.</span>filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
article<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="d-\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#d-\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> D(\u5220\u9664\u6570\u636E)</h3><div class="language-python ext-py"><pre class="language-python"><code>Article<span class="token punctuation">.</span>query<span class="token punctuation">.</span>filter_by<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>session<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="orm\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#orm\u7BA1\u7406" aria-hidden="true">#</a> ORM\u7BA1\u7406</h2><p><strong>\u5B89\u88C5</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>pip <span class="token function">install</span> flask_migrate
</code></pre></div><p><strong>\u4F7F\u7528</strong></p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">from</span> flask_migrate <span class="token keyword">import</span> Migrate
migrate <span class="token operator">=</span> Migrate<span class="token punctuation">(</span>app<span class="token punctuation">,</span> db<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u63D0\u4EA4\u6570\u636E\u5E93</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316\u63D0\u4EA4</span>
flask db init 

<span class="token comment"># \u63D0\u4EA4\u5230\u6682\u5B58\u533A</span>
flask db migrate -m <span class="token string">&#39;comment&#39;</span>

<span class="token comment"># \u63D0\u4EA4\u5230\u6570\u636E\u5E93</span>
flask db upgrade 
</code></pre></div><h2 id="\u6570\u636E\u5E93\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u5E93\u914D\u7F6E\u6587\u4EF6</h2><p>\u4E00\u822C\u5C06\u6570\u636E\u5E93\u5B58\u653E\u5728<code>config.py</code>\u4E2D,\u968F\u540E\u5728app.py\u4E2D\u5F15\u7528<code>from config import DB_URI</code></p><div class="language-python ext-py"><pre class="language-python"><code><span class="token comment"># \u6570\u636E\u5E93\u7684\u914D\u7F6E\u53D8\u91CF</span>
HOSTNAME <span class="token operator">=</span> <span class="token string">&#39;aliyun&#39;</span>
PORT <span class="token operator">=</span> <span class="token string">&#39;3306&#39;</span>
DATABASE <span class="token operator">=</span> <span class="token string">&#39;zl_flask&#39;</span>
USERNAME <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span>
PASSWORD <span class="token operator">=</span> <span class="token string">&#39;xxxx&#39;</span>
DB_URI <span class="token operator">=</span> <span class="token string">&#39;mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">,</span> PORT<span class="token punctuation">,</span> DATABASE<span class="token punctuation">)</span>
</code></pre></div>`,26);function t(o,e){return p}var u=a(s,[["render",t]]);export{u as default};
