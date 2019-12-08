/* 客服咨询 */
$('.menu-ser').on('mouseenter',function(){
    $('.menu-downbox').show();
    $('.menu-ser').css({
        paddingBottom: '23px'
    });
    $('.menu-ser .marrl').css({
        backgroundPosition : '-24px 0'
    });
});
$('.menu-ser').on('mouseleave',function(){
    $('.menu-downbox').hide();
    $('.menu-ser').css({
        paddingBottom: 0
    });
    $('.menu-ser .marrl').css({
        backgroundPosition : '-32px 0'
    });
});
/* 微信商城 */
$('.lolweixin').on('mouseenter',function(){
    $('.mwx-code').show();
    $('.lolweixin').css({
        paddingBottom: '23px'
    });
    $('.lolweixin .marrl').css({
        backgroundPosition : '-24px 0'
    });
});
$('.lolweixin').on('mouseleave',function(){
    $('.mwx-code').hide();
    $('.lolweixin').css({
        paddingBottom: 0
    });
    $('.lolweixin .marrl').css({
        backgroundPosition : '-32px 0'
    });
});


/* 搜索框 */
$('.sosoinp').focus(function(){
    $('.keyword-list').css({
        display:'none'
    });
});
$('.sosoinp').blur(function(){
    $('.keyword-list').css({
        display:'block'
    });
});

/* 导航栏渲染 */
var data = actual_index_nav;


var a = '';
$.each(data,function(i,arr){
    if(arr.iParentId == 0 && arr.sName != '赛事周边'){
        a = $('<li class="menu_zhongli">'+
        '<a id=menu_'+arr.iSeqId+' href=".'+arr.sUrl+'">'+arr.sName+'</a>'+
        '<i class="menu-ico"></i>'+
    '</li>');
        $('.menu_zhong').append(a);
    }
    if(arr.sName == '赛事周边'){
        a = $('<li class="menu_zhongli">'+
        '<a id=menu_'+arr.iSeqId+' href=".'+arr.sUrl.substr(26)+'">'+arr.sName+'</a>'+
        '<i class="menu-ico"></i>'+
    '</li>');
        $('.menu_zhong').append(a);
    }
    if(arr.sUrl.split('/')[1] && arr.sUrl.split('/')[1] == window.location.href.split('/')[9]){
        a.children('a').addClass('click');
    }

    if(arr.sUrl.split('/')[3] && arr.sUrl.split('/')[3] == window.location.href.split('/')[9]){
        a.children('a').addClass('click');
    }
    
});

/* 手办 */
$('#menu_46').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 46){
        $('#menu_46').nextAll('div').children('ul').append(`
        <li>
            <a href="https://lolriotmall.qq.com${arr.sUrl}" class="submenu-link" parentid="menu_46">${arr.sName}</a>
        </li>
        `);
    }
    if(arr.iSeqId == 46){
        $('#menu_46').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});
/* 毛绒玩具 */
$('#menu_47').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 47){
        $('#menu_47').nextAll('div').children('ul').append(`
        <li>
            <a href="https://lolriotmall.qq.com${arr.sUrl}" class="submenu-link" parentid="menu_47">${arr.sName}</a>
        </li>
        `);
        
    }
    if(arr.iSeqId == 47){
        $('#menu_47').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});
/* 男女服饰 */
$('#menu_48').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 48){
        $('#menu_48').nextAll('div').children('ul').append(`
        <li>
            <a href="https://lolriotmall.qq.com${arr.sUrl}" class="submenu-link" parentid="menu_48">${arr.sName}</a>
        </li>
        `);
        
    }
    if(arr.iSeqId == 48){
        $('#menu_48').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});
/* 赛事周边 */
$('#menu_74').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 74){
        $('#menu_74').nextAll('div').children('ul').append(`
        <li>
            <a href="${arr.sUrl}" class="submenu-link" parentid="menu_74">${arr.sName}</a>
        </li>
        `);
        
    }
    if(arr.iSeqId == 74){
        $('#menu_74').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});
/* 珠宝首饰 */
$('#menu_49').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 49){
        $('#menu_49').nextAll('div').children('ul').append(`
        <li>
            <a href="https://lolriotmall.qq.com${arr.sUrl}" class="submenu-link" parentid="menu_49">${arr.sName}</a>
        </li>
        `);
        
    }
    if(arr.iSeqId == 49){
        $('#menu_49').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});
/* 其他 */
$('#menu_57').parent().append(`
        <div class="submenu clearfix">
            <ul class="fl submenu-list">
            </ul>
        </div>
`);
$.each(data,function(i,arr){
    if(arr.iParentId == 57){
        $('#menu_57').nextAll('div').children('ul').append(`
        <li>
            <a href="https://lolriotmall.qq.com${arr.sUrl}" class="submenu-link" parentid="menu_57">${arr.sName}</a>
        </li>
        `);
        
    }
    if(arr.iSeqId == 57){
        $('#menu_57').nextAll('div').children('ul').append(`
        <a class="fr subm-img" href="">
            <img src="${arr.sIcon}">
        </a>
        `);
    }
});

/* 导航栏效果 */
$('.menu_zhongli').on('mouseenter mouseleave',function(){
    $(this).find('.submenu').toggle();
});

