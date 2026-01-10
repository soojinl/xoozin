const menuDisplay = document.getElementById('menu-display');
const recommendBtn = document.getElementById('recommend-btn');
const themeToggle = document.getElementById('theme-toggle');

const dinnerMenus = [
    '치킨', '피자', '삼겹살', '된장찌개', '김치찌개',
    '족발', '보쌈', '파스타', '초밥', '떡볶이',
    '제육볶음', '부대찌개', '곱창', '쌀국수', '카레'
];

function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = selectedMenu;
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

recommendBtn.addEventListener('click', recommendMenu);
themeToggle.addEventListener('click', toggleTheme);

// On load, check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
