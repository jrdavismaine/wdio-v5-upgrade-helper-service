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
This plugin will allow developers to upgrade to webdriver 5.0 without having to change all of the renamed commands, e.g. waitForVisible() or isVisible(). This plugin will appeal to developers and/or development teams that have to make changes to their automation platform incrementally and may not be able to upgrade the entire code base at once.

# Recommendation
Do not use this plugin as a crutch but as a tool to help upgrade your webdriver.io project to version 5.0, e.g. do not make a permanent dependency. Meant as a tool to make upgrading easier.

# Supported V4 commands
| Object  | V4 name  | V5 name |
| :----:  | :-----:  | :-----: |
| browser | alertAccept | acceptAlert |
| browser | alertDismiss | dismissAlert |
| browser | alertText | getAlertText |
| browser | click | N/A |
| browser | deleteCookie | deleteCookies |
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