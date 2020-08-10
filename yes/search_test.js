const {I} = inject();

Feature('search');

Before(login => {
    login('user');
});

After(() => {
    I.logout()
})

let search_words = new DataTable(['search_words']); //
search_words.add(['pants']); // adding records to a table
search_words.add(['red tops']);
search_words.add(['resses*']);

Data(search_words).Scenario('search with no results ', (current) => {
    I.search(current.search_words)
    I.see('0 results have been found')
    I.see('No results were found for your search')
});

Scenario('search by one word', () => {
    I.search('t-shirts')
    I.see('1 result has been found')
    I.see('Faded Short Sleeve T-shirts')
});

Scenario('search by several words', () => {
    I.search('summer dresses')
    I.see('4 results have been found')
    I.see('Printed Summer Dress')
});

Scenario('search by pattern', () => {
    I.search('shirt')
    I.see('1 result has been found.')
    I.see('Faded Short Sleeve T-shirts')
});
