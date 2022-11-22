//document.querySelector(".btn").addEventListener(`click`, function onClick(event){
    //event.preventDefault();
    //const body = document.querySelector("body")
    //body.style.backgroundColor = `lightcoral`;
//})

//const clickHandler=(e)=>{
    //e.target.classList.add(`click`)
//}

//console.log()


//function changeBackground(color) {
    document.body.style.backgroundColor = `lightcoral`;
//}

var backgroundColor= {'toggle color': `lightcoral`}

window.onload= function () {
    var backgroundColor=document.getElementsByName ("colors");
    for (var i=0; i<backgroundColor.length; i++);
    {
        backgroundColor [i].onclick=function () {}
        document.body.style.backgroundColor = backgroundColor[this.value] 
    }
}



