
const Account = require('../models/account');
const Match = require('../models/match');



module.exports = {
    index,
    createNewMatch,
    // show,
    showConversation,
    // create
  };

//   async function create(req, res) {
//     const { senderId, recipientId } = req.params;
//     const { content, sender, recipient } = req.body;

//     try {
//         let match = await Match.findOne({
//             sender: senderId,
//             'messages.recipient': recipientId
//         });
//         if (!match) {
//             match = new Match({
//                 sender: senderId,
//                 messages: [{
//                     content: content,
//                     sender: sender,
//                     recipient: recipientId
//                 }]
//             });
//         } else {
//             match.messages.push({
//                 content: content,
//                 sender: sender,
//                 recipient: recipientId
//             });
//         }
//         await match.save();
//         res.redirect(`/matches/${senderId}/${recipientId}`);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }

  async function createNewMessage(req, res) {
    const { sender, recipient, content } = req.body;

    try {
        // Find the match where sender and recipient match the given IDs
        const match = await Match.findOne({
            $or: [
                { sender, 'messages.recipient': recipient },
                { sender: recipient, 'messages.recipient': sender }
            ]
        });

        if (!match) {
            return res.status(404).send('Match not found');
        }

        // Add the new message to the match's messages array
        match.messages.push({
            content,
            sender,
            recipient
        });

        // Save the updated match with the new message
        await match.save();

        // Redirect back to the conversation page
        res.redirect(`/matches/${sender}/${recipient}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



async function showConversation(req, res) {
    try {
    const match = await Match.findById(req.params.id).populate({ 
        path: 'messages',
        populate: {path: 'sender'}
     })
    // const recipientId = req.params.recipientId;
    console.log(match)
    // const userId = req.user._id;
    res.render('matches/show', { match, user: req.user  });
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}
}
//             $or: [
//               { sender: senderId, 'messages.recipient': recipientId },
//               { sender: recipientId, 'messages.recipient': senderId }
//             ]
//         }).populate('messages.sender');
//         console.log(match)
//         if (!match) {
//             return res.status(404).send('Match not found');
//         }
//         match.messages.sort((a, b) => b.timestamp - a.timestamp);
// }

//   async function show(req, res) {
//     const { recipientId } = req.params;
//     const senderId = req.user._id;

//     try {
//         // Find the match between the sender and recipient
//         const match = await Match.findOne({
//             sender: senderId,
//             'messages.recipient': recipientId
//         }).populate('messages.recipient');

//         if (!match) {
//             return res.status(404).send('Conversation not found');
//         }

//         // Render the 'matches/show' template with the conversation data
//         res.render('matches/show', { match });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }



  async function index(req, res) {
      try {
          const userId = req.user._id; 
          const matches = await Match.find({ sender: userId }).populate('messages.recipient');
          res.render('matches/index', { matches });
      } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
      }
  }


  
  async function createNewMatch(req, res) {
    // const match = await Match.findById()
    userId = req.user._id
    receiverId = req.body.recipient
    console.log(req.body);
    const { sender, recipient, content } = req.body;
    try {
        const match = new Match({
            users: [userId, receiverId],
            messages: [{
                content: content,
                sender: userId
            }]
        });
        await match.save();
        console.log(match)
        res.redirect(`/matches/${match._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}