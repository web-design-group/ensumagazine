const root = document.getElementById('root');

// Функция переключения страниц
function navigateTo(page, id = null) {
    // Очищаем экран
    root.innerHTML = '';

    let pageElement;

    // Проверяем, куда хочет перейти пользователь
    if (page === 'home' || !page) {
        pageElement = window.renderHome();
    } else if (page === 'about') {
        pageElement = window.renderAlenaXAlena();
    } else if (page === 'newsletter') {
        pageElement = window.renderNewsletter();
    } else if (page === 'article') {
        // Логика роутинга статей (как ARTICLES_MAP в твоем React коде)
        if (id === '1') pageElement = window.renderBurnedDesign();
        if (id === '2') pageElement = window.renderFromThePast();
        // и так далее...
    }

    // Если страница существует — добавляем её в DOM
    if (pageElement) {
        root.appendChild(pageElement);
    } else {
        root.innerHTML = '<h2>Страница не найдена</h2><button onclick="navigateTo(\'home\')">На главную</button>';
    }
}

// Делаем функцию доступной для инлайновых onclick="navigateTo(...)" в HTML-строках
window.navigateTo = navigateTo;

// Запускаем главную страницу при старте
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});