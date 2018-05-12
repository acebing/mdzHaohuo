$(function () {
	// 个人中心
	$('.UseMouseoverHD').mouseover(function(){
		$('.yx-cp-siteNavItemBd .UseMouseover').show();	
		$('.yx-cp-siteNavItemBd .UseMouseover').mouseover(function(){
			$(this).show();
		});
	});
	$('.UseMouseoverHD').mouseout(function(){
		$('.yx-cp-siteNavItemBd .UseMouseover').hide();
		$('.yx-cp-siteNavItemBd .UseMouseover').mouseout(function(){
			$(this).hide();
		});
	});
	// 客服服务
	$('.OrderMouseoverHD').mouseover(function(){
		$('.yx-cp-siteNavItemBd .OrderMouseover').show();	
		$('.yx-cp-siteNavItemBd .OrderMouseover').mouseover(function(){
			$(this).show();
		});
	});
	$('.OrderMouseoverHD').mouseout(function(){
		$('.yx-cp-siteNavItemBd .OrderMouseover').hide();
		$('.yx-cp-siteNavItemBd .OrderMouseover').mouseout(function(){
			$(this).hide();
		});
	});
	// 搜索框
	$('.yx-cp-searchInput').focus(function(){ 
    $('.yx-cp-m-suggest').show(); 
	});
	$('.yx-cp-searchInput').blur(function(){ 
    $('.yx-cp-m-suggest').hide(); 
	});
	// 菜单
	var navShow = $('.yx-cp-m-tabNav .yx-cp-tabNav-item');
		navShow.each(function(index, element) {
		  $(this).mouseout(function () {
		  alert("sdsd");
		});
	});
		// navShow.each(function(index, element) {
		//   $(this).mouseout(function () {
		//   $('.yx-cp-tabNav-dropdown').hide();
		//    })
		// });