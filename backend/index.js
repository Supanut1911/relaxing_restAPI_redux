var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')

let bears = [{id:1,name:'winnie',weight:99},{id:2,name:'Pooh',weight:60}]

app.use('/api',bodyParser.json() ,router)
app.use('/api',bodyParser.urlencoded({extended:false}) ,router)

router.route('/bears')
  .get((req,res)=>{
    res.send(bears)
  })
  .post((req,res)=>{
    let bear = {}
    bear.id = bears.length + 1
    bear.name = req.body.name
    bear.weight = req.body.weight
    bears.push(bear)
    res.send(bears)
  })

router.route('/bears/:id')
  .get((req,res)=>{
    res.send(bears[req.params.id - 1])
  })

  .put((req,res)=>{
    let id = req.params.id - 1
    bears[id].name = req.body.name
    bears[id].weight = req.body.weight
    res.send(bears[id])
  })

  .delete((req,res)=>{
    delete bears[req.params.id - 1]
    res.send('bear is deleted')
  })

app.listen(8000 , console.log('app is running'))
//
//
// var express = require('express')
// var app = express()
// var router = express.Router()
// var router2 = express.Router()
//
// app.use('/api',router)
// app.use('/apo',router2)
//
// let bears = [{id:1,name:'winnie',weight:88},
//             {id:2,name:'pooh',weight:99}]
//
// let cats = [{id:1,name:'leo',heigh:30},
//             {id:2,name:'remo',heigh:45}]
//
// router.route('/bears')
//   .get((req,res)=>{
//     res.send(bears)
//   })
//
// router2.route('/cat')
//   .get((req,res)=>{
//     res.send(cats)
//   })
//
//
// app.listen(8000,console.log('app is running'))
