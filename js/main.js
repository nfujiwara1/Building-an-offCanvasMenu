// Start writing JavaScript here!
const bod = document.querySelector('body')
// const bod = document.body
const menuBtn = document.querySelector('button')
// console.log(menuBtn)
menuBtn.addEventListener('click', addClass)

function addClass(){
  bod.classList.toggle('offsite-is-open')
}