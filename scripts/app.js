const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menuIcon');

const toggleNav = () => {
    navLinks.classList.toggle('open');
    menuIcon.classList.toggle('ph-x');
}

const more = document.getElementById('more-projects');
const loadMoreBtn = document.getElementById('load-more');
const loadLessBtn = document.getElementById('load-less');

const loadMore = () => {
    more.classList.add('ui-sec');
    loadMoreBtn.style.display = 'none';
    loadLessBtn.classList.add('show-less-fles')
}

const loadLess = () => {
    more.classList.remove('ui-sec');
    loadMoreBtn.style.display = 'block';
    loadLessBtn.classList.remove('show-less-fles')
}

const scrollToTop = document.querySelector('.scroll-to-top');
const nav = document.querySelector('.navigation');

const dynamicNav = () => {
    if (document.documentElement.scrollTop >= 400) {
        nav.style.paddingBlock = 0;
    } else {
        nav.style.paddingBlock = '1rem';
    }
}

const scrollBtnVisibility = () => {
    dynamicNav();

    if (document.documentElement.scrollTop >= 400) {
        // scrollToTop.style.display = 'block';
        scrollToTop.style.opacity = 1;
        scrollToTop.style.visibility = 'visible';
    } else {
        // scrollToTop.style.display = 'none';
        scrollToTop.style.opacity = 0;
        scrollToTop.style.visibility = 'hidden';
    }
}

scrollBtnVisibility();

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

document.addEventListener('scroll', scrollBtnVisibility);

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2500,
});

sr.reveal('#dev-profile');
sr.reveal('#dev-name', { delay: 300 });
sr.reveal('#dev-desc', { delay: 400 });
sr.reveal('#dev-links', { delay: 500 });

const scrollDown = (hash) => {
    location.replace("#" + hash)
}