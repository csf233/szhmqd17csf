const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(session({secret: 'keyboard cat',cookie:{maxAge: 10*60000}}))

app.use(express.static(path.join(__dirname,"statics")))

const accountRouter = require(path.join(__dirname,"./routers/accountRouter.js"))
app.use('/account',accountRouter)

const studentManagerRouter = require(path.join(__dirname,'./routers/studentManagerListRouter.js'))
app.use('/studentmanager',studentManagerRouter)

app.listen(7788,"127.0.0.1",err=>{
    if(err){
        console.log(err);
    }
    console.log('--Start--');
    
})

// 172.17.67.206
// 127.0.0.1