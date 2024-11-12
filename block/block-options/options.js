( function( plugins, editPost, element, components, data, compose ) {
 
	
	
var el = wp.element.createElement; 
var	TextControl=wp.components.TextControl;	
var	TextareaControl=wp.components.TextareaControl;	
var	ToggleControl=wp.components.ToggleControl;	
var CheckboxControl	=wp.components.CheckboxControl;	
var ColorPalette=wp.components.ColorPalette;
var	Panel=wp.components.Panel;	
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;
var registerPlugin=wp.plugins.registerPlugin;
var PluginSidebar=wp.editPost.PluginSidebar;	
var PluginSidebarMoreMenuItem=wp.editPost.PluginSidebarMoreMenuItem;
var withSelect=wp.data.withSelect;	
var withDispatch=wp.data.withDispatch;		
var	RadioControl=wp.components.RadioControl;	
var MediaUpload=wp.editor.MediaUpload;	
var	SelectControl=wp.components.SelectControl;	
var	RangeControl= wp.components.RangeControl;
var MetaMediaUpload = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
	var imageshow='';
	if(props.metaValue){ imageshow= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													 
												 props.setMetaValue( '' );
												 jQuery(".editor-styles-wrapper").css("background-image","");
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:props.metaValue}) )
					   }
		return el("div",{className:"postbar_img"},imageshow,el( MediaUpload, {
			type: 'image',
			
			value: props.metaValue,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),props.title)},
			onSelect: function( content ) {
				props.setMetaValue( content.sizes.full.url );
				jQuery(".editor-styles-wrapper").css("background-image","url("+content.sizes.full.url+")");
				
			},
		}));
	}
);	
	
	
	
var MetaToggleControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( ToggleControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
			if(content== true){	jQuery(".edit-post-visual-editor__post-title-wrapper").css("opacity","0.5");}else{
				jQuery(".edit-post-visual-editor__post-title-wrapper").css("opacity","1");
			}
			},
		});
	}
);		
	
	
var MetaToggleControl2 = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( ToggleControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
			if(content== true){	jQuery(".is-root-container").css("padding","0");}else{
				jQuery(".is-root-container").css("padding","2%");
			}
			},
		});
	}
);		
		
	
	
	
	
	
 var MetaTextControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( TextControl, {
			label: props.title,
			value: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
			},
		});
	}
);
	
	
var MetaTextareaControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( TextareaControl, {
			label: props.title,
			value: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
			},
		});
	}
);	
	
var MetaCheckboxControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( CheckboxControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
			},
		});
	}
);	
	
var MetaRadioControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( RadioControl, {
			label: props.title,
			selected: props.metaValue,
			
			options : [
        { label: '两栏模式（有侧栏小工具）', value: '1022px', },
		{ label: '通栏模式（最高宽度1400px）', value: '1400px' },
		{ label: '全屏模式无动画（最高宽度100%）', value: '100%' },
		{ label: '全屏模式有动画（最高宽度100%）', value: '100% dong' },		
		{ label: '滚轴模式H5动画[付费版解锁]', value: '' },			
        ], 
			onChange: function( content ) {
				props.setMetaValue( content );
				var widthcontent;
				widthcontent=content
				jQuery(".block-editor-writing-flow").css("max-width",widthcontent);	
			},
		})
	}
);	

	

	
var MetaColorPalette = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( "lable", {Style:"width:100%;"},props.title,el( ColorPalette, {
			label: props.title,
			value: props.metaValue,
			colors : [
        { name: '默认灰色', color: '#f5f5f5' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
			onChange: function( content ) {
				
				if(content!=null){jQuery(".editor-styles-wrapper").css("background-color",content);
						   props.setMetaValue( content );
						   }else{
					jQuery(".editor-styles-wrapper").css("background-color",'#f5f5f5');
							   props.setMetaValue( '' );
				}	
			},
		}));
	}
);		
	
	
	
	
var MetaSelectControl1 = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( SelectControl, {
			label: props.title,
			selected: props.metaValue,
			
			options : [
        { label: '居左', value: 'left top', },
		{ label: '居中', value: 'center' },
		{ label: '居中和居上', value: 'center top' },	
		{ label: '居中和居下', value: 'center bttom' },
		{ label: '居右', value: 'right top' },	
        ], 
			onChange: function( content ) {
				props.setMetaValue( content );
			if(content!=''){	jQuery(".editor-styles-wrapper").css("background-position",content);}else{
				jQuery(".editor-styles-wrapper").css("background-position","");
			}	
			},
		})
	}
);		
	
