jQuery(document).ready(function(e){function i(){regexp=new RegExp("&lt;!--:"+r+"--&gt;(.*?)&lt;!--:--&gt;","i");e(".item-title").each(function(){if(e(this).data("qt-value")==undefined)e(this).data("qt-value",e(this).html());if(matches=e(this).data("qt-value").match(regexp)){e(this).html(matches[1]);e(this).closest("li").find(".link-to-original a").text(matches[1])}});regexp=new RegExp("<!--:"+r+"-->(.*?)<!--:-->","i");e("input.edit-menu-item-title").each(function(){if(e(this).data("qt-value")==undefined)e(this).data("qt-value",e(this).val());if(matches=e(this).data("qt-value").match(regexp)){e(this).val(matches[1])}});e("label.menu-item-title").each(function(){var t=e(this).contents().get(1);if(e(this).data("qt-value")==undefined)e(this).data("qt-value",t.nodeValue);if(matches=e(this).data("qt-value").match(regexp)){t.nodeValue=" "+matches[1]}})}function s(){e("input.edit-menu-item-title").each(function(){e(this).val(e(this).data("qt-value"))})}var t=wpNavMenu.addMenuItemToBottom;wpNavMenu.addMenuItemToBottom=function(e,n){t(e,n);i()};var n=wpNavMenu.addMenuItemToTop;wpNavMenu.addMenuItemToTop=function(e,t){n(e,t);i()};var r=e("#qt-languages :radio:checked").val();i();e(document).ajaxComplete(function(){r=e("#qt-languages :radio:checked").val();i()});e("#qt-languages :radio").change(function(){r=e("#qt-languages :radio:checked").val();i()});e(".submit-add-to-menu").click(function(){r=e("#qt-languages :radio:checked").val();i()});e(document.body).on("change","input.edit-menu-item-title",null,function(){regexp=new RegExp("(<!--:"+r+"-->)(.*?)(<!--:-->)","i");if(regexp.test(e(this).data("qt-value")))e(this).data("qt-value",e(this).data("qt-value").replace(regexp,"$1"+e(this).val()+"$3"));else e(this).data("qt-value",e(this).val())});e(".menu-save").click(function(){s()});window.onbeforeunload=function(){s();return}})