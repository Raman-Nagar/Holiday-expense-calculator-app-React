import { NextFunction } from 'express'
import createHttpError from 'http-errors'
import Joi from 'joi'

export const validator = async (schemaName: Joi.ObjectSchema, body: object, next: NextFunction) => {
    const value = await schemaName.validate(body)
    try {
        value.error ? next(createHttpError(422, value.error.details[0].message)) : next()
    } catch (error) {
        console.log(error)
    }
}
export default validator;