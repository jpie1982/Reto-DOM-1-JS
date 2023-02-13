function colorVerde(){
    document.body.style.background = "#ff9a76";
    //setTimeout(() => document.body.style.background = '', 4000);
    
   
}
function colorRojo(){
    document.body.style.background = "#ff5f40";
    //setTimeout(() => document.body.style.background = '', 4000);
}
function colorAzul(){
    document.body.style.background = "#ffc7c7";
    //setTimeout(() => document.body.style.background = '', 4000);
   
}

const acordeon = document.getElementsByClassName('container');

for (i=0; i < acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
