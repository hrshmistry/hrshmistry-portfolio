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
