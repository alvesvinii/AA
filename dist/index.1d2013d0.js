var e;/**
	 * Generate an indented list of links from a nav. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */(e=jQuery).fn.navList=function(){return $a=e(this).find("a"),b=[],$a.each(function(){var t=e(this),a=Math.max(0,t.parents("li").length-1),l=t.attr("href"),i=t.attr("target");b.push('<a class="link depth-'+a+'"'+(void 0!==i&&""!=i?' target="'+i+'"':"")+(void 0!==l&&""!=l?' href="'+l+'"':"")+'><span class="indent-'+a+'"></span>'+t.text()+"</a>")}),b.join("")},/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */e.fn.panel=function(t){// No elements?
if(0==this.length)return i;// Multiple elements?
if(this.length>1){for(var a=0;a<this.length;a++)e(this[a]).panel(t);return i}// Vars.
var l,i=e(this),r=e("body"),o=e(window),n=i.attr("id");return"jQuery"!=typeof// Config.
(l=e.extend({// Delay.
delay:0,// Hide panel on link click.
hideOnClick:!1,// Hide panel on escape keypress.
hideOnEscape:!1,// Hide panel on swipe.
hideOnSwipe:!1,// Reset scroll position on hide.
resetScroll:!1,// Reset forms on hide.
resetForms:!1,// Side of viewport the panel will appear.
side:null,// Target element for "class".
target:i,// Class to toggle.
visibleClass:"visible"},t)).target&&(l.target=e(l.target)),// Panel.
// Methods.
i._hide=function(e){// Already hidden? Bail.
l.target.hasClass(l.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),// Hide.
l.target.removeClass(l.visibleClass),// Post-hide stuff.
window.setTimeout(function(){l.resetScroll&&i.scrollTop(0),l.resetForms&&i.find("form").each(function(){this.reset()})},l.delay))},// Vendor fixes.
i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),l.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",function(t){var a=e(this),r=a.attr("href"),o=a.attr("target");r&&"#"!=r&&""!=r&&r!="#"+n&&(// Cancel original event.
t.preventDefault(),t.stopPropagation(),// Hide panel.
i._hide(),// Redirect to href.
window.setTimeout(function(){"_blank"==o?window.open(r):window.location.href=r},l.delay+10))})),// Event: Touch stuff.
i.on("touchstart",function(e){i.touchPosX=e.originalEvent.touches[0].pageX,i.touchPosY=e.originalEvent.touches[0].pageY}),i.on("touchmove",function(e){if(null!==i.touchPosX&&null!==i.touchPosY){var t=i.touchPosX-e.originalEvent.touches[0].pageX,a=i.touchPosY-e.originalEvent.touches[0].pageY,r=i.outerHeight(),o=i.get(0).scrollHeight-i.scrollTop();// Hide on swipe?
if(l.hideOnSwipe){var n=!1;switch(l.side){case"left":n=a<20&&a>-20&&t>50;break;case"right":n=a<20&&a>-20&&t<-50;break;case"top":n=t<20&&t>-20&&a>50;break;case"bottom":n=t<20&&t>-20&&a<-50}if(n)return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}// Prevent vertical scrolling past the top or bottom.
(0>i.scrollTop()&&a<0||o>r-2&&o<r+2&&a>0)&&(e.preventDefault(),e.stopPropagation())}}),// Event: Prevent certain events inside the panel from bubbling.
i.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
i.on("click",'a[href="#'+n+'"]',function(e){e.preventDefault(),e.stopPropagation(),l.target.removeClass(l.visibleClass)}),// Body.
// Event: Hide panel on body click/tap.
r.on("click touchend",function(e){i._hide(e)}),// Event: Toggle.
r.on("click",'a[href="#'+n+'"]',function(e){e.preventDefault(),e.stopPropagation(),l.target.toggleClass(l.visibleClass)}),l.hideOnEscape&&o.on("keydown",function(e){27==e.keyCode&&i._hide(e)}),i},/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */e.fn.placeholder=function(){// Browser natively supports placeholders? Bail.
if(void 0!==document.createElement("input").placeholder)return e(this);// No elements?
if(0==this.length)return a;// Multiple elements?
if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder();return a}// Vars.
var a=e(this);return(// Text, TextArea.
a.find("input[type=text],textarea").each(function(){var t=e(this);(""==t.val()||t.val()==t.attr("placeholder"))&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||""!=t.val()||t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||t.val()!=t.attr("placeholder")||t.removeClass("polyfill-placeholder").val("")}),// Password.
a.find("input[type=password]").each(function(){var t=e(this),a=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&a.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&a.attr("name",t.attr("name")+"-polyfill-field"),a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():a.hide(),t.on("blur",function(e){e.preventDefault();var a=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),a.show())}),a.on("focus",function(e){e.preventDefault();var t=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),a.val("")})}),// Events.
a.on("submit",function(){a.find("input[type=text],input[type=password],textarea").each(function(t){var a=e(this);a.attr("name").match(/-polyfill-field$/)&&a.attr("name",""),a.val()==a.attr("placeholder")&&(a.removeClass("polyfill-placeholder"),a.val(""))})}).on("reset",function(t){t.preventDefault(),a.find("select").val(e("option:first").val()),a.find("input,textarea").each(function(){var t,a=e(this);switch(a.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":a.val(a.attr("defaultValue")),t=a.parent().find("input[name="+a.attr("name")+"-polyfill-field]"),""==a.val()?(a.hide(),t.show()):(a.show(),t.hide());break;case"checkbox":case"radio":a.attr("checked",a.attr("defaultValue"));break;case"text":case"textarea":a.val(a.attr("defaultValue")),""==a.val()&&(a.addClass("polyfill-placeholder"),a.val(a.attr("placeholder")));break;default:a.val(a.attr("defaultValue"))}})}),a)},/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */e.prioritize=function(t,a){var l="__prioritize";"jQuery"!=typeof t&&(t=e(t)),// Step through elements.
t.each(function(){var t,i=e(this),r=i.parent();// No parent? Bail.
if(0!=r.length){// Not moved? Move it.
if(i.data(l)){// Condition is true? Bail.
if(a)return;t=i.data(l),// Move element back to its original location (using our placeholder).
i.insertAfter(t),// Unmark element as moved.
i.removeData(l)}else{// Condition is false? Bail.
if(!a||0==// Get placeholder (which will serve as our point of reference for when this element needs to move back).
(t=i.prev()).length)return;// Move element to top of parent.
i.prependTo(r),// Mark element as moved.
i.data(l,t)}}})};//# sourceMappingURL=index.1d2013d0.js.map

//# sourceMappingURL=index.1d2013d0.js.map
