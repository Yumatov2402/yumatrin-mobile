// --- Базовые функции управления ---
function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function openDonatePage() {
    document.getElementById('donatePage').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDonatePage() {
    document.getElementById('donatePage').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function scrollToServersAndRegister() {
    document.getElementById('servers').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { openModal('registerModal'); }, 800);
}

// --- Переключение вкладок (about.html) ---
function openWorldTab(tabId, btnElement) {
    let contents = document.querySelectorAll('.world-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

Копировать
let tabs = document.querySelectorAll('.world-tab');
tabs.forEach(tab => {
    tab.classList.remove('active');
});

let targetTab = document.getElementById(tabId);
if (targetTab) {
    targetTab.classList.add('active');
    targetTab.style.display = 'block';
}

if (btnElement) {
    btnElement.classList.add('active');
}


}

// --- Модальные окна (Скачивание, Донат) ---
function openDownloadModal(platform, title) {
    let text = "";
    if (platform === 'start') text = "Уважаемые игроки! На данный момент проект находится в стадии активной разработки.";
    else if (platform === 'android') text = "Скачивание APK-файла пока недоступно.";
    else if (platform === 'ios') text = "Приложение еще не опубликовано в App Store.";
    else if (platform === 'rustore') text = "В магазине RuStore игра пока недоступна.";
    else if (platform === 'pc') text = "Скачивание клиента для Windows временно приостановлено.";

Копировать
document.getElementById('downloadModalTitle').innerText = title;
document.getElementById('downloadModalText').innerText = text;
openModal('downloadModal');


}

function openCheckout(amount, price) {
    document.getElementById('checkoutAmount').innerText = amount;
    document.getElementById('checkoutPrice').innerText = price;
    document.getElementById('agreeCheckbox').checked = false;
    togglePayBtn();
    openModal('checkoutModal');
}

function togglePayBtn() {
    const checkbox = document.getElementById('agreeCheckbox');
    const btn = document.getElementById('payBtn');
    if (checkbox && btn) {
        if (checkbox.checked) {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        } else {
            btn.style.opacity = '0.5';
            btn.style.pointerEvents = 'none';
        }
    }
}

function processPayment() {
    const hpField = document.getElementById('hp_field');
    if (hpField && hpField.value !== '') return false; // Anti-bot check
    alert('Оплата временно недоступна, так как проект в разработке.');
    closeModal('checkoutModal');
}

// --- Глобальные клики (Закрытие меню и модалок) ---
window.onclick = function (event) {
    // Закрытие модалок по клику на темный фон
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }

Копировать
// Закрытие бокового меню по клику вне его
const sideMenu = document.getElementById('sideMenu');
const burgerMenu = document.querySelector('.burger-menu');
if (sideMenu && sideMenu.classList.contains('active')) {
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
}


};

// --- Инициализация эффектов при загрузке DOM ---
document.addEventListener("DOMContentLoaded", function () {

Копировать
// 1. Генерация частиц (Листья, Искры, Звезды)
const container = document.getElementById('effects-container');

if (container) {
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('falling-leaf');
        leaf.innerHTML = Math.random() > 0.5 ? '🍂' : '🍁';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = (Math.random() * 5 + 6) + 's';
        leaf.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Увеличенный размер листьев
        container.appendChild(leaf);
        setTimeout(() => leaf.remove(), 11000);
    }

    function createSpark() {
        const spark = document.createElement('div');
        spark.classList.add('fire-spark');
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.bottom = '-10px';
        spark.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 3000);
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('twinkling-star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(star);
        setTimeout(() => star.remove(), 4000);
    }

    setInterval(createLeaf, 1000);
    setInterval(createSpark, 200);
    setInterval(createStar, 400);
}

// 2. Анимация появления элементов при скролле (Scroll Reveal)
const revealElements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
            observer.unobserve(entry.target); // Анимируем только один раз
        }
    });
}, {
    threshold: 0.1, // Элемент появляется на 10%
    rootMargin: "0px 0px -50px 0px" // Срабатывает чуть раньше
});

revealElements.forEach(el => observer.observe(el));


});