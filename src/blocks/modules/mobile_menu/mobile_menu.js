import $ from 'jquery';

const MobileMenu = class MobileMenu {
    constructor({headerMenuSelector, mobileMenuSelector, mobileMenuOpener}) {
        this.headerMenuSelector = headerMenuSelector;
        this.mobileMenuSelector = mobileMenuSelector;
        this.mobileMenuOpener = mobileMenuOpener;
    }
    moveMenu() {
        if (!$(this.headerMenuSelector) || !$(this.mobileMenuSelector)) return;

        if (window.innerWidth <= 1280) {
            $(this.headerMenuSelector).find('ul').appendTo(this.mobileMenuSelector);
        } else {
            $(this.mobileMenuSelector).find('ul').appendTo(this.headerMenuSelector);
        }
    }
    cloneFooter() {
        if (!$('.footer__block')) return;
        let left = $('.footer__block .footer__left').html();
        let right = $('.footer__block .footer__right').html();


        $('.mobileMenu__right').html(`${left} ${right}`)
        console.log(left, right);
    }
    toggleMenu() {
        let mobileMenuSelector = this.mobileMenuSelector;
        $(this.mobileMenuOpener).click(function() {
            $(this).toggleClass('isOpened')
            $(mobileMenuSelector).closest('.mobileMenu__wrapper').toggleClass('isOpened');
        })
    }
    init() {
        this.moveMenu();
        this.toggleMenu();
        this.cloneFooter();
        window.addEventListener('resize', () => {
            this.moveMenu()
        });
    }
}

export default MobileMenu;