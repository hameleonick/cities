/**
 * Created by nkapravchuk on 11/6/14.
 */
module.exports = {
    getCities: function(req,res){
        return res.json({message:"In future you will see list of cities here"}, 400);//send("In future you will see list of cities here")
    }
}