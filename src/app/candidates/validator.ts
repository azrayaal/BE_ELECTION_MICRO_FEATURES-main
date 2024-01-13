const Joi = require('joi')

export const CandidateScheme = Joi.object({

    name: Joi.string()
        .min(3)
        .max(15)
        .required(),

    number: Joi.number()
        .required(),
    
    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    vision_mission: Joi.string()
        .min(20)
        .max(1000)
        .required(),

    partyId: Joi.number().required()

})

export const UpdateCandidateScheme = Joi.object({

    id: Joi.number()
    .required(),
    
    name: Joi.string()
        .min(3)
        .max(15)
        .required(),

    number: Joi.number()
        .required(),
    
    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    vision_mission: Joi.string()
        .min(20)
        .max(1000)
        .required(),

    partyId: Joi.number().required()

})