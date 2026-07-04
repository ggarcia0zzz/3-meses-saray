// =========================================================
// 3 MESES — script
// =========================================================

// 👉 EDITA ESTA FECHA: pon el día y hora exacta en que empezaron a salir
// Formato: 'AAAA-MM-DDTHH:MM:SS'
const START_DATE = new Date('2026-04-04T00:00:00');

function updateCounter(){
  const now = new Date();
  let diff = Math.max(0, now - START_DATE); // milisegundos

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour   = msPerMinute * 60;
  const msPerDay    = msPerHour * 24;

  const days    = Math.floor(diff / msPerDay);
  diff -= days * msPerDay;
  const hours   = Math.floor(diff / msPerHour);
  diff -= hours * msPerHour;
  const minutes = Math.floor(diff / msPerMinute);
  diff -= minutes * msPerMinute;
  const seconds = Math.floor(diff / msPerSecond);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };

  set('cnt-days', days);
  set('cnt-hours', hours);
  set('cnt-minutes', minutes);
  set('cnt-seconds', seconds);
}

updateCounter();
setInterval(updateCounter, 1000);

// ---------- reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));
