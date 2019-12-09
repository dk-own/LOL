/* 人气下拉菜单 */
$('#blk_productlist_sort').on('mouseenter mouseleave',function(){
    $(this).children('ul').toggle();
});

$('#productlist_check').children('i').on('click',function(){
    
    if($(this).hasClass('sorting-checked')){
        $(this).removeClass('sorting-checked');
    }else{
        $(this).addClass('sorting-checked');
    }
});

//获取seach值
var search = window.location.search;
if(!search){

}else{
    search = search.split('=')[1];			
}
/* 渲染浏览目录，banner，左边 */
var src = '';
$.each(Gdata,function(i,arr){
    if(arr.iCatId == search){
        src = arr.sCatIcon2;
        $('.bcb-cur').append(arr.sCatName);
        $('#blk_productlist_left_category .navlist').append(`<dt><i class="ico-menu navl-line"></i><span catid="${arr.iCatId}" style="cursor:pointer;">${arr.sCatName}</span></dt>`);
    }
});
$.each(Gdata,function(i,arr){
    if(arr.iParentId == search){
        $('#blk_productlist_left_category .navlist').append(`<dd><a href="javascript:void(0);" catid="${arr.iCatId}">${arr.sCatName}</a></dd>`);
    }
});
$('.list-banner .list-banlink').append(`<img src="${src}" width="1920" height="200" class="list-banimg">`);

/* 渲染商品 */
if(search == 101){
    $.each(glist1,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}else if(search == 119){
    $.each(glist2,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}else if(search == 120){
    $.each(glist3,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}else if(search == 215){
    $.each(glist4,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}else if(search == 665){
    $.each(glist5,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}else if(search == 116){
    $.each(glist6,function(i,arr){
        $('#blk_productlist_product ul').append(`
        <li mallid="${arr.iMallId}">
        <i class="ico-menu gl-like" style=""></i>
        <a href="https://lolriotmall.qq.com/detail.shtml?id=${arr.iMallId}" target="_blank" class="gl-link">
            <div class="ico-mark i-vipnew">
                <img src="img/vipnew.png" width="117"
                    height="108" alt="限定款新品">
            </div>
            <div class="gl-img">
                <img src="${arr.sProfileImg}" width="527" height="506" alt="${arr.sMallName}">
            </div>
            <div class="gl-img gl-hoverimg">
                <img src="${arr.sDetailImg[0]}" width="527" height="506">
            </div>
        </a>
        <p class="gl-name">${arr.sMallName}</p>
        <p class="gl-pri">¥${arr.iPrice*0.01}</p>
    </li>
        `);
    });
}
/* 鼠标悬停图片切换 */
$('.gl-link').has('div.gl-hoverimg').on('mouseenter mouseleave',function(){
    $(this).children('div.gl-hoverimg').toggle();
});
