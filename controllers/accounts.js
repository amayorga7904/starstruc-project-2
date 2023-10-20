const Account = require('../models/account');
const Match = require('../models/match');
const User = require('../models/user');

module.exports = {
    new: newAccount,
    index,
    showProfile,
    showAccounts,
    edit,
    update,
    create
  };



async function update(req, res) {
    const userId = req.user._id; 
    const newBio = req.body.bio;
    try {
        let user = await User.findOneAndUpdate({ _id: userId }, { bio: newBio }, { new: true });
        if (!user) {
            return res.status(404).send('Account not found');
        }
        res.redirect('/accounts/profile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



async function edit(req, res) {
    console.error(req.user._id);
    const userId = req.user._id;
    try {
        let user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).send('Account not found');
        }
        console.log("this is the user", user)
        res.render('accounts/edit', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



async function showAccounts(req, res) {
    console.log('inside the index')
    try {
        const senderId = req.params.senderId;
        const recipientId = req.params.recipientId;
        const match = await Match.findOne();
        const userId = req.user._id;
   
        let users = await User.find({ user: { $ne: userId } });
        if (!users) {
            return res.status(404).send('No accounts found');
        }
        res.render('accounts/public', { users, match });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
  }


  async function showProfile(req, res) {
    try {
        const allMatches = await Match.find({})
        const foundUserMatches = allMatches.filter(match => match.users.includes(req.user._id))
        console.log(foundUserMatches)
        let user = await User.find({ user: req.user._id });
        const userId = req.user._id
        const receiverId = req.body.recipient
     
        if (!user) {
            return res.status(404).send('Account not found');
        }
        res.render('accounts/profile', { matches: foundUserMatches, userId, receiverId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



  async function newAccount(req, res) {
    let account = await Account.find( { user: req.user._id } );
    if (account.length) {
        res.redirect('/accounts/public')
    } 
    res.render('accounts/new', { errorMsg: '' })
  }



  async function create(req, res) {
      req.body.user = req.user._id;
      req.body.userAvatar = req.user.avatar;
      const user = await User.findById(req.user._id)
      user.name = req.body.name
      user.born = req.body.born
      user.bio = req.body.bio
    try {
      await Account.create(req.body);
      console.log('account created')
      await user.save();
      res.redirect('/accounts/public');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }


  
  function index(req, res) {
    Account.find({})
    .then((accounts) => {
        res.render('accounts/index', { accounts })
    })
    .catch((err) => {
        console.log(err)
    })
 }