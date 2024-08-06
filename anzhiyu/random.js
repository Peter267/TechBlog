var posts=["2024/07/26/RSS是个甚么东东/","2024/07/20/勇气：雷军与小米的非凡旅程/","2024/07/23/告别云担忧：手把手教你本地部署AI大模型/","2024/07/26/开源模型比闭源强？Llama3.1-405b发布！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };