class ElementUtil{

    doWait(time) {
		browser.Pause(time)
	}

    doNavToURL(url)
    {
        browser.url(url)
    }

    doGetCurrentUrl() {
		return  browser.getUrl()
	}

    doClick(element){
        element.waitForDisplayed()
        element.waitForClickable()
        element.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetTitle(){
        //browser.waitUntil(function(){
          //  return (!browser.getTitle()=== null)
        //},10000,'Title not found')
      //  this.waitFortextChange(element,text,timeout)
        return browser.getTitle()
    }

    doGetHeader(element)
    {
        element.waitForDisplayed()
        return element.getText();
    }

    waitFortextChange(element, text, timeout)
    {
        browser.waitUntil(
            function(){
                return element.getText() === text;
            },{timeout}
        )
    }


    getSrtingSplitValue(text, splitChar, index)
    {
        let temp = text.split(" ")
        return temp[index]

    }




}

module.exports= new ElementUtil()

