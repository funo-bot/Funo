/*
Created by: Suremeo
Date: 2/27/2019, 6:02 PM
*/
module.exports.execute = async (bot, args, cb) => {
  
  const { CanvasRenderService } = require('chartjs-node-canvas');

  const width = 400;
  const height = 80;
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
      legend: {
        display: true,
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
  };

  (async () => {
    const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
    const image = await canvasRenderService.renderToBuffer(configuration);
    const dataUrl = await canvasRenderService.renderToDataURL(configuration);
    const stream = canvasRenderService.renderToStream(configuration);
    cb({ "Status": true, "Message": "Graph Generated", "Buffer": await image })
  })();
}

module.exports.data = {
  "enabled": true
}