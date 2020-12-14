document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.home').onclick = get_page('home');
    document.querySelector('.contact').onclick = get_page('contact');
    document.querySelector('.about').onclick = get_page('about');

    get_page('home');
});

function get_page(page_name) {
    if (page_name == 'about') {
        document.querySelector('.home-page').style.display = 'none';
        document.querySelector('.contact-page').style.display = 'none';
        document.querySelector('.about-page').style.display = 'none';
    } else if (page_name == 'contact') {
        document.querySelector('.home-page').style.display = 'none';
        document.querySelector('.contact-page').style.display = 'flex';
        document.querySelector('.about-page').style.display = 'none';
    } else {
        document.querySelector('.home-page').style.display = 'flex';
        document.querySelector('.contact-page').style.display = 'none';
        document.querySelector('.about-page').style.display = 'none';
    }
}