const User = require('../Models/Users');

module.exports = {
    async index(req,res){
        const users = await User.find()
        return res.json(users)
    },
    async create(req,res){
        console.log(req);
        // const [name, senha, perguntaSeg, respostaSeg, longitude, latitude] = req.body;

        // let user = await User.findOne({ name });
        // [longitude, latitude] = Number([latitude, longitude]);
        // if(!user){
        //     const location = {
        //         type: 'Point',
        //         coordinates: [longitude, latitude],
        //     }
        //     user = await User.create({
        //         name,
        //         senha,
        //         perguntaSeg,
        //         respostaSeg,
        //         location,
        //     })
        //     return res.json(user)
        // }
    }
}