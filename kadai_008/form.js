$(function () {

  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    // テキストボックスに値を表示
     $('.text-box').val('クリックされました！');
  });

});