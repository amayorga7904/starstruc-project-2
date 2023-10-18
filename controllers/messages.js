const Match = require('../models/match');

module.exports = {
    create,
  };

  async function create(req, res) {
    const { senderId, recipientId } = req.params;
    const { content, sender, recipient } = req.body;

    try {
        let match = await Match.findOne({
            sender: senderId,
            'messages.recipient': recipientId
        });
        if (!match) {
            match = new Match({
                sender: senderId,
                messages: [{
                    content: content,
                    sender: sender,
                    recipient: recipientId
                }]
            });
        } else {
            match.messages.push({
                content: content,
                sender: sender,
                recipient: recipientId
            });
        }
        await match.save();
        res.redirect(`/matches/${senderId}/${recipientId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
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

