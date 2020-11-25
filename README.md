# ДОКУМЕНТАЦИЯ НА SMART.KOVALEV.TEAM

## Фронтенд. VUE
Фронтенд собран на [VUE](https://vuejs.org/). Как сингл пейдж application.
Vue - это **прогрессивный фреймворк** для создания пользовательских интерфейсов. В отличие от других монолитных фреймворков, Vue разработан с нуля для постепенного внедрения. Основная библиотека ориентирована только на слой представления, и ее легко выбрать и интегрировать с другими библиотеками или существующими проектами. С другой стороны, Vue также прекрасно поддерживает сложные одностраничные приложения при использовании в сочетании
### Таблица роутинга фронта 
Фронт состоит из одной страницы.
Method Path | обрабатываемые параметры                          |Описание                         |
-------------------------------|-----------------------------|------|
GET /            |-            | Главная страница Landing
## Описание  сайта
Сайт состоит из 4 однозначно различаемых глазом блоков, за счёт контрастных переходов 
1) Приветственный блок. Тут расположены: 
- Логотип кейсодержателя 
- Логотип команды
- Девиз
2) Блок описания SMART. Краткое описание с анимацией, что из себя представляет СМАРТ
3) Блок детального описания SMART. Детальное описание каждого критерия смарт
4) Форма ввода цели. Тут расположена форма ввода цели, с примером, и поп-апом предупреждении если пользователь вводит цель которая не поддается анализу
## Дизайн. Material
[Material](https://material.io/design) — стиль графического дизайна интерфейсов программного обеспечения и приложений, разработанный компанией Google Впервые представлен на конференции "Google I/O"  25 июня  2014 года. Стиль расширяет идею «карточек», появившуюся в Google Now, более широким применением строгих макетов, анимаций и переходов, отступов и эффектов глубины (света и тени). По идее графических дизайнеров Google, у приложений не должно быть острых углов, карточки должны переключаться между собой плавно и практически незаметно
## Верстка
Верстка адаптирована под экраны  1440px.
Используется набор компонентов [Vuetify](https://vuetifyjs.com/en/)
Vuetify — это библиотека пользовательского интерфейса Vue с красиво созданными компонентами материалов. Навыки дизайна не требуются - все, что нужно для создания потрясающих приложений, всегда у вас под рукой.
## Web. бэкенд
Api для фронта реализована в проекте с сетью BlueFloyd. В виде небольшого сервера на [Flask](https://flask.palletsprojects.com/en/1.1.x/)
Мы следуем принципу бритвы Окамы и не плодим сущности пока, пока в этом не возникает необходимость.
### Таблица роутинга API 
Method Path | обрабатываемые параметры                          |Описание                         |
-------------------------------|-----------------------------|------|
GET /req            |String q            | Получает на вход строку q с целью сформулированной пользователем, возвращает результат в виде false\true по каждому из критериев


## Пользовательское приключение
Здесь сайт это фронтовое приложение.
BlueFloyd - это пайтон приложение с моделью для оценки смарт и веб сервером, обрабатывающим /req 

### Сюжет 1
Пользователь заходит на сайт первый раз.
Пользователь заходит на сайт и узнает что такое система смарт в целом, и как что означает каждый параметр в SMART
Если его это заинтересует, он может сформулировать цель, как в примере на сайте и получить результат в интуитивно понятно графической форме.

![alt text](https://raw.githubusercontent.com/Vchekryzhov/smart-front/master/src/assets/img/d1.png)

### Сюжет 2
Пользователь вводит данные, которые плохо поддаются анализу.
Если пользователь введет цель, которую заведомо сложно анализировать, он увидет поп-ап с предложением переформулировать цель. И 3 примера правильной постановки цели


![d2](https://raw.githubusercontent.com/Vchekryzhov/smart-front/master/src/assets/img/d2.png)