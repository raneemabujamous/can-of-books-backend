'use strict'
const mongoose = require('mongoose');
// const bookSchema = require('./Book')


const userSchema = new mongoose.Schema({
    email: { type: String },

    title: { type: String },
    description: { type: String },
    status: { type: String }
})

const usermodel = mongoose.model('user', userSchema)


// let seedfunction = () => {
//     const newUser1 = new usermodel({


//         email: 'raneemabujamous@yahoo.com',

//         title: '1 Manly Dominion in a Passive-Purple-Four-Ball Word ',
//         description: "Chanski writes, “On the tabletop of life, many of us act more like the purple four-balls than like skillful billiard players.” I read this book in seminary. I remember my biggest takeaway",
//         status: 'unread'
//     })
//     newUser1.save()

//     const newUser2 = new usermodel({


//         email: 'raneemabujamous@yahoo.com',

//         title: 'Shepherding a Child’s Heart (Tedd Tripp)',
//         description: "Written for parents with children of any age, this book helps you focus your attention on the heart issues and character behind our kid’s behavior (instead of just their behavior).",
//         status: 'read'

//     })
//     newUser2.save()

//     const newUser3 = new usermodel({

//         email: 'raneemabujamous@yahoo.com',

//         title: "Marriage God’s Way (Henry Brandt & Kerry Skinner) ",
//         description: "My notes in my personal copy of this book remind me I read this several times while dating Tonia and the months after marrying her. Henry Blackaby, at the time at least, said of this book, “This is the only book on marriage I recommend.",
//         status: 'unread'
//     })
//     newUser3.save()




// }

module.exports = {
    usermodel,
    // seedfunction
}
