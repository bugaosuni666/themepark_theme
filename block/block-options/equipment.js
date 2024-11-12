( function( plugins, editPost, element, components, data, compose ) {
 
	
var registerPlugin=wp.plugins.registerPlugin;	
var el = wp.element.createElement; 
var	RadioControl=wp.components.RadioControl;
var withDispatch=wp.data.withDispatch;	
var withSelect=wp.data.withSelect;		
	var	Panel=wp.components.Panel;	
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;
var PluginSidebar=wp.editPost.PluginSidebar;	
var PluginSidebarMoreMenuItem=wp.editPost.PluginSidebarMoreMenuItem;
	
	
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
        { label: '默认PC电脑', value: '', },
		{ label: 'ipad平板电脑（1024*768）', value: 'ipad-h' },
		{ label: 'ipad平板电脑（768*1024）', value: 'ipad-s' },	
		
		{ label: 'iphone 6/7/8/11/*（375*667）', value: 'iphone-8' },	
			
        ], 
			
		})
	}
);	

	

	
		
	
	
	
	
	
	
	
	
registerPlugin( 'thempark-equipment', {render: function() {

var themepark_equipment=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'themepark_equipment' ];

		return el( Fragment, {},
			el( PluginSidebarMoreMenuItem,
				{
					target: 'thempark-equipment',
					icon: 'smartphone',
				},
				'设备预览'
			),
			el( PluginSidebar,
				{
					name: 'misha-seo',
					icon: 'smartphone',
					title: '从不同的设备查看效果',
				},el( Fragment, {},el( PanelBody, {title: '设备预览【付费版解锁】', initialOpen: true},
					el(MetaRadioControl,
						{
							metaKey: 'themepark_equipment',
							title:'选择设备【付费版支持响应式代码，自适应各种设备】',
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