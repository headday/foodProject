require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';


import tabs from './modules/tabs';
import  timer from './modules/timer';
import  slider from './modules/slider';
import  forms from'./modules/forms';
import  cards from'./modules/cards';
import  calc from'./modules/calc';
import  modal from './modules/modal';
import {openModal} from './modules/modal'
window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2020-06-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCurent: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

    
    forms('form' ,modalTimerId);
    cards();
    calc();
    modal('[data-modal]','.modal',modalTimerId);


});