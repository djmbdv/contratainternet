(function(template,osmplayer){var osmplayer=osmplayer||{};osmplayer.pager=osmplayer.pager||{};osmplayer.pager[template]=function(context,options){osmplayer.pager.call(this,context,options);};osmplayer.pager[template].prototype=new osmplayer.pager();osmplayer.pager[template].prototype.constructor=osmplayer.pager[template];osmplayer.pager[template].prototype.getDisplay=function(){if(this.options.build){this.context.append('\
      <div class="osmplayer-'+template+'-playlist-pager ui-widget-header">\
        <div class="osmplayer-'+template+'-playlist-pager-left">\
          <a href="#" class="osmplayer-'+template+'-playlist-pager-link osmplayer-'+template+'-playlist-pager-prevpage minplayer-'+template+'-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-w"></span>\
          </a>\
        </div>\
        <div class="osmplayer-'+template+'-playlist-pager-right">\
          <a href="#" class="osmplayer-'+template+'-playlist-pager-link osmplayer-'+template+'-playlist-pager-nextpage minplayer-'+template+'-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-e"></span>\
          </a>\
        </div>\
      </div>');}
return jQuery('.osmplayer-'+template+'-playlist-pager',this.context);}
osmplayer.pager[template].prototype.getElements=function(){var elements=osmplayer.pager.prototype.getElements.call(this);return jQuery.extend(elements,{prevPage:jQuery('.osmplayer-'+template+'-playlist-pager-prevpage',this.display),nextPage:jQuery('.osmplayer-'+template+'-playlist-pager-nextpage',this.display)});};})('default',osmplayer);