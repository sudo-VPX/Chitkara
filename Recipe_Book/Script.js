const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.food-type');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.type === 'all') {
      sections.forEach(sec => sec.classList.add('active'));
    } else {
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(btn.dataset.type).classList.add('active');
    }
  });
});
