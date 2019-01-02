# wdio-v5-upgrade-helper-service
Webriverio.io plugin to allow usage of all renamed webdriverio v4 commands with webdriverio 5.0. All v4 commands are wrappers to their replacements, e.g. waitForVisible is a wrapper function for waitForDisplayed.

Note the code in this repo is experimential at this stage. For demo puproses only as of 1/1/19. Beta coming soon!

# Install via npm
```
npm install wdio-v5-upgrade-helper-service@latest
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
This plugin will allow developers to upgrade to webdriver 5.0 without having to change all of the renamed commands, e.g. waitForVisible() or isVisible(). This plugin will appeal to developers and/or development teams that have to make changes incrementally to their automation platform and may not be able to upgrade the entire code base at once.

# Recommendation
Do not use this plugin as a crutch but as a tool to help upgrade your webdriver.io project to version 5.0, e.g. do not make a permanent dependency. Meant as a tool to make upgrading easier.

