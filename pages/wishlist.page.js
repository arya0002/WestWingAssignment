
const elementUtil = require('../utils/elementUtil');

class Wishlist{

    //Page locators
    get wishListPage()  {return $('.wishlistPage')}
    get wishListProduct()  {return $('.blockListProduct.qaBlockListProduct')}
    wishListProductDeletebtn(value) {return $(`//p[text()='${value}']//preceding::button[contains(@class,'delete')]`)}


    //Page Actions
    navToWishList(url)
    {
        elementUtil.doNavToURL(url)
    }

    isWishlistPageLoaded()
    {
        return elementUtil.doIsDisplayed(this.wishListPage)
    }

    doDeleteProductFromWishlist(productName)
    {
        elementUtil.doClick(this.wishListProductDeletebtn(productName))
    }

  

}
module.exports= new Wishlist()