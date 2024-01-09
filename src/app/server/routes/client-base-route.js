const User = require('../repo/user-repo')
const base = {};

base.list = async function(model) {
    //should filter all records by client id
    var items;
    await model.find()
    .then(models=> {
        items = models;
    })
    .catch(err=> {throw err;});
    return items;
}

base.post = function(id, body, model) {
    //if clientid is null should get the client id by createdby id from user-route js.
    //body.client = clientId;
    if(!body.createdAt) {
        body.createdAt = new Date();
        body.updatedAt = new Date();
    } else {
        body.updatedAt = new Date();  
    }
    model.findByIdAndUpdate(id, body, {new: true, upsert: true})
    .then(result =>  {
        return result;
    })
    .catch( err=> {throw err;});
};
module.exports = base;