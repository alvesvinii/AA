var e,n,a,o,i,l,r,s,t,d,p,c;i=(e=jQuery)(window),l=e("body"),r=e("#wrapper"),s=e("#header"),t=e("#nav"),d=e("#main"),// Breakpoints.
breakpoints({default:["1681px",null],xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */e.fn._parallax=function(n){var a=e(window),o=e(this);if(0==this.length||0===n)return o;if(this.length>1){for(var i=0;i<this.length;i++)e(this[i])._parallax(n);return o}return n||(n=.25),o.each(function(){var o,i=e(this),l=e('<div class="bg"></div>').appendTo(i);o=function(){l.addClass("fixed").css("transform","none"),a.off("scroll._parallax")},"ie"// IE
==browser.name||"edge"// Edge
==browser.name||window.devicePixelRatio>1// Retina/HiDPI (= poor performance)
||browser.mobile?o():(breakpoints.on(">large",function(){l.removeClass("fixed").css("transform","matrix(1,0,0,1,0,0)"),a.on("scroll._parallax",function(){var e=parseInt(a.scrollTop())-parseInt(i.position().top);l.css("transform","matrix(1,0,0,1,0,"+e*n+")")})}),breakpoints.on("<=large",o))}),a.off("load._parallax resize._parallax").on("load._parallax resize._parallax",function(){a.trigger("scroll")}),e(this)},// Play initial animations on page load.
i.on("load",function(){window.setTimeout(function(){l.removeClass("is-preload")},100)}),// Scrolly.
e(".scrolly").scrolly(),// Background.
r._parallax(.925),// Nav Panel.
// Toggle.
n=e('<a href="#navPanel" id="navPanelToggle">Menu</a>').appendTo(r),// Change toggle styling once we've scrolled past the header.
s.scrollex({bottom:"5vh",enter:function(){n.removeClass("alt")},leave:function(){n.addClass("alt")}}),// Get inner.
o=// Panel.
(a=e('<div id="navPanel"><nav></nav><a href="#navPanel" class="close"></a></div>').appendTo(l).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right",target:l,visibleClass:"is-navPanel-visible"})).children("nav"),p=t.children(),breakpoints.on(">medium",function(){// NavPanel -> Nav.
p.appendTo(t),// Flip icon classes.
t.find(".icons, .icon").removeClass("alt")}),breakpoints.on("<=medium",function(){// Nav -> NavPanel.
p.appendTo(o),// Flip icon classes.
o.find(".icons, .icon").addClass("alt")}),"wp"==browser.os&&browser.osVersion<10&&a.css("transition","none"),(c=e("#intro")).length>0&&("ie"==browser.name&&i.on("resize.ie-intro-fix",function(){var e=c.height();e>i.height()?c.css("height","auto"):c.css("height",e)}).trigger("resize.ie-intro-fix"),// Hide intro on scroll (> small).
breakpoints.on(">small",function(){d.unscrollex(),d.scrollex({mode:"bottom",top:"25vh",bottom:"-50vh",enter:function(){c.addClass("hidden")},leave:function(){c.removeClass("hidden")}})}),// Hide intro on scroll (<= small).
breakpoints.on("<=small",function(){d.unscrollex(),d.scrollex({mode:"middle",top:"15vh",bottom:"-15vh",enter:function(){c.addClass("hidden")},leave:function(){c.removeClass("hidden")}})}));//# sourceMappingURL=index.aa5f97b4.js.map

//# sourceMappingURL=index.aa5f97b4.js.map
