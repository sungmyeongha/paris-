$(document).ready(function(){ 

    $('.wrap').on('mousewheel DOMMouseScroll', function(){
        let dir = event.wheelDelta // 음수면 아래, 양수면 위
        $(window).scroll(function(){
            if($(window).scrollTop() < $('.main').offset().top){
                if(dir < 0) { 
                    $('.header').css({
                            display: 'block'
                        })
                        $('.click_search').css({
                            display: 'block'
                        })
                }
                else if(dir > 0) { 
                    $('.header').css({
                            display: 'block'
                        })
                        $('.click_search').css({
                            display: 'block'
                        })
                }
            }
            else{
                if(dir < 0) { 
                    $('.header').css({
                            display: 'none'
                        })
                        $('.click_search').css({
                            display: 'none'
                        })
                }
                else if(dir > 0) { 
                    $('.header').css({
                            display: 'block'
                        })
                        $('.click_search').css({
                            display: 'block'
                        })
                }
            }
        })
    
    });
    

    $('.link_title a').click(function(){
        event.preventDefault()

        let href = $(this).attr('href')
        let o_pos = $(href).offset().top - 150

        $('html, body').animate({
            scrollTop: o_pos
        }, 500)
    })


    $('.link_title').click(function(){
        console.log($('.link_title').eq(1))
        $('.link_title').css({
            color: `#888`,
            borderBottom: `0px`
        })

        $('.link_title').eq($(this).index()-2).css({
        color: `#023586`,
        borderBottom: `2px solid #023586`
        })
    })


})