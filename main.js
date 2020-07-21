$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});
var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});