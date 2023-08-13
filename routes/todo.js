const router=require("express").Router();
const Todo=require("../models/Todo");


//routes
router.post("/add/todo",function(req,res){
    const {todo} = req.body;
    const newTodo = new Todo({
        todo:todo
    });
    //save task
    newTodo.save().then(function(){
        console.log("Successfully added the new task");
        res.redirect("/");
    })
    .catch(function(err){
        console.log(err);
    });
})

.get("/delete/todo/:_id",function(req,res){
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(function()
    {
        console.log("Deleted task successfully");
        res.redirect("/");
    }).
    catch(function(err)
    {
        console.log(err);
    })
});

module.exports=router;