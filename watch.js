const fs = require("fs")
require("log-timestamp")
const md5 = require("md5")

const buttonPressesLogFile = "./logs/button-presses.log"

console.log(
	`Watching for file changes on ${buttonPressesLogFile} using fs.watch`
)

//this will watch for content changes AND for rename events
// fs.watch(buttonPressesLogFile, (event, filename) => {
// 	if (filename) {
// 		console.log(`${filename} has been changed`)
// 	}
// })

//this will watch for changes in the content of the file ONLY
//this is the recommended way of ensuring we only alert once which is using a debounce function

let fsWait = false
let prevHash = md5(fs.readFileSync(buttonPressesLogFile))
fs.watch(buttonPressesLogFile, (event, filename) => {
	if (filename) {
		if (fsWait) return
		fsWait = setTimeout(() => {
			fsWait = false
		}, 100)
		const currHash = md5(fs.readFileSync(buttonPressesLogFile))
		if (currHash === prevHash) return
		prevHash = currHash
		console.log(`${filename} has been changed`)
	}
})
