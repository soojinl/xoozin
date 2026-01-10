// DOM Elements
const menuDisplay = document.getElementById('menu-display');
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
            '치킨', '피자', '삼겹살', '된장찌개', '김치찌개',
            '족발', '보쌈', '파스타', '초밥', '떡볶이',
            '제육볶음', '부대찌개', '곱창', '쌀국수', '카레'
        ]
    },
    en: {
        heading: "What's for dinner tonight?",
        recommendButton: 'Get Recommendation',
        placeholder: 'Recommended menu will be shown here',
        menus: [
            'Chicken', 'Pizza', 'Pork Belly', 'Soybean Paste Stew', 'Kimchi Stew',
            'Pigs Feet', 'Boiled Pork Wraps', 'Pasta', 'Sushi', 'Tteokbokki',
            'Stir-fried Pork', 'Sausage Stew', 'Grilled Intestines', 'Pho', 'Curry'
        ]
    }
};

let currentLanguage = 'ko';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    mainHeading.textContent = translations[lang].heading;
    recommendBtn.textContent = translations[lang].recommendButton;
    if (!menuDisplay.textContent) {
        menuDisplay.textContent = translations[lang].placeholder;
    }
}

function recommendMenu() {
    const menus = translations[currentLanguage].menus;
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];
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
