// console.log('Vite + Tailwind funcionando!');

import $ from 'jquery'
import 'jquery.easing'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
	duration: 450,
	offset: 280
});

$(document).ready(function() {


	const $menu =  $(".secondary");
	// const $menuMobile =  $(".secondary-mobile");
	const $burger = $(".navbar-burger");

	let laterais = 0;
	let metadeLaterais = 0;

	// initSlickSlider();

	// versão desktop

	$("header nav ul li a").click(function (event) {
		let target = $(event.target).attr('href');
		const diffItem = $(event.target).data('diff');
		let diff = 60;
		
		if (diffItem) {
			diff = diffItem;
		}
		// const menuRef = ($(window).width() >= 782) ? $(".secondary") : $(".secondary-mobile");
		// const menuRef = $(".secondary");
		// toggleMenu(menuRef);
		setTimeout(() => {
			$('html, body').animate({
				scrollTop: $(target).offset().top - diff
			}, 800, 'easeInOutQuint');
		}, 0);

		event.preventDefault();
	});



	$('.compromissoSlider').slick({
		infinite: false,
		slidesToShow: 1,        /* ≥ 2xl (1440px+) */
		slidesToScroll: 1,
		autoplay: false,
		speed: 600,
		dots: false,
		fade: true,
		arrows: false,
		adaptiveHeight: true,
		cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	});


	$('.inspiralliSlider, .institutoSlider').slick({
		infinite: true,
		slidesToShow: 1,        /* ≥ 2xl (1440px+) */
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 600,
		dots: true,
		fade: true,
		arrows: false,
		adaptiveHeight: true,
		cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	});

	



	// $(".set-acc > a").on("click", function(event) {
	// 	event.preventDefault();

	// 	if ($(this).hasClass("active")) {
	// 		$(this).removeClass("active");
	// 		$(this)
	// 			.siblings(".acc-content")
	// 			.slideUp(300);
		
	// 		$(this)
	// 			.find(".arrowSelect")
	// 			.removeClass("active");
		
	// 	} else {
	// 		// console.log('down');
	// 		$(this).addClass("active");
	// 		$(this)
	// 			.siblings(".acc-content")
	// 			.slideDown(300);
	// 		$(this)
	// 			.find(".arrowSelect")
	// 			.addClass("active");
	// 	}
	// });


	function getContainerPadding() {
		const element = document.querySelector('.container');
		const styles = window.getComputedStyle(element);
		
		const paddingLeft = parseFloat(styles.paddingLeft);

		return paddingLeft;
	}


	function getContainerWidth() {
		var viewportWidth = $(window).width();
		var containerWidth;

		if (viewportWidth < 640) {
			containerWidth = viewportWidth; // width: 100%
		} else if (viewportWidth < 768) {
			containerWidth = 640;
		} else if (viewportWidth < 1024) {
			containerWidth = 768;
		} else if (viewportWidth < 1280) {
			containerWidth = 1024;
		} else if (viewportWidth < 1440) {
			containerWidth = 1280;
		} else if (viewportWidth < 1920){
			containerWidth = 1440;
		} else {
			containerWidth = 1920;
		}

		return containerWidth;
	}

	getContainerWidth ();


	function simulateContainerSpaces() {
		const containerWidth = getContainerWidth();
		const containerPadding = getContainerPadding();
		const browserWidth = $(window).width();
		laterais = browserWidth - containerWidth;
		metadeLaterais = Math.round(laterais / 2);

		// console.log('containerWidth', containerWidth);
		// console.log('containerPadding', containerPadding);
		// console.log('browserWidth', browserWidth);
		// console.log('laterais:' , laterais)

		const diff3xl = ($(window).width() > 1920) ? 120 : 0;

		// $('.simulate-container-onright, .simulate-container-onleft').width( browserWidth - metadeLaterais - containerPadding);

		// console.log(browserWidth - metadeLaterais);

		if($('.halfContainerRight').length) {
			$('.halfContainerRight').css('padding-right' ,metadeLaterais + containerPadding);
		}

		if($('.halfContainerLeft').length) {
			$('.halfContainerLeft').css('padding-left' ,metadeLaterais + containerPadding);
		}

		if ($(window).width() >= 1024) { // entra no lg
			$('.compromissoContent').css('padding-right' ,metadeLaterais + containerPadding);
			$('#mensagem-da-administracao').css('padding-left' ,metadeLaterais + containerPadding);
		} else {
			$('#mensagem-da-administracao').css('padding-left', 8 + containerPadding);
		}
		

	}

	if ($(window).width() >= 1024) {
		simulateContainerSpaces();
	}



	$(window).on('resize', function() {
		if ($(window).width() >= 1024) {
			simulateContainerSpaces();
		}
	});


	$('.backToTopBtn').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800, 'easeInOutQuint');
	});

});


document.addEventListener('DOMContentLoaded', () => {

	
	document.querySelector('.navbar-burger').addEventListener('click', function () {
		const nav = document.querySelector('header nav > ul');
		const header = document.querySelector('header');
		const isDesktop = window.innerWidth >= 1024;
		const isOpen = this.classList.contains('is-active');

		if (!isOpen) {
			console.log('abre')
			if (isDesktop) {
				// Remove restrição de altura e expande largura
				nav.classList.remove('max-w-0');
				nav.classList.add('max-w-[800px]', 'max-h-[none]');
				header.classList.remove('w-auto');
				header.classList.add('w-full');
			} else {
				// Remove restrição de largura e expande altura
				header.classList.remove('rounded-br-[20px]');
				nav.classList.remove('max-h-0');
				nav.classList.add('max-h-[400px]', 'max-w-[none]','rounded-b-[20px]');
				nav.style.width = window.innerWidth + 'px'; // aplica largura da tela
			}
		} else {
			if (isDesktop) {
				nav.classList.remove('max-w-[800px]', 'max-h-[none]');
				nav.classList.add('max-w-0');
				header.classList.remove('w-full');
				header.classList.add('w-auto');
			} else {
				header.classList.add('rounded-br-[20px]');
				nav.classList.remove('max-h-[400px]', 'max-w-[none]','rounded-b-[20px]');
				nav.classList.add('max-h-0');
				nav.style.width = ''; // limpa ao fechar
			}
		}

		this.classList.toggle('is-active');
	});




	const sections = document.querySelectorAll('section[data-color]'); 
	const header = document.querySelector('header');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		if (entry.isIntersecting) {
			const newColor = entry.target.dataset.color;

			const defaultColor = 'main-rosa_B5'; // cor inicial do header

			// Na função de remoção, não remove a defaultColor, só as de data-color:
			sections.forEach(section => {
				header.classList.remove(section.dataset.color);
				// title.classList.remove(section.dataset.color);
			});
			header.classList.add(newColor);
			// title.classList.add(newColor);
		}
		});
	}, {
		rootMargin: '0px 0px -99% 0px',
		threshold: 0
	});

	sections.forEach(section => observer.observe(section));



	// clique compromissos
	const navLinks = document.querySelectorAll('.compromissosWrapper nav a[data-slide-index]');

	navLinks.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const index = parseInt(this.getAttribute('data-slide-index'));
			$('.compromissoSlider').slick('slickGoTo', index);

			// Collapse previously active link
			const currentActive = document.querySelector('.compromissosWrapper nav a.active');
			if (currentActive && currentActive !== this) {
				currentActive.classList.remove('active');
				currentActive.querySelector('span').textContent = currentActive.getAttribute('data-short');
			}

			// Expand clicked link
			this.classList.add('active');
			this.querySelector('span').textContent = this.getAttribute('data-full');
		});
	});

});
