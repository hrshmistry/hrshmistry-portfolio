const scrollDown = (hash) => {
    location.replace("#" + hash)
}

const navLinks = document.getElementById('nav-links');
const toggleNav = () => {
    navLinks.classList.toggle('open');
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

const scrollBtnVisibility = () => {
    if (document.documentElement.scrollTop >= 400) {
        nav.style.paddingBlock = 0;
        if (screen.width <= 600) {
            navLinks.style.marginTop = '-1rem';
        }
    } else {
        nav.style.paddingBlock = '1rem';
        if (screen.width <= 600) {
            navLinks.style.marginTop = '0rem';
        }
    }

    if (document.documentElement.scrollTop >= 400) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
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