const logoutBtn = document.getElementById('logoutBtn');
const logoutPopup = document.getElementById('logoutPopup');

logoutBtn.addEventListener('click', () => {
  const buttonRect = logoutBtn.getBoundingClientRect();
  const popupHeight = logoutPopup.offsetHeight;

  logoutPopup.style.display = 'block';
  document.body.style.backgroundColor = 'rgba(32, 32, 32, 0.3)';
});


const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', () => {
  logoutPopup.style.display = 'none';
  document.body.style.backgroundColor = 'initial';
});

const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
confirmLogoutBtn.addEventListener('click', () => {
  logoutPopup.style.display = 'none';
  document.body.style.backgroundColor = 'initial';
});
