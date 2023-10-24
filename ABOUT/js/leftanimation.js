function slideAnime() {
    //テキストが左から右に流れるアニメーション
    $('.leftAnime').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
     //要素がスクロール位置まできたら   
      if (scroll >= elemPos - windowHeight) {
        //クラス付与
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
      } else {
        //クラス削除
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
   
      }
    });
   
  }
   
  //スクロールしたらアニメーションさせる
  $(window).scroll(function () {
    slideAnime();
  });
  // ページが読み込まれたらアニメーションさせる
  $(window).on('load', function () {
    slideAnime();
  });