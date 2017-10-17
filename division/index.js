var division;


 document.getElementById('divide').onclick = function divison(){
   division = 30;
   if (division === 30) {
     window.alert('you have 30! divide into 6 groups.')
   };
 }

document.getElementById('theForm').onsubmit = function handleSubmit(e) {
  e.preventDefault();
  const divisionEl = document.getElementById('division');
  division = Number(divisionEl.value);

  if (division === 5) {
    window.alert('that is correct')
  } else {
    window.alert('that is not correct')
  }
}
