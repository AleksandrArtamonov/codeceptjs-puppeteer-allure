const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const { I } = inject();

module.exports = {
    async add_product_to_cart_by_id(product_id) {
        const payload = `controller=cart&add=1&ajax=true&qty=1&id_product=${product_id}&token=bbafe9ecc334928a32f98eae772430a2`
        let res = await I.sendPostRequest('', payload,
            {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Encoding': 'gzip, deflate',
                'Cache-Control': 'no-cache',
                'Accept-Language': 'en-US,en;q=0.9',
                'X-Requested-With': 'XMLHttpRequest',
                'Host': 'automationpractice.com',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': `${payload.length}`
            })
        expect(res.status).to.eq(200)
        I.refreshPage()
    },

    async remove_product_from_cart_by_id(product_id) {
        const payload = `delete=1&ipa=1&id_address_delivery=347428&controller=cart&ajax=true&id_product=${product_id}&token=bbafe9ecc334928a32f98eae772430a2`
        let res = await I.sendPostRequest('', payload,
            {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Encoding': 'gzip, deflate',
                'Cache-Control': 'no-cache',
                'Accept-Language': 'en-US,en;q=0.9',
                'X-Requested-With': 'XMLHttpRequest',
                'Host': 'automationpractice.com',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': `${payload.length}`
            })
        expect(res.status).to.eq(200)
        I.refreshPage()
    }
}
