var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = express.Router()

app.use('/api',bodyParser.json(),router)
app.use('/api',bodyParser.urlencoded({extended:false}),router)

let std = [
          {id:5935512001,name:"Thanos",surename:"Atlas",Major:"CoE",Gpa:4.00},    //0
          {id:5935512002,name:"Captain",surename:"America",Major:"IT",Gpa:3.50},  //1
          {id:5935512003,name:"Tony",surename:"Stark",Major:"FIS",Gpa:3.78},      //2
          {id:5935512004,name:"Peter",surename:"Parker",Major:"FHT",Gpa:3.00}     //3
          ]

//------ dont need parameter to  Show , Create
router.route('/psu')
//show all std
  .get((req,res)=>{
    res.send(std)
  })

//create/add std
  .post((req,res)=>{
    let addingStd = {}
    addingStd.id = req.body.id
    addingStd.name = req.body.name;
    addingStd.surename = req.body.surename;
    addingStd.Major = req.body.Major;
    addingStd.Gpa = req.body.Gpa;
    std.push(addingStd)
    res.send( 'add successful' )
  })

//------------------ use parameter to Seek , Update , Delete
router.route('/psu/:id')
//seek std
  .get((req,res)=>{

    res.send( std[(req.params.id % 5935512000) -1 ])
  })

//update detail of std
  .put((req,res)=>{
    let id = (req.params.id % 5935512000) -1
    std[id].id = req.body.id
    std[id].name = req.body.name
    std[id].surename = req.body.surename
    std[id].Major = req.body.Major
    std[id].Gpa = req.body.Gpa
    res.send( 'update successful' )
  })

//delet value
  .delete((req,res)=>{
    // let id = (req.params.id % 5935512000) -1
    let arr = std.filter( (item) =>{
      return item.id != req.params.id
    })
    std = arr
    // delete std[(req.params.id % 5935512000) -1]
    res.send('delete successful')
  })

app.listen(8000,console.log('app is running'))
