const Account = require('../models/account');

module.exports = {
    create
}

async function create(req, res) {
    const account = await Account.find(req.params.id)
    account.destinations.push(req.body)
    try {
        await account.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/accounts/${account._id}`)
}


