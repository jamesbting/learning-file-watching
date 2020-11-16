const fs = require("fs")
const yaml = require("js-yaml")

try {
	let fileContents = fs.readFileSync("./data.yaml", "utf8")
	let data = yaml.safeLoad(fileContents)

	console.log(data)
} catch (e) {
	console.log(e)
}
