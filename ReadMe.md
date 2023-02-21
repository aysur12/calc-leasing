# Calculate leasing

Адаптивный сложный калькулятор расчета лизинга

Минимальное и максмальное значение поля первоначального взноса динамически меняется в пределах 10-60% от значения поля стоимости автомобиля.

___
Cсылка на проект: https://aysur12.github.io/calc-leasing/

[Исходные макеты с сайта Figma](https://www.figma.com/file/tgAgxT0IrRQlauFCwK8i1R/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0-4?node-id=0%3A1&t=1P5aEdQI6f2CVyZA-1)
___

Без использования сторонних библиотек

В работе использовались:
  + только нативный JavaScript;
  + компонентная архитектура;
  + методология [БЭМ](https://ru.bem.info/methodology/quick-start/);

Для соблюдения компонентного подхода применялись следующие инструменты разработки:
  + [Gulp](https://gulpjs.com/);
  + шаблонизатор [Pug (Jade)](https://pugjs.org/api/getting-started.html);
  + препроцессор SASS ([SCSS](https://sass-scss.ru/));

___

Для соответствия макетов сайта и дизайна использовалось расширение [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru)
___
## Развертывание
##### Клонирование репозитория
```
git clone https://github.com/aysur12/calc-leasing.git
cd calc-leasing
```
##### Устновка зависимостей
```
npm install
```
##### Запуск производственной сборки проекта
```
gulp build
```
##### Запуск в режиме dev-server
```
gulp start
```
