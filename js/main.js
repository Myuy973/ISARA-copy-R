$(function () {
    var p = $("#question > div ul li p");
    p.on("click", function() {
        number = $(this).parent().index("li") - 4;
        console.log(number);
        // $("#question > div ul div").eq(number).animate({height: "toggle"}, 500);
        $("#question > div ul div").eq(number).slideToggle(300);
        $(this).toggleClass("change-after");
    })
    $('#question div ul li').first().next().css("display", "block");



    $(".schedule-img img , .schedule-img h2, .schedule-img i").on("click", function() {
        $(this).parent().children("i").toggleClass('i_rotate');
        $(this).parent().parent().siblings().children().next().slideUp(300)
        $(this).parent().next().slideToggle(300);
        console.log("h2");
    })
    $('.schedule-text').first().css('display', "block");


    change_return();
    $("#return").on("click", function() {
        $("html, body").stop().animate({scrollTop: "0"}, 1000);
    })
    $(window).on("scroll resize", function() {
        change_return();
    })
    
    function change_return() {
        if ($(window).scrollTop() <= 62) {
            $('#return').fadeOut();
        }else if ($(window).scrollTop() > 62) {
            $('#return').fadeIn();
        }
    }
})