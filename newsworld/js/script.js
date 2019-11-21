//Risize window  add-remove class---------------------------------------------



(function($) {
	var $window = $(window),
		$nav = $('nav');
	$html = $('html');
	$drop = $('.nav-filters-list');

	$window.resize(function resize() {
		if ($window.width() < 769){
			return $nav.addClass('navbar__fixed'), $nav.removeClass('navbar__desktop'),
				$html.addClass('navbar__fixed-linked'),
				$drop.addClass('filters-dropdown');
		}

		$nav.removeClass('navbar__fixed');
		$html.removeClass('navbar__fixed-linked');
		$drop.removeClass('filters-dropdown');
	}).trigger('resize');
})(jQuery);

//To Top---------------------------------------------

$(function(){$.fn.scrollToTop=function(){
	$(this).hide().removeAttr("href");
	if($(window).scrollTop()!="0"){
		$(this).fadeIn("slow")
	}
	var scrollDiv=$(this);
	$(window).scroll(function(){
		if($(window).scrollTop()=="0"){
			$(scrollDiv).fadeOut("slow")
		}else{$(scrollDiv).fadeIn("slow")}
	});
	$(this).click(function(){
		$("html, body").animate({scrollTop:0},"slow")
	})
}});
// Вызов
$(function() {
	$(".to__top").scrollToTop();
});


//---------------
//----------------------------SLIDESHOW--------------------------
// Перенесен в html

//Tabs---------------------------------------------

$(".tabContent").hide();
$(".tabs li:first").addClass("current").show();
$(".tabContent:first").show();

$(".tabs li").click(function () {
	$(".tabs li").removeClass("current");
	$(this).addClass("current");
	$(".tabContent").hide();
	var activeTab = $(this).find("a").attr("href");
	$(activeTab).fadeIn();
	return false;
});
//Sticky Navbar---------------------------------------------

var stickEl = $('.sticky'),
	stickyElTop = stickEl.offset().top;

var sticky = function(){
	var scrollTop = $(window).scrollTop();

	if (stickyElTop < scrollTop+20) {
		stickEl.addClass('is-fixed');
	} else {
		stickEl.removeClass('is-fixed');
	}
};

$(window).scroll(function() {
	sticky();
});


//FILTER---------------------------------------------

filterSelection("Option1")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filter");

	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}
// Show filtered elements----
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-filter")[0];
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {

		var current = document.getElementsByClassName("active-filter");
		current[0].className = current[0].className.replace(" active-filter", "");
		this.className += " active-filter";
	});
}

//Dropdawn Menu on Laptop, Mobile-----------------------

$(".navbar__toggle").click(function() {
	$(".navbar__nav-wrap").toggleClass("active", 500);
	$(this).toggleClass("active");
});
// Dropdawn search on Laptop, Mobile------------------

$(".navbar__search-toggle").click(function() {
	$(".search").toggleClass("active", 500);
	$(this).toggleClass("active");
});
// Dropdawn subscribe on Laptop, Mobile------------------

$(".navbar__collapse-toggle").click(function() {
	$(".navbar__collapse").toggleClass("active", 500);
	$(this).toggleClass("active");
});
$('.nav-filters-list .btn-filter').on('click', function(){
	$(this).addClass('active-filter').siblings().removeClass('active-filter');
});
//Filter dropdown laptop mobile -------------------
$(".nav-filters-toggle").click(function() {
	$(".filters-dropdown").toggleClass("active", 500);
	$(this).toggleClass("active");
});


//Slide page----------------------------------------------------------------

//-----------------------------------------------------------
// $(document).ready(function() {
//
// 	var hash = window.location.hash.substr(1);
// 	var href = $('#nav li a').each(function(){
// 		var href = $(this).attr('href');
// 		if(hash==href.substr(0,href.length-5)){
// 			var toLoad = hash+'.html #content';
// 			$('#content').load(toLoad)
// 		}
// 	});
//
// 	$('#nav li a').click(function(){
//
// 		var toLoad = $(this).attr('href')+' #content';
// 		$('#content').hide('fast',loadContent);
// 		$('#load').remove();
// 		$('#wrapper').append('<span id="load">LOADING...</span>');
// 		$.getScript('active.js');
// 		$('#load').fadeIn('normal');
// 		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
// 		function loadContent() {
// 			$('#content').load(toLoad,'',showNewContent())
// 		}
// 		function showNewContent() {
// 			$('#content').show('normal',hideLoader());
// 		}
// 		function hideLoader() {
// 			$('#load').fadeOut('normal');
// 		}
// 		return false;
//
// 	});
//
// });

