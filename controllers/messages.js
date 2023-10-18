const Account = require('../models/account');

// module.exports = {
//     create,
//   };


//   async function create(req, res) {
//     const accountId = req.params.id;
//     const senderId = req.user._id;
//     const account = await Account.findById(accountId);
//     const { content } = req.body;
//     const newMessage = {
//     content,
//     recipient: accountId,
//     sender: senderId
//     };
//     // messageInfo = req.body
//     // req.body.content = messageInfo
//     // req.body.sender = req.user._id
//     // req.body.recipient = accountId
//     console.log(req.body)
//     account.messages.push(newMessage);
//     try {
//         await account.save();
// } catch (err) {
//     console.log(err)
// }
// res.redirect(`/accounts/${account._id}`)
// }

