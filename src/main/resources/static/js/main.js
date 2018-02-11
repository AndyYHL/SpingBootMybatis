function layout() {
    var height = $("body").height();
    var width = $("body").width();
    var jianxi = width * 0.0089;
    $("aside dd.act").children("p").slideDown(300);
    $(".popupBox").css({
        "width": $(".mainBox").width(),
        "height": $(".mainBox").height() - 30,
        "right": ($("body").width() - 260) * 0.0241
    });
    $(".map3").css({"top": 44 + jianxi});
    $(".dataBox2").css({"top": 44 + jianxi, "width": $(".mainBox").width() - $(".map3").width() - jianxi});
    // $(".dataBox3").css({
    //     "top": 44 + jianxi * 2 + $(".dataBox2").height(),
    //     "width": $(".mainBox").width() - $(".map3").width() - jianxi,
    //     "height":$(".mainBox").height()*0.32
    // });
    $(".dataBox3").attr("style","width: "+($(".mainBox").width() - $(".map3").width() - jianxi)+"px; height: "+$(".mainBox").height()*0.32+"px;top:"+(44 + jianxi * 2 + $(".dataBox2").height())+"px")
    $(".dataBox1").css({"height": $(".mainBox").height() - $(".map3").height() - 44 - jianxi * 2});
    $(".dataBox4").css({
        "height": $(".mainBox").height() - $(".dataBox2").height() - $(".dataBox3").height() - 44 - jianxi * 3,
        "width": $(".mainBox").width() - $(".map3").width() - jianxi
    });
    $(".dataBox1 .left,.dataBox1 .right").css({"margin-top": $(".dataBox1").height() * 0.18});
    $(".dataBox1 p").css({
        "height": $(".dataBox1").height() * 0.6 * 0.75 - 4,
        "width": $(".dataBox1").height() * 0.6 * 0.75 - 4,
        "border-radius": $(".dataBox1").height() * 0.6 * 0.75 - 4,
        "line-height": $(".dataBox1").height() * 0.6 * 0.75 - 4 + "px"
    });

    $("svg.small").each(function () {
        var svgWidth = Math.round($(".dataBox1").height() * 0.6 * 0.75);
        $(this).css({"width": svgWidth, "height": svgWidth});
        $(this).children("text").attr({"x": svgWidth / 2, "y": svgWidth / 2});
        $(this).children("circle").eq(0).attr({"cx": svgWidth / 2, "cy": svgWidth / 2, "r": svgWidth / 2 - 2});
        $(this).children("circle").eq(1).attr({
            "cx": svgWidth / 2,
            "cy": svgWidth / 2,
            "r": svgWidth / 2 - 2,
            "transform": "matrix(0,-1,1,0,0," + svgWidth + ")"
        });
        var str = $(this).children("text").text();
        var newStr = str.split("%").join("");
        var percent = newStr / 100, perimeter = Math.PI * 2 * (svgWidth / 2 - 2);
        $(this).children("circle").eq(1).css('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
    });


    $(".dataBox2 ul").css({"margin-top": $(".dataBox2").height() * 0.12});
    $(".dataBox2 li b").css({"top":height*0.012});
    $(".dataBox2 li span").css({"top":height*0.040});

}

$(document).ready(function () {
    $(window).resize(layout);

layout();
    $(document).on('click', "aside dd", function () {
        $(this).addClass("act").siblings().removeClass("act");
        $(this).children("p").slideDown(300);
        $(this).siblings().not("dt").children("p").slideUp(300);
    });
    $(document).on('click', "aside dd a", function () {
        $("aside dd a").removeClass("act2");
        $(this).addClass("act2");
    });
    $(document).on('click', ".popupShow", function () {
        $(".popupBox").css({
            "width": $(".mainBox").width(),
            "height": $(".mainBox").height() - 30,
            "right": ($("body").width() - 260) * 0.0241
        });
        $(".shadow,.popupBox").fadeIn();
    });
    $(document).on('click', ".popupClose", function () {
        $(".shadow,.popupBox").fadeOut();
    });
    $(document).on('click', ".cityList td", function () {
        $(this).addClass("act6");
        $(this).siblings().removeClass("act6");
        $(".infoSet-top p.city").html($(this).html());
    });
    $(document).on('click', ".infoSet-top p.selectCity", function () {
        if ($(".cityList").is(":hidden")) {
            $(".cityList").fadeIn(300);
        } else {
            $(".cityList").fadeOut(300);
        }
    });

    //选日期
    $(document).on('click', ".week", function () {
        $(".weekSelect").fadeIn(300)
    });
    $(document).on('click', ".weekSelect li", function () {
        var n = $(this).index();
        if (n !== 7) {
            if ($(this).hasClass("act5")) {
                $(this).removeClass("act5")
            } else {
                $(this).addClass("act5")
            }
        }
    });
    $(document).on('click', ".weekBtn", function () {
        $(".weekSelect").fadeOut(300);
        var n = $(".weekSelect li.act5").length;
        var str = '';
        for (i = 0; i < n; i++) {
            str = str + $(".weekSelect li.act5").eq(i).html() + "，"
        }
        $(".week").val(str)
    });


    // $(".mainBox").scroll(function(){
    //     if($(".scrollPosition").offset().top<77) {
    //         $(".scrollPosition").addClass("top-define")
    //     }else {
    //         $(".scrollPosition").removeClass("top-define")
    //     }
    // });

});

