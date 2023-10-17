const Account = require('../models/account');


module.exports = {
    index,
  };


  async function index(req, res) {
    try {
      const userId = req.user._id;
      let accounts = await Account.find({ user: { $ne: userId } });
      if (!accounts) {
        return res.status(404).send('No accounts found');
      }
  
      res.render('messages', { accounts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  