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
    if(arr.sUrl.split('?')[1] == window.location.href.split('?')[1]){
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

/* 登录 */
$('#unlogin').on('click',function(){
    $('body').append(`
    <iframe src="https://apps.game.qq.com/ams/asyncCookie.html" id="loginStatusSyncFrame_ams_ame" width="0" height="0"
    style="border: 0px;"></iframe>
<style type="text/css" id="milo_login_css_win">
    .milo_login_dialog ol,
    ul {
        list-style: none;
    }

    .milo_login_dialog {
        background: #fff;
        font: 12px/1.5 hiragino sans gb, microsoft yahei, simsun;
    }

    .milo_login_dialog a,
    .milo_login_dialog a:hover {
        text-decoration: none;
    }

    .milo_login_dialog .milo_btn_close {
        display: block;
        position: absolute;
        top: 1px;
        right: 1px;
        width: 47px;
        height: 28px;
        background: url(https://vm.gtimg.cn/tencentvideo/vstyle/web/common/style/img/login/sprite_login.png?d=0210&max_age=31104000) 0 0 no-repeat;
        z-index: 10;
    }

    .milo_login_dialog .milo_btn_close .milo_btn_inner {
        display: none;
    }

    .milo_login_dialog .milo_login_tab {
        position: relative;
        height: 50px;
        margin-bottom: -1px;
        border-bottom: 1px solid #e6e6e6;
        background: #f1f1f1;
        font-size: 0;
        z-index: 3;
    }

    .milo_login_dialog ul,
    .milo_login_dialog li,
    .milo_login_dialog p {
        padding: 0;
        margin: 0;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item {
        display: inline-block;
        *display: inline;
        zoom: 1;
        width: 50%;
        text-align: center;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item .milo_tab_item {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #b1b1b1;
    }

    .milo_login_dialog .milo_login_tab .milo_current .milo_tab_item {
        height: 51px;
        margin-bottom: -1px;
        color: #fff;
    }

    .milo_login_dialog .milo_login_tab .milo_current .milo_tab_item_qq {
        background: #31a4f6;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item .ico_loginqq,
    .milo_login_dialog .milo_login_tab .milo_list_item .milo_ico_loginwx {
        display: inline-block;
        *display: inline;
        zoom: 1;
        background: url(https://vm.gtimg.cn/tencentvideo/vstyle/web/common/style/img/login/sprite_login.png?d=0210&max_age=31104000) 9999px 9999px no-repeat;
        vertical-align: top;
        position: relative;
        top: 12px;
        *top: 0px;
        margin-right: 8px;
    }

    .milo_login_dialog .milo_login_cont .milo_cont_inner_qq,
    .milo_login_dialog .milo_login_cont .milo_cont_inner_wx {
        display: none;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item .ico_loginqq {
        width: 20px;
        height: 23px;
        background-position: -180px -90px;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item.milo_current .ico_loginqq {
        background-position: -200px -90px;
    }

    .milo_login_dialog .milo_login_tab .milo_list_item .milo_ico_loginwx {
        width: 24px;
        height: 23px;
        background-position: -220px -90px;
    }

    .milo_login_dialog .milo_login_tips {
        position: relative;
        z-index: 3;
        height: 22px;
        padding: 12px 10px;
    }

    .milo_login_dialog .milo_login_tips .milo_tips_txt {
        font-size: 14px;
        line-height: 22px;
        color: #a2a2a2;
        text-align: center;
        zoom: 1;
    }

    .milo_login_dialog .milo_login_cont {
        position: relative;
        height: 400px;
        z-index: 2;
        overflow: hidden;
        background: #fff;
    }

    .milo_mask_layer {
        position: fixed;
        _position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: #000;
        filter: alpha(opacity=50);
        opacity: .5;
    }

    .milo_login_dialog .milo_login_cont .milo_cont_inner_in {
        display: block;
    }

    .milo_login_dialog .milo_login_iframe {
        width: 100%;
        height: 100%;
        margin: -2px 0 0 -2px;
    }

    .milo_login_dialog .milo_login_iframe .iframe_title {
        display: block;
        height: 50px;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        font-family: "hiragino sans gb", simsun, stfangsong;
        color: #808080;
    }

    .milo_login_dialog .milo_login_iframe_wx .iframe_title {
        padding-top: 50px;
    }

    .milo_login_dialog .milo_login_tab .milo_current .milo_tab_item_wx {
        background: #4ab218;
    }
</style>
<div id="milo_login_win" class="milo_login_dialog"
    style="display: block; width: 622px; height: 418px; top: 50%; left: 50%; margin-left: -311px; margin-top: -209px; position: fixed; z-index: 10001; padding: 0px; background-color: rgb(255, 255, 255);">
    <a href="javascript:void(0)" id="milo_login_close" class="milo_btn_close" title="关闭"><span
            class="milo_btn_inner">关闭</span></a>
    <div class="milo_login_tab">
        <ul class="milo_tab_list">
            <li class="milo_list_item milo_list_item_qq milo_current" data-type="qq"><a href="javascript:void(0);"
                    class="milo_tab_item milo_tab_item_qq"><i class="ico_loginqq"></i><span>QQ账号登录</span></a></li>
            <li class="milo_list_item milo_list_item_wx" data-type="wx"><a href="javascript:void(0);"
                    class="milo_tab_item milo_tab_item_wx"><i class="milo_ico_loginwx"></i><span>微信账号登录</span></a>
            </li>
        </ul>
    </div>
    <div class="milo_login_tips">
        <div class="milo_tips_txt">微信和QQ是两个独立账号，账号信息不互通</div>
    </div>
    <div class="milo_login_cont">
        <div class="milo_cont_inner milo_cont_inner_qq milo_cont_inner_in">
            <div class="milo_login_iframe"><iframe name="milo_login_frame_quick_" id="milo_login_frame_quick_"
                    frameborder="no" scrolling="no" style="width:626px; height:400px;"
                    src="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?proxy_url=https://game.qq.com/comm-htdocs/milo/proxy.html&amp;appid=21000501&amp;target=top&amp;s_url=https%3A%2F%2Flolriotmall.qq.com%2Findex.shtml%3FCLICKTAG%3Dlolriotmall.pc.index.logo&amp;style=20&amp;daid=8&amp;hide_close_icon=1"></iframe>
            </div>
        </div>
        <div class="milo_cont_inner milo_cont_inner_wx">
            <div class="milo_login_iframe milo_login_iframe_wx">
                <div id="miloLoginWX" style="text-align: center;"><iframe
                        src="https://open.weixin.qq.com/connect/qrconnect?appid=wxdff7a47a9401b818&amp;scope=snsapi_login&amp;redirect_uri=https%3A%2F%2Fmall.qq.com%2Fcomm-htdocs%2Fmilo_mobile%2Fwxlogin.html%3Fappid%3Dwxdff7a47a9401b818%26sServiceType%3Dlolriotmall%26originalUrl%3Dhttps%253A%252F%252Flolriotmall.qq.com%252Findex.shtml%253FCLICKTAG%253Dlolriotmall.pc.index.logo&amp;state=1&amp;login_type=jssdk&amp;self_redirect=true&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst=&amp;style=black"
                        frameborder="0" scrolling="no" width="300px" height="400px"></iframe></div>
            </div>
        </div>
    </div>
</div>
<div class="milo_mask_layer"></div>
    `);
    $('.milo_tab_list .milo_list_item').on('click',function(){
        $(this).addClass('milo_current').siblings('li.milo_list_item').removeClass('milo_current');
        $('.milo_login_cont div.milo_cont_inner').eq($(this).index('li.milo_list_item')).addClass('milo_cont_inner_in').siblings().removeClass('milo_cont_inner_in');
    });
    /* 关闭登录 */
    $('#milo_login_close').on('click',function(){
        $('#loginStatusSyncFrame_ams_ame').remove();
        $('#milo_login_css_win').remove();
        $('#milo_login_win').remove();
        $('.milo_mask_layer').remove();
    });
});


