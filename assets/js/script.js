document.addEventListener('DOMContentLoaded', () => {

  modalbtn = document.getElementById('modalbtn');
  modal = document.getElementById('modal');
  closebtn = document.getElementById('close');

  modalbtn.addEventListener('click', () => {
    modal.style.display = 'inline-block'
  })

  closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
  })

})
