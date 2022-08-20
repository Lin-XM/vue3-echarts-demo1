let express= require("express")
let router = express.Router()
let chartData = require('../mock/item4.json')


router.get('/data',(req,res)=>{
    res.send({msg:'Item 4 information',chartData:chartData})
})

module.exports = router;