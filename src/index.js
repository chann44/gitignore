#!/usr/bin/env node
import fs from "fs"

const gitignore = `
package-lock.json
yarn.lock.json
.DS_STORE
node_modules
scripts/flow/*/.flowconfig
.flowconfig
*~
*.pyc
.grunt
_SpecRunner.html
__benchmarks__
build/
build2/
remote-repo/
coverage/
.module-cache
fixtures/dom/public/react-dom.js
fixtures/dom/public/react.js
test/the-files-to-test.generated.js
*.log*
chrome-user-data
*.sublime-project
*.sublime-workspace
.idea
*.iml
.vscode
*.swp
*.swo

packages/react-devtools-core/dist
packages/react-devtools-extensions/chrome/build
packages/react-devtools-extensions/chrome/*.crx
packages/react-devtools-extensions/chrome/*.pem
packages/react-devtools-extensions/firefox/build
packages/react-devtools-extensions/firefox/*.xpi
packages/react-devtools-extensions/firefox/*.pem
packages/react-devtools-extensions/shared/build
packages/react-devtools-extensions/.tempUserDataDir
packages/react-devtools-inline/dist
packages/react-devtools-shell/dist
packages/react-devtools-scheduling-profiler/dist

`

fs.writeFile('./.gitignore', gitignore, function (err) {
    if (err) throw err; console.log('gitignore file created succesfully');
}); 