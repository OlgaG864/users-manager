const { User } = require('../models/users');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await User.find();
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).send('error getting users');
        }
    }
}