// --------menu button---------
const openBtn = document.getElementById('openSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

openBtn.onclick = () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
};

overlay.onclick = () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
};

// --------Policy---------
// const openBtn = document.getElementById('openSidebar');
// const sidebar = document.getElementById('sidebar');
// const overlay = document.getElementById('overlay');

// openBtn.onclick = () => {
//   sidebar.classList.add('active');
//   overlay.classList.add('active');
// };

// overlay.onclick = () => {
//   sidebar.classList.remove('active');
//   overlay.classList.remove('active');
// };
