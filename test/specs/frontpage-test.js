import frontpagepop from "../pageobjects/frontpagepop.page.js";

describe('Testing FrontPage Navbar and Categories', () => {
    it("Men's nav button Testing", () => {
        frontpagepop.openPage()
        frontpagepop.menClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/c1.aspx?SKeyWord=TABMAIN_100010')
        })
    it("Women's nav button Testing", () => {
        frontpagepop.openPage()
        frontpagepop.womenClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/c1.aspx?SKeyWord=TABMAIN_100020')
    })
    it("Junior's nav button testing", () => {
        frontpagepop.openPage()
        frontpagepop.juniorClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/c1.aspx?SKeyWord=TABMAIN_100200')
    })
        
    it("Polo categories button testing", () => {
        frontpagepop.openPage()
        frontpagepop.poloClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/C1.aspx?TabID=100900&SysCateID=01&PageID=1')
    })
    it("Tee categories button testing", () => {
        frontpagepop.openPage()
        frontpagepop.teeClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/C1.aspx?TabID=100900&SysCateID=02&PageID=1')
    })
    it("Print Tee categories button testing", () => {
        frontpagepop.openPage()
        frontpagepop.printteeClick()
        expect(browser).toHaveUrl('https://giordano.com/ID/en-US/C1.aspx?TabID=100900&SysCateID=09&PageID=1')
    })
})