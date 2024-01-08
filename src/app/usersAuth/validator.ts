const Joi = require('joi')

export const UserScheme = Joi.object({
    fullName: Joi.string()
    .min(3)
    .max(15)
    .required(),

address: Joi.string()
    .required(),

gender: Joi.string()
    .required(),

email: Joi.string()
    .email()
    .required(),

userName: Joi.string()
    .required(),

password: Joi.string()
    .required(),

})

export const LoginScheme = Joi.object({

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .required(),

})


