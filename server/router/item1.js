let express= require("express")
let router = express.Router()
let chartData = require('../mock/item1.json')
router.get('/data',(req,res)=>{
    res.send({msg:'Item 1 information',chartData:chartData})
})

module.exports = router;