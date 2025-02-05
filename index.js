const OpenModalButton = document.querySelector('#open');



OpenModalButton.addEventListener('click', ()=>{

  const wrapper = document.createElement('div');
  wrapper.className = 'modalWrapper';


  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.addEventListener('click', () =>{
    wrapper.remove();
  });

  wrapper.appendChild(backdrop);

  const modalWindow = document.createElement('div');
  modalWindow.className = 'modalWindow';



  const buttonCross = createModalButton ('buttonCross', 'X', closeModal);
  const buttonOk = createModalButton ('modalOkButton', 'Ок', closeModal);
  const buttonCancel = createModalButton ('buttonCancel', 'Отмена', closeModal);

  wrapper.appendChild(modalWindow)

  document.body.appendChild(wrapper)
  modalWindow.appendChild(buttonOk)
  modalWindow.appendChild(buttonCancel)
  modalWindow.appendChild(buttonCross)
})

function closeModal(){
  const modal = document.querySelector('.modalWrapper')

  if (!modal){
    console.log('Модальное окно не найдено');
    return;
  }

  modal.remove();
}

function createModalButton(className, text, func){
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.className = className;
  button.innerText = text;
  button.addEventListener('click', () => {
    func();
  })

  return button;


}