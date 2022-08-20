let express= require("express")
let router = express.Router()
let chartData = require('../mock/item3.json')


router.get('/data',(req,res)=>{
    res.send({msg:'Item 3 information',chartData:chartData})
})

module.exports = router;