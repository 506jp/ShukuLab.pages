// bodyタグを取得
const documentBody = document.querySelector('body');
var newElement = document.getElementById("page-loading");

// 2.5秒経ったらオーバーレイ非表示
setTimeout(function(){ 
    newElement.style.display = "none"; 
  }, 2500);

// ページ遷移時にフェードアウト
window.addEventListener("beforeunload", () => {
  documentBody.classList.add('fadeout');
  setTimeout(function(){ 
    documentBody.style.display = "none"; 
  }, 1000);
}, false);