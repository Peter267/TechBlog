var posts=["2024/07/23/告别云担忧：手把手教你本地部署AI大模型/","2024/07/20/勇气：雷军与小米的非凡旅程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };