# Завдання на прийом розробника в продуктову команду [Stocko.pro](https://stocko.pro/)

Реалізувати мінімальний веб додаток з бекендом, на одній з 2х доступних технологій:

  - **Nodejs**, з використанням менеджера пакетів **npm** й доступних в його базі пакетів

  - **PHP Laravel**, з використанням менеджера пакетів **composer** й доступних в його базі пакетів

Система має симулювати сценарій пошукового робота, тобто в асинхронному циклі забирати дані з html строніок з вказаного джерела й записувати його на власний ресурс. Іншими словами потрібно реалізувати мінімального парсера, або web scraping бота.

Базовий URL джерела: `https://test.stocko.pro/search`

URL джерела при перегортанні сторінок утворюється доданням до базового URL пошукового параметра `?page=N` , де N = 2...3... (відповідно значенню номeрів сторінок).

Необхідно на власному додатку відтворювати результати пошуку на сторінках джерела.

Всього на одній сторінці є 12 товарів (тканин).

Цільовими елементами в html коді сторінок джерела являється наступний шаблон-приклад:

```
<a href="https://test.stocko.pro/fabric/woven-polyester-cotton-dyed-multicolour-367" class="product__title" style="text-transform:uppercase">WOVEN 80% Polyester 20% Cotton Dyed MULTICOLOUR</a>
```

Нас цікавлять наступні сутності:

- `id`, порядковий номер

- `url`, значення атрибута href, посилання, https://test.stocko.pro/fabric/woven-polyester-cotton-dyed-multicolour-367

- `name`, значення текстової ноди, назва тканини в посиланні, WOVEN 80% Polyester 20% Cotton Dyed MULTICOLOUR

В результаті виконання даного завдання маємо отримати сторінку з пронумерованим списком, подібний до даного:

```
1 : url1 : name1
2 : url2 : name2
...
32 : url32 : name32
...
```

Тобто вихідний список має містити не менше 32 вхідних елементів й робити відображення відповідних назв й посилань на них, де кожен елемент має формат: `id : url : name` й робити це за мінімальну кількість HTTP запитів.

Результат правильно виконаного задання має запускатиcь як zero-configuration додаток й бути оформлений в новій гілці як **Pull Request** до [даного github репозиторію](https://github.com/alexnd/stocko_pro_dev_task).

  * Оформлення проекту з використанням **Docker** являється необов'язковою, але додатковою бонус-умовою при прийнятті в команду
  
;-)
