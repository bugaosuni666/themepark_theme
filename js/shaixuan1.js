var windows=$(window).width();
var bloginfo=$("#nav_product_mue_out").attr("dataurl");
var shaixuancaturl=$("#nav_product_mue_out").attr("dataretrem");
$(".menu_header li a").click(function(){$.cookie("tagsulg","",{expires:7,path:"/"});$.cookie("catsulg","",{expires:7,path:"/"});$.cookie("search_sulg","",{expires:7,path:"/"});});var ids="";var idc="";var idt="";var idall="";if($.cookie("tagsulg")){if($.cookie("catsulg")||$.cookie("search_sulg")){idt=$.cookie("tagsulg")+","}else{idt=$.cookie("tagsulg")}
$("#tagesulg").val($.cookie("tagsulg"))}else{$.cookie("tagsulg","",{expires:7,path:"/"})}
if($.cookie("catsulg")){if($.cookie("search_sulg")){idc=$.cookie("catsulg")+","}else{idc=$.cookie("catsulg")}
$("#catsulg").val($.cookie("catsulg"));}else{$.cookie("catsulg","",{expires:7,path:"/"})};if($.cookie("search_sulg")){ids=$.cookie("search_sulg");}else{$.cookie("search_sulg","",{expires:7,path:"/"})}
idall=idt+idc+ids;ids_on="#"+idall.replace(/,/g,",#"),$(ids_on).addClass("select");$(".nav_product_mu").children("li").children("ul").children("li").children("a").click(function(){var j=$("#tagesulg");var h=$("#catsulg");var f=$("#tagesname");var a=j.val();var u=h.val();var n=f.val();if($(this).hasClass("select")){$(this).parent("li").parent("ul").parent("li.dx_themepark").children("ul").children("li").siblings().children("a").removeClass("select");$(this).removeClass("select");if($(this).parent("li").hasClass("menu-item-object-post_tag")){var w=a.split(",");var d=[];var r=[];var p=$(this).attr("rel");for(s=0;s<w.length;s++){if(p!=w[s]){d.push(w[s])}}}
if($(this).parent("li").hasClass("menu-item-object-category")){var b=u.split(",");var o=[];var e=$(this).attr("rel");for(s=0;s<b.length;s++){if(e!=b[s]){o.push(b[s])}}}}else{$(this).parent("li").parent("ul").parent("li.dx_themepark").children("ul").children("li").siblings().children("a").removeClass("select");$(this).addClass("select")}if($(this).parent("li").hasClass("menu-item-object-post_tag")){var l=new Array;var s=0;$(".nav_product_mu").children("li").children("ul").children("li.menu-item-object-post_tag").each(function(){if($(this).children("a").hasClass("select")){l[s]=$(this).children("a").attr("rel");s=s+1}});j.val(l)}
if($(this).parent("li").hasClass("menu-item-object-category")){var k=new Array;var s=0;$(".nav_product_mu").children("li").children("ul").children("li.menu-item-object-category").each(function(){if($(this).children("a").hasClass("select")){k[s]=$(this).children("a").attr("rel");s=s+1}});h.val(k)}
var g=$("#tagesulg").val();var m="";var q="";var v="";if($("#tagesulg").val()!=""){m="?tag="+g}
if($("#catsulg").val()!=""){if($("#tagesulg").val()==""){v="?cat="+$("#catsulg").val()}else{v="&cat="+$("#catsulg").val()}}
if($("#tagesname").val()!=""){if($("#tagesulg").val()==""){q="?s="+$("#tagesulg").val()}else{if($("#catsulg").val()==""){q="?s="+$("#tagesname").val()}else{q="&s="+$("#tagesname").val()}}}
if(m||v||q){location.href=bloginfo+"/"+m+v+q;}else{location.href=shaixuancaturl;}
$.cookie("tagsulg",$("#tagesulg").val(),{expires:7,path:"/"});$.cookie("catsulg",$("#catsulg").val(),{expires:7,path:"/"});$.cookie("search_sulg",$("#tagesname").val(),{expires:7,path:"/"})});$("input#choose").click(function(){var c="";var a="";if($("input#choose").val()){if($.cookie("catsulg")){c="&cat="+$.cookie("catsulg")}
if($.cookie("tagsulg")){a="&tag="+$.cookie("tagsulg")}
var b="?s="+$("#tagesname").val();if(b||a||c){location.href=bloginfo+"/"+b+a+c;}else{location.href=shaixuancaturl;}
$.cookie("tagsulg",$("#tagesulg").val(),{expires:7,path:"/"});$.cookie("catsulg",$("#catsulg").val(),{expires:7,path:"/"});$.cookie("search_sulg",$("#tagesname").val(),{expires:7,path:"/"})}else{alert("请输入关键词")}});