// targetの全要素にイベントリスナーを定義する
let target = document.getElementsByClassName("index-btn");
target = [].slice.call(target);   // コレクションを配列に変換

for (let i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function() {
    
    const slides = document.getElementsByClassName("slide");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active"); // 現在のactiveクラスを取り除く
    }
  
    slides[target.indexOf(this)].classList.add("active"); // 対応する要素にactiveクラスを付与
  }); 
}
