"use strict";

class ShortArticles {
    constructor(container = '.articles') {
        this.container = container;
        this._articles = []; // data
        this._allArticle = [];

        this._fetchArticle();
        this._render();
    }
    _fetchArticle() {
        this._articles = [
            {
                title: 'Что такое госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle1.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'

            },
            {
                title: 'Госзакупки: виды и механизм работы',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle2.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle3.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Что такое госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle4.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Госзакупки: виды и механизм работы',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle5.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle6.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Госзакупки: виды и механизм работы',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle7.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle8.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
            {
                title: 'Что такое госзакупки: виды и механизм работы простыми словами',
                date: '5 февраля 2021',
                dateComp: '2021-02-05',
                time: '20 минут',
                author: 'Иван Иванов',
                views: 168,
                tagOne: 'госзакупки',
                tagTwo: '44ФЗ',
                tagThree: '223ФЗ',
                thematik: 'goszakupki',
                imgUrl: 'img/shortarticle9.png',
                text: 'Госзакупки — крупный рынок для поставщиков товаров и услуг, необходимых госкомпаниям. Масштаб любой: от приобретения карандашей до строительства здания администрации. Рассказываем ...'
            },
        ];
    }
    _render() {
        const block = document.querySelector(this.container);

        for (const article of this._articles) {
            const articleObject = new ArticleItem(article);
            this._allArticle.push(articleObject);
            block.insertAdjacentHTML('beforeend', articleObject.render());
        }
    }
}

class ArticleItem {
    constructor(article) {
        this.title = article.title;
        this.date = article.date;
        this.dateComp = article.dateComp;
        this.time = article.time;
        this.author = article.author;
        this.views = article.views;
        this.tags = article.tags;
        this.imgUrl = article.imgUrl;
        this.text = article.text;
        this.tagOne = article.tagOne;
        this.tagTwo = article.tagTwo;
        this.tagThree = article.tagThree;
        this.temathik = article.temathik;
    }


    render() {
        return `<div class="articles-item">
                    <img src="${this.imgUrl}" alt="article img">
                    <div class="articles-item-desc ${this.thematik}">
                        <p class="articles-item-desc-date"><time datetime="${this.dateComp}">${this.date}</time></p>
                        <p class="articles-item-desc-time">${this.time}</p>
                    </div>
                    <div class="articles-item-tags">
                        <p class="articles-item-tags-text">#${this.tagOne}</p>
                        <p class="articles-item-tags-text">#${this.tagTwo}</p>
                        <p class="articles-item-tags-text">#${this.tagThree}</p>
                        </div>
                    <h1 class="articles-item-title">${this.title}</h1>
                    <a href="article.html" class="articles-item-text">${this.text}</a>
                    <div class="articles-item-footer">
                    <p class="articles-item-footer-author">${this.author}</p>
                    <p class="articles-item-footer-views">${this.views}</p>
                    </div>
            </div > `;
    }
}
const list = new ShortArticles();

