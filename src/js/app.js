import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

// import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';

const header = new Header({
    someVareible: 'someVareible'
});
const modals = new Modals({
    modalsSelector: "data-modal",
    modalsOpenerSelector: "data-modal-id",
    openedClass: "isOpened"
});

document.addEventListener('DOMContentLoaded', () => {
    header.init();
    modals.init();
})