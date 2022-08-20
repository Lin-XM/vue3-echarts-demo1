let express = require("express")

let app = express()
let chartOne = require('./router/item1')
let chartTwo = require('./router/item2')
let chartThree = require('./router/item3')
let chartFour = require('./router/item4')

// 设置跨域
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With,yourHeaderFeild")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    next()
})

// 使用中间件配置路由

app.use('/one', chartOne)
app.use('/two', chartTwo)
app.use('/three', chartThree)
app.use('/four', chartFour)

app.listen(8888)