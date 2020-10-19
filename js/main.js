'use strict'

let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger');
let closeBtn = document.querySelector('.logo-item');
let navBar = document.querySelector('.navbar');

let scrollTopBtn = document.querySelector('.scroll-top-btn');

burgerBtn.addEventListener('click', () => {
	body.classList.add('locked');
	navBar.classList.add('active');
});
closeBtn.addEventListener('click', () => {
	body.classList.remove('locked');
	navBar.classList.remove('active');
});

scrollTopBtn.addEventListener('click', () => {
	window.scrollTo({
	    top: 0,
	    behavior: "smooth"
	});
})