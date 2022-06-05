const ModalContacts = document.querySelector("#contacts-modal");
const ModalBotLink = document.querySelector("#two-bot-link");
const ModalDescription = document.querySelector("#three-description");
const ModalTreaty = document.querySelector("#four-treaty");
const ModalHiddenMenu = document.querySelector('#mobile-menu');

const OpenBtnModalContacts = document.querySelector("#one-contacts-btn");
const OpenBtnModalBotLink = document.querySelector("#two-bot-link-btn");
const OpenBtnModalDescription = document.querySelector("#three-description-btn");
const OpenBtnModalTreaty = document.querySelector("#four-treaty-btn");
const OpenBtnModalHiddenMenu = document.querySelector('#hidden-menu-btn');

const Modals = [ModalContacts, ModalBotLink, ModalDescription, ModalTreaty, ModalHiddenMenu];
const Btns = [OpenBtnModalContacts, OpenBtnModalBotLink, OpenBtnModalDescription, OpenBtnModalTreaty, OpenBtnModalHiddenMenu];



Btns.forEach((btn, index) => {
    const Modal = Modals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            Modal.classList.add(MODAL_ACTIVE_CLASS);
            
            //document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});




