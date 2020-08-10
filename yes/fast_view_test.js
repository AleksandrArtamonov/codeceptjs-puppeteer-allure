const {I, catalog_page, api_requests} = inject();

Feature('fast view');

Before(login => {
    login('user');
});

After(() => {
    I.logout()
})

Scenario('add products to cart', async () => {
    I.search('T-shirts')
    catalog_page.add_to_cart_continue('1')
    I.fast_view_shopping_cart()
    I.see('Shipping')
    I.see('Total')
    I.see('$18.51')
    I.see('$2.00')
    I.see('$16.51')
    I.seeElement({xpath: '//a[@class=\'cart_block_product_name\' and @title=\'Faded Short Sleeve T-shirts\']'})
    await api_requests.remove_product_from_cart_by_id(I.test_product_ids.top)
})

Scenario('delete products from cart', async () => {
    await api_requests.add_product_to_cart_by_id(I.test_product_ids.top)
    I.fast_view_remove_first_item()
    I.waitForText('(empty)')
})

Scenario('always failed test for allure report', () => {
    I.search('t-shirts')
    I.see('0 result has been found')
})
