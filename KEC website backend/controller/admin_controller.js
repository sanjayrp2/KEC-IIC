const {Details} = require('../schema/admin_schema');
module.exports.insertdata = async(req,res) =>{
    const admin = new Details({  
        name: req.body.name,
        email:req.body.email,
        phone_num: Number(req.body.phone_num),
        password: req.body.password,
        department:req.body.department,
        role:req.body.role
    });
    const iadmin = await Details.findOne({phone_num:req.body.phone_num});
    if(iadmin)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const admindata = await admin.save();
        res.send(admindata);
    }

};
module.exports.getone=async(req,res)=>{
    const admin =await Details.findOne({phone_num:Number(req.params.pn)})
    if(admin) res.send(admin)
    else res.send({msg:"not found !"})
}
