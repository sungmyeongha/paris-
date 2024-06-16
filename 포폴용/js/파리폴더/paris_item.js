const ITEM_LIST = [ 
    [
    { item_no: 0, src: `<img src="./포폴_img/파리바게트/item/item0.jpg">`, kacl:`205kcal`   , txt:`발효버터 소금 빵 `  ,desc:`발효버터를 넣은 반죽을 고온에 구워 속은 촉촉, 빵 밑면은 바삭 두 가지 식감과 고소한 풍미를 느낄 수 있는 소금빵`},
    { item_no: 1, src: `<img src="./포폴_img/파리바게트/item/item1.jpg">`, kacl:`305kcal`   , txt:`부드럽고 촉촉한 굿모닝롤 ` ,desc:`우유가 들어가 부드럽고 촉촉한 식사 대용 모닝롤`},
    { item_no: 2, src: `<img src="./포폴_img/파리바게트/item/item2.jpg">`, kacl:`405kcal`   , txt:`길어서 더 든든한소시지빵` ,desc:`긴 소시지와 부드러운빵에 치즈, 머스타드, 케찹을 더한 롱소시지빵`},
    { item_no: 3, src: `<img src="./포폴_img/파리바게트/item/item3.jpg">`, kacl:`185kcal`   , txt:`두번쫄깃 플레인 베이글` ,desc:`겉과 속이 두 번 쫄깃한 플레인 베이글`},
    { item_no: 4, src: `<img src="./포폴_img/파리바게트/item/item4.jpg">`, kacl:`225kcal`   , txt:`두번쫄깃 블랙올리브치즈 베이글`,desc:`블랙 올리브, 고소한 롤치즈가 들어간 짭조름한 맛의 베이글`},
    { item_no: 5, src: `<img src="./포폴_img/파리바게트/item/item5.jpg">`, kacl:`235kcal`   , txt:`소보루빵`,desc:`고소한 소보루 가루가 뿌려진 기본 간식빵`},
    { item_no: 6, src: `<img src="./포폴_img/파리바게트/item/item6.png">`, kacl:`245kcal`   , txt:`단팥빵`,desc:`파리바게뜨의 정통 단팥빵으로 남녀노소 누구나 부담 없이 즐길 수 있는 간식 빵`},
    { item_no: 7, src: `<img src="./포폴_img/파리바게트/item/item7.jpg">`, kacl:`265kcal`   , txt:`프렌치크라상`,desc:`겹겹이 쌓인 결 사이로 진한 버터의 풍미가 촉촉하게 배어든 파리바게뜨의 프렌치 스타일 크라상`},
    { item_no: 8, src: `<img src="./포폴_img/파리바게트/item/item8.jpg">`, kacl:`1277kcal`   , txt:`상큼한 블루베리 쉬폰게이크`,desc:`향긋한 블루베리시트와 상큼한 블루베리 콩포트가 어우러진 쉬폰케이크`},
    { item_no: 9, src: `<img src="./포폴_img/파리바게트/item/item9.jpg">`, kacl:`1237kcal` , txt:`블레싱 레드베리`,desc:`촉촉한 딸기 스폰지에 새콤달콤한 딸기 콩포트를 더하고 상큼한 생딸기를 듬뿍 올린 블레싱 레드베리 케이크`},
    { item_no: 10, src: `<img src="./포폴_img/파리바게트/item/item10.jpg">`, kacl:`1242kcal` , txt:`마이넘버원3`,desc:`고소한 치즈, 상큼한 딸기와 블루베리 생크림, 달콤한 초코, 담백한 고구마, 진한 티라미수의 6가지 맛을 한번에 즐길 수 있는 NO.1 케이크`},
    { item_no: 11, src: `<img src="./포폴_img/파리바게트/item/item11.png">`, kacl:`1236kcal` , txt:`클래식고구마케이크`,desc:`촉촉한 화이트 시트에 달콤하고 진한 고구마무스가 어우러진 고구마케이크`},
    { item_no: 12, src: `<img src="./포폴_img/파리바게트/item/item12.jpg">`, kacl:`274kcal` , txt:`런치샌드위치`,desc:`페스츄리에 짭짤하고 고소한 햄과 치즈가 들어간 샌드위치`},
    { item_no: 13, src: `<img src="./포폴_img/파리바게트/item/item13.jpg">`, kacl:`343kcal` , txt:`통밀디럭스샌드위치`,desc:`통밀의 건강함을 담은 로만밀식빵에 햄,치즈,신선한 야채가 어우러진 샌드위치`},
    { item_no: 14, src: `<img src="./포폴_img/파리바게트/item/item13.png">`, kacl:`405kcal` , txt:`로스트치킨 에그 샐러드`,desc:`단백질이 풍부한 로스트 치킨과 계란 내용물을 듬뿍 담아 더욱 건강한 샐러드`},
    { item_no: 15, src: `<img src="./포폴_img/파리바게트/item/item14.jpg">`, kacl:`335kcal` , txt:`통밀 햄에그 샌드위치`,desc:`통밀의 건강함을 담은 로만밀 식빵에 햄,에그슬라이스,신선한 야채를 올린 든든 샌드위치`},
    { item_no: 16, src: `<img src="./포폴_img/파리바게트/item/item15.jpg">`, kacl:`405kcal` , txt:`초콜릿 머핀`,desc:`정통프리미엄 머핀의 맛을 느낄 수있는 오리지널 머핀`},
    { item_no: 17, src: `<img src="./포폴_img/파리바게트/item/item16.jpg">`, kacl:`405kcal` , txt:`오리지널머핀`,desc:`초코칩과 가나슈 크림을 아낌없이 넣어 더욱 진하고 달콤한 초콜릿 머핀`},
    { item_no: 18, src: `<img src="./포폴_img/파리바게트/item/item17.jpg">`, kacl:`705kcal` , txt:`초코가 달콤한 시간`,desc:`진하고 달콤한 초콜릿의 맛을 즐길 수 있는 촉촉한 초코 디저트 케익`},
    { item_no: 19, src: `<img src="./포폴_img/파리바게트/item/item18.jpg">`, kacl:`745kcal` , txt:`치즈가 부드러운 시간`,desc:`고소한 크림치즈로 정성스레 만든 부드럽고 폭신폭신한 미니 치즈케이크`}
    ],
    [
        { item_no: 0, src: `./포폴_img/파리바게트/item/item0.jpg`, kacl:`205kcal`   , txt:`발효버터 소금 빵 `  ,desc:`발효버터를 넣은 반죽을 고온에 구워 속은 촉촉, 빵 밑면은 바삭 두 가지 식감과 고소한 풍미를 느낄 수 있는 소금빵`},
        { item_no: 1, src: `./포폴_img/파리바게트/item/item1.jpg`, kacl:`305kcal`   , txt:`부드럽고 촉촉한 굿모닝롤 ` ,desc:`우유가 들어가 부드럽고 촉촉한 식사 대용 모닝롤`},
        { item_no: 2, src: `./포폴_img/파리바게트/item/item2.jpg`, kacl:`405kcal`   , txt:`길어서 더 든든한소시지빵` ,desc:`긴 소시지와 부드러운빵에 치즈, 머스타드, 케찹을 더한 롱소시지빵`},
        { item_no: 3, src: `./포폴_img/파리바게트/item/item3.jpg`, kacl:`185kcal`   , txt:`두번쫄깃 플레인 베이글` ,desc:`겉과 속이 두 번 쫄깃한 플레인 베이글`},
        { item_no: 4, src: `./포폴_img/파리바게트/item/item4.jpg`, kacl:`225kcal`   , txt:`두번쫄깃 블랙올리브치즈 베이글`,desc:`블랙 올리브, 고소한 롤치즈가 들어간 짭조름한 맛의 베이글`},
        {item_no: 6,  src: `./포폴_img/파리바게트/item/item6.png`, kacl:`245kcal`   , txt:`단팥빵`,desc:`파리바게뜨의 정통 단팥빵으로 남녀노소 누구나 부담 없이 즐길 수 있는 간식 빵`}
    ]
]

