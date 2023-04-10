import joi, { Schema } from 'joi';
import { historyType } from '../protocols';

const historySchema = joi.object({
    author: joi.string(),
    history: joi.string().required()
})

export default {
    historySchema
}