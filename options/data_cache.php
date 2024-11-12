<?php
/**
 * 主题设置变量获取
 这个文件将主题所有读取数据库的值获取到变量中，在 需要调用的文件包含这个文件就直接可以输出变量而不需要在每个文件去查询数据库了。

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/options
 * @version     1.o
 */
$cat_get=$product_get=$all_get=''; 
if(isset($_GET['post_type'])){
	
if($_GET['post_type']=="post"){$cat_get='checked="checked"';}elseif($_GET['post_type']=='product') {$product_get='checked="checked"';}else{$all_get='checked="checked"';}
$key = wp_specialchars($s, 1);
}
//底部设置数据
$mytheme_footer_tel=get_option('mytheme_footer_tel');//底部电话,
$mytheme_footer_contact_s=get_option('mytheme_footer_contact_s');//电话后文字
$mytheme_footer_fax=get_option('mytheme_footer_fax');//传真或者邮箱
$mytheme_footer_contact=get_option('mytheme_footer_contact');//联系地址
$mytheme_footer_btn=get_option('mytheme_footer_btn');//在线客服按钮
$mytheme_footer_btn_url=get_option('mytheme_footer_btn_url');//在线客服按钮链接
$mytheme_footer_sever_nav=get_option('mytheme_footer_sever_nav');//底部服务菜单
$mytheme_footer_sever_nav2=get_option('mytheme_footer_sever_nav2');//底部文字菜单
$mytheme_footer_sever_nav3=get_option('mytheme_footer_sever_nav3');//认证图标菜单
$mytheme_footer_sever_nav4=get_option('mytheme_footer_sever_nav4');//友情链接菜单

$mytheme_footer_bqba_ts=get_option('mytheme_footer_bqba_ts');//版权所有
$mytheme_footer_bqba_ts2=get_option('mytheme_footer_bqba_ts2');//ICP备案号码
$mytheme_footer_bqba_ts3=get_option('mytheme_footer_bqba_ts3');//公安备案
$mytheme_footer_bqba_ts4=get_option('mytheme_footer_bqba_ts4');//公安备案url
$mytheme_footer_bqba_ts5=get_option('mytheme_footer_bqba_ts5');//技术支持

//工具栏
$mytheme_toolbar_t1=get_themepark_option('mytheme_toolbar_t1','个人中心');//个人中心PC
$mytheme_toolbar_t2=get_themepark_option('mytheme_toolbar_t2','购物车');//购物车
$mytheme_toolbar_t3=get_themepark_option('mytheme_toolbar_t3','我的足迹');//我的足迹PC
$mytheme_toolbar_t4=get_themepark_option('mytheme_toolbar_t4','在线客服');//在线客服PC
$mytheme_toolbar_t5=get_themepark_option('mytheme_toolbar_t5','关注微信');//关注微信PC
$mytheme_toolbar_t6=get_themepark_option('mytheme_toolbar_t6','回到顶部');//回到顶部PC



$mytheme_toolbar_tm1=get_themepark_option('mytheme_toolbar_tm1','我的');//我的 手机
$mytheme_toolbar_tm2=get_themepark_option('mytheme_toolbar_tm2','分类');//分类 手机
$mytheme_toolbar_tm3=get_themepark_option('mytheme_toolbar_tm3','客服');//客服 手机

$mytheme_toolbar_tel_b=get_themepark_option('mytheme_toolbar_tel_b','电话:');//电话标题
$mytheme_toolbar_tel_b2=get_themepark_option('mytheme_toolbar_tel_b2','0731-8578****');//电话号码
$mytheme_toolbar_tel_b3=get_themepark_option('mytheme_toolbar_tel_b3','邮箱:');//邮箱标题
$mytheme_toolbar_tel_b4=get_themepark_option('mytheme_toolbar_tel_b4','info@******.com');//邮箱地址

$mytheme_qq_code=stripslashes(get_option('mytheme_qq_code'));//qq客服

$mytheme_toolbar_sm_text=stripslashes(get_themepark_option('mytheme_toolbar_sm_text','客服在线时间：<br />周一~周六早9：:30--18:00<br />'));
$mytheme_toolbar_wechat=get_option('mytheme_toolbar_wechat');//微信二维码




//个人中心、购物车等

$mytheme_myaccount_gonggao=stripslashes(get_themepark_option('mytheme_myaccount_gonggao','欢迎访问WEB主题公园官方商城<br>最新公告：商城目前支持微信和支付宝付款，手机刷一刷即可付款哦，你可以进入新手帮助查看购物流程'));//个人中心公告

