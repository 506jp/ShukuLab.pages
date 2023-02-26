// bodyタグを取得
const documentBody = document.querySelector('body');
// body直下にオーバーレイの要素を作成
var newElement = document.createElement("div");
newElement.setAttribute("class","zoomCurtainbg");
documentBody.prepend(newElement);
// オーバーレイの次に要素を作成
var coverElement = document.createElement("div");
coverElement.setAttribute("id","container");
newElement.prepend(coverElement);
// bodyタグにclassを付与
documentBody.classList.add('pageOn');

// 1.5秒経ったらオーバーレイ非表示
setTimeout(function(){ 
    newElement.style.display = "none";
  }, 1500);

// ページ遷移時にフェードアウト
window.addEventListener("beforeunload", () => {
  documentBody.classList.add('fadeout');
  setTimeout(function(){ 
    documentBody.style.display = "none"; 
  }, 1000);
}, false);