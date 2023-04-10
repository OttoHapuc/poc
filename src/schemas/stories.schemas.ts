import joi, { Schema } from 'joi';

const historySchema = joi.object({
    author: joi.string(),
    history: joi.string().required()
})

export default {
    historySchema
}