//多语言-title
$language_th1=get_themepark_option('language_th1','找到标签');
$language_th2=get_themepark_option('language_th2','搜索结果');
$language_th3=get_themepark_option('language_th3','很遗憾，没有找到您的信息');
$language_th4=get_themepark_option('language_th4','首页');
$language_th5=get_themepark_option('language_th5','全站搜索');
$language_th6=get_themepark_option('language_th6','搜索文章');
$language_th7=get_themepark_option('language_th7','搜索商品');
//多语言-顶部
	 

$language_t1=get_themepark_option('language_t1','全部商品分类');
$language_t2=get_themepark_option('language_t2','登录');
$language_t3=get_themepark_option('language_t3','注册');
$language_t4=get_themepark_option('language_t4','个人中心');
$language_t5=get_themepark_option('language_t5','购物车');

//多语言-文章分类
$language_c1=get_themepark_option('language_c1','文章检索');
$language_c2=get_themepark_option('language_c2','你可以选择下面的条件并可以输入关键词点击开始搜索进行筛选文章');
$language_c3=get_themepark_option('language_c3','发布时间');
$language_c4=get_themepark_option('language_c4','浏览次数');
$language_c5=get_themepark_option('language_c5','搜索');
$language_c6=get_themepark_option('language_c6','筛选');
$language_c7=get_themepark_option('language_c7','返回');

//多语言-文章内页
$language_s1=get_themepark_option('language_s1','分类:');
$language_s2=get_themepark_option('language_s2','相关推荐');
$language_s3=get_themepark_option('language_s3','上一篇');
$language_s4=get_themepark_option('language_s4','下一篇');
$language_s5=get_themepark_option('language_s5','标签:');
//多语言-首页模块
$language_i1=get_themepark_option('language_i1','详细信息');
$language_i2=get_themepark_option('language_i2','加入购物车');
$language_i3=get_themepark_option('language_i3','选择选项');
$language_i4=get_themepark_option('language_i4','来自于');
$language_i5=get_themepark_option('language_i5','评价');
$language_i6=get_themepark_option('language_i6','促销中');

//多语言-登录注册
$woo_language_l1=get_themepark_option('woo_language_l1','用户登录');
$woo_language_l2=get_themepark_option('woo_language_l2','用户注册');
$woo_language_l3=get_themepark_option('woo_language_l3','用户名或电邮地址');
$woo_language_l4=get_themepark_option('woo_language_l4','密码');
$woo_language_l5=get_themepark_option('woo_language_l5','记住我');
$woo_language_l6=get_themepark_option('woo_language_l6','忘记密码');
$woo_language_l7=get_themepark_option('woo_language_l7','其他方式登录');
$woo_language_l8=get_themepark_option('woo_language_l8','立即登录');
$woo_language_l9=get_themepark_option('woo_language_l9','这个手机号码已经被注册了');
$woo_language_l0=get_themepark_option('woo_language_l0','请填写手机号码');

$woo_language_r1=get_themepark_option('woo_language_r1','用户名');
$woo_language_r2=get_themepark_option('woo_language_r2','电邮地址');
$woo_language_r3=get_themepark_option('woo_language_r3','密码');
$woo_language_r4=get_themepark_option('woo_language_r4','注册');
//多语言-重设密码
$woo_language_f1=get_themepark_option('woo_language_f1','忘记密码了？请输入您的用户名或电邮地址。您将会收到一封带有重置密码链接的邮件。');
$woo_language_f2=get_themepark_option('woo_language_f2','用户名或电子邮件');
$woo_language_f3=get_themepark_option('woo_language_f3','密码重置');
$woo_language_f4=get_themepark_option('woo_language_f4','在下面输入新密码');
$woo_language_f5=get_themepark_option('woo_language_f5','新密码');
$woo_language_f6=get_themepark_option('woo_language_f6','再次输入');
$woo_language_f7=get_themepark_option('woo_language_f7','保存');
$woo_language_f8=get_themepark_option('woo_language_f8','原密码');




