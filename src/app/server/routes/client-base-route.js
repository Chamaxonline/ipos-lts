const User = require('../repo/user-repo')
const base = {};

base.post = function(id, body) {
    //if clientid is null should get the client id by createdby id from user-route js.
    //body.client = clientId;
    if(!body.createdAt) {
        body.createdAt = new Date();
        body.updatedAt = new Date();
    } else {
        body.updatedAt = new Date();  
    }
    User.findByIdAndUpdate(id, body, {new: true, upsert: true})
    .then(result =>  {
        return result;
    })
    .catch( err=> {throw err;});
};
module.exports = base;