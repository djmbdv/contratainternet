(function($){$(document).ready(function(){$('#hm-hleft,#mm-blocker').click(function(){$("html,body,#mmenu-mobile ").toggleClass("mm-opening");});$(window).resize(function(){if($(window).width()>480){$('html,body,#mmenu-mobile').removeClass('mm-opening');}});});})(jQuery);