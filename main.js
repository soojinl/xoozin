// DOM Elements
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');
const recommendBtn = document.getElementById('recommend-btn');
const themeToggle = document.getElementById('theme-toggle');
const langKoBtn = document.getElementById('lang-ko');
const langEnBtn = document.getElementById('lang-en');
const mainHeading = document.getElementById('main-heading');

// Translations
const translations = {
    ko: {
        heading: '오늘 저녁 뭐 먹지?',
        recommendButton: '메뉴 추천받기',
        placeholder: '추천 메뉴가 여기에 표시됩니다',
        menus: [
            { name: '치킨', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=치킨' },
            { name: '피자', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=피자' },
            { name: '삼겹살', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=삼겹살' },
            { name: '된장찌개', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=된장찌개' },
            { name: '김치찌개', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=김치찌개' },
        ]
    },
    en: {
        heading: "What's for dinner tonight?",
        recommendButton: 'Get Recommendation',
        placeholder: 'Recommended menu will be shown here',
        menus: [
            { name: 'Chicken', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=Chicken' },
            { name: 'Pizza', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=Pizza' },
            { name: 'Pork Belly', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=Pork+Belly' },
            { name: 'Soybean Stew', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=Soybean+Stew' },
            { name: 'Kimchi Stew', imageUrl: 'https://placehold.co/400x300/EEE/31343C?text=Kimchi+Stew' },
        ]
    }
};

let currentLanguage = 'ko';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    mainHeading.textContent = translations[lang].heading;
    recommendBtn.textContent = translations[lang].recommendButton;
    if (menuImage.style.display === 'none') {
        menuName.textContent = translations[lang].placeholder;
    }
}

function recommendMenu() {
    const menus = translations[currentLanguage].menus;
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];
    
    menuImage.src = selectedMenu.imageUrl;
    menuImage.alt = selectedMenu.name;
    menuImage.style.display = 'block';
    menuName.textContent = selectedMenu.name;
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

// Event Listeners
recommendBtn.addEventListener('click', recommendMenu);
themeToggle.addEventListener('click', toggleTheme);
langKoBtn.addEventListener('click', () => setLanguage('ko'));
langEnBtn.addEventListener('click', () => setLanguage('en'));

// On load
function initialize() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const savedLang = localStorage.getItem('language') || 'ko';
    setLanguage(savedLang);
}

initialize();
