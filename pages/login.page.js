
const elementUtil = require('../utils/elementUtil');

class LoginPage{

    //Page Locators:
    get registrationForm() {return $("div[data-testid='reg__mode']")}
    get registrationFormPopup() {return $("//form[contains(@class,'RegistrationForm')]")}
    get loginHereLnk() {return $("button[data-testid='login-button']")}
    get loginForm() {return $("div[data-testid='login__mode']")}
    get username() {return $("input[name='email']")}
    get password() {return $("input[name='password']")}
    get loginBtn() {return $("button[type='submit']")}
    
    
    
    //Page Actions:
    isLoginFormDisplayed(){
        return elementUtil.doIsDisplayed(this.loginForm)
    }

    doClickLoginHereLnk(){
        elementUtil.doIsDisplayed(this.registrationFormPopup)
        elementUtil.doClick(this.loginHereLnk)
    }

    doLogin(emailID,password){
            elementUtil.doIsDisplayed(this.loginForm)
            elementUtil.doSetValue(this.username, emailID)
            elementUtil.doSetValue(this.password, password)
            elementUtil.doClick(this.loginBtn)
    }

}
module.exports= new LoginPage()