/* 轮播图 */
function fn(){
    var mySwiper = new Swiper ('.swiper-container', {
        speed:400,
        effect : 'fade',
        simulateTouch : false,
        autoplay:true,
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      })   
}
/* 轮播图渲染 */
var Isrc = actual_ad_index.index_eyes;
$.each(Isrc,function(i,arr){
    $('.swiper-wrapper').append(`
    <div class="swiper-slide">
        <a target="_blank" href="${arr.sLink}">
            <img src="${arr.sPicLink}" alt="">
        </a>
    </div>`);
});
fn();

/* 内容渲染 */
var Is = actual_ad_index.index_recommend
$.each(Is,function(i,arr){
    $('#blk_rec_list').append(`
    <li>
        <a target="_blank" href="${arr.sLink}">
            <img src="${arr.sPicLink}" width="480" height="300" alt="首页推荐广告位">
        </a>
        <p class="inshop-tit">${arr.sDescribe}</p>
    </li>
    `)
});