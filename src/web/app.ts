import Path from 'path'
import Express from 'express'

export const app = Express()

app.use('/assets', Express.static(Path.resolve('dist'), { fallthrough: false }))

app.get('/*', (req, res) => {
  res.send(`
    <!doctype html>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body, #application, #application > div, #application > div > div { height: 100% }
    </style>
    <div id="application"></div>
    <script src="/assets/app.js"></script>
  `)
})