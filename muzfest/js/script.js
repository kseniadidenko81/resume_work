//=============Slider================
var multiItemSlider = (function () {
	return function (selector, config) {
		var
			_mainElement = document.querySelector(selector),
			_sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
			_sliderItems = _mainElement.querySelectorAll('.slider__item'),
			_sliderControls = _mainElement.querySelectorAll('.slider__control'),
			_sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
			_sliderControlRight = _mainElement.querySelector('.slider__control_right'),
			_wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
			_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
			_positionLeftItem = 0,
			_transform = 0,
			_step = _itemWidth / _wrapperWidth * 100,
			_items = [];


		_sliderItems.forEach(function (item, index) {
			_items.push({ item: item, position: index, transform: 0 });
		});

		var position = {
			getItemMin: function () {
				var indexItem = 0;
				_items.forEach(function (item, index) {
					if (item.position < _items[indexItem].position) {
						indexItem = index;
					}
				});
				return indexItem;
			},
			getItemMax: function () {
				var indexItem = 0;
				_items.forEach(function (item, index) {
					if (item.position > _items[indexItem].position) {
						indexItem = index;
					}
				});
				return indexItem;
			},
			getMin: function () {
				return _items[position.getItemMin()].position;
			},
			getMax: function () {
				return _items[position.getItemMax()].position;
			}
		}

		var _transformItem = function (direction) {
			var nextItem;
			if (direction === 'right') {
				_positionLeftItem++;
				if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
					nextItem = position.getItemMin();
					_items[nextItem].position = position.getMax() + 1;
					_items[nextItem].transform += _items.length * 100;
					_items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
				}
				_transform -= _step;
			}
			if (direction === 'left') {
				_positionLeftItem--;
				if (_positionLeftItem < position.getMin()) {
					nextItem = position.getItemMax();
					_items[nextItem].position = position.getMin() - 1;
					_items[nextItem].transform -= _items.length * 100;
					_items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
				}
				_transform += _step;
			}
			_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
		}

		var _controlClick = function (e) {
			if (e.target.classList.contains('slider__control')) {
				e.preventDefault();
				var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
				_transformItem(direction);
			}
		};

		var _setUpListeners = function () {

			_sliderControls.forEach(function (item) {
				item.addEventListener('click', _controlClick);
			});
		}

		_setUpListeners();

		return {
			right: function () {
				_transformItem('right');
			},
			left: function () {
				_transformItem('left');
			}
		}

	}
}());

var slider = multiItemSlider('.slider')


$(".toggle").on("click", function() {
	$(".toggle").parent().toggleClass('active');
});
//
// let mainNav = document.getElementById("js-menu");
// let navBarToggle = document.getElementById("js-navbar-toggle");
//
// navBarToggle.addEventListener("click", function() {
// 	mainNav.classList.toggle("active");
// });
//=============================To top=============================
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 500 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 500 );
	return false;
});