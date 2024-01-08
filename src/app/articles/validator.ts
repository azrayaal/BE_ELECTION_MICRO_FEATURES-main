const Joi = require('joi')
.extend(require('@joi/date'));

export const ArticleSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(25)
        .required(),

    author: Joi.string()
        .min(3)
        .max(10)
        .required(),

    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    date: Joi.date().format('YYYY-MM-DD').utc(),

    description: Joi.string()
        .min(20)
        .max(1000)
        .required(),

        id: Joi.number()
        .required(),

})

export const UpdateArticleSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(25)
        .required(),

    author: Joi.string()
        .min(3)
        .max(10)
        .required(),

    image: Joi.string()
        .min(3)
        .max(200)
        .required(),

    date: Joi.date().format('YYYY-MM-DD').utc(),

    description: Joi.string()
        .min(20)
        .max(1000)
        .required(),

        id: Joi
        .required(),

})
