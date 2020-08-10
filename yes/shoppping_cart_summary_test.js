const {I, shopping_cart_page, api_requests} = inject();

Feature('shopping cart');

Before(login => {
    login('user');
});

After(() => {
    I.logout()
})

let payment_types = new DataTable(['payment_type'])
payment_types.add([shopping_cart_page.payment_types.by_bank_wire])
payment_types.add([shopping_cart_page.payment_types.by_check])

Data(payment_types).Scenario('check payment methods', async (current) => {
    await api_requests.add_product_to_cart_by_id(I.test_product_ids.blouse)
    I.goToShoppingCartPage()
    shopping_cart_page.pay(current.payment_type)
    let ref = await I.grabTextFrom({xpath: '//div[@class=\'box\']//br[5]'})
    shopping_cart_page.back_to_orders()
    I.seeElement({xpath: `//a[contains(text(),\'${ref.substring(48, 57)}\')]`})
});