//多语言-个人中心-订单状态
$woo_language_p1=get_themepark_option('woo_language_p1','我的个人中心');
$woo_language_p2=get_themepark_option('woo_language_p2','资料概览');
$woo_language_p3=get_themepark_option('woo_language_p3','我的订单');
$woo_language_p4=get_themepark_option('woo_language_p4','我的下载');
$woo_language_p5=get_themepark_option('woo_language_p5','收货地址');
$woo_language_p6=get_themepark_option('woo_language_p6','我的资料');
$woo_language_p7=get_themepark_option('woo_language_p7','退出登录');
$woo_language_p8=get_themepark_option('woo_language_p8','会员中心');
$woo_language_p9=get_themepark_option('woo_language_p9','我的优惠券');;
$woo_language_p10=get_themepark_option('woo_language_p10','我的团购');
$woo_language_p11=get_themepark_option('woo_language_p11','我的余额');
$woo_language_d1=get_themepark_option('woo_language_d1','全部订单');
$woo_language_d2=get_themepark_option('woo_language_d2','未完成的订单');
$woo_language_d3=get_themepark_option('woo_language_d3','已经发货');
$woo_language_d4=get_themepark_option('woo_language_d4','正在处理');
$woo_language_d5=get_themepark_option('woo_language_d5','已退款');
$woo_language_d6=get_themepark_option('woo_language_d6','已完成');
$woo_language_d7=get_themepark_option('woo_language_d7','我的购物车');
$woo_language_d8=get_themepark_option('woo_language_d8','状态:');
$woo_language_d9=get_themepark_option('woo_language_d9','待付款');
$woo_language_d0=get_themepark_option('woo_language_d0','已取消');
$woo_language_d11=get_themepark_option('woo_language_d11','保留');
$woo_language_d12=get_themepark_option('woo_language_d12','失败订单');

$woo_language_ds1=get_themepark_option('woo_language_ds1','订单号：');
$woo_language_ds2=get_themepark_option('woo_language_ds2','联系客服');
$woo_language_ds3=get_themepark_option('woo_language_ds3','订单详细');
$woo_language_ds4=get_themepark_option('woo_language_ds4','个商品，总计');
$woo_language_ds5=get_themepark_option('woo_language_ds5','现在支付');
$woo_language_ds6=get_themepark_option('woo_language_ds6','取消订单');

$woo_language_dz1=get_themepark_option('woo_language_dz1','提交于');
$woo_language_dz2=get_themepark_option('woo_language_dz2','当前状态为');
$woo_language_dz3=get_themepark_option('woo_language_dz3','提交订单成功');
$woo_language_dz4=get_themepark_option('woo_language_dz4','等待付款');
$woo_language_dz5=get_themepark_option('woo_language_dz5','货到付款');
$woo_language_dz6=get_themepark_option('woo_language_dz6','付款成功');
$woo_language_dz7=get_themepark_option('woo_language_dz7','保留订单');
$woo_language_dz8=get_themepark_option('woo_language_dz8','订单失败');
$woo_language_dz9=get_themepark_option('woo_language_dz9','正在处理');
$woo_language_dz0=get_themepark_option('woo_language_dz0','已经发货');
$woo_language_dz11=get_themepark_option('woo_language_dz11','暂未发货');
$woo_language_dz12=get_themepark_option('woo_language_dz12','暂未评分');
$woo_language_dz13=get_themepark_option('woo_language_dz13','已经评分');
$woo_language_dz14=get_themepark_option('woo_language_dz14','订单完成');
$woo_language_dz15=get_themepark_option('woo_language_dz15','订单未完成');
$woo_language_dz16=get_themepark_option('woo_language_dz16','查询物流');
$woo_language_dz17=get_themepark_option('woo_language_dz17','订单信息更新');
$woo_language_dz18=get_themepark_option('woo_language_dz18','近期还没有未完成的订单哦，你可以查看全部全部订单，或者去购物车结算');

$woo_language_or1=get_themepark_option('woo_language_or1','商品');
$woo_language_or2=get_themepark_option('woo_language_or2','合计');
$woo_language_or3=get_themepark_option('woo_language_or3','我的评价');
$woo_language_or4=get_themepark_option('woo_language_or4','评价商品');
$woo_language_or5=get_themepark_option('woo_language_or5','购物小计');
$woo_language_or7=get_themepark_option('woo_language_or7','付款方式');
$woo_language_or8=get_themepark_option('woo_language_or8','再次下单');


