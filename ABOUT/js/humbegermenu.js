// JavaScript Document
$(".open_btn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#section-header-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#section-header_-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
    $(".open_btn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#section-header-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
  });

  $("section-header-nav-link").click(function () {
    $(".open_btn").removeClass("active");
    $("#section-header-nav").removeClass("active");
  });

  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  

