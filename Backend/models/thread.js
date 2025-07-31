import mongoose from 'mongoose';

const MessageSchema=new mongoose.Schema({
    role:{
        type: String,
        required: true,
        enum: ['user', 'assistant'],

    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },

});


const ThreadSchema=new mongoose.Schema({
    threadId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
       default:"New Chat",
    },
    messages:[MessageSchema],
    creteAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

});

export default mongoose.model('Thread', ThreadSchema);