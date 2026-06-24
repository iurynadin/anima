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


	$('.compromissoSliderMobile').slick({
		infinite: false,
		slidesToShow: 1,        /* ≥ 2xl (1440px+) */
		slidesToScroll: 1,
		autoplay: false,
		speed: 600,
		dots: true,
		fade: true,
		arrows: true,
		adaptiveHeight: true,
		cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		prevArrow: '<button class="slick-prev-arrow"><svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 5.5625C19.3682 5.5625 18.8381 5.89325 18.4971 6.34082L8.49707 19.4658C7.83394 20.3363 7.83394 21.6637 8.49707 22.5342L18.4971 35.6592C18.8381 36.1068 19.3682 36.4375 20 36.4375C20.6318 36.4375 21.1619 36.1068 21.5029 35.6592C21.8395 35.2173 22 34.6633 22 34.125C22 33.5867 21.8395 33.0327 21.5029 32.5908L12.6729 21L21.5029 9.40918C21.8395 8.96734 22 8.41326 22 7.875C22 7.33674 21.8395 6.78266 21.5029 6.34082C21.1619 5.89324 20.6318 5.5625 20 5.5625Z" fill="white" stroke="white" stroke-width="2"/> </svg> </button>',
		nextArrow: '<button class="slick-next-arrow"><svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 5.5625C12.6318 5.5625 13.1619 5.89325 13.5029 6.34082L23.5029 19.4658C24.1661 20.3363 24.1661 21.6637 23.5029 22.5342L13.5029 35.6592C13.1619 36.1068 12.6318 36.4375 12 36.4375C11.3682 36.4375 10.8381 36.1068 10.4971 35.6592C10.1605 35.2173 10 34.6633 10 34.125C10 33.5867 10.1605 33.0327 10.4971 32.5908L19.3271 21L10.4971 9.40918C10.1605 8.96734 10 8.41326 10 7.875C10 7.33674 10.1605 6.78266 10.4971 6.34082C10.8381 5.89324 11.3682 5.5625 12 5.5625Z" fill="white" stroke="white" stroke-width="2"/> </svg> </button>'
	});


	$('.compMobileChildSlider').slick({
		infinite: true,
		slidesToShow: 1,        /* ≥ 2xl (1440px+) */
		slidesToScroll: 1,
		autoplay: false,
		speed: 600,
		dots: true,
		fade: true,
		arrows: true,
		adaptiveHeight: false,
		cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		nextArrow: '<button class="slickchild-next-arrow"><svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d_2008_426)"> <path d="M20.5858 21L11.2929 33.1969C11.1054 33.4431 11 33.7769 11 34.125C11 34.4731 11.1054 34.8069 11.2929 35.0531C11.4804 35.2992 11.7348 35.4375 12 35.4375C12.2652 35.4375 12.5196 35.2992 12.7071 35.0531L22.7071 21.9281C23.0976 21.4155 23.0976 20.5845 22.7071 20.0719L12.7071 6.94692C12.5196 6.70078 12.2652 6.5625 12 6.5625C11.7348 6.5625 11.4804 6.70078 11.2929 6.94692C11.1054 7.19306 11 7.5269 11 7.875C11 8.2231 11.1054 8.55694 11.2929 8.80308L20.5858 21Z" fill="#F0483E"/> <path d="M12 6.0625C12.4483 6.0625 12.8402 6.2969 13.1045 6.64355L23.1045 19.7686C23.6314 20.4601 23.6314 21.5399 23.1045 22.2314L13.1045 35.3564C12.8402 35.7031 12.4483 35.9375 12 35.9375C11.5517 35.9375 11.1598 35.7031 10.8955 35.3564C10.6334 35.0124 10.5 34.5682 10.5 34.125C10.5 33.6818 10.6334 33.2376 10.8955 32.8936L19.957 21L10.8955 9.10645C10.6334 8.76244 10.5 8.31821 10.5 7.875C10.5 7.43179 10.6334 6.98756 10.8955 6.64355C11.1598 6.2969 11.5517 6.0625 12 6.0625Z" stroke="#F0483E"/> </g> <defs> <filter id="filter0_d_2008_426" x="6" y="1.5625" width="22" height="38.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2008_426"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2008_426" result="shape"/> </filter> </defs> </svg></button>',
		prevArrow: '<button class="slickchild-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" fill="none" viewBox="0 0 32 42"> <g filter="url(#a)"> <path fill="#F0483E" d="m11.414 21 9.293 12.197c.188.246.293.58.293.928 0 .348-.105.682-.293.928-.187.246-.442.385-.707.385-.265 0-.52-.139-.707-.385l-10-13.125c-.39-.512-.39-1.344 0-1.856l10-13.125c.187-.246.442-.385.707-.385.265 0 .52.139.707.385.188.246.293.58.293.928 0 .348-.105.682-.293.928L11.414 21Z"/> <path stroke="#F0483E" d="M20 6.063c-.448 0-.84.234-1.105.58l-10 13.126c-.526.691-.526 1.77 0 2.462l10 13.125c.265.347.657.581 1.105.581.448 0 .84-.234 1.105-.58a2.05 2.05 0 0 0 .395-1.232c0-.443-.133-.887-.395-1.231L12.043 21l9.062-11.894c.262-.344.395-.788.395-1.231 0-.443-.133-.887-.395-1.231-.265-.347-.657-.582-1.105-.582Z"/> </g> <defs> <filter id="a" width="22" height="38.875" x="4" y="1.563" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/> <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2008_422"/> <feBlend in="SourceGraphic" in2="effect1_dropShadow_2008_422" result="shape"/> </filter> </defs> </svg> </button>'
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

	

	// scroll pane
	const PEEK    = 40; // mesma medida do calc(100% - 60px)
	document.querySelectorAll('.scroll-outer').forEach(outer => {
		const track  = outer.querySelector('.scroll-track');
		const btnLeft  = outer.querySelector('.btn-left');
		const btnRight = outer.querySelector('.btn-right');

		btnRight.addEventListener('click', () => {
			const colW = outer.offsetWidth - PEEK;
			track.style.transform = `translateX(-${colW - PEEK}px)`;
		});

		btnLeft.addEventListener('click', () => {
			track.style.transform = 'translateX(0)';
		});
	});


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
