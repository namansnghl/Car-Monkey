var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/carMonkey", { useNewUrlParser: true, useUnifiedTopology: true })
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "DB connection error")); 
db.once('open', function(callback){ 
    console.log("DB connection succeeded"); 
}) 

var express = require("express")
var app = express()

var bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended: true}))

app.use(express.static("public"))
app.use(express.static("image"))
app.set("view engine", "ejs")  //telling app that all files rendered are ejs format. no need to specify

app.get('/',function(req, res){
    res.render("index")
});


app.get('/loginPage', function(req, res){
    res.render("login")
})


app.post('/signup', function(req, res){
    var name = req.body.signupUsername;
    var pass = req.body.signupPassword;
    var pass2 = req.body.signupPassword2;
  
    var data = { 
        "name": name, 
        "password":pass,
    } 
if( pass === pass2){
    db.collection('users').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully");   
    }); 
    return res.redirect('/LoginPage');
}
else{
    console.log("Password mismatch");
    return res.redirect('/');
}
})

app.get('/login', function(req, res){

    db.collection("users").findOne({}, function(err, collection) {
        if (err) throw err;
        console.log(collection);
        res.render('comingsoon')        //Still working on authentication
        db.close();
      });
})



//'/home/:anypage' - match anything filled at place anypage - becomes a varialble

app.get('*',function(req, res){
    res.render("Page Not Found!!")
});
// <%=   %> ------  content added to html
//wrap JS with <% %> ----- logic - not added to html
// server end ----------   pass on render {   : var}

app.listen(3000, function(){
    console.log("Server Online!!!");
    
})
