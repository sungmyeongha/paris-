$(document).ready(function(){

function main_swiper() {
    if($(window).width() < 820 && $(window).width() >= 500){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView : 2, // 한 슬라이드에 보여줄 갯수
            spaceBetween : 0, // 슬라이드 사이 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            loop:true ,
            pagination : {
                el: ".banner_indi",
                clickable: true,
                type: 'bullets'
            }, // pager 여부
            autoplay : false,
            navigation: {   // 버튼 사용자 지정
            nextEl: '.main_right_btn',
            prevEl: '.main_left_btn',
            },
        });
    }
    else if($(window).width() < 500) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView : 1, // 한 슬라이드에 보여줄 갯수
            spaceBetween : 0, // 슬라이드 사이 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            loop:true ,
            pagination : {
                el: ".banner_indi",
                clickable: true,
                type: 'bullets'
            }, // pager 여부
            autoplay : false,
            navigation: {   // 버튼 사용자 지정
            nextEl: '.main_right_btn',
            prevEl: '.main_left_btn',
            },
        });
    }else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView : 3, // 한 슬라이드에 보여줄 갯수
            spaceBetween : 0, // 슬라이드 사이 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            loop:true ,
            pagination : {
                el: ".banner_indi",
                clickable: true,
                type: 'bullets'
            }, // pager 여부
            autoplay : false,
            navigation: {   // 버튼 사용자 지정
            nextEl: '.main_right_btn',
            prevEl: '.main_left_btn',
            },
        });
    }
}
main_swiper()

$(window).resize(function(){
    main_swiper()
})

        let pro_bang = 0;
        let pro_length = $('.promition_img_box').length;
        let pro_w =  $('.promition_img_box').width() + 20;

        for (let i = 0; i < pro_length; i++) {
            $('.promition_img_box').eq(i).css({ 
                left: (pro_w * i) + 1
            })
        }  
    

    $(window).resize(function(){
            let pro_w =  $('.promition_img_box').width() + 20;
    
            for(let i=0; i<pro_length; i++) {
                $('.promition_img_box').eq(i).css({left: pro_w * i})
            }
    });
        // 클릭시 방 바꾸기 
$('.pro_left_btn').click(function(){
    let pro_w =  $('.promition_img_box').outerWidth() + 20 ;
    
    $('.promition_img_box').eq((pro_bang - 1) %  pro_length).animate({left: -pro_w }, 0) 
    $('.promition_img_box').animate({left: `+=${pro_w}`}, 500) 
    pro_bang-=1;
})

    
        $('.pro_right_btn').click(function(){
            let pro_w =  $('.promition_img_box').outerWidth() +  20 ;
            $('.promition_img_box').animate({left: `-=${pro_w}`}, 500) 
                    
            $('.promition_img_box').eq(pro_bang % pro_length).animate({left: pro_w * (pro_length - 1)}, 0) 
            pro_bang+=1;
        })
    
/////////////////////////////////////

        let duct_bang = 0;
        let duct_length = $('.products_img_box').length ;
        let duct_w =  $('.products_img_box').width() + 20;

        for (let i = 0; i < duct_length; i++) {
            $('.products_img_box').eq(i).css({ 
                left:duct_w * i
            })
        }  

        $(window).resize(function(){
            let duct_w =  $('.products_img_box').width() + 20;


            for(let i=0; i<duct_length; i++) {
                $('.products_img_box').eq(i).css({left: duct_w * i})
            }
            duct_bang = 0;
    });

 
        // 클릭시 방 바꾸기 
        $('.duct_left_btn').click(function(){
            let duct_w = $('.products_img_box').width() + 20;
    
            $('.products_img_box').eq((duct_bang - 1) % duct_length).animate({left: -duct_w}, 0)
    
            $('.products_img_box').animate({left: `+=${duct_w}`}, 400) 
            duct_bang-=1;
    
        })
    
        $('.duct_right_btn').click(function(){
            let duct_w = $('.products_img_box').width() + 20;
            $('.products_img_box').animate({left: `-=${duct_w}`}, 400) 
    
            $('.products_img_box').eq(duct_bang % duct_length).animate({left: duct_w * (duct_length - 1)}, 0) 
            duct_bang+=1;

        })
///////////////////////////////////////////////////////

        let maz_length = $('.pb_magazine_img').length;
        let maz_w =  $('.pb_magazine_img').width() + 20
        let maz_bang = 0;

        for (let i = 0; i < maz_length; i++) {
            $('.pb_magazine_img').eq(i).css({ 
                left:maz_w * i
            })
        }  

                
        $(window).resize(function(){
            let maz_w =  $('.pb_magazine_img').width() +20
        
            for(let i=0; i<duct_length; i++) {
                $('.pb_magazine_img').eq(i).css({left: maz_w * i})
            }
            maz_bang = 0;
        });


        $('.pb_magazine_img').hover(function(){
            $('.pb_magazinet_pan').animate({
                paddingBottom: '100%'
            }, 500)
        }, function() {
            $('.pb_magazinet_pan').animate({
                paddingBottom: '70%'
            }, 500)
        })


        

})


