const {User} = require('../schema/user_schema');
module.exports.insertdata = async(req,res) =>{
    console.log(req.body)
    const user = new User({  
        name: req.body.name,
        email:req.body.email,
        phone_num: Number(req.body.phone_num),
        password: req.body.password,
        department:req.body.department,
        role:req.body.role
    });
    const iuser = await User.findOne({phone_num:req.body.phone_num});
    if(iuser)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const userdata = await user.save();
        res.send(userdata);
    }

};
module.exports.getone=async(req,res)=>{
    try{
    const user=await User.findOne({email:req.body.email})
    if(req.body.password!==user.password) res.send({msg:"invalid password"})
    if(user) res.send(user)
    else res.send({msg:"not found !"})}
    catch(err){}
}
