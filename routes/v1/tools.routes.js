const express =require('express');
//const { saveATool, getAllTools } = require('../../controllers/tools.controller');
const toolsControllers = require('../../controllers/tools.controller');

const router= express.Router();


// router.get("/", (req, res) =>{
//     res.send("Tools found ");
// })

// router.post("/tools", (req, res) =>{
//     res.send("tools added");
// })

router
.route("/")
/**
* @api{get} tools all tools
* @apiDescription Get all the tools {number(1-)}

*@apiPermission admin

*apiHeader {String} - Authorization users access token

*@apiParam {numder(1)}   [page-1]   list page
*@apiParam {numder(1-100)}  {limit= 10} user per Page

*@apiSuccess {object []} all the tools
*apiError {unauthorized 401}  Unauthorized only authenticated users can access the data
*apiError {forbidden 403}  forbidden only admin can access the data 

*/
// .get((req, res) =>{
//     res.send("tools found with id")
// })
//otherway get a tools
.get(toolsControllers.getAllTools)

/** for post Request
* @api{post} tools all tools
* @apiDescription Get all the tools {number(1-)}

*@apiPermission admin

*apiHeader {String} - Authorization users access token

*@apiParam {numder(1)}   [page-1]   list page
*@apiParam {numder(1-100)}  {limit= 10} user per Page

*@apiSuccess {object []} all the tools
*apiError {unauthorized 401}  Unauthorized only authenticated users can access the data
*apiError {forbidden 403}  forbidden only admin can access the data 


.post( (req, res)=>{
    res.send("tool added");
});
*/

.post(toolsControllers.saveATool);


module.exports=router;


