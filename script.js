const revealEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}})},{threshold:.14});
revealEls.forEach(el=>io.observe(el));

const topbar=document.querySelector('.topbar');
window.addEventListener('scroll',()=>{topbar.style.background=window.scrollY>40?'rgba(5,5,5,.82)':'linear-gradient(180deg,rgba(0,0,0,.82),transparent)'});

const mediaCards=document.querySelectorAll('.showcase-media');
mediaCards.forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1200px) rotateY(${x*2.2}deg) rotateX(${y*-2.2}deg)`});card.addEventListener('mouseleave',()=>card.style.transform='')});


// Subtle cinematic depth on the hero project screens
const hero = document.querySelector('.hero');
const heroScreens = document.querySelectorAll('.hero-screen');
if (hero && heroScreens.length) {
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - .5;
    const ny = (e.clientY - r.top) / r.height - .5;
    heroScreens.forEach((screen, i) => {
      const depth = (i + 1) * 5;
      screen.style.marginLeft = `${nx * depth}px`;
      screen.style.marginTop = `${ny * depth}px`;
    });
  });
}
