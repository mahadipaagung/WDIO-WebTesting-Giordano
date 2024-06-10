import frontPage from "../pageobjects/frontpagepop.page.js"
import poloBuy from "../pageobjects/polopop.page.js"

describe('Test Buy Polo Feature', () => {
    before( async () => {
        await poloBuy.openProduct3Page()
    })

    // it('Select 1 polo from the polo categories', async () => {
    //     await poloBuy.poloGet(2)
    //     expect(browser).toHaveUrl('https://giordano.com/ID/en-US/Product/01011413001/04')
    // })
    
    it('Select color', async () => {
        await poloBuy.colorPick(0)
        expect(poloBuy.poloColor).toHaveAttribute('style="height: 75px; width: 75px; border: 2px solid rgb(121, 154, 224); cursor: pointer')
    })

    it('Select size', async () => {
        await poloBuy.sizePick(2)
        expect(poloBuy.sizeM).toHaveAttribute('style="border: 2px solid rgb(121, 154, 224)')
    })

    it('Select Quantity', async () => {
        await poloBuy.setQty(2)
        expect(poloBuy.qty).toHaveValue(2)
    })

    it('Clicking Add to shopping cart button', async () => {
        await poloBuy.add2Cart()
        expect(poloBuy.shoppingcartqv).toHaveText("Below items are in your shopping Car")
    })
})
describe('Negative Test', () => {
    before( async () => {
        await poloBuy.openProduct3Page()
    })
    it('Clicking add to cart button while size not clicked', async () => {
        await poloBuy.colorPick(1)
        await poloBuy.setQty(1)
        await poloBuy.add2Cart()
        expect(poloBuy.toast).toBeDisplayed()
    })
})