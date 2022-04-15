import{c as n}from"./app.f7976be9.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h2 id="\u5411\u811A\u672C\u6587\u4EF6\u8FFD\u52A0\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5411\u811A\u672C\u6587\u4EF6\u8FFD\u52A0\u5185\u5BB9" aria-hidden="true">#</a> \u5411\u811A\u672C\u6587\u4EF6\u8FFD\u52A0\u5185\u5BB9</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> docker_install.sh</span>
#\u5B89\u88C5curl
yum -y install curl

#CentOS7- \u914D\u7F6E\u963F\u91CC\u955C\u50CF\u6E90
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo 
yum clean all 
yum makecache 
#Uninstall old versions
yum -y remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine 

#SET UP THE REPOSITORY
yum -y install yum-utils 
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 

#INSTALL DOCKER ENGINE
yum -y install docker-ce docker-ce-cli containerd.io   
systemctl enable docker  
systemctl start docker

#\u914D\u7F6E\u955C\u50CF\u52A0\u901F
mkdir -p /etc/docker 
echo &quot;{&quot; &gt; /etc/docker/daemon.json 
echo   &#39;  &quot;registry-mirrors&quot;: [&quot;https://ueeg7jo6.mirror.aliyuncs.com&quot;]  &#39;   &gt;&gt; /etc/docker/daemon.json 
echo &quot;}&quot; &gt;&gt; /etc/docker/daemon.json  

#\u91CD\u8F7DDocker\uFF0C\u4F7F\u914D\u7F6E\u751F\u6548
systemctl daemon-reload 
systemctl restart docker 
EOF</span>
</code></pre></div><h2 id="\u7ED9\u811A\u672C\u6388\u4E88\u6267\u884C\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u811A\u672C\u6388\u4E88\u6267\u884C\u6743\u9650" aria-hidden="true">#</a> \u7ED9\u811A\u672C\u6388\u4E88\u6267\u884C\u6743\u9650</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x docker_install.sh
</code></pre></div><h2 id="\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> \u6267\u884C\u811A\u672C</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sh</span> docker_install.sh
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u6267\u884C:<code>docker run hello-world</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ylighgh@docker ~<span class="token punctuation">]</span><span class="token comment"># docker run hello-world</span>

Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>
 <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the
    executable that produces the output you are currently reading.
 <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it
    to your terminal.

To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:
 $ <span class="token function">docker</span> run -it ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre></div>`,9);function o(t,c){return s}var d=e(a,[["render",o]]);export{d as default};
