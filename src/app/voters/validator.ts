const Joi = require('joi')

const VoterSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(15)
        .required(),

    vote: Joi.string()
        .min(3)
        .max(15)
        .required(),

})
export default VoterSchema