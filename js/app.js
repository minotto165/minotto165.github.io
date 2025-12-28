// Swiperの初期化

// ページ上にあるすべてのswiperコンテナを取得
const swiperContainers = document.querySelectorAll('.swiper');

// 各コンテナをループして、それぞれにSwiperを初期化
swiperContainers.forEach(container => {
  new Swiper(container, {
    // --- 必須および推奨オプション ---
    loop: true, // スライドをループさせる

    // 自動再生
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // ユーザーが触った後も自動再生を続ける
    },

    // ページネーション（下部の丸いインジケーター）
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // クリックでのページ移動を許可
    },

    mousewheel: true,   // マウスホイールでのスライド操作を有効にする
    grabCursor: true,   // カーソルを掴むアイコンに変更
  });
});
