function toggleMenu() { document.getElementById('sideMenu').classList.toggle('active'); }
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
function openDonatePage() { document.getElementById('donatePage').classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeDonatePage() { document.getElementById('donatePage').classList.remove('active'); document.body.style.overflow = 'auto'; }
function scrollToServersAndRegister() { document.getElementById('servers').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { openModal('registerModal'); }, 800); }
function openWorldPage() { document.getElementById('worldPage').classList.add('active'); document.body.style.overflow = 'hidden'; openWorldTab('tab-main', document.querySelector('.world-tab')); }
function closeWorldPage() { document.getElementById('worldPage').classList.remove('active'); document.body.style.overflow = 'auto'; }
function openWorldTab(tabId, btnElement) { document.querySelectorAll('.world-tab').forEach(tab => tab.classList.remove('active')); document.querySelectorAll('.world-content').forEach(content => content.classList.remove('active')); btnElement.classList.add('active'); document.getElementById(tabId).classList.add('active'); }
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
function openCheckout(amount, price) { document.getElementById('checkoutAmount').innerText = amount; document.getElementById('checkoutPrice').innerText = price; document.getElementById('agreeCheckbox').checked = false; togglePayBtn(); openModal('checkoutModal'); }
function togglePayBtn() { const checkbox = document.getElementById('agreeCheckbox'); const btn = document.getElementById('payBtn'); if(checkbox.checked) { btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; } else { btn.style.opacity = '0.5'; btn.style.pointerEvents = 'none'; } }
function processPayment() { if(document.getElementById('hp_field').value !== '') return false; alert('Оплата временно недоступна.'); closeModal('checkoutModal'); }
window.onclick = function(event) { if (event.target.classList.contains('modal-overlay')) { event.target.classList.remove('active'); } }
