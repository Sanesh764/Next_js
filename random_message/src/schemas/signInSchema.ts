
import {z} from 'zod';

export const signInschema=z.object({
    identifer:z.string(),
    password:z.string(),
})