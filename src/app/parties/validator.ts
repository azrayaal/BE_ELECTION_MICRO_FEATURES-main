const Joi = require('joi')

export const PartySchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(15)
        .required(),

    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    chairman: Joi.string()
        .min(3)
        .max(15)
        .required(),

    vision_mission: Joi.string()
        .min(20)
        .max(1000)
        .required(),

    address: Joi.string()
        .min(10)
        .max(1000)
        .required(),

})

export const UpdatePartySchema = Joi.object({

    id: Joi.number()
    .required(),

    name: Joi.string()
        .min(3)
        .max(15)
        .required(),

    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    chairman: Joi.string()
        .min(3)
        .max(15)
        .required(),

    vision_mission: Joi.string()
        .min(20)
        .max(1000)
        .required(),

    address: Joi.string()
        .min(10)
        .max(1000)
        .required(),

})