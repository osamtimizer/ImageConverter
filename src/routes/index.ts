import express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index')
})

export default router