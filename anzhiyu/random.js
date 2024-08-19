var posts=["2024/07/30/2024年7月科技新闻亮点/","2024/07/26/RSS是个甚么东东/","2024/07/20/勇气：雷军与小米的非凡旅程/","2024/07/23/告别云担忧：手把手教你本地部署AI大模型/","2024/08/10/如何流畅访问Github/","2024/07/31/如何让本地部署的大模型有个优雅的界面/","2024/07/26/开源模型比闭源强？Llama3.1-405b发布！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Yunfi","link":"https://yfi.moe/","avatar":"https://t.tutu.to/img/BLU9n","descr":null,"siteshot":"https://t.tutu.to/img/BLked","color":"vip","tag":"技术"},{"name":"Jonas","link":"https://blog.laogou717.com/","avatar":"https://t.tutu.to/img/BL0gH","descr":"热爱生活，无限进步","siteshot":"https://t.tutu.to/img/BL987","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebf7463be.png","color":"vip","tag":"技术"},{"name":"SCOTT","link":"https://blog.scott-studio.cn","avatar":"https://blog.scott-studio.cn/uploads/2024/08/blog-logo.webp","descr":"不知名前端攻城狮，分享编程经验和技术干货","siteshot":"https://s21.ax1x.com/2024/08/19/pAPD8v6.png","color":"vip","tag":"技术"},{"name":"Meekdai","link":"https://blog.meekdai.com/","avatar":"https://blog.meekdai.com/avatar.svg","descr":"童话是一种生活态度，仅此而已。","siteshot":"https://t.tutu.to/img/BLvN5","color":"blue","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Yunfi","link":"https://yfi.moe/","avatar":"https://t.tutu.to/img/BLU9n","descr":null,"recommend":true},{"name":"老狗","link":"https://www.laogou666.com/","avatar":"https://t.tutu.to/img/BLRfw","descr":"热爱生活，无限进步","recommend":true},{"name":"Meekdai","link":"https://blog.meekdai.com/","avatar":"https://blog.meekdai.com/avatar.svg","descr":"童话是一种生活态度，仅此而已。","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };