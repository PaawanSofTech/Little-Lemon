const specials = [
    {
        id: 1,
        title: 'Greek salad',
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        image: require('../icons_assets/greek-salad.webp'),
        alt: 'Greek salad dish'
    },
    {
        id: 2,
        title: 'Bruchetta',
        price: '$5.99',
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned salt and olive oil.',
        image: require('../icons_assets/bruchetta.webp'),
        alt: 'Bruchetta sandwitch'
    },
    {
        id: 3,
        title: 'Lemon Dessert',
        price: '$5.00',
        description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        image: require('../icons_assets/lemon-dessert.webp'),
        alt: 'Lemon dessert'
    }
]

const testimonials = [
    {
        id: 1,
        name: 'Michael Spencer',
        image: require('../icons_assets/michael.webp'),
        rating: '5',
        testimonial: 'WOW!!! What an outstanding dinner you prepared at the south Little Lemon restuarant on Friday evening!!! It was an honor for me to be invited and experience firsthand your incredible culinary gift! MERCI BEAUCOUP seems soooooooo inadequate!'
    },
    {
        id: 2,
        name: 'Naomi Gordon',
        image: require('../icons_assets/naomi.webp'),
        rating: '4.5',
        testimonial: 'My friend and I were at Little Lemon last night for dinner. I want to thank you and the rest of the staff for the excellent food and service provided. It was our first visit and we both agreed that it was a wonderful experience.'
    },
    {
        id: 3,
        name: 'Kane Williams',
        image: require('../icons_assets/kane.webp'),
        rating: '4.5',
        testimonial: 'It is always a special treat to dine at Little Lemon. Last night my friend Anna and I had dinner at your wonderful restaurant before going to see a play at the La Jolla Playhouse.'
    }
]

export {specials, testimonials}