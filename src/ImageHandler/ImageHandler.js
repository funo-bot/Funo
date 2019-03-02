/*
Created by: Suremeo
Date: 2/27/2019, 5:44 PM
*/
let fs = require("fs")

module.exports = class {
  
  constructor(funo) {
    this.funo = funo
  }

  async preformAction(method, image, args, cb) {
    try {
      let methodFunction = require("./methods/" + method + ".js")
      await methodFunction.execute(image, args, cb)
    } catch (err) {
      cb({ "Status": false, "Message": err })
    }
  }

}