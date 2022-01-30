$(function() {
  
  $('.index-btn').click(function() {

    // 現在のactiveクラスを取り除く
    $('.active').removeClass('active');

    // クリックしたボタンにactiveクラスを付与する
    let clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

  });
  
});
