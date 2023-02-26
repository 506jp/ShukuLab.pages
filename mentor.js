let counter, btnAdd;
let n = null;
 
function addCount1(){
    n++;
    counter.innerHTML = n;
}
 
function addCount2(){
    n+100;
    counter.innerHTML = n;
}

function addCount3(){
    n+100;
    counter.innerHTML = n;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = 0;
 
    btnAdd.addEventListener("click", addCount);
});
