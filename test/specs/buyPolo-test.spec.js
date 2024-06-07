import frontPage from "../pageobjects/frontpagepop.page.js"
import poloBuy from "../pageobjects/polopop.page.js"

describe('Test Buy Polo Feature', () => {
    before( async () => {
        await poloBuy.openPage()
    })

    it('Select 1 polo from the polo categories', async () => {
        await poloBuy.poloGet(2)
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/Product/01011413001/04')
    })

    it('Select color', async () => {
        await poloBuy.colorPick(1)
        // expect(poloBuy.poloColor).toBeClickable
        // expect(poloBuy.poloColor1).toBeClickable
    })

    it('Select size', async () => {
        await poloBuy.sizePick(2)
    })

    it('Select Quantity', async () => {
        await poloBuy.setQty(2)
        expect(poloBuy.qty).toHaveValue()
    })

    it('Clicking Add to shopping cart button', async () => {
        await poloBuy.add2Cart()
        // expect(poloBuy.add2cartbtn).toBeClickable()
    })
})