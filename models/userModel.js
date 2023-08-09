const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

//validation start
userSchema.statics.isEmailInUse =async function(email){
    if(!email) throw new Error('No Email')
    try {
        const user=await this.findOne({email})
        if(user) return false
         return true
    } catch (error) {
        return false
    }
}
//validation end

const User=mongoose.model('User',userSchema);

module.exports=User;