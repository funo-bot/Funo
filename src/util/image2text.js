/*
Created by: Suremeo
Date: 2/23/2019, 11:25 AM
*/

const tesseract = require("tesseract.js")
const fetch = require("node-fetch")

module.exports = async function (object) {
  fetch(object.url).then(async (i) => i.buffer()).then(async (buffer) => {
    await tesseract.recognize(buffer)
      .progress(function (p) {
        object.callback("update", p);
      }).then(async function (result) {
        object.callback("done", {
          "text": await result.text.replaceAll("\\n", "\n")
        });
      }).catch((err) => object.callback("error", { text: "An error occured while reading the image" }));
  }).catch((err) => object.callback("error", { text: "An error occured while fetching the image" }));
};
String.prototype.replaceAll = function (search, replacement) {
  let target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

