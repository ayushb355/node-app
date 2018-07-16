var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingCart', { useNewUrlParser: true });
var products = [
    new Product({
    imagePath: 'https://images.alphacoders.com/225/225863.png',
    title: 'Games of Thrones',
    description: 'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996',
    price: 10
}),
    new Product({
        imagePath: 'https://images5.alphacoders.com/636/636560.jpg',
        title: 'Breaking Bad',
        description: 'Mild-mannered high school chemistry teacher Walter White thinks his life can\'t get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.',
        price: 12
    }),

    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/friends/images/e/e6/Friends-tv-series-wallpapers-1280x1024.jpg/revision/latest?cb=20120304152054',
        title: 'F.R.I.E.N.D.S',
        description: 'Three young men and three young women - of the BFF kind - live in the same apartment complex and face life and love in New York. They\'re not above sticking their noses into one another\'s businesses and swapping romantic partners, which always leads to the kind of hilarity average people will never experience - especially during breakups.',
        price: 15
    }),

    new Product({
        imagePath: 'https://images.alphacoders.com/876/876121.jpg',
        title: 'The Wire',
        description: 'This series looks at the narcotics scene in Baltimore through the eyes of law enforcers as well as the drug dealers and users. Other facets of the city that are explored in the series are the government and bureaucracy, schools and the news media. The show was created by former police reporter David Simon, who also wrote many of the episodes.',
        price: 12
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg',
        title: 'Cosmos',
        description: '`Family Guy\' creator Seth MacFarlane, in a departure from the type of material he is best known for, pays homage to Carl Sagan\'s award-winning and iconic `Cosmos\' with this docuseries. Through stories of humankind\'s quest for knowledge, viewers travel across the universe. Scientific concepts are presented clearly, with both skepticism and wonder, to impart their full impact. Renowned astrophysicist Neil deGrasse Tyson hosts, and Sagan\'s original creative collaborator, Ann Druyan, serves as an executive producer.',
        price: 14
    }),

    new Product({
        imagePath: 'https://images8.alphacoders.com/487/487434.jpg',
        title: 'House of Cards',
        description: 'U.S. Rep. Francis Underwood of South Carolina starts out as a ruthless politician seeking revenge in this Netflix original production. Promised the post of Secretary of State in exchange for his support, his efforts help to ensure the election of Garrett Walker to the presidency. But Walker changes his mind before the inauguration, telling Underwood he\'s too valuable in Congress. Outwardly, Underwood accepts his marching orders, but secretly he and his wife, an environmental activist, make a pact to destroy Walker and his allies. Based on the U.K. miniseries of the same name, the U.S. version offers a look behind the scenes at the greed and corruption in American politics. A number of real-life media figures make cameo appearances.',
        price: 10
    }),
    ];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
    function exit(){
        mongoose.disconnect();
    }
}

