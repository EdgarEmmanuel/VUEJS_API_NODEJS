var ts = require("./rest_api");

module.exports = ((app)=>{
    app.get("/flower_pink",(req,res)=>{
        res.send(ts);
    });
})