const elementUtil = require('../utils/elementUtil')

class TopBar {

    get searchTxtFeild()        {return  $("//input[@type='search']")}
    get myAccntUsrName()        {return $("//div[contains(@data-testid,'my-account')]//span[contains(@class,'MenuSubLabel')]")}
    get wishlistIcon()          {return $("//div[contains(@data-testid,'wishlist-bubble')]")}
    get wishlistCounterTxt()    {return $("//span[@data-testid='wishlist-counter']")}




    doSearch(searchText){
        elementUtil.doSetValue(this.searchTxtFeild,searchText)
       // elementUtil.doSetValue(this.searchTxtFeild,"Enter")
    }


    getLoginUser(){
        return elementUtil.doGetText(this.myAccntUsrName)
    }


    clickOnWishListIcon()
    {
        elementUtil.doClick(this.wishlistIcon)
    }

    getCurrentWishListCount()
    {
        return elementUtil.doGetText(this.wishlistCounterTxt)
    }

    
}

module.exports= new TopBar()