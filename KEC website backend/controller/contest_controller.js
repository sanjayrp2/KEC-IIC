const {contest} = require('../schema/contest_schema');
module.exports.insertdata = async(req,res) =>{
    const mcontest = new contest({  
        name: req.body.name,
        description:req.body.description,
        image: req.body.image,
        form_link: req.body.form_link
    });
    const icontest = await contest.findOne({name:req.body.name});
    if(icontest)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const contestdata = await mcontest.save();
        res.send(contestdata);
    }

};
module.exports.getone=async(req,res)=>{
    const contest=await contest.findOne({name:req.params.name})
    if(contest) res.send(contest)
    else res.send({msg:"not found !"})
}
module.exports.delete=async(req,res)=>{
    const contest=await contest.findOne({name:req.params.name})
    if(!contest) res.send({msg:"not found !"})
    else {
        await contest.deleteOne({name:req.params.name})
        res.send({msg:"DELETED"})
    }
}
