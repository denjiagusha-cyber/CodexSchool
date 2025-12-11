

document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------
       BURGER MENU
    ------------------------ */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if(burger){
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('open');
        });
    }

    /* ------------------------
       SMOOTH SCROLL
    ------------------------ */
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ------------------------
       REVEAL ANIMATION
    ------------------------ */
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if(top < windowHeight - 50) el.classList.add('is-visible');
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    /* ------------------------
       HERO PARALLAX
    ------------------------ */
    const heroDecor = document.querySelector('.hero-decor');
    window.addEventListener('mousemove', e => {
        if(heroDecor){
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            heroDecor.style.transform = `translate(${x*30}px, ${y*30}px) rotate(-6deg)`;
        }
    });

    /* ------------------------
       MODAL WINDOW
    ------------------------ */
    const modal = document.getElementById('modal');
    const openModalBtns = document.querySelectorAll('.open-modal');
    const modalClose = document.querySelector('.modal-close');

    openModalBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('active'); });

    /* ------------------------
       EMAILJS FORM SUBMISSION
    ------------------------ */
    emailjs.init("service_fg0zlhc"); // вставьте ваш User ID из EmailJS

    const sendForm = (form) => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            // Простая валидация
            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            const message = form.message.value.trim();
            if(!name || !phone){
                alert('Пожалуйста, заполните все обязательные поля.');
                return;
            }

            // Формируем объект для EmailJS
            const data = { name, phone, message };

            emailjs.send('service_fg0zlhc', 'template_wx26y4q', data)
                .then(() => {
                    alert('Спасибо! Ваша заявка отправлена.');
                    form.reset();
                    if(modal.classList.contains('active')) modal.classList.remove('active');
                }, (err) => {
                    console.error('EmailJS error:', err);
                    alert('Ошибка при отправке. Попробуйте позже.');
                });
        });
    };

    // Применяем для модального и контактного форм
    const modalForm = document.getElementById('modalForm');
    const contactForm = document.getElementById('contactForm');
    if(modalForm) sendForm(modalForm);
    if(contactForm) sendForm(contactForm);

    /* ------------------------
       THEME TOGGLE
    ------------------------ */
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle){
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('theme-dark');
            document.documentElement.classList.toggle('theme-light');
        });
    }

    /* ------------------------
       SIMPLE GALLERY SLIDER
    ------------------------ */
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        let current = 0;
        const nextBtn = slider.querySelector('.next');
        const prevBtn = slider.querySelector('.prev');

        const showSlide = (index) => {
            slides.forEach((s,i) => s.style.display = (i===index) ? 'block' : 'none');
        };
        showSlide(current);

        if(nextBtn) nextBtn.addEventListener('click', ()=> { current = (current+1)%slides.length; showSlide(current); });
        if(prevBtn) prevBtn.addEventListener('click', ()=> { current = (current-1+slides.length)%slides.length; showSlide(current); });
    });

});
