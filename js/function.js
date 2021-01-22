const text = "Bonjour je m'appelle Wylhem Dorville";
const head = document.getElementById('title');
let index = 0;

function writeText(){
    head.innerHTML = text.slice(0,index);
    index++;
    
    if(index>text.length){
        index = 0;
    }
}
setInterval(() => {
    writeText();
    setInterval();
   
}, 200);

