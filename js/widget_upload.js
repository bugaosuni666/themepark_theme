 jQuery(document).ready(function(){   

    var theme_upload_frame;   
    var value_id; 
	var shows;
	  jQuery('.field-description').append('<div class="ds_img_show"></div>');
	 
	 
	 jQuery('.field-description').each(function(){   
	 
	 if(jQuery(this).children("label").children(".edit-menu-item-description").val()!=''){
	 jQuery(this).children("div.ds_img_show").append('<img src="'+ jQuery(this).children("label").children(".edit-menu-item-description").val()+'" style="max-width:100px;height: auto;" />');	
		
	}
	  });  
	
	 jQuery('div.ds_img_show').on('click',function(event){ 
		jQuery(this).prev("label").children(".edit-menu-item-description").val("");
		 jQuery(this).html("");
	 
	 }); 
	 
    jQuery('.field-description label span.description').on('click',function(event){   
        value_id =jQuery(this).prev(".edit-menu-item-description");  
		shows= jQuery(this).parent("label").parent(".field-description").children("div.ds_img_show");
        values =jQuery(this).prev(".edit-menu-item-description").val();
        theme_upload_frame = wp.media({   
            title: '选择图片',   
            button: {   
                text: '选择',   
            }   , multiple: false   
     
			
        });   
           if(theme_upload_frame){
           theme_upload_frame.open();    
		   }
       
        theme_upload_frame.on('select',function(){   
            attachment = theme_upload_frame.state().get('selection').first().toJSON();   
            jQuery(value_id).val(attachment.url);
			
			jQuery(".supports-drag-drop").remove();  
			
		shows.html('<img src="'+attachment.url+'" style="max-width:100px;height: auto;" />');	 
        });   
           
       
    });   
    });   