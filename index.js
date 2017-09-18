


$(function() {
    var navUl = $("nav > ul");
    function verticalAlign(){
        var height = $("nav").height();
        var innerHeight = navUl.height() + 75;
        var centerV = (height - innerHeight)/2;
        navUl.css("top", centerV);
    }
    verticalAlign();

    function subIn(){
        $("#cpsub > span").delay(1350).each(function(){
            $(this).delay(300*($(this).index() + 1)).animate({opacity:1}, 300);
        })
    }
    navUl.delay(50).fadeIn(500, "linear", function(){
        $("#cpintro > span").delay(100).each(function(){
            $(this).delay(150*($(this).index() + 1)).animate({opacity:1},150, function(){
                subIn();
            });
        })
    });















});