/**
 * Created by paulrojas on 9/16/15.
 */
(function ( $ ) {
    "use strict";

    $.fn.customMenu2Level = function ( menu ) {
        return this.each(function() {
            var elem = $(this);

            // implements the menu
            if (menu != undefined && menu.items.length) {
                var imenu = $('<ul class="two_line_menu"></ul>');
                $.each(menu.items, function(i, val1) {
                    var li = $('<li id="li-'+ i + '"><a href="javascript:void(0);" onclick="$.fn.customMenu2Level.showSubmenu('+ i +')">' + val1.label + '</a></li>');
                    imenu.append(li);
                });
                elem.append(imenu);

                $.each(menu.items, function(i, val1) {
                    var submenu = $('<ul class="second_line_menu" tag="'+ i + '"></ul>');
                    $.each(val1.submenu, function(j, val2) {
                        submenu.append('<li><a href="' + val2.url + '">' + val2.label + '</a></li>')
                    });
                    elem.append(submenu);
                });
                $.fn.customMenu2Level.showSubmenu('0');
            }
        });
    };

    $.fn.customMenu2Level.showSubmenu = function(tag) {
        $('ul[tag]').css('display', 'none');
        $('ul[tag="'+ tag + '"]').css('display', 'block');
        $('li[id]').removeClass('menu_selected')
        $('li[id="li-'+ tag + '"]').addClass('menu_selected');
    };

})( jQuery );