var MetaCheckboxControl2 = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return  props.title,el( CheckboxControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
				if(content== true){jQuery(".editor-styles-wrapper").css("background-repeat","no-repeat");}else{
					jQuery(".editor-styles-wrapper").css("background-repeat","");
				}	
			},
		});
	}
);	

	
	var MetaCheckboxControl3 = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return  props.title,el( CheckboxControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
				if(content== true){	jQuery(".editor-styles-wrapper").css("background-size","cover");}else{
					jQuery(".editor-styles-wrapper").css("background-size","");
				}	
			},
		});
	}
);	
	
var MetaCheckboxControl4 = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return  props.title,el( CheckboxControl, {
			label: props.title,
			checked: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
				if(content== true){jQuery(".editor-styles-wrapper").css("background-attachment","fixed")}else{
					jQuery(".editor-styles-wrapper").css("background-attachment","");
				}	
			},
		});
	}
);		
	
	
	
var MetaColorPalettemain = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( "lable", {Style:"width:100%;"},props.title,el( ColorPalette, {
			label: props.title,
			value: props.metaValue,
			colors : [
        { name: '灰色', color: '#f5f5f5' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
			onChange: function( content ) {
				
				if(content!=null){ jQuery(".is-root-container_bac").css("background-color",content);
								 props.setMetaValue( content );
								 }else{
					jQuery(".is-root-container_bac").css("background-color","");
									 props.setMetaValue( '' );
				}
				
				
			},
		}));
	}
);			
	
	
var MetaRangeControl = wp.compose.compose(
	withDispatch( function( dispatch, props ) {
		return {
			setMetaValue: function( metaValue ) {
				dispatch( 'core/editor' ).editPost(
					{ meta: { [ props.metaKey ]: metaValue } }
				);
			}
		}
	} ),
	withSelect( function( select, props ) {
		return {
			metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
		}
	} ) )( function( props ) {
		return el( RangeControl, {
			label: props.title,
			min:0,max: 100,
			value: props.metaValue,
			onChange: function( content ) {
				props.setMetaValue( content );
				if(content!=100){jQuery(".is-root-container_bac").css("opacity",(content/100));}else{
					jQuery(".is-root-container_bac").css("opacity","");
				}
			},
		});
	}
);		
	
	
	
	
	
	
	
