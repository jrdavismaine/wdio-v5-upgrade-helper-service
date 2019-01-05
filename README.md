# wdio-v5-upgrade-helper-service
Webriverio.io plugin to allow usage of some renamed webdriverio v4 commands with webdriverio 5.0. All v4 commands are wrappers to their replacements, e.g. waitForVisible is a wrapper function for waitForDisplayed.

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

# Purpose
This plugin will allow developers to upgrade to webdriver 5.0 (v5) without having to change all of the renamed v4 commands. This plugin will give development teams the option of upgrading to v5 without having to change the entire code base at once.

# Recommendation
If you are using this plugin, make it a point to convert your code to v5 format, e.g. remove all `browser.click(selector)` statements, before each merge to master. Avoid the tempation to keep this plugin installed permanently. Doing this will only make upgrading to future versions of webdriverio, e.g. webdriverio 6.0, much more difficult. The purpose of this plugin is to make upgrading from v4 to v5 easier and avoid having to change everything at once.

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
