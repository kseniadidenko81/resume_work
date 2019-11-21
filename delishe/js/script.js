
/*! WOW - v0.1.9 - 2014-05-10
* Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);

// /----------------------------SLIDER--------------------------
// -------- on page load, hide content -------- //

$(document).ready(function() {
	$('.section__content').fadeOut();
});


// -------- HOVERS -------- //

$(".article").mouseover(function() {

	var $this = $(this);
	var mouseOver = new TimelineMax();

	mouseOver
		.to($this, 0.15, {
			css: {
				flex: 1.3
			},
			ease: Linear.easeOut
		})
}).mouseout(function() {

	var $this = $(this);
	var mouseOut = new TimelineMax();

	mouseOut
		.to($this, 0.15, {
			css: {
				flex: 1
			},
			ease: Linear.easeOut
		})

});



// -------- CLICK TO EXPAND -------- //

$(".article").click(function(e) {

	var button = $('.button--close');
	if (!button.is(e.target)) {
		$(this).removeClass('is-inactive').addClass('is-active').siblings().removeClass('is-active').addClass('is-inactive');

		var $this = $(this),
			$bg = $(this).find('.section__bg'),
			$content = $(this).find('.section__content'),
			$siblings = $(this).siblings(),
			$main = $('.banner');

		$this.find('.button--close').fadeIn();
		$content.fadeIn();

		var activate = new TimelineMax();

		activate
			.to($siblings, 0.3, {
				css: {
					flex: 0,
				},
				ease: Linear.easeOut
			}, 0)

			.to($content, 0.3, {
				css: {
					width: '100%',
					left: '0'
				},
				ease: Linear.easeOut
			}, 0)

			.to($content, 0.3, {
				css: {
					opacity: 1
				},
				ease: Linear.easeOut
			}, 0.35)

			.to($this, 0, {
				css: {
					position: 'static'
				},
				ease: Linear.easeOut
			}, 0.45);

	}

});



// -------- CLICK TO CLOSE -------- //

$(".button--close").click(function(e) {

	var $this = $(this),
		$sections = $('.article'),
		$content = $('.section__content'),
		$bg = $('.section__bg');

	$this.fadeOut();
	$content.fadeOut();

	var deActivate = new TimelineMax();

	deActivate
		.to($sections, 0.3, {
			css: {
				flex: 1
			},
			ease: Linear.easeOut
		}, 0)

		.to($sections, 0.3, {
			css: {
				position: 'relative'
			},
			ease: Linear.easeOut
		}, 0.15)

		.to($content, 0.3, {
			css: {
				width: '20vw',
				left: '18%'
			},
			ease: Linear.easeOut
		}, 0.3)

		.to($content, 0.25, {
			css: {
				opacity: 0
			},
			ease: Linear.easeOut
		}, 0);

});


$('#toggle').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('in');
	$('.collapse, .social-icons').toggleClass('in');
});