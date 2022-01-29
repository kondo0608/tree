'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 数値入力の桁数を制限する
function sliceMaxLength(elem, maxLength) {  
  elem.value = elem.value.slice(0, maxLength);  
}  

// ボタンが押されたとき以下を実行する
const button = document.getElementById("grow-img");
button.addEventListener("click", () => {
  
  const character = document.getElementById("text-character").value; // 種
  const treeHeight = document.getElementById("text-height").value; // 鷹さ
  if(character != "" && treeHeight != "") {

    button.style.display = "none"; // ボタンを消す
    
    const star = document.getElementById('star-img');
    star.style.display = "inline"; // 星を表示する
    
    const tree = document.getElementById("tree")
    tree.textContent = christmasTree(character, treeHeight); // クリスマスツリーを表示する
    tree.innerHTML = tree.textContent.replace(/\n/g, "<br>"); // \nを<br>に変換する（htmlでは\nで改行できない）

    document.body.style.backgroundImage = "url(images/snow.gif)"; // 雪を降らせる

    window.alert("クリスマスツリーが完成しました!")

  } else {
    window.alert("クリスマスツリーは育ちませんでした。。。")
  }

  });

