
const Header = class Header {
    constructor(enableFlexMenu = false){
        this.enableFlexMenu = enableFlexMenu;
    }
    initFlexMenu() {
        if (!this.enableFlexMenu) return;
        console.log('Тут должно быть адаптивное меню');
    }
    init() {
        this.initFlexMenu();
    }
}

export default Header;