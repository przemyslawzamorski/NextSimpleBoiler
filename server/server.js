const next = require('next')
const routes = require('../client/routes')
const conf = require('../client/next.config')
const app = next({dev: process.env.NODE_ENV !== 'production', dir: './client', conf})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})