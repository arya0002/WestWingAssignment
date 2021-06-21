const { assert, expect } = require('chai')

const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const configData = require('../resources/config')
const wishlistPage = require('../pages/wishlist.page')
const topBar = require('../pages/topbar')
const elementUtil = require('../utils/elementUtil')
const fs = require('fs')
let e2eTestData = JSON.parse(fs.readFileSync('resources\\testdata\\DeleteFromWishlist.json'))
let productName= null
let searchProductCount =null
let currentWishlistCount = null


describe('Wishlist page delete E2E feature test',function(){
  e2eTestData.forEach(({emailID,password,firstName,searchProduct})=>{

    it('Navigate to homepage and search product', function(){
        browser.url('/');
        browser.maximizeWindow();
        const title = elementUtil.doGetTitle();
        expect(homePage.getPageTitle()).equals(configData.homePageTitle)
        console.log('login page title is: ', title);
        homePage.acceptCookiesNotification();
        topBar.doSearch(searchProduct);
        topBar.doSearch("Enter");
        console.log('Search text ',searchProduct,' entered in the searchbox and hit enter')
    })
    
    it('Login to the account', function(){
      loginPage.doClickLoginHereLnk();
      console.log('Clicked on the login here link on registration form')
          
      loginPage.doLogin(emailID,password);
         
      expect(topBar.getLoginUser()).equals(firstName);
      console.log('Login successful for: ' ,topBar.getLoginUser());
    })

    it('Verify if the search result loaded and get the total count of product listed', function(){
      homePage.isSearchResultLoaded(searchProduct);
      searchProductCount = homePage.getSearchProductCount();
    })


    it('Get the current wishlist count and Wishlist the first product from search list', function(){
      //check the wishlistcounter before wishlisting the product 
      if (topBar.wishlistCounterTxt.isDisplayed())
      {
        currentWishlistCount=topBar.getCurrentWishListCount()
        console.log('Current number of item in wisshlist is: ',currentWishlistCount);

      }else{
        currentWishlistCount="0"
        console.log('Currently no items are added in wishlist bucket');
      }
      //Check if the search result product count is 0 then , wishlist the first product
      if(parseInt(searchProductCount)>0)
      {
       productName = homePage.doclickProductWishlistIcon(1);
       console.log('Clicked on wishlist icon for product: ',productName);
      }
      else{
       throw "there is no product for searched text"
      }
    })

    it('Verify the wishlist counter is showing the correct number', function(){
      //Check the wishlist counter after wishlisting the product, it should be increased by 1
      expect(parseInt(currentWishlistCount)+1 == parseInt(topBar.getCurrentWishListCount()),'Wishlist number is not correct',topBar.getCurrentWishListCount());

    })

    it('Navigate to wishlist page', function(){
      wishlistPage.navToWishList(configData.basURL+configData.wishlistURL);
      expect(wishlistPage.isWishlistPageLoaded(),"Wishlist page not found");
      console.log('Navigated to Wishlist page');
      
    })

    it('Delete the wishlisted product', function(){
      wishlistPage.doDeleteProductFromWishlist(productName);
      expect(wishlistPage.wishListProductDeletebtn(productName).isDisplayed(),"Product is not deleted from wishlist")
      console.log('Product Deleted');
    })
  })


})