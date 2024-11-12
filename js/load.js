$(function() {
    var beforeDate = new Date();
    //页面加载
    var $window = $(window), $doc = $(document), $body = $("body"), winWidth = $window.width(), docWidth = $doc.width(), docHeight = $doc.height(), winHeight = $window.height(), speed = 250, s1 = 30, s2 = 270;
    if ($.cookie("loadedhtml")) {
        $("#pageLoad").remove();
    }
    $(window).load(function() {
        s1 = 3, s2 = 3;
    });
    var afterDate = new Date(), pagePreLoad = afterDate - beforeDate, time = 10 / pagePreLoad, preImgLen = 35 / pagePreLoad, n = 0, m = 0, play = setInterval(function() {
        if (Number(n) >= s1 && Number(m) >= s2) {
            clearInterval(play);
            n = 100;
            m = 270;
            //页面加载完毕后执行(主线)
            setTimeout(function() {
                $("#pageLoad").fadeOut(400, function() {
                    $(this).remove();
                    $.cookie("loadedhtml", "yes");
                });
            }, 200);
        }
        $("#pageLoad").find("samp").css("width", m);
        $("#pageLoad").find("span").text(Math.floor(n) + "%");
        n += time;
        m += preImgLen;
    }, 100);
});