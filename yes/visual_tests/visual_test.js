const {I, catalog_page, api_requests} = inject();

Feature('To test screen comparison with resemble');

Before(login => {
    login('user');
});

After( () => {
    I.logout
})

// Please  set prepareBaseImage: false after first run

Scenario('Cart with products @visual-test', async () => {
    await api_requests.add_product_to_cart_by_id(I.test_product_ids.top)
    await api_requests.add_product_to_cart_by_id(I.test_product_ids.blouse)
    I.goToShoppingCartPage()
    I.saveScreenshot("Shopping_Cart_Top_Screenshot_Image.png")
    I.seeVisualDiff("Shopping_Cart_Top_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: true})
    I.scrollPageToBottom()
    I.saveScreenshot("Shopping_Cart_Bottom_Screenshot_Image.png")
    I.seeVisualDiff("Shopping_Cart_Bottom_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: true})
    await api_requests.remove_product_from_cart_by_id(I.test_product_ids.top)
    await api_requests.remove_product_from_cart_by_id(I.test_product_ids.blouse)
});

Scenario('Product page @visual-test', async () => {
    I.search('blouses')
    catalog_page.go_to_product_page(I.test_product_ids.blouse)
    I.saveScreenshot("Product_Page_Top_Screenshot_Image.png");
    I.seeVisualDiff("Product_Page_Top_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: true});
    I.scrollPageToBottom()
    I.saveScreenshot("Product_Page_Bottom_Screenshot_Image.png");
    I.seeVisualDiff("Product_Page_Bottom_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: true});
});
