const User = require('../Models/Users');

module.exports = {
    async index(req,res){
        const users = await User.find()
        return res.json(users)
    },
    async store(req,res){
        const { name, senha, perguntaSeg, respostaSeg, latitude, longitude} = req.body;
        console.log(req.body);
        let user = await User.findOne({ name });
        if(!user){

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            user = await User.create({
                name,
                senha,
                perguntaSeg,
                respostaSeg,
                location,
            })
            return res.json(user)
        }
    }
}