//Focus Input-Label---------------------------------------------
function setBackground(e) {
	if (e.type == "focus") {
		e.target.style.backgroundColor = "";
	}
	else if (e.type == "blur") {
		e.target.style.backgroundColor = "";
	}
}

// set up the event listeners only after the DOM is loaded
window.addEventListener("load", function() {
	var cssSelector = "input[type=text],input[type=password],input[type=email]";
	var fields = document.querySelectorAll(cssSelector);
	for (i=0; i<fields.length; i++) {
		fields[i].addEventListener("focus", setBackground);
		fields[i].addEventListener("blur", setBackground);
	}
});


//
//
//Pagination------------------------------------

(function($){

	var paginate = {
		startPos: function(pageNumber, perPage) {
			// determine what array position to start from
			// based on current page and # per page
			return pageNumber * perPage;
		},

		getPage: function(items, startPos, perPage) {
			// declare an empty array to hold our page items
			var page = [];

			// only get items after the starting position
			items = items.slice(startPos, items.length);

			// loop remaining items until max per page
			for (var i=0; i < perPage; i++) {
				page.push(items[i]); }

			return page;
		},

		totalPages: function(items, perPage) {
			// determine total number of pages
			return Math.ceil(items.length / perPage);
		},

		createBtns: function(totalPages, currentPage) {
			// create buttons to manipulate current page
			var pagination = $('<div class="pagination" />');

			// add a "first" button
			pagination.append('<span class="pagination-button">&laquo;</span>');

			// add pages inbetween
			for (var i=1; i <= totalPages; i++) {
				// truncate list when too large
				if (totalPages > 5 && currentPage !== i) {
					// if on first two pages
					if (currentPage === 1 || currentPage === 2) {
						// show first 5 pages
						if (i > 5) continue;
						// if on last two pages
					} else if (currentPage === totalPages || currentPage === totalPages - 1) {
						// show last 5 pages
						if (i < totalPages - 4) continue;
						// otherwise show 5 pages w/ current in middle
					} else {
						if (i < currentPage - 2 || i > currentPage + 2) {
							continue; }
					}
				}

				// markup for page button
				var pageBtn = $('<span class="pagination-button page-num" />');

				// add active class for current page
				if (i == currentPage) {
					pageBtn.addClass('active'); }

				// set text to the page number
				pageBtn.text(i);

				// add button to the container
				pagination.append(pageBtn);
			}

			// add a "last" button
			pagination.append($('<span class="pagination-button">&raquo;</span>'));

			return pagination;
		},

		createPage: function(items, currentPage, perPage) {
			// remove pagination from the page
			$('.pagination').remove();

			// set context for the items
			var container = items.parent(),
				// detach items from the page and cast as array
				items = items.detach().toArray(),
				// get start position and select items for page
				startPos = this.startPos(currentPage - 1, perPage),
				page = this.getPage(items, startPos, perPage);

			// loop items and readd to page
			$.each(page, function(){
				// prevent empty items that return as Window
				if (this.window === undefined) {
					container.append($(this)); }
			});

			// prep pagination buttons and add to page
			var totalPages = this.totalPages(items, perPage),
				pageButtons = this.createBtns(totalPages, currentPage);

			container.after(pageButtons);
		}
	};

	// stuff it all into a jQuery method!
	$.fn.paginate = function(perPage) {
		var items = $(this);

		// default perPage to 5
		if (isNaN(perPage) || perPage === undefined) {
			perPage = 5; }

		// don't fire if fewer items than perPage
		if (items.length <= perPage) {
			return true; }

		// ensure items stay in the same DOM position
		if (items.length !== items.parent()[0].children.length) {
			items.wrapAll('<div class="pagination-items" />');
		}

		// paginate the items starting at page 1
		paginate.createPage(items, 1, perPage);

		// handle click events on the buttons
		$(document).on('click', '.pagination-button', function(e) {
			// get current page from active button
			var currentPage = parseInt($('.pagination-button.active').text(), 10),
				newPage = currentPage,
				totalPages = paginate.totalPages(items, perPage),
				target = $(e.target);

			// get numbered page
			newPage = parseInt(target.text(), 10);
			if (target.text() == '«') newPage = 1;
			if (target.text() == '»') newPage = totalPages;

			// ensure newPage is in available range
			if (newPage > 0 && newPage <= totalPages) {
				paginate.createPage(items, newPage, perPage); }
		});
	};

})(jQuery);

/* This part is just for the demo,
not actually part of the plugin */
$('.article-loop').paginate(6);













