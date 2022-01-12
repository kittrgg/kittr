const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const MODEL_NAME = 'kitBase'

const schema = new Schema({
    displayName: String,
    gameId: mongoose.Types.ObjectId,
    image: String,
    gameInfo: {},
    commandCodes: []
})

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

exports.default = Model