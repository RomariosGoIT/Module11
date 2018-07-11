'use strict'

// const cat = {
//     img: 'data:image/jpeg;base64,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',
//     name: 'Ramon',
//     age: 2,
// }



// const source = document.querySelector('#cat-cart').innerHTML.trim()

// const template = Handlebars.compile(source)

// const container = document.querySelector('#root')

// const markup = template(cat)

// container.insertAdjacentHTML('beforebegin', markup)


// const cats = [{
//         name: 'Poly',
//         age: 4,
//         joyful: true,
//         traits: ['fuzzy', 'cute']
//     },
//     {
//         name: 'Spot',
//         age: 2,
//         joyful: false,
//         traits: ['cute', 'cuddly']
//     },
//     {
//         name: 'Frisky',
//         age: 3,
//         joyful: true,
//         traits: ['sleepy', 'bites']
//     },
//     {
//         name: 'Biscuit',
//         age: 1,
//         joyful: false,
//         traits: ['fuzzy', 'sleepy']
//     },
//     {
//         name: 'Ajax',
//         age: 6,
//         joyful: true,
//         traits: ['fuzzy', 'sleepy']
//     },
// ];

// const list = document.querySelector('.cats-list')
// const source = document.querySelector('#cats-cart-list').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template({cats})
// list.insertAdjacentHTML('afterbegin', markup)
// console.log(markup)



//=========================================

const dishes = [{
        name: 'Baked Yak & Mushrooms',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.',
        price: '61.00',
        available: true,
    },
    {
        name: 'Roasted Oysters',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Consequatur maiores eos sunt ea commodi laboriosam. Esse est et quia voluptatem voluptatem quia deleniti et ut.',
        price: '32.00',
        available: false,
    },
    {
        name: 'Strawberry Pancakes',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem.',
        price: '21.00',
        available: true,
    },
    {
        name: 'Caramel Toffee',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.',
        price: '33.00',
        available: false,
    },
    {
        name: 'Strawberry Pancakes',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.',
        price: '14.00',
        available: false,
    },
    {
        name: 'Caramel Toffee',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.',
        price: '84.00',
        available: true,
    },
    {
        name: 'Roasted Orange',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.',
        price: '63.00',
        available: true,
    },
    {
        name: 'Pistachio Elderberry Wafer',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia.',
        price: '67.00',
        available: false,
    },
    {
        name: 'Chocolate Pie',
        image: 'http://lorempixel.com/640/480/food',
        descr: 'Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit.',
        price: '26.00',
        available: false,
    },
];

const grid = document.querySelector('.grid');

const source = document.querySelector('#dish-card').innerHTML.trim();

const template = Handlebars.compile(source);

const markup = dishes.reduce((string, dish) => string + template(dish), '')

grid.insertAdjacentHTML('beforebegin', markup);