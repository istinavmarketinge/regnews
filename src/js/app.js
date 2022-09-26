import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import MobileMenu from '../blocks/modules/mobile_menu/mobile_menu.js';


function IsSafari() {

    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    return is_safari;
  
}


const header = new Header({
    enableFlexMenu: true
});
const modals = new Modals({
    modalsSelector: "data-modal",
    modalsOpenerSelector: "data-modal-id",
    openedClass: "isOpened"
});

const mobileMenu = new MobileMenu({
    headerMenuSelector: '.header_menu',
    mobileMenuSelector: '.mobileMenu__menu',
    mobileMenuOpener: '.mobileMenu__opener'
});

$(document).ready(function () {
    header.init();
    modals.init();
    mobileMenu.init();
})



console.log(IsSafari());
