import{c as e}from"./app.ee0d2aa5.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},d=e(`<h2 id="\u5355\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5355\u94FE\u8868" aria-hidden="true">#</a> \u5355\u94FE\u8868</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>\u94FE\u8868\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u57FA\u7840\u6570\u636E\u7ED3\u6784\uFF0C\u7ED3\u6784\u4F53\u6307\u9488\u5728\u8FD9\u91CC\u5F97\u5230\u4E86\u5145\u5206\u7684\u5229\u7528\u3002\u94FE\u8868\u53EF\u4EE5\u52A8\u6001\u7684\u8FDB\u884C\u5B58\u50A8\u5206\u914D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u94FE\u8868\u662F\u4E00\u4E2A\u529F\u80FD\u6781\u4E3A\u5F3A\u5927\u7684\u6570\u7EC4\uFF0C\u4ED6\u53EF\u4EE5\u5728\u8282\u70B9\u4E2D\u5B9A\u4E49\u591A\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u968F\u610F\u589E\u6DFB\uFF0C\u5220\u9664\uFF0C\u63D2\u5165\u8282\u70B9\u3002\u94FE\u8868\u90FD\u6709\u4E00\u4E2A<code>\u5934\u6307\u9488</code>\uFF0C\u4E00\u822C\u4EE5<code>headNode</code>\u6765\u8868\u793A\uFF0C\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u5730\u5740\u3002\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u5206\u4E3A\u4E24\u7C7B\uFF0C<code>\u5934\u7ED3\u70B9</code>\u548C<code>\u4E00\u822C\u8282\u70B9</code>\uFF0C\u5934\u7ED3\u70B9\u662F\u6CA1\u6709\u6570\u636E\u57DF\u7684\u3002\u94FE\u8868\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u4E00\u4E2A<code>\u6570\u636E\u57DF</code>\uFF0C\u4E00\u4E2A\u662F<code>\u6307\u9488\u57DF</code></p><div class="language-C ext-C"><pre class="language-C"><code>typedef struct linkNode
{
    int data; //\u6570\u636E\u57DF
    struct Node *next; //\u6307\u9488\u57DF
} Node;
</code></pre></div><h2 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h2><h3 id="\u521B\u5EFA\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u94FE\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u94FE\u8868</h3><div class="language-C ext-C"><pre class="language-C"><code>Node *createList(){
    Node *headNode = (Node *)malloc(sizeof(Node)); //\u7533\u8BF7\u5185\u5B58\u7A7A\u95F4
    headNode-&gt;next = NULL; //\u53D8\u91CF\u521D\u59CB\u5316
    return headNode;
}
</code></pre></div><h3 id="\u521B\u5EFA\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9</h3><div class="language-C ext-C"><pre class="language-C"><code>
//\u65B0\u589E\u8282\u70B9
Node *createNode(int data){
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode-&gt;data = data;
    newNode-&gt;next = NULL;
}

//\u63D2\u5165\u6570\u636E(\u5934\u63D2\u6CD5)
void insertNodeByHead(Node *headNode,int data){
    Node *headNode = createNode(data);
    newNode-&gt;next = headNode-&gt;next;
    headNode-&gt;next = newNode;
}

</code></pre></div><h3 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h3><div class="language-C ext-C"><pre class="language-C"><code>Node *deleteNodeByAppoin(Node *headNode,int posData){
    // \u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E
    Node *posNode = headNode-&gt;next; 
    Node *posNodeFront = headNode;

    // \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u94FE\u8868
    if(posNode == NULL){
        printf(&quot;\u94FE\u8868\u4E3A\u7A7A,\u65E0\u6CD5\u5220\u9664\\n&quot;);
    }
    // \u7EE7\u7EED\u627E\u5230\u5F85\u5220\u9664\u7684\u8282\u70B9
    else{
        while(posNode-&gt;data != posData){
            // \u79FB\u52A8\u5F53\u524D\u8282\u70B9
            posNodeFront = posNode;
            posNode = posNode-&gt;next;

            if(posNode == NULL){
                printf(&quot;\u6CA1\u6709\u627E\u5230\u76F8\u5173\u4FE1\u606F,\u65E0\u6CD5\u5220\u9664\\n&quot;);
                return ;
            }
        }
        //\u5C06\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u8282\u70B9\u7684\u6307\u9488\u57DF\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u6307\u9488\u57DF
        posNodeFront-&gt;next = posNode-&gt;next;
        //\u91CA\u653E\u5F85\u5220\u9664\u8282\u70B9\u7684\u5185\u5B58(\u5220\u9664\u8282\u70B9)
        free(posNode);
    }
}

</code></pre></div><h3 id="\u6253\u5370\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u94FE\u8868" aria-hidden="true">#</a> \u6253\u5370\u94FE\u8868</h3><div class="language-C ext-C"><pre class="language-C"><code>void printList(Node *headNode){
    //\u521B\u5EFA\u79FB\u52A8\u8282\u70B9
    Node *pMove = headNode-&gt;next;
    
    //\u6253\u5370\u8282\u70B9(\u5F53\u79FB\u52A8\u8282\u70B9\u4E0D\u4E3A\u7A7A\u65F6)
    while(pMove){
        printf(&quot;%d\\t&quot;,pMove-&gt;data);
        pMove = pMove-&gt;next;
    }
    printf(&quot;\\n&quot;);
}
</code></pre></div><h2 id="\u7EFC\u5408\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u5904\u7406" aria-hidden="true">#</a> \u7EFC\u5408\u5904\u7406</h2><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-C ext-C"><pre class="language-C"><code>int main(){
    // \u521B\u5EFA\u94FE\u8868
    Node *list = createList();
    // \u63D2\u5165\u8282\u70B9
    insertNodeByHead(list,1);
    insertNodeByHead(list,2);
    insertNodeByHead(list,3);
    // \u6253\u5370\u94FE\u8868
    printList(list);
    // \u5220\u9664\u8282\u70B9
    deleteNodeByAppoin(list,1);
    // \u6253\u5370\u94FE\u8868
    printList(list);
    return 0;
}
</code></pre></div><p><strong>\u5B9E\u9645\u8F93\u51FA</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">3</span>       <span class="token number">2</span>       <span class="token number">1</span>
<span class="token number">3</span>       <span class="token number">2</span>
</code></pre></div>`,18);function o(t,s){return d}var c=n(a,[["render",o]]);export{c as default};
