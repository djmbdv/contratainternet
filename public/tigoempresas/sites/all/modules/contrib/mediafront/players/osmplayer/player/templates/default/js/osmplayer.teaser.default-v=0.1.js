(function(template,osmplayer){var osmplayer=osmplayer||{};osmplayer.teaser=osmplayer.teaser||{};osmplayer.teaser[template]=function(context,options){osmplayer.teaser.call(this,context,options);};osmplayer.teaser[template].prototype=new osmplayer.teaser();osmplayer.teaser[template].prototype.constructor=osmplayer.teaser[template];osmplayer.teaser[template].prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.display.bind('mouseenter',(function(info){return function(){info.addClass('ui-state-hover');};})(this.elements.info)).bind('mouseleave',(function(info){return function(){info.removeClass('ui-state-hover');};})(this.elements.info));};osmplayer.teaser[template].prototype.getDisplay=function(){this.context.append('\
    <div class="osmplayer-'+template+'-teaser ui-widget-content">\
      <div class="osmplayer-'+template+'-teaser-image"></div>\
      <div class="osmplayer-'+template+'-teaser-info ui-state-default">\
        <div class="osmplayer-'+template+'-teaser-title"></div>\
      </div>\
    </div>');var teasers=jQuery('.osmplayer-'+template+'-teaser',this.context);return teasers.eq(teasers.length-1);}
osmplayer.teaser[template].prototype.select=function(selected){if(selected){this.elements.info.addClass('ui-state-active');}
else{this.elements.info.removeClass('ui-state-active');}}
osmplayer.teaser[template].prototype.getElements=function(){var elements=osmplayer.teaser.prototype.getElements.call(this);return jQuery.extend(elements,{info:jQuery('.osmplayer-'+template+'-teaser-info',this.display),title:jQuery('.osmplayer-'+template+'-teaser-title',this.display),image:jQuery('.osmplayer-'+template+'-teaser-image',this.display)});};})('default',osmplayer);