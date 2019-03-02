/*
Created by: Suremeo
Date: 2/27/2019, 6:02 PM
*/
module.exports.execute = async (bot, args, cb) => {
  const { CanvasRenderService } = require('chartjs-node-canvas');

  const width = 628;
  const height = 300;
  var defaultOptions = {
    global: {
      defaultFont: 'Georgia',
      defaultFontSize: 60
    }
  }
  const configuration = {
    type: args[1] || "line",
    data: {
      labels: args[2],
      datasets: args[0]
    },

    options: {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0.3,
          borderCapStyle: "round",
          borderJoinStyle: "round"
        }
      },
      legend: {
        display: false,
        position: "left",
        labels: {
          fontColor: 'white',
          fontSize: 18
        }
      },
      title: {
        display: false,
        text: args[3],
        fontColor: "white",
        fontSize: 20
      }
    }
  };
  const chartCallback = (ChartJS) => {

    ChartJS.defaults.global.responsive = true;
    ChartJS.defaults.global.maintainAspectRatio = false;
    ChartJS.defaults.global.defaultFontSize = 15;
    // ChartJS.defaults.global.defaultFontFamily = "Arial"
    ChartJS.defaults.global.defaultFontColor = "rgba(209, 50, 241, 1)";
    ChartJS.defaults.global.defaultFontStyle = "bold"
    // ChartJS.defaults.global.elements.line.tension = 1;
  };

  (async () => {
    const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
    const image = await canvasRenderService.renderToBuffer(configuration);
    const dataUrl = await canvasRenderService.renderToDataURL(configuration);
    const stream = canvasRenderService.renderToStream(configuration);
    var Jimp = require("jimp")

    Jimp.read(image).then(async imageone => {
      Jimp.read("https://i.imgur.com/Ow3ZyN5.png").then(async imagetwo => {
        await imagetwo.composite(imageone, 7, 43)
        cb({ "Status": true, "Message": "Graph Generated", "Buffer": await imagetwo.getBufferAsync(Jimp.AUTO) })
      })
    })
  })();
}

module.exports.data = {
  "enabled": true
}
