const accordion = document.getElementsByClassName('content-container')
console.log(accordion[2]);

for (i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}