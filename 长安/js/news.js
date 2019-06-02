$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();  
        $('.tab .scroll').css('margin-top',-index*1015+'px');
        
    })
})