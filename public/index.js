// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.user-name').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        alert(event.target.innerHTML);
      });
    });
  
    document.querySelector('.send-button').addEventListener('click', (event) => {
      const text = document.querySelector('.input-text').value;
      fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: text }) })
    });
  });



  

  document.addEventListener('DOMContentLoaded', () => {
    const userList = document.querySelector('.user-list');
  

    userList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-button')) {
        // 削除ボタン
        const listItem = event.target.closest('.user-name');
        listItem.remove();
      }
    });
  });
  
