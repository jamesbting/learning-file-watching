const fs = require("fs")
require("log-timestamp")

const buttonPressesLogFile = "./logs/button-presses.log"

console.log(`Watching for file changes on ${buttonPressesLogFile}`)

fs.watchFile(buttonPressesLogFile, { interval: 1000 }, (curr, prev) => {
	console.log(`${buttonPressesLogFile} file changed`)
})
//poll the file every 1000 ms to check for changes - default is 5007 ms
//requires actively watching the file, not ideal as this takes processes
