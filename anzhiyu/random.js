var posts=["2024/09/10/2024.9.2-9.7周记/","2024/09/27/2024.9.8-9.22周记/","2025/01/14/2024年度浏览器扩展推荐/","2025/01/27/2024年总结/","2024/08/30/GithubModels：免费AI大模型！/","2024/08/20/Gmeek框架：18秒拥有属于自己的个人博客！/","2024/11/17/Github强制用户开启2FA的临时解决办法/","2024/10/12/Everything文件搜索：秒杀文件管理器/","2024/07/26/RSS是个甚么东东/","2024/07/30/2024年7月科技新闻亮点/","2024/10/31/《独立博客自省问卷15题》答卷/","2024/07/20/勇气：雷军与小米的非凡旅程/","2024/11/24/如何查看答案圈隐藏的答案/","2024/07/23/告别云担忧：手把手教你本地部署AI大模型/","2024/10/20/功成不必在我，功成必定有我/","2024/07/26/开源模型比闭源强？Llama3.1-405b发布！/","2024/09/22/博客图床新方案——自部署LightPicture/","2024/11/30/怎样才算见过世面？这是我听过最好的答案/","2024/07/31/如何让本地部署的大模型有个优雅的界面/","2024/08/22/网站故障说明/","2024/08/10/如何流畅访问Github/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://docs.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Gmeek框架","link":"https://blog.meekdai.com/","avatar":"https://blog.meekdai.com/avatar.svg","descr":"18秒搭建个人博客","siteshot":"https://s21.ax1x.com/2024/08/22/pAifjZn.png"},{"name":"Gridea","link":"https://open.gridea.dev/","avatar":"https://open.gridea.dev/media/gridea.png","descr":"一个静态博客写作客户端","siteshot":"https://s21.ax1x.com/2024/08/21/pAiZZlV.png"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Yunfi","link":"https://yfi.moe/","avatar":"https://s21.ax1x.com/2024/08/22/pAifxI0.png","descr":null,"siteshot":"https://s21.ax1x.com/2024/08/22/pAihSiV.png","color":"vip","tag":"技术"},{"name":"Jonas","link":"https://laogou717.com/","avatar":"https://s21.ax1x.com/2024/08/22/pAihiM4.png","descr":"热爱生活，无限进步","siteshot":"https://peterimg.pages.dev/file/1cf67a7eb62e1682f87e8.png","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebf7463be.png","color":"vip","tag":"技术"},{"name":"SCOTT","link":"https://blog.scott-studio.cn","avatar":"https://blog.scott-studio.cn/uploads/2024/08/new_logo.webp","descr":"不知名前端攻城狮，分享编程经验和技术干货","siteshot":"https://s21.ax1x.com/2024/08/19/pAPD8v6.png","color":"vip","tag":"技术"},{"name":"杜老师说","link":"https://dusays.com/","avatar":"https://cdn.dusays.com/avatar.png","descr":"高级网络工程师、网站技术运营总监。系统运维、架构设计及优化专家","siteshot":"https://peterimg.pages.dev/file/48b101a7bdf5965429255.png","color":"vip","tag":"技术"},{"name":"Meekdai","link":"https://blog.meekdai.com/","avatar":"https://blog.meekdai.com/avatar.svg","descr":"童话是一种生活态度，仅此而已。","siteshot":"https://s21.ax1x.com/2024/08/22/pAifjZn.png","color":"blue","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Yunfi","link":"https://yfi.moe/","avatar":"https://s21.ax1x.com/2024/08/22/pAifxI0.png","descr":null,"recommend":true},{"name":"老狗","link":"https://www.laogou666.com/","avatar":"https://s21.ax1x.com/2024/08/22/pAihiM4.png","descr":"热爱生活，无限进步","recommend":true},{"name":"Meekdai","link":"https://blog.meekdai.com/","avatar":"https://blog.meekdai.com/avatar.svg","descr":"童话是一种生活态度，仅此而已。","recommend":true},{"name":"MC-Sep","link":"https://mc-sep.js.cool/","avatar":"https://mc-sep.js.cool/logo.png","descr":"人生能有几回搏，天涯何处无芳草🌟","recommend":false},{"name":"Tianli","link":"https://blog.tianli0.top/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","recommend":false},{"name":"Magma Ink","link":"https://magma.ink/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=823202450&s=640","descr":"为美好的生活献礼"},{"name":"Water","link":"https://www.w4ter.com","avatar":"https://www.w4ter.com/icon-512x512.webp","descr":"Just do it"},{"name":"PeterJXL","link":"https://www.peterjxl.com","avatar":"https://image.peterjxl.com/blog/re0.jpg","descr":"从 01 开始"},{"name":"曦暮流年","link":"https://www.ximuliunian.top","avatar":"https://www.ximuliunian.top/img/avatar.png","descr":"懒惰往往是创新的催化剂"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://std.thyuu.com/logo.svg","descr":"热爱你来过的每度温暖"}];
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