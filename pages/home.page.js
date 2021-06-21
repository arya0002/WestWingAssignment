
const elementUtil = require('../utils/elementUtil');


class HomePage{

    //Page Locators:
    get cookiesAcceptButton() {return $('#onetrust-accept-btn-handler')}
    wishlistIconSearchResult(index) {return $(`(//div[@data-testid='plp-products-grid']//div[@data-testid='generic-product'])[${index}]`)}
    get wishlistIcon()              {return $("//div[@data-testid='wishlist-icon']")}
    get selectedProductName()       {return $("//h2[@data-testid='product-title']//font/font")}
    get searchProductCount()        {return $("//div[contains(@class,'ProductCount')]")}

    //Page Actions:
    acceptCookiesNotification(){
        try{
            elementUtil.doClick(this.cookiesAcceptButton)
        }
        catch{
            throw "No cookies popup found"
        }
        
    }

    isSearchResultLoaded(value)
    {
       return elementUtil.doIsDisplayed($("//h1[contains(text(),\'"+value+"\')]"))
    }

    getSearchProductCount()
    {
        elementUtil.doIsDisplayed(this.searchProductCount)
        
        return elementUtil.getSrtingSplitValue(elementUtil.doGetText(this.searchProductCount)," ",0)
    }
    
    doclickProductWishlistIcon(index){
         //this.wishlistIconSearchResult(index).waitForDisplayed()
         //this.wishlistIconSearchResult(index).$("//div[@data-testid='wishlist-icon']").click()
         //elementUtil.doClick($(`(//div[@data-testid='plp-products-grid']//div[@data-testid='generic-product'])[${index}]`).$("//div[@data-testid='wishlist-icon']"))
         elementUtil.doClick($("(//div[@data-testid='wishlist-icon'])[1]"))
        ////div[@data-testid='plp-products-grid']//div[@data-testid='generic-product']//div[@data-testid='wishlist-icon']
        // return elementUtil.doGetValue(this.wishlistIconSearchResult(index).$("//h2[@data-testid='product-title']"))
         return elementUtil.doGetText($("(//div[@data-testid='plp-products-grid']//div[@data-testid='generic-product'])[1]//h2[@data-testid='product-title']"))
    }

    
}

module.exports= new HomePage()