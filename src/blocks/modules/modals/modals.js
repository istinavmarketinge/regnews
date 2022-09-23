const Modals = class Modals {
    constructor({modalsSelector, modalsOpenerSelector, openedClass}){
        this.modalsSelector = modalsSelector;
        this.modalsOpenerSelector = modalsOpenerSelector;
        this.openedClass = openedClass;
    }
    openModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.add(this.openedClass);
    }
    closeModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.remove(this.openedClass);
    }
    addClickListener() {
        document.addEventListener('click', (event) => {
            if (event.target.dataset.modalId) {
                event.preventDefault();
                this.openModal(event.target.dataset.modalId);
            }
            if (!event.target.dataset.modalId && event.target.dataset.modal || event.target.classList.contains('modal__closer')) {
                event.preventDefault();
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
        document.querySelectorAll('.modal__closer').forEach(closer => {
            closer.addEventListener('click', (event) => {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            });
        })
    }
    addKeyupListener() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 && document.querySelector(`[${this.modalsSelector}].isOpened`)) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    init() {
        if (!this.modalsSelector && this.modalsOpenerSelector) return;
        this.addClickListener();
        this.addKeyupListener();
    }
}

export default Modals;