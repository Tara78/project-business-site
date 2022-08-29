
const questions = document.getElementsByClassName('accordion');
let i;
for(i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function ()  {
    this.classList.toggle("active");
    const answer= this.nextElementSibling;
    if (answer.style.display == "block"){
      answer.style.display="none";
    }else{
      answer.style.display="block"
    }
  })
}
