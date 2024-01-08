const Joi = require('joi')

const CandidateScheme = Joi.object({
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
export default CandidateScheme