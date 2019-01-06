# wdio-v5-upgrade-helper-service
This plugin will allow developers to upgrade to webdriver 5.0 without having to change all of the renamed v4 commands in their codebase.

# Install via npm
```
npm install wdio-v5-upgrade-helper-service
```

# Local Installation instructions
```
git clone https://github.com/jdavis61/wdio-v5-upgrade-helper-service.git
npm install
npm run build
```
In your webdriver repo install this repo as a local dependency.
```
npm install ../path/to/wdio-v5-upgrade-helper-service
```

# wdio.conf.js
Add `v5-upgrade-helper` to the wdio services property:
```
services: ['selenium-standalone', 'v5-upgrade-helper'],
```

# Recommendation
If you are using this plugin, make it a point to try and convert your code to v5 format with each merge to master. Keeping the old v4 code longer than necessary will make upgrading to future versions of webdriverio, e.g. version 6, much harder.

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
| browser | isExisting | N/A |
| browser | isVisible | N/A |
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
| element | getElementSize | getSize |
| element | isVisible | isDisplayed |
| element | waitForVisible | waitForDisplayed |

(1) The param for switchToWindow is a window handle string
which should be obtained from the browser.getWindowHandles command.
```
const windowHandle = browser.getWindowHandles()[1];
browser.switchTab(windowHandle); // V4
browser.switchToWindow(windowHandle); // V5
```
