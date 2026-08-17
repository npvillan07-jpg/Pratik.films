from pathlib import Path
p=Path("/mnt/data/script.js")
p.write_text("""const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';

  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '76px';
    nav.style.right = '6vw';
    nav.style.flexDirection = 'column';
    nav.style.gap = '18px';
    nav.style.padding = '20px';
    nav.style.background = '#111';
    nav.style.border = '1px solid #292929';
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});
""", encoding="utf-8")
print("Done")
