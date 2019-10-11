# wdio-v5-upgrade-helper-service
This plugin will allow developers to upgrade to WebdriverIO 5.0 without having to change all of the renamed v4 commands in their codebase.

Note this plugin works best with WebdriverIO version 5.7.0 or greater. Please upgrade to the latest version of [webdriverio](https://github.com/webdriverio/webdriverio) if you have not done so already.

# Install via npm
```
npm install wdio-v5-upgrade-helper-service
```

# wdio.conf.js
Add `v5-upgrade-helper` to the wdio services property:
```
services: ['selenium-standalone', 'v5-upgrade-helper'],
```

# Supported V4 commands
| Object  | V4 name  | V5 name |
| :----:  | :-----:  | :-----: |
| browser | alertAccept | acceptAlert |
| browser | alertDismiss | dismissAlert |
| browser | alertText | getAlertText |
| browser | click | N/A |
| browser | element | findElement or $ |
| browser | elements | findElements or $$ |
| browser | getAttribute | N/A |
| browser | getCookie | getCookies |
| browser | getCssProperty | N/A |
| browser | getSource | getPageSource |
| browser | getText | N/A |
| browser | getViewportSize | getWindowSize |
| browser | isExisting | N/A |
| browser | isVisible | N/A |
| browser | moveToObject | N/A |
| browser | reload | reloadSession |    
| browser | screenshot | takeScreenshot |
| browser | setCookie | setCookies |
| browser | setValue | N/A |
| browser | setViewportSize | setWindowSize |
| browser | scroll | scrollIntoView |
| browser | source | getPageSource |
| browser | switchTo | switchToWindow (1)|
| browser | title | getTitle |
| browser | waitForExist | N/A |
| browser | waitForVisible | N/A |
| browser | windowHandles | getWindowHandles |
| browser | windowHandleFullscreen | fullscreenwindow |
| browser | windowHandleMaximize | maximizeWindow |
| element | clearElement | clearValue |
| element | getCssProperty | getCSSProperty |
| element | moveToObject | moveTo |
| element | isVisible | isDisplayed |
| element | waitForVisible | waitForDisplayed |
| element | selectByValue | selectByVisibleText |

(1) The param for switchToWindow is a window handle string
which should be obtained from the browser.getWindowHandles command.
```
const windowHandle = browser.getWindowHandles()[1];
browser.switchTab(windowHandle); // V4
browser.switchToWindow(windowHandle); // V5
```

# Attempted
| Object  | V4 name  | V5 error / reason | V5 Workaround |
| :----:  | :-----:  | :---------------- | :------------ |
| element | getElementSize | Kept getting Wrong parameters applied for getElementSize. | Rename to getSize. |
| browser | execute | Search and replace easier. | Remove .value from all browser.execute scripts. |
| element | waitForVisible(true\|false) | As of version 5.7.0 passing a boolean value as the only arguement produced inconsistent results. | Do not call waitForVisible with just a boolean argument, always include timeout as well. Other variations of waitVisible, e.g. waitForVisible(), waitForVisible(5000) continue to work as intended. waitForVisible(true) does not though. |
| browser | deleteCookie | deleteCookie without a cookie name will throw an error. Unfortunately I have not been able to override deleteCookie(). | Rename all instances of browser.deleteCookie() to browser.deleteCookies(). Note browser.deleteCookie(cookieName) still works great. |

# Deprecation notice
This adapter was created to help developers migrate their code from WebdriverIO 4 to 5, not as a permanent solution. My plan is to deprecate this repo by January 1st, 2020. Up until 1/1/2020 I will continue to add code, upgrade dependencies to this repo, after 1/1/20 it will no longer be maintained. The reason for this decision is WebdriverIO 5 will be one year old at this point and you probably should have upgraded by then.
