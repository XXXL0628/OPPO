$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var backTop = $("#world").offset().top - $(window).height();
    // console.log(backTop);
    if(scrollT > backTop){
        $(".a1").addClass("animated swing show").removeClass("fade");
        $(".a2").addClass("animated bounceInDown show").removeClass("fade");
        $(".a3").addClass("animated bounceInUp show").removeClass("fade");
        $(".a4").addClass("animated bounceInLeft show").removeClass("fade");
    }
});
$(".asd").click(function () {
    if ($(this).className != "active") {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }
});