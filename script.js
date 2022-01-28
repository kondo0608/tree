'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// lesson 11 ナイトメア問題 2
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

{
const expected1 = "T";
test(christmasTree("T", 1), expected1);

const expected2 = " +\n+ +";
test(christmasTree("+", 2), expected2);

const expected4 = "   #\n  # #\n # # #\n# # # #";
test(christmasTree("#", 4), expected4);

console.log(christmasTree("A", 100));

// テストでは改行は変に表示されますが、ツリーは次のようになります。

/*
      T
     T T
    T T T
   T T T T
  T T T T T
*/
}
console.log(document.body);

const button = document.getElementById('grow');
const tree = document.getElementById('tree')
button.addEventListener('click', () => {
  button.style.display = "none"
  tree.textContent = christmasTree("木", 50);
  // button.textContent = "A\nA";
  // button.innerHTML = button.textContent.replace(/\n/g, '<br>').replace(/ /g, '&nbsp');
  tree.innerHTML = tree.textContent.replace(/\n/g, '<br>');
  // christmasTree("A", 3);
  // window.alert("Hello!");
  });
