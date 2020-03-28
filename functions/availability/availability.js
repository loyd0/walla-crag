// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const fetch = require('node-fetch')


exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World'

    const body = await fetch('https://www.cumbrian-cottages.co.uk/northern-lakes/keswick-area/walla-crag---royal-oak-house-cc111126#cottage-availability')
      .then(response => response)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}`, res: body })
      // // more keys you can return:

      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
