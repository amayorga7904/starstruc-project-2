const User = require('../models/user');

module.exports = {
    index,
  };

  async function index(req, res) {
    const user = await User.findById(req.params.id)
    res.render('accounts/show', { user })
  }