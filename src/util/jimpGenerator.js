/*
Created by: Suremeo
Date: 2/24/2019, 11:46 AM
*/

var Jimp = require("jimp")
var fetch = require("node-fetch")
module.exports = async (funo, msg, type, image_url, args, callback) => {
        Jimp.read(image_url)
            .then(async image => {
                image.resize(1080, Jimp.AUTO)
                switch(type) {
                    case "brightness":
                        if (Number(args[0]) > 99 || Number(args[0] < -99)) return callback("error", "Brightness can not be more than 99 or below -99")
                        if (args[0].includes("-")) {
                            await image.brightness(Number("-0." + args[0].replace("-", "")))
                            callback("success", await image.getBufferAsync(Jimp.AUTO))
                        } else {
                            await image.brightness(Number("0." + args[0]))
                            callback("success", await image.getBufferAsync(Jimp.AUTO))
                        }
                        break;
                    case "contrast":
                        if (Number(args[0]) > 99 || Number(args[0] < -99)) return callback("error", "Contrast can not be more than 99 or below -99")
                        if (args[0].includes("-")) {
                            await image.contrast(Number("-0." + args[0].replace("-", "")))
                            callback("success", await image.getBufferAsync(Jimp.AUTO))
                        } else {
                            await image.contrast(Number("0." + args[0]))
                            callback("success", await image.getBufferAsync(Jimp.AUTO))
                        }
                        break;
                    case "news":
                        Jimp.read("https://i.imgur.com/B8wbBwT.png").then(async overlay => {
                            await image.resize(208, 114)
                            var clone = await overlay.clone()
                            await overlay.composite(image, 154, 55)
                            await overlay.composite(clone, 0, 0)
                            callback("success", await overlay.getBufferAsync(Jimp.AUTO))
                        })
                        break;
                    case "resize":
                        if (!args[0] || args[0].toLowerCase() == "auto") args[0] = Jimp.AUTO
                        if (!args[1] || args[1].toLowerCase() == "auto") args[1] = Jimp.AUTO
                        await image.resize(Number(args[0]) || Jimp.AUTO, Number(args[1]) || Jimp.AUTO)
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "crop":
                        await image.crop(Number(args[0]), Number(args[1]), Number(args[2]), Number(args[3]))
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "invert":
                        await image.invert()
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "greyscale":
                        await image.greyscale()
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "normalize":
                        await image.normalize()
                        image.c
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "sepia":
                        await image.sepia()
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "rotate":
                        await image.rotate(Number(args[0]))
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    case "blur":
                        await image.blur(Number(args[0]) || 5)
                        callback("success", await image.getBufferAsync(Jimp.MIME_PNG))
                        break;
                    default:
                        callback("error", "Invalid image method")
                }
            })
            .catch(err => {
                callback("error", err)
            });

}