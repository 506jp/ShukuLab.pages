document.getElementById('flObgToggle').addEventListener('click', () => {
    // 親要素のトグルを操作
    const flWrapper = document.getElementById('floatingMenu');
    flWrapper.classList.toggle('notshow');
  });
  
  // 要素外をクリックで非表示
  document.addEventListener('click', (e) => {
    if(!e.target.closest('div#floatingMenu')) {
      console.log("外側をクリックしました。");
       const flWrapper = document.getElementById('floatingMenu');
    flWrapper.classList.add('notshow');
    } else {
      console.log("内側をクリックしました。")
    }
  })