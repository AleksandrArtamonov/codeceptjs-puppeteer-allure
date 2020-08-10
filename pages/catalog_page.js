const {I} = inject();

module.exports = {

    subcategories: {
        dresses: 'Dresses',
        tops: 'Tops',
        blouses: 'Blouses',
        tshirts: 'T-shirts',
        casual_dresses: 'Casual Dresses',
        summer_dresses: 'Summer Dresses',
        evening_dresses: 'Evening Dresses'
    },

    add_to_cart(dataIdProduct) {
        I.click({xpath: `//a[@title=\'Add to cart\' and @data-id-product=${dataIdProduct}]`})
        I.waitForText('Product successfully added to your shopping cart')
    },

    add_to_cart_continue(dataIdProduct) {
        this.add_to_cart(dataIdProduct)
        I.click('Continue shopping')
    },

    add_to_cart_go_to_summary(dataIdProduct) {
        this.add_to_cart(dataIdProduct)
        I.click('Proceed to checkout')
        I.shopping_cart_page_wait()
    },

    go_to_product_page(dataIdProduct) {
        I.click({xpath: `//div[a[@title='Add to cart' and @data-id-product=${dataIdProduct}]]//span[contains(text(), 'More')]`})
        I.waitForText('DATA SHEET')
    },

    goToSubcategory(subcategory) {
        I.scrollTo({xpath: `//a[@class=\'subcategory-name\' and contains(text(), \'${subcategory}\')]`})
        I.click({xpath: `//a[@class=\'subcategory-name\' and contains(text(), \'${subcategory}\')]`})
        I.category_wait(subcategory)
    },
}
