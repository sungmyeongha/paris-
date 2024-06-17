$(document).ready(function() {
    


$('.left_header_msg').mouseenter(function(){
    $('.left_line').eq($(this).index()).animate({
        width:`100%`
    }, 300)
})
$('.left_header_msg').mouseleave(function(){
    $('.left_line').eq($(this).index()).animate({
        width:`0%`
    }, 300)
})

$('.right_header_msg').mouseenter(function(){
    $('.right_line').eq($(this).index()).animate({
        width:`100%`
    }, 300)
})
$('.right_header_msg').mouseleave(function(){
    $('.right_line').eq($(this).index()).animate({
        width:`0%`
    }, 300)
})


let pb_txt = 0;
$('.up_and_down').click(function(){
    $('.ham_add_box').toggle()
    if (pb_txt % 2 == 0) {
        $('.up_and_down').text('∧')
    }
    else if (pb_txt % 2 == 1){
        $('.up_and_down').text('∨')
    }
    pb_txt++
})








//////////////언더바////////////////////
// 눌렀을떄 990이상이면 하이트는 90 페딩 탑 도 90 
// 이하면 60 60 그리고 리사이즈 하면  같이 바뀜 

$('.right_header').children('svg').click(function(){
        if($('.header').width() <= 990) {
                $('.click_search').animate({
                    height: "60px"
                    
                }, 500 ).css({
                    position:'fixed'
                })

                $('.header').css({
                    position:'static'
                })
                $('.main').css({
                    paddingTop:'0px'
                })
                $('.black_pan').css({
                    display:'block'
                })
            
            $('.x').click(function(){
                $('.click_search').animate({
                    height:'0',
                    position:'relative'
                }, 500 )
            

                $('.header').css({
                    position:'fixed',
                })
            
                $('.main').css({
                    paddingTop: '60px'
                })
            
                $('.black_pan').css({
                    display:'none'
                })
            })    
        }else {
            $('.click_search').animate({
                height: "90px"
                
            }, 500 ).css({
                position:'fixed'
            })

            $('.header').css({
                position:'static'
            })
            $('.main').css({
                paddingTop:'0px'
            })
            $('.black_pan').css({
                display:'block'
            })
        
        $('.x').click(function(){
            $('.click_search').animate({
                height:'0',
                position:'relative'
            }, 500 )
        

            $('.header').css({
                position:'fixed',
            })
        
            $('.main').css({
                paddingTop: '60px'
            })
        
            $('.black_pan').css({
                display:'none'
            })
        })    
    }

})

$(window).resize(function(){

    
    if($('.click_search').height() > 0) {
        if($('.header').width() <= 990) {
            $('.click_search').css({
                height: "60px"
            })
            $('.main').css({
                paddingTop: '0px'
            })
        }
        else{
            $('.click_search').css({
                height: "90px"
            })
            $('.main').css({
                paddingTop: '0px'
            })
        }
    }
})

    $('.ham_btn').click(function(){
        
        $('._ham_black_pan').css({
            display: 'block'
        })
        $('.ham_box').animate({
        left: '0'    
        }, 300).css({
            display: 'block'
        })
        $('.header').css({
            zIndex:0
        })
        $('.click_search').css({
            display: 'none'
        })
        $('body').css({
            overflow: 'hidden'
        })

    }) 

    $('.ham_x').click(function(){
        
        $('._ham_black_pan').css({
            display: 'none'
        })


        $('.ham_box').animate({
            left: '-100%' 
        }, 300).css({
            display: 'none'
        })
        
        $('.header').css({
            zIndex:99999999999999999
        })
        $('.click_search').css({
            display: 'block'
        })
        $('body').css({
            overflow: 'visible'
        })

    }) 

    
        
    
       







})