import {$, browser} from '@wdio/globals' 

class frontPage{

    //declaring section
    get men() { return $('#ContentPlaceHolder_TabMenu_TabMenu_brandMenu > li:nth-child(2)') }
    get women() { return $('#ContentPlaceHolder_TabMenu_TabMenu_brandMenu > li:nth-child(3)') }
    get junior() { return $('#ContentPlaceHolder_TabMenu_TabMenu_brandMenu > li:nth-child(4)') }
    get polo() { return $('.subcat > div > a:nth-child(2)') }
    get tee() { return $('.subcat > div > a:nth-child(3)') }
    get printtee() { return $('.subcat > div > a:nth-child(4)') }
    get shirt() { return $('.subcat > div > a:nth-child(5)') }
    get dress() { return $('.subcat > div > a:nth-child(6)') }
    get short() { return $('.subcat > div > a:nth-child(7)') }
    get pantsandjeans() { return $('.subcat > div > a:nth-child(8)') }
    get socks() { return $('.subcat > div > a:nth-child(9)') }
    get briefs() { return $('.subcat > div > a:nth-child(10)') }


    //function section
    async openPage() {
        await browser.url('https://giordano.com')
    }

    async menClick() {
        await this.men.click()
    }

    async womenClick() {
        await this.women.click()
    }

    async juniorClick() {
        await this.junior.click()
    }

    async poloClick() {
        await this.polo.click()
    }

    async teeClick() {
        await this.tee.click()
    }

    async printteeClick() {
        await this.printtee.click()
    }

    async shirtClick() {
        await this.shirt.click()
    }

    async dressClick() {
        await this.dress.click()
    }

    async shortClick() {
        await this.short.click()
    }

    async pantsandjeansClick() {
        await this.pantsandjeans.click()
    }

    async socksClick() {
        await this.socks.click()
    }

    async briefsClick() {
        await this.briefs.click()
    }
}

export default new frontPage()