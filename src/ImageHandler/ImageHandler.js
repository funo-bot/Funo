/*
Created by: Suremeo
Date: 2/27/2019, 5:44 PM
*/
let fs = require("fs")
module.exports = class {
    constructor(funo) {
        this.funo = funo
        this.methods = {}
        fs.readdir("./src/ImageHandler/methods", async (err, method) => {method.forEach(async (method) => { this._addMethod(method)})})
    }
    async preformAction(method, image, args, cb) {
        if (!this.methods[method + ".js"]) return cb({ "Status": false, "Message": "Method not found" })
        try {
            let methodFunction = await this.methods[method + ".js"]
            await methodFunction.execute(image, args, cb)
        } catch(err) {
            cb({ "Status": false, "Message": err })
        }
    }
    _addMethod(method, cb) {
        if (!method.endsWith(".js")) return;
        try {
            let methodFile = require("./methods/" + method)
            if (methodFile.data.enabled) this.methods[method] = methodFile
        } catch(err) {}
    }

}