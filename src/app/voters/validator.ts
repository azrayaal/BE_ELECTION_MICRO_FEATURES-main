const Joi = require('joi')

const VoterSchema = Joi.object({
    candidateId: Joi.number(),

    userId: Joi.number()

})
export default VoterSchema