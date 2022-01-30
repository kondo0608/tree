'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// lesson11 ナイトメア問題 2
// クリスマスツリーを表示する関数 christmasTree を宣言してください。

/**
 * @param {string} chr - 任意の 1 文字
 * @param {number} height - ツリーの高さ
 * @returns {string} 与えられた文字と高さを使用して、クリスマスツリーを文字列で表現したもの
 */

// ここにコードを書きましょう
function christmasTree(chr, height) {

  // height-1 個のスペースの文字列を生成
  let space = "";
  for (let i = 1; i <= height - 1; i++) {
    space += " ";
  }

  // spaceの間に文字を入れた後resultと結合し、さらに末尾に \n を追加
  let result = "";
  for (let i = 1; i <= height; i++) {
    space = space.slice(0, height - i) + chr + space.slice(height - i);
    result += space + "\n";
  }

  // 末尾の \n を削除して値を返す
  return result.slice(0, -1);
}


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