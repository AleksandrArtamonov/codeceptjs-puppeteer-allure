const {I} = inject();

module.exports = {
    payment_types: {
        by_bank_wire: 'Pay by bank wire',
        by_check: 'Pay by check',
    },
    process_address: '//button[@name=\'processAddress\']//span[contains(text(),\'Proceed to checkout\')]',
    process_carrier: '//button[@name=\'processCarrier\']//span[contains(text(),\'Proceed to checkout\')]',
    process_simple: '//a[@class=\'button btn btn-default standard-checkout button-medium\']//span[contains(text(),\'Proceed to checkout\')]',


    continue_shopping() {
        I.click({xpath: '//a[@title=\'Continue shopping\']'})
    },

    proceed_to_checkout(process_name) {
        I.scrollTo({xpath: process_name})
        I.click({xpath: process_name})
    },

    increment_product_count(productNumber) {
        I.click({xpath: `//tr[contains(@id, 'product_${productNumber}')]//i[@class='icon-plus']`})
    },

    remove_product(productNumber) {
        I.click({xpath: `//tr[contains(@id, 'product_${productNumber}')]//i[@class='icon-trash']`})
    },

    agree_term_service() {
        I.scrollTo({xpath: '//button[@name=\'processCarrier\']//span[contains(text(),\'Proceed to checkout\')]'})
        I.checkOption('I agree to the terms of service and will adhere to them unconditionally.')
    },

    confirm_order() {
        I.scrollTo({xpath: '//span[contains(text(),\'I confirm my order\')]'})
        I.click({xpath: '//span[contains(text(),\'I confirm my order\')]'})
        I.waitForElement({xpath: '//div[@class=\'box\']//strong[contains(text(),\'Your order on My Store is complete.\')]'})
    },

    pay(paymentType) {
        this.proceed_to_checkout(this.process_simple)
        this.proceed_to_checkout(this.process_address)
        this.agree_term_service()
        this.proceed_to_checkout(this.process_carrier)
        if ( paymentType === this.payment_types.by_bank_wire) {
            this.pay_by_bank_wire()
        } else {
            this.pay_by_check()
        }
        this.confirm_order()
    },

    pay_by_bank_wire() {
        I.click('Pay by bank wire')
    },

    pay_by_check() {
        I.click('Pay by check')
    },

    back_to_orders() {
        I.scrollTo({xpath: '//a[@title=\'Back to orders\']'})
        I.click({xpath: '//a[@title=\'Back to orders\']'})
        I.order_history_page_wait()
    }
}
