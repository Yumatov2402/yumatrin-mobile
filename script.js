function toggleMenu() { document.getElementById('sideMenu').classList.toggle('active'); }
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
function openDonatePage() { document.getElementById('donatePage').classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeDonatePage() { document.getElementById('donatePage').classList.remove('active'); document.body.style.overflow = 'auto'; }
function scrollToServersAndRegister() { document.getElementById('servers').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { openModal('registerModal'); }, 800); }

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

function openDownloadModal(platform, title) {
    let text = "";
    if (platform === 'start') text = "Уважаемые игроки! На данный момент проект находится в стадии активной разработки.";
    else if (platform === 'android') text = "Скачивание APK-файла пока недоступно.";
    else if (platform === 'ios') text = "Приложение еще не опубликовано в App Store.";
    else if (platform === 'rustore') text = "В магазине RuStore игра пока недоступна.";
    else if (platform === 'pc') text = "Скачивание лаунчера временно приостановлено.";
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
    if(checkbox.checked) { 
        btn.style.opacity = '1'; 
        btn.style.pointerEvents = 'auto'; 
    } else { 
        btn.style.opacity = '0.5'; 
        btn.style.pointerEvents = 'none'; 
    } 
}

function processPayment() { 
    if(document.getElementById('hp_field').value !== '') return false; 
    alert('Оплата временно недоступна.'); 
    closeModal('checkoutModal'); 
}

window.onclick = function(event) { 
    if (event.target.classList.contains('modal-overlay')) { 
        event.target.classList.remove('active'); 
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('effects-container');
    if (!container) return;

Копировать
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('falling-leaf');
    leaf.innerHTML = Math.random() > 0.5 ? '🍂' : '🍁';
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = (Math.random() * 5 + 6) + 's';
    leaf.style.fontSize = (Math.random() * 15 + 15) + 'px';
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

setInterval(createLeaf, 1200);
setInterval(createSpark, 200);
setInterval(createStar, 400);


});
function openDonatePage() {
    document.getElementById('donatePage').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDonatePage() {
    document.getElementById('donatePage').classList.remove('active');
    document.body.style.overflow = 'auto';
}