let page1_bread;
for(let i=0; i<6; i++) {
    page1_bread =`<div class="products_img_box">
                    <a href="./00파리바게트3.html?cate_no=0&item_no=${ITEM_LIST[1][i].item_no}">
                        <div class="products_img">
                            <div class="gradient_pan"></div>
                        </div>
                    </a>   
                </div>`


    $(`.products_box`).append(page1_bread) 

    $('.products_img').eq(i).css({
        background: `url(${ITEM_LIST[1][i].src}) no-repeat center / cover`
    })
}


    let bread;
    for(let i=0; i<8; i++) {
        bread =`<a href="./00파리바게트3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}" class="item_img_box">
                <div class="item_img">
                    <div class="item_black_pan"></div>
                    ${ITEM_LIST[0][i].src}
                </div>
                <p class="item_img_txt">${ITEM_LIST[0][i].txt}</p> 
                </a>`


        $(`.bread`).append(bread) 
    }

    /////////////////
    let cake;
    for(let i=8; i<12; i++) {
        cake =`<a href="./00파리바게트3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}" class="item_img_box">
                <div class="item_img">
                    <div class="item_black_pan"></div>
                    ${ITEM_LIST[0][i].src}
                    </div>
                <p class="item_img_txt">${ITEM_LIST[0][i].txt}</p>
                </a>`


        $(`.cake`).append(cake) 
    }
    //////////////////////////////
    let sandwith;
    for(let i=12; i<16; i++) {
        sandwith =`<a href="./00파리바게트3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}" class="item_img_box">
                <div class="item_img">
                <div class="item_black_pan"></div>
                ${ITEM_LIST[0][i].src}
                </div>
                <p class="item_img_txt">${ITEM_LIST[0][i].txt}</p>
                </a>`


        $(`.sandwith`).append(sandwith) 
    }
    //////////////////////
    let dessert;
    for(let i=16; i<20; i++) {
        dessert =`<a href="./00파리바게트3.html?cate_no=0&item_no=${ITEM_LIST[0][i].item_no}" class="item_img_box">
                <div class="item_img">
                <div class="item_black_pan"></div>
                ${ITEM_LIST[0][i].src}
                </div>
                <p class="item_img_txt">${ITEM_LIST[0][i].txt}</p>
                </a>`


        $(`.dessert`).append(dessert) 
    }


    let page3;
    for(let i=16; i<20; i++) {
        page3 =`<a class="item_box">
                <div class="item_img">
                <div class="item_black_pan"></div>
                ${ITEM_LIST[0][i].src}
                </div>
                <p class="item_img_txt">${ITEM_LIST[0][i].txt}</p>
                </a>`


        $(`.like_item_box`).append(page3) 
    }


    function get_info_from_url(keyword) { 
        let url = location.href; 
        
        url = url.split("?") 
        if(url.length > 1) {
    
            url = url[1].split("&") 
            for(let i=0; i<url.length; i++) {
                let tmp_url = url[i].split("=");
                                            
    
                if(tmp_url[0] == keyword) {
                    return tmp_url[1].split("#")[0] 
                }
            }
        }
    return null;
    }


    function move_item(cateNO, itemNo) {
        let move_item = [ITEM_LIST];
        let item_url = move_item[cateNO];
        let load_url = item_url[cateNO][itemNo];
            let item=`
            <a href="./00파리바게트3.html?cate_no=0&item_no=${(load_url.item_no+1)%20}">
                <div class="next_page">></div>
            </a>
            <a href="./00파리바게트3.html?cate_no=0&item_no=${(load_url.item_no-1) < 0? load_url.item_no+19:(load_url.item_no-1)}">
                <div class="prev_page"><</div>
            </a> 
            <div class="left_main">
            ${load_url.src}
            </div>
            <div class="right_main">
            <h1>${load_url.txt}</h1>
            <p>${load_url.desc}</p>
            <div class="moblie_buy">모바일상품권 구매하러 가기</div>
            <div class="pb_app">파바앱 바로가기</div>
            <div class="add_infr">추가정보</div>
            <div class="kacl">
            <div class="add_infr">영양정보</div>
            <p>총 내용량: 55g · 1회 제공 칼로리: ${load_url.kacl}
            1회 제공량당 (%) - 나트륨(mg/%) : 300/15 · 당류(g/%) : 5/5 · 포화지방(g/%) : 5/33 · 단백질(g/%) : 45023</p>
            </div>
            <div class="arl_infr">
            <div class="add_infr">알레르기 정보</div>
            <p>밀, 우유, 계란, 대두</p>
            </div>
            </div>`
    

            $('.main_content').append(item)
    }



    $('.item_img').click(function(){
        $('.main_content').children.remove()
    })
    
    let cateNo = get_info_from_url("cate_no")
    let itemNo = get_info_from_url("item_no")
    move_item(cateNo, itemNo)


//////////////////////////////////



