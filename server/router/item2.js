let express= require("express")
let router = express.Router()
let chartData = require('../mock/item2.json')

router.get('/data',(req,res)=>{
    res.send({msg:'Item 2 information',chartData:chartData})
})

module.exports = router;