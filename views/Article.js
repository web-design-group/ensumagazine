// Когда скинешь файлы статей, мы импортируем их сюда как функции, возвращающие HTML-строки
const ARTICLES_MAP = {
  '1': () => `<div class="articleContent"><h2>Статья: Прожженный дизайн</h2><a href="#/">Назад на главную</a></div>`,
  '2': () => `<div class="articleContent"><h2>Статья: Отсылки из прошлого</h2><a href="#/">Назад на главную</a></div>`,
  '3': () => `<div class="articleContent"><h2>Статья: Постмодернизм</h2><a href="#/">Назад на главную</a></div>`,
  '4': () => `<div class="articleContent"><h2>Статья: TouchDesigner</h2><a href="#/">Назад на главную</a></div>`
};

export default function Article(id) {
  const renderTargetArticle = ARTICLES_MAP[id];

  if (!renderTargetArticle) {
    return `
      <div class="notFound">
        <h2>Статья не найдена</h2>
        <a href="#/">Вернуться на главную</a>
      </div>
    `;
  }

  // Вызываем функцию нужной статьи
  return renderTargetArticle();
}