registerPlugin( 'thempark-options', {render: function() {
var bclolr=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_bcolor' ];
var bwidth=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_width' ];
var bimg=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_img' ];	
var position=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_img_po' ];	
var repeat	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_img_re' ];
var cover	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_img_cover' ];
var fixed	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_img_fixed' ];
var hide	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_hide_title' ];	
var miancolor=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_main_b' ];	
var mianop	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_post_main_p' ];
var paddingblock	=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_paddingblock' ];	
var miancolors='';
var mianops="";
var widthcontent,tishi1='',tishi2='';
if(bwidth=='swiper'){widthcontent='100%'
					if(hide==false){tishi1='[请开启此选项！]'}
					 if(paddingblock==false){tishi2='[请开启此选项！]'}
					}else{widthcontent=bwidth}	
	
	
if(miancolor){miancolors='background-color:'+miancolor+';'}
if(mianop!=100){mianops='opacity:'+(mianop/100);}	
jQuery(".is-root-container").append('<div class="is-root-container_bac" style="'+miancolors+mianops+'"></div>');	


if(paddingblock){jQuery(".is-root-container").css("padding","0");}else{jQuery(".is-root-container").css("padding","2%");}
	
if(hide== true){	jQuery(".edit-post-visual-editor__post-title-wrapper").css("opacity","0.5");}else{
				jQuery(".edit-post-visual-editor__post-title-wrapper").css("opacity","1");
			}	
	
if(repeat== true){jQuery(".editor-styles-wrapper").css("background-repeat","no-repeat");}		
jQuery(".editor-styles-wrapper").css("background-color",bclolr);
if(position== true){jQuery(".editor-styles-wrapper").css("background-position",position);	}
if(cover== true){jQuery(".editor-styles-wrapper").css("background-size","cover");}
if(fixed== true){jQuery(".editor-styles-wrapper").css("background-attachment","fixed");	}
if(bwidth!=''){jQuery(".block-editor-writing-flow").css("max-width",widthcontent);}else{jQuery(".block-editor-writing-flow").css("max-width",'1022px');}

if(bimg!=""){jQuery(".editor-styles-wrapper").css("background-image","url("+bimg+")");	}	
		return el( Fragment, {},
			el( PluginSidebarMoreMenuItem,
				{
					target: 'thempark-options',
					icon: 'admin-appearance',
				},
				'外观和其他选项'
			),
			el( PluginSidebar,
				{
					name: 'misha-seo',
					icon: 'admin-appearance',
					title: '初始化外观和SEO',
				},
			   el( Fragment, {},el( PanelBody, {title: '初始化风格设置', initialOpen: true},
						el(MetaRadioControl,
						{
							metaKey: 'themepark_post_width',
							title:'宽度模式',
						}
					),
					
			        el("p",{className:"tishiwenzi"},"通过调整不同的模式，你可以得到不同的布局，这编辑器中可以直观的看到哦【如果切换到滚轴模式，所有的区块都必须放置在“滚轴布局区块”内，每一个滚轴布局区块将会是一个滚动项目，开启此功能请同时开启区块模式】"),
					el(MetaToggleControl2,
						{
							metaKey: 'themepark_paddingblock',
							title:'开启区块模式'+tishi2,
						}
					),
					 el("p",{className:"tishiwenzi"},"开启区块模式后默认的左右内边距会失效，写作区域的白色背景颜色会被抹除"),				   
					el(MetaToggleControl,
						{
							metaKey: 'themepark_post_hide_title',
							title:'隐藏标题'+tishi1,
						}
					),				  
					 el("p",{className:"tishiwenzi"},"如果你想要编辑一个区别于普通文章的排版，那么你可以隐藏标题，隐藏标题在发布或者保存后，前端的标题也不会显示，如果你想要更改标题，那么随时在此处打开。ps.值得注意的是，如果隐藏了标题，那么你的区块排版中需要添加一个H1标题，千万不要忘记了哦！"),					  
					
					el(MetaColorPalettemain,
						{
							metaKey: 'themepark_post_main_b',
							title:'区块区域背景颜色',
						}
					),	
					el(MetaRangeControl ,
						{
							metaKey: 'themepark_post_main_p',
							title:'区块区域背景颜色透明度',
						}
					),				   
					el("p",{className:"tishiwenzi"},"你可以设定区块编辑区域的背景和透明度，这两个选项的效果通常是选择宽度两栏和通栏时表现的，如果是全屏模式，那么这个背景色将会和整体背景色重复，还请注意！"),			   
								   
					el(MetaColorPalette,
						{
							metaKey: 'themepark_post_bcolor',
							title:'整体背景颜色',
						}
					),
					 el(MetaMediaUpload,
						{
							metaKey: 'themepark_post_img',
							title:'添加背景图片',
						}
					),	
					el(MetaSelectControl1,
						{
							metaKey: 'themepark_post_img_po',
							title:'背景图片位置',
						}
					),
					el( MetaCheckboxControl2,
						{
							metaKey: 'themepark_post_img_re',
							title:'不重复平铺图片',
						}
					),
					el( MetaCheckboxControl3,
						{
							metaKey: 'themepark_post_img_cover',
							title:'强制铺满',
						}
					),
									  
					el( MetaCheckboxControl4,
						{
							metaKey: 'themepark_post_img_fixed',
							title:'固定背景',
						}
					),				  
									  
					 				  
									  )),
				
			   
			   
			   
			   
			)
		);
	}
} );
 
} )(
	window.wp.plugins,
	window.wp.editPost,
	window.wp.element,
	window.wp.components,
	window.wp.data,
	window.wp.compose
);