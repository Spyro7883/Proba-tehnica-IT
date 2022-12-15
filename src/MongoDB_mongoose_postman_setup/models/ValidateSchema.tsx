import Joi, { ObjectSchema } from 'joi';
import {NextFunction,Response,Request} from "express";
import { schema } from '../../GraphQL_mySQL_setup/Schema';
import { IUser } from './UserCreation';

export const ValidateSchema = (schema: ObjectSchema) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.validateAsync(req.body);
            next();
        }catch(error){
            console.log(error);
            return res.status(422).json({error});
        }
    }
}

export const Schemas ={
    user: {
        create: Joi.object<IUser>({
            username:Joi.string().required(),
            email:Joi.string().required().regex(""),
            password:Joi.string().required().regex("")
        }),
        update:Joi.object<IUser>({
            username:Joi.string().required(),
            email:Joi.string().required().regex(""),
            password:Joi.string().required().regex("")
        })
    } 
}
