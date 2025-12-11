document.addEventListener("DOMContentLoaded", () => {
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* PARALLAX */
const decor = document.querySelector('.hero-decor');
window.addEventListener('mousemove', e => {
if(decor){
const x = (e.clientX / window.innerWidth - 0.5) * 30;
const y = (e.clientY / window.innerHeight - 0.5) * 30;
decor.style.transform = `translate(${x}px, ${y}px) rotate(-6deg)`;
}
});


/* MODAL */
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-modal');
const closeBtn = document.querySelector('.modal-close');
openBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));
closeBtn.addEventListener('click', () => modal.classList.remove('active')));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('active'); });


/* EMAILJS */
emailjs.init("YOUR_PUBLIC_KEY"); // ⚠️ сюда вставь Public Key


const sendForm = (form) => {
form.addEventListener('submit', e => {
e.preventDefault();
emailjs.send("service_fg0zlhc", "template_wx26y4q", {
name: form.name.value,
phone: form.phone.value,
message: form.message.value
}).then(() => {
alert('Заявка отправлена!');
form.reset();
modal.classList.remove('active');
});
});
};


const modalForm = document.getElementById('modalForm');
const contactForm = document.getElementById('contactForm');
if(modalForm) sendForm(modalForm);
if(contactForm) sendForm(contactForm);


/* SLIDER */
document.querySelectorAll('.slider').forEach(slider => {
const slides = slider.querySelectorAll('.slide');
let current = 0;
const next = slider.querySelector('.next');
const prev = slider.querySelector('.prev');
const show = i => slides.forEach((s,k)=> s.style.display = k===i ? 'block' : 'none');
show(current);
next.addEventListener('click', () => { current = (current+1)%slides.length; show(current); });
prev.addEventListener('click', () => { current = (current-1+slides.length)%slides.length; show(current); });
});
});
