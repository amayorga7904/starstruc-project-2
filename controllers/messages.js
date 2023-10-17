const Account = require('../models/account');


module.exports = {
    create
  };


  async function create(req, res) {
    const accountId = req.params.id;
    const account = await Account.findById(accountId);
    account.messages.push(req.body);
    try {
        await account.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/accounts/${accountId}`)
}
  