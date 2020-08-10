const {I, catalog_page} = inject();

Feature('catalog transition');

Before(login => {
    login('user');
});

After(() => {
    I.logout
})

Scenario('Go to woman category', () => {
    I.goToWomenCategory()
    I.see('You will find here all woman fashion collections.')
    I.see('There are 7 products')
})

let dresses_subcategories = new DataTable(['subcategory', 'definition', 'product_count']); //
dresses_subcategories.add([catalog_page.subcategories.casual_dresses, 'You are looking for a dress for every day? Take a look at',
    'There is 1 product']);
dresses_subcategories.add([catalog_page.subcategories.evening_dresses, 'Browse our different dresses to choose the perfect dress for an unforgettable evening!',
    'There is 1 product']);
dresses_subcategories.add([catalog_page.subcategories.summer_dresses, 'Short dress, long dress, silk dress, printed dress, you will find the perfect dress for',
    'There are 3 products']);

Data(dresses_subcategories).Scenario('Go to dresses subcategories', (current) => {
    I.goToWomenCategory()
    catalog_page.goToSubcategory(catalog_page.subcategories.dresses)
    catalog_page.goToSubcategory(current.subcategory)
    I.see(current.definition)
    I.see(current.product_count)
});

let women_subcategories = new DataTable(['subcategory', 'definition', 'product_count']); //
women_subcategories.add([catalog_page.subcategories.dresses, 'Find your favorites dresses from our wide choice of evening, casual or summer dresses!',
    'There are 5 products']);
women_subcategories.add([catalog_page.subcategories.tops, 'Choose from t-shirts, tops, blouses, short sleeves, long sleeves, tank tops, 3/4 sleeves',
'There are 2 products']);

Data(women_subcategories).Scenario('Go to women subcategories', (current) => {
    I.goToWomenCategory()
    catalog_page.goToSubcategory(current.subcategory)
    I.see(current.definition)
    I.see(current.product_count)
});
