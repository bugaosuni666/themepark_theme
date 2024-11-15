( function( $, wp ) {
    // clone from original function in inline-post-edit.js for override
    // actually no need to create an alias object, however, create an alias could be a note and mark of override without forgetting for later maintenance
    window.customInlineEditPost = window.inlineEditPost;

    // function override: add custom meta value, the base is copied from the source
    customInlineEditPost.edit = function(id) {
            // console.log( 'custom edit' );
            var t = this, fields, editRow, rowData, status, pageOpt, pageLevel, nextPage, pageLoop = true, nextLevel, f, val, pw;
            t.revert();

            if ( typeof(id) === 'object' ) {
                id = t.getId(id);
            }

            fields = ['post_title', 'post_name', 'post_author', '_status', 'jj', 'mm', 'aa', 'hh', 'mn', 'ss', 'post_password', 'post_format', 'menu_order', 'page_template'];
            if ( t.type === 'page' ) {
                fields.push('post_parent');
            }

            // Add the new edit row with an extra blank row underneath to maintain zebra striping.
            editRow = $('#inline-edit').clone(true);
            $( 'td', editRow ).attr( 'colspan', $( 'th:visible, td:visible', '.widefat:first thead' ).length );

            $(t.what+id).removeClass('is-expanded').hide().after(editRow).after('<tr class="hidden"></tr>');

            // Populate fields in the quick edit window.
            rowData = $('#inline_'+id);
            if ( !$(':input[name="post_author"] option[value="' + $('.post_author', rowData).text() + '"]', editRow).val() ) {

                // The post author no longer has edit capabilities, so we need to add them to the list of authors.
                $(':input[name="post_author"]', editRow).prepend('<option value="' + $('.post_author', rowData).text() + '">' + $('#' + t.type + '-' + id + ' .author').text() + '</option>');
            }
            if ( $( ':input[name="post_author"] option', editRow ).length === 1 ) {
                $('label.inline-edit-author', editRow).hide();
            }

            // populate custom meta value
            if ( $( ':input[name="themepark_seo_title"]', editRow ).length === 1 ) {
                $( ':input[name="themepark_seo_title"]', editRow ).val( $('#post-' + id + ' .wps_post_id   .title span').text() );
            }
 if ( $( ':input[name="themepark_seo_description"]', editRow ).length === 1 ) {
                $( ':input[name="themepark_seo_description"]', editRow ).val( $('#post-' + id + ' .wps_post_id  .descriptions span').text() );
            }
 if ( $( ':input[name="themepark_seo_keyword"]', editRow ).length === 1 ) {
                $( ':input[name="themepark_seo_keyword"]', editRow ).val( $('#post-' + id + ' .wps_post_id  .keyword span').text() );
            }

		
		
          
            for ( f = 0; f < fields.length; f++ ) {
                val = $('.'+fields[f], rowData);

                /**
                 * Replaces the image for a Twemoji(Twitter emoji) with it's alternate text.
                 *
                 * @returns Alternate text from the image.
                 */
                val.find( 'img' ).replaceWith( function() { return this.alt; } );
                val = val.text();
                $(':input[name="' + fields[f] + '"]', editRow).val( val );
            }

            if ( $( '.comment_status', rowData ).text() === 'open' ) {
                $( 'input[name="comment_status"]', editRow ).prop( 'checked', true );
            }
            if ( $( '.ping_status', rowData ).text() === 'open' ) {
                $( 'input[name="ping_status"]', editRow ).prop( 'checked', true );
            }
            if ( $( '.sticky', rowData ).text() === 'sticky' ) {
                $( 'input[name="sticky"]', editRow ).prop( 'checked', true );
            }

            /**
             * Creates the select boxes for the categories.
             */
            $('.post_category', rowData).each(function(){
                var taxname,
                    term_ids = $(this).text();

                if ( term_ids ) {
                    taxname = $(this).attr('id').replace('_'+id, '');
                    $('ul.'+taxname+'-checklist :checkbox', editRow).val(term_ids.split(','));
                }
            });

            /**
             * Gets all the taxonomies for live auto-fill suggestions when typing the name
             * of a tag.
             */
            $('.tags_input', rowData).each(function(){
                var terms = $(this),
                    taxname = $(this).attr('id').replace('_' + id, ''),
                    textarea = $('textarea.tax_input_' + taxname, editRow),
                    comma = inlineEditL10n.comma;

                terms.find( 'img' ).replaceWith( function() { return this.alt; } );
                terms = terms.text();

                if ( terms ) {
                    if ( ',' !== comma ) {
                        terms = terms.replace(/,/g, comma);
                    }
                    textarea.val(terms);
                }

                textarea.wpTagsSuggest();
            });

            // Handle the post status.
            status = $('._status', rowData).text();
            if ( 'future' !== status ) {
                $('select[name="_status"] option[value="future"]', editRow).remove();
            }

            pw = $( '.inline-edit-password-input' ).prop( 'disabled', false );
            if ( 'private' === status ) {
                $('input[name="keep_private"]', editRow).prop('checked', true);
                pw.val( '' ).prop( 'disabled', true );
            }

            // Remove the current page and children from the parent dropdown.
            pageOpt = $('select[name="post_parent"] option[value="' + id + '"]', editRow);
            if ( pageOpt.length > 0 ) {
                pageLevel = pageOpt[0].className.split('-')[1];
                nextPage = pageOpt;
                while ( pageLoop ) {
                    nextPage = nextPage.next('option');
                    if ( nextPage.length === 0 ) {
                        break;
                    }

                    nextLevel = nextPage[0].className.split('-')[1];

                    if ( nextLevel <= pageLevel ) {
                        pageLoop = false;
                    } else {
                        nextPage.remove();
                        nextPage = pageOpt;
                    }
                }
                pageOpt.remove();
            }

            $(editRow).attr('id', 'edit-'+id).addClass('inline-editor').show();
            $('.ptitle', editRow).focus();

            return false;
    };
})( jQuery, window.wp );