$woo_language_a1=get_themepark_option('woo_language_a1','特色推荐');
$woo_language_a2=get_themepark_option('woo_language_a2','下载');
$woo_language_a3=get_themepark_option('woo_language_a3','没有下载项目时的提示');
$woo_language_a4=get_themepark_option('woo_language_a4','查看全部订单');
$woo_language_a5=get_themepark_option('woo_language_a5','进入购物车');
$woo_language_a6=get_themepark_option('woo_language_a6','我的地址');
$woo_language_a7=get_themepark_option('woo_language_a7','账单地址');
$woo_language_a8=get_themepark_option('woo_language_a8','配送地址');
$woo_language_a9=get_themepark_option('woo_language_a9','下列地址将默认用于结算页面。');

//购物车

$woo_language_cart1= get_themepark_option('woo_language_cart1','一共有');
$woo_language_cart2= get_themepark_option('woo_language_cart2','件商品在购物车');
$woo_language_cart3= get_themepark_option('woo_language_cart3','您的购物车目前是空的。');
$woo_language_cart4= get_themepark_option('woo_language_cart4','去选购商品吧！');
$woo_language_cart5= get_themepark_option('woo_language_cart5','价格');
$woo_language_cart6= get_themepark_option('woo_language_cart6','数量');
$woo_language_cart7= get_themepark_option('woo_language_cart7','操作');
$woo_language_cart8= get_themepark_option('woo_language_cart8','使用优惠券');
$woo_language_cart9= get_themepark_option('woo_language_cart9','更新购物车');
$woo_language_cart0= get_themepark_option('woo_language_cart0','移除商品');

$woo_language_carts1= get_themepark_option('woo_language_carts1','购物车总计');
$woo_language_carts2= get_themepark_option('woo_language_carts2','小计');
$woo_language_carts3= get_themepark_option('woo_language_carts3','配送');
$woo_language_carts4= get_themepark_option('woo_language_carts4','现在去结算');
$woo_language_carts5= get_themepark_option('woo_language_carts5','收货人详情');
$woo_language_carts6= get_themepark_option('woo_language_carts6','收货人姓名：');
$woo_language_carts7= get_themepark_option('woo_language_carts7','收货人电话：');
$woo_language_carts8= get_themepark_option('woo_language_carts8','配送地址：');
$woo_language_carts9= get_themepark_option('woo_language_carts9','邮编：');
$woo_language_carts0= get_themepark_option('woo_language_carts0','修改收货资料');
$woo_language_carts11= get_themepark_option('woo_language_carts11','我已经阅读并接受');
$woo_language_carts12= get_themepark_option('woo_language_carts12','条款及条件');

// 产品目录

$product_l1 = get_themepark_option('product_l1','返回');
$product_l2 = get_themepark_option('product_l2','筛选');
$product_l3 = get_themepark_option('product_l3','点击筛选');
$product_l4 = get_themepark_option('product_l4','专柜价：');
$product_l5 = get_themepark_option('product_l5','折扣价：');
$product_l6 = get_themepark_option('product_l6','累计销量：');
$product_l7 = get_themepark_option('product_l7','累计评价：');
$product_l8 = get_themepark_option('product_l8','立即购买');
$product_l9 = get_themepark_option('product_l9','放入购物车');
$product_l0 = get_themepark_option('product_l0','推荐搭配');
$product_l11 = get_themepark_option('product_l11','你可能还喜欢');
$product_l12 = get_themepark_option('product_l12','购买商品');
$product_l13 = get_themepark_option('product_l13','分类信息');
$product_l14 = get_themepark_option('product_l14','详细参数');


//产品对比

$product_d1 = get_themepark_option('product_d1','产品对比');
$product_d2 = get_themepark_option('product_d2','隐藏');
$product_d3 = get_themepark_option('product_d3','最多添加进入4个对比项目');
$product_d4 = get_themepark_option('product_d4','至少添加2个对比项目');
$product_d5 = get_themepark_option('product_d5','开始对比');
$product_d6 = get_themepark_option('product_d6','清除全部');


//文章评论
$language_pl1 = get_themepark_option('language_pl1','您好！');
$language_pl2 = get_themepark_option('language_pl2','请登录后评论');
$language_pl3 = get_themepark_option('language_pl3','请登录');
$language_pl4 = get_themepark_option('language_pl4','点击取消回复');
$language_pl5 = get_themepark_option('language_pl5','称呼');
$language_pl6 = get_themepark_option('language_pl6','邮箱');
$language_pl7 = get_themepark_option('language_pl7','添加表情');
$language_pl8 = get_themepark_option('language_pl8','发布评论');
$language_pl9 = get_themepark_option('language_pl9','评论审核中');
$language_pl0 = get_themepark_option('language_pl0','回复');
 ?>