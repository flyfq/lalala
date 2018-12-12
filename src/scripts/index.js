
require(["../scripts/config.js"], function(){
	require(["common","jquery","swiper"], function(com, jq, Swiper){
		jq(".header-right").mousemove(function(){
			jq(".productnotice").show()
		})
		jq(".header-right").mouseout(function(){
			jq(".productnotice").hide()
		})
		
		var mySwiper = new Swiper('.swiper-container', {
		autoplay:true,
		loop : true,
		effect : 'fade',
		pagination: {
    el: '.swiper-pagination',
  },
		});
	})
})
