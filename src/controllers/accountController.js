const path = require('path')
const captchapng = require('captchapng')
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'szhmqd17';

let vcode = null

exports.getLoginPage = (req, res) => {
    // res.send("登录 注册")
    res.sendFile(path.join(__dirname, "../statics/views/login.html"))
}

exports.getVcodeImage = (req, res) => {
    vcode = parseInt(Math.random() * 9000 + 1000)
    
    //生成好的验证码 ,存在session中
    req.session.vcode = vcode

    var p = new captchapng(80, 30, vcode); // width,height,numeric captcha
    p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}

exports.getRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../statics/views/register.html"))
}

exports.register = (req, res) => {
    const result = {
        status: 0, //0->成功 , 1->用户名存在
        message: "注册成功"
    }

    MongoClient.connect(url, function (err, client) {

        const db = client.db(dbName);


        // Get the documents collection
        const collection = db.collection('accountInfo');
        collection.findOne({
            username: req.body.username
        }, (err, doc) => {
            if (doc == null) {
                collection.insertOne(req.body,
                    function (err, result2) {
                        if(err){
                            result.status = 2
                            result.message = "注册失败"
                        }
                        console.log(result2.result);

                        client.close();
                        res.json(result)
                    });
            }else {
                client.close()

                result.status = 1
                result.message = "用户名已存在"

                res.json(result)
            }
        })
    })
}

exports.login = (req,res)=>{
    const result = {
        status:0,
        message:"注册成功"
    }

    //椒盐验证码
    if(req.session.vcode!=req.body.vcode){
        result.status = 1
        result.message = "验证码不正确"

        res.json(result)

        return
    }

    //校验用户名和密码
    MongoClient.connect(url, function(err, client){
        const db = client.db(dbName)

        const collection = db.collection('accountInfo')

        collection.findOne({
            username:req.body.username,
            password:req.body.password
        },(err,doc)=>{
            if(doc==null){
                result.status = 2
                result.message = "用户名或密码错误"
            }
            res.json(result)
            client.close()
        })
    })
}