// const getAllTools= (req, res)=>{
// res.send("tools founds");
// }

//other way with export

module.exports.getAllTools= (req, res,next)=>{

  const {ip, query, params, body, headers}=req;
  console.log(ip, query, params, body, headers);
   res.send("got it");
    };

 module.exports.saveATool=(req,res)=>{
   res.send("save tools")
 }