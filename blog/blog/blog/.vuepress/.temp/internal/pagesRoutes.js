import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-f0388862","/links/",{"title":"Links"},["/links/index.html","/links/README.md"]],
  ["v-df0f1f96","/post/daily/2022/04/06/%E6%91%B8%E9%B1%BC/",{"title":"摸鱼的一天"},["/post/daily/2022/04/06/摸鱼/","/post/daily/2022/04/06/%E6%91%B8%E9%B1%BC/index.html","/posts/daily/2022-04-06-摸鱼.html","/posts/daily/2022-04-06-%E6%91%B8%E9%B1%BC.html","/posts/daily/2022-04-06-摸鱼.md","/posts/daily/2022-04-06-%E6%91%B8%E9%B1%BC.md"]],
  ["v-73e356d4","/post/java/2022/04/07/%E6%B5%8B%E8%AF%95/",{"title":""},["/post/java/2022/04/07/测试/","/post/java/2022/04/07/%E6%B5%8B%E8%AF%95/index.html","/posts/java/2022-04-07-测试.html","/posts/java/2022-04-07-%E6%B5%8B%E8%AF%95.html","/posts/java/2022-04-07-测试.md","/posts/java/2022-04-07-%E6%B5%8B%E8%AF%95.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-4975443b","/tags/%E6%91%B8%E9%B1%BC/",{"title":"Tags"},["/tags/摸鱼/","/tags/%E6%91%B8%E9%B1%BC/index.html"]],
  ["v-da748720","/tags/Java/",{"title":"Tags"},["/tags/Java/index.html"]],
  ["v-3a1f8885","/page/1/",{"title":"Home"},["/page/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
