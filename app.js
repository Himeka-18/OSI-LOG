document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const headerTitle = document.getElementById('header-title');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 全てのボタンとコンテンツの選択状態を解除
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // クリックされたタブをアクティブにする
      button.classList.add('active');
      
      const targetTabId = button.getAttribute('data-tab');
      document.getElementById(targetTabId).classList.add('active');

      // ヘッダーのタイトルを切り替える
      const newTitle = button.getAttribute('data-title');
      headerTitle.textContent = newTitle;
    });
  });
});