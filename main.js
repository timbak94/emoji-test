/*jshint esversion: 6 */
const emailjsMimeCodec = require('emailjs-mime-codec');
let submit;
document.addEventListener("DOMContentLoaded", ()=>{
  submit = document.getElementById('submit');
  input = document.getElementById('textarea');
  result = document.getElementById('result');
  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    onSubmit(input.value);
  });
});

function onSubmit(value) {
  result.innerHTML = emailjsMimeCodec.mimeWordEncode(value, 'Q');
}
