$(document).ready(function() {
    $('.header_menu_button').click(function() {
        $('.header_nav').toggleClass('is-active');
    });


    // 画面幅のサイズが変わったら
    $(window).on('resize', function() {
        //　ハンバーガーメニューを閉じる
        $('.hamburger-menu').removeClass('is-active');
    });
});

// 以下はCopilotで聞いて作成した物ですが複雑なため修正し上に修正しなおしました。
//     // リサイズイベントの処理
//     $(window).resize(function() {
//         if ($(window).width() >= 768) {
//             // 画面が768px以上の場合、メニューを常に表示
//             $('.header_nav').addClass('is-active');
//         } else {
//             // 画面が768px未満の場合、is-activeクラスに基づいて表示を切り替え
//             // ここでは特に操作を行わないが、必要に応じて追加のロジックを実装可能
//         }
//     }).trigger('resize'); // 初期ロード時にも適用
// });