import { boolean, success } from "zod";
import {Message} from "@/models/User";

export interface ApiResponse{
    success:boolean;
    message:String;
    isAcceptingMessage?:boolean
    messages?:Array<Message>
}