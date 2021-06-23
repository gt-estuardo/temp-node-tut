// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (just for mac)

// package.json - manifest file (store important info about project/package)
// manual approch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)
