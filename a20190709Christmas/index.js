$('.active1').click(function () {
    $('.fuben1').css("display", "block");
    $('.fuben2').css("display", "none");
    $('.fuben3').css("display", "none");
    $('.fuben4').css("display", "none");
    $('.fuben5').css("display", "none");
})

$('.active2').click(function () {
    $('.fuben2').css("display", "block")
    $('.fuben1').css("display", "none");
    $('.fuben3').css("display", "none");
    $('.fuben4').css("display", "none");
    $('.fuben5').css("display", "none");
})

$('.active3').click(function () {
    $('.fuben3').css("display", "block");
    $('.fuben1').css("display", "none");
    $('.fuben2').css("display", "none");
    $('.fuben4').css("display", "none");
    $('.fuben5').css("display", "none");
})

$('.active4').click(function () {
    $('.fuben4').css("display", "block");
    $('.fuben1').css("display", "none");
    $('.fuben3').css("display", "none");
    $('.fuben2').css("display", "none");
    $('.fuben5').css("display", "none");
})

$('.active5').click(function () {
    $('.fuben5').css("display", "block");
    $('.fuben1').css("display", "none");
    $('.fuben3').css("display", "none");
    $('.fuben2').css("display", "none");
    $('.fuben4').css("display", "none");
})
// $(function () {
//     $('.a').click(function () {
//         $(this).next('.fuben').fadeOut().siblings('.fuben').fadeIn();
//     })
// })


$(function () {
    var index = 0;
    var timer = setInterval(function () {
        index++;
        index = index == 3 ? 0 : index;
        $('.target img').eq(index).show().siblings('img').hide();
        $('.target ul li').eq(index).css('background-color', 'blue').siblings('li').css('background-color', '#000');
    }, 2000)

    $('#target').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            index++;
            index = index == 3 ? 0 : index;
            $('.target img').eq(index).show().siblings('img').hide();
            $('.target ul li').eq(index).css('background-color', 'blue').siblings('li').css('background-color', '#000');
        }, 2000)
    })
})

//绑定事件

$(window).bind('scroll', function () {

    //算出鼠标移动到顶部的高度。

    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;



    if (scrollt > 1090) {

        $('.right-nav').css('display', 'block');

        //进行操作。

    }
})
