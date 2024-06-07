import {$,browser} from '@wdio/globals'

class poloBuy {
    get poloTitle() { return $('h1')}
    
    get poloList1() { return $('#dvContain:nth-child(1) > div > a') }
    get poloList2() { return $('#dvContain:nth-child(2) > div > a') }
    get poloList3() { return $('#dvContain:nth-child(3) > div > a') }

    get poloColor() { return $('#ContentPlaceHolder1_ContentPlaceHolderPageContent_ucProductInfo_dlColors_dvcolor1_0')}
    get poloColor1() { return $('#ContentPlaceHolder1_ContentPlaceHolderPageContent_ucProductInfo_dlColors_dvcolor1_1')}

    get sizeXS() { return $('#dvsizeList > div > div:nth-child(1)') }
    get sizeS() { return $('#dvsizeList > div > div:nth-child(2)') }
    get sizeM() { return $('#dvsizeList > div > div:nth-child(3)') }
    get sizeL() { return $('#dvsizeList > div > div:nth-child(4)') }
    get sizeXL() { return $('#dvsizeList > div > div:nth-child(5)') }
    get sizeXXL() { return $('#dvsizeList > div > div:nth-child(6)') }

    get qty() { return $('#spinQty')}

    get add2cartbtn() { return $('#divAddChart > a')}


    //function section
    async openPage() {
        await browser.url('https://giordano.com/ID/en-US/C1.aspx?TabID=100900&SysCateID=01&PageID=1')
    }

    async poloGet() {
        // let polos = [this.poloList1, this.poloList2, this.poloList3]
        // await polos[i].waitForExist().then(polos[i].click())
        await this.poloList3.waitForExist().then(this.poloList3.click())
        await browser.pause(2000)
    }

    async colorPick(i) {
        let colors = [this.poloColor, this.poloColor1]
        await colors[i].waitForExist().then(colors[i].click())
        await browser.pause(2000)
    }

    async sizePick(i) {
        let ukuran = [
            this.sizeXS, this.sizeS,
            this.sizeM, this.sizeL,
            this.sizeXL, this.sizeXXL
        ]
        await ukuran[i].waitForExist().then(ukuran[i].click())
        await browser.pause(2000)
    }

    async setQty(jml) {
        await this.qty.waitForExist().then(this.qty.setValue(jml))
        await browser.pause(2000)
    }

    async add2Cart() {
        await this.add2cartbtn.waitForExist().then(this.add2cartbtn.click())
        await browser.pause(2000)
    }
}

export default new poloBuy()