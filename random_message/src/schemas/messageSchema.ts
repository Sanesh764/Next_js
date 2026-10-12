

import {z} from 'zod';

export const MessageSchema=z.object({
    content:z.string().min(10,{message:"content must be at least 10 characters"})
    .max(300,{message:"content must no longer then  300 characters"})

})