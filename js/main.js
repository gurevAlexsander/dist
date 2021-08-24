'use strict'

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const headerSignin = document.querySelector('.header__signin');
const model = document.querySelector('.model');
const overlow = document.querySelector('.overlow');
const modelClosest = document.querySelector('.model__closest');

function menuShow(e) {
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    e.target.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden';
  } else {
    menu.classList.remove('active');
    e.target.classList.remove('active');
    document.querySelector('body').style.overflowY = '';
  }
}

function modelShow() {
  model.classList.add('active');
  overlow.classList.add('active')
}

function modelClose() {
  model.classList.remove('active');
  overlow.classList.remove('active');
}

function closeAll() {
  overlow.classList.remove('active');
  modelClose();
}

headerSignin.addEventListener('click', modelShow);
modelClosest.addEventListener('click', modelClose);
overlow.addEventListener('click', closeAll);
burger.addEventListener('click', menuShow);

