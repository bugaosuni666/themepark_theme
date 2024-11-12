
jQuery(document).on("click",".themepark-accordion-head",function () {
	
				if(jQuery(this).hasClass("active")){
					jQuery(this).removeClass("active");
					jQuery(this).next("div.block-editor-inner-blocks").show();
				}else{
					jQuery(this).addClass("active");
			jQuery(this).next("div.block-editor-inner-blocks").hide();
				}
			});	
jQuery(document).on("click",".content_tab_title .btn",function () {			

	var is=jQuery(this).index();
	var nextblock=	jQuery(this).parent(".content_tab_title").next(".thempark_tab_content_box").children(".block-editor-inner-blocks").children(".block-editor-block-list__layout")
	jQuery(this).parent(".content_tab_title").children(".btn").not(this).removeClass("active");
	jQuery(this).addClass("active");
	nextblock.children(".swiper-slide").not(nextblock.children(".swiper-slide").index(jQuery(this).index())).hide();;
	nextblock.children(".ecdorbox"+is).show();
	
	
});

jQuery(document).on("click",".savebtns",function () {	jQuery(this).addClass("blue")	});	
jQuery(document).on("click",".cotrlboxsinput span",function () {	jQuery(this).parent(".cotrlboxsinput").children(".savebtns").removeClass("blue")	});	


jQuery(document).on("click",".swiperimgbox .addimgbox .pimg_box_out .pimg_box .thempark_gallery-item img",function () {			

	var is=jQuery(this).parent(".thempark_gallery-item").index();
	var nextblock=	jQuery(this).parent(".thempark_gallery-item").parent(".pimg_box").parent(".pimg_box_out").parent(".addimgbox").prev(".post_gallery_out2").children(".swiper-container").children(".swiper-wrapper");
	var nextblock2=jQuery(this).parent(".thempark_gallery-item").parent(".pimg_box").parent(".pimg_box_out").parent(".addimgbox").prev(".showslidebox");
		
	var preblock=jQuery(this).parent(".thempark_gallery-item").parent(".pimg_box").parent(".pimg_box_out").next(".uploads_img_btn").next(".imgs_corl");
	
	jQuery(this).parent(".thempark_gallery-item").parent(".pimg_box").children(".thempark_gallery-item").not(jQuery(this).parent(".thempark_gallery-item")).removeClass("active");
	jQuery(this).parent(".thempark_gallery-item").addClass("active");
	nextblock.children(".swiper-slide").not(nextblock.children(".swiper-slide.insbox"+is)).removeClass("active");;
	nextblock.children(".insbox"+is).addClass("active");;
	preblock.children(".cotrlboxs").not(preblock.children(".cotrlboxs.insbox"+is)).removeClass("active");;
	preblock.children(".insbox"+is).addClass("active");;
	
	nextblock2.children(".showbox").not(nextblock.children(".swiper-slide.insbox"+is)).removeClass("active");;
	nextblock2.children(".insbox"+is).addClass("active");;
});
	
jQuery(document).on("click",".themepark-comment_form .themepark-c-f .tpcheckbox .checkboxs .rideo",function () {
if(jQuery(this).hasClass("ac")){jQuery(this).removeClass("ac")}else{jQuery(this).addClass("ac")}
});

jQuery(document).on("click",".themepark-comment_form .themepark-c-f .tprideo .rideos .rideo",function () {
jQuery(this).addClass("ac");
jQuery(this).parent(".rideos").children(".rideo").not(jQuery(this)).removeClass("ac");	
});


jQuery(document).on("each",".mapiframe1",function () {

	
	var loc1=$(this).next(".mapcontents").children(".mapcontent").attr("data-s");
	var loc2=$(this).next(".mapcontents").children(".mapcontent").attr("data-y");

	var tt=$(this).next(".mapcontents").children(".mapcontent").children(".mapinfo").children("h4").text;
	var con=$(this).next(".mapcontents").children(".mapcontent").html();
	var name=$(this).attr("id");
	var p=$(this).attr("datap");
	var m=$(this).attr("datam");
	var f=$(this).attr("dataf");
	var s=$(this).attr("datas");
	var icon=$(this).attr("icon");
	$.baidumap(name,loc1,loc2,tt,con,p,m,f,s,icon)
	
	
});
	
jQuery(document).on("each",".mapiframe2",function () {
	
	var dataway=[];
	
	$(this).next(".mapcontents").children(".mapcontent").each(function(){
		var loc1=$(this).attr("data-s");
	    var loc2=$(this).attr("data-y");
		var con=$(this).html();
		
		var datas=[loc1,loc2,con]
		
		dataway.push(datas);
	});
	var first=$(this).next(".mapcontents").children(".mapcontent").first();
	var firstdata1=first.attr("data-s");
	var firstdata2=first.attr("data-y");
	var name=$(this).attr("id");
	
	var p=$(this).attr("datap");
	var m=$(this).attr("datam");
	var f=$(this).attr("dataf");
	var s=$(this).attr("datas");
	var icon=$(this).attr("icon");
	$.baidumap2(name,dataway,firstdata1,firstdata2,p,m,f,s,icon)
	
	
});	



