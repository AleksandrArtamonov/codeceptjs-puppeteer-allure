// in this file you can append custom step methods to 'I' object (methods for header for a example)

module.exports = function() {
  return actor({

    default_email: "test999999@gmail.com",
    default_password: "qwerty123",
    category: {
      women: 'Women',
      dresses: 'Dresses',
      tshirts: 'T-shirts',
    },
    test_product_ids: {
      blouse: 2,
      top: 1,
    },


    category_wait (category) {
      this.waitForElement({xpath: `//span[@class=\'category-name\' and contains(text(), \'${category}\')]`});
    },

    shopping_cart_page_wait() {
      this.waitForText('Your shopping cart')
    },

    order_history_page_wait() {
      this.waitForText('Order history')
    },

    login (email = this.default_email, password = this.default_password) {
      this.amOnPage('/');
      this.click({xpath: "//a[@class=\'login\']"})
      this.fillField({id: 'email'}, email);
      this.fillField({id: 'passwd'}, password);
      this.click({id: "SubmitLogin"});
      this.waitForText('Sign out')
    },

    chooseMenuOption (menu, menuOption) {
      this.click(menu);
      this.click(menuOption);
    },

    logout() {
      this.click({xpath: '//a[contains(text(),\'Sign out\')]'});
      this.waitForText('Sign in');
    },

    goToWomenCategory() {
      this.click({xpath: `//a[@class=\'sf-with-ul\' and contains(text(),\'${this.category.women}\')]`})
      this.category_wait(this.category.women)
    },

    goToShoppingCartPage() {
      this.click({xpath: '//a[@title=\'View my shopping cart\']'});
      this.shopping_cart_page_wait()
    },

    search(search_words) {
      this.fillField({id: 'search_query_top'}, search_words)
      this.click({name: 'submit_search'})
      this.waitForElement({xpath: '//h1[contains(@class,\'product-listing\') and contains(text(), \'Search\')]'})
    },

    fast_view_shopping_cart() {
      this.scrollPageToTop()
      this.moveCursorTo({xpath: '//b[contains(text(),\'Cart\')]'})
      this.waitForElement({xpath: '//span[contains(text(),\'Check out\')]'})
    },

    fast_view_remove_first_item() {
      this.fast_view_shopping_cart()
      this.click({xpath: '//a[@class=\'ajax_cart_block_remove_link\']'})
      this.sendPostRequest()
    },

    goToCart() {
      this.click({xpath: '//b[contains(text(),\'Cart\')]'})

    },

    go_to_my_account() {
      this.click({xpath: '//a[contains(text(), \'My account\')]'})
      this.waitForElement({xpath: '//h1[@class=\'page-heading\' and contains(text(), \'My account\')]'})
    },

    go_to_my_orders() {
      this.click({xpath: '//a[contains(text(), \'My orders\')]'})
      this.waitForElement({xpath: '//h1[contains(text(), \'Order history\')]'})
    }
  });
}
