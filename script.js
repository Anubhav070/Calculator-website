let string = "";
setInterval(Time, 1000);

function Time(){
  let d = new Date();
  document.getElementById("livetime").innerHTML = 
  d.getHours()+ ":" +
  d.getMinutes() + ":" +
  d.getSeconds();  
}

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'OFF'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'ON'){
        string = "0"
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})