var posts=["2025/03/13/hexo/butterfly主题配置/","2025/03/13/hexo/如何用Hexo搭建个人博客/","2025/03/14/hello-world/","2025/03/16/前端开发/vue入门/","2025/03/17/前端开发/在 Vite 项目中配置 @ 路径提示/","2025/03/12/hexo/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };