
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const { getConnection } = require("./index");



var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story = getConnection().model('Story', storySchema);
var Person = getConnection().model('Person', personSchema);

var a = new Person({
    _id: new mongoose.Types.ObjectId(), 
    name: 'Ian Fleming',
    age: 50
})

a.save();
