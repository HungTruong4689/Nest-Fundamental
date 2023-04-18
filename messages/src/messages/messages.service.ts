import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";


@Injectable()
export class MessagesService{
    //messagesRepo: MessagesRepository;
    constructor(public messagesRepo : MessagesRepository){
        //Service is createing its own dependencies
        //DONT DO THIS ON REAL APPS
        //this.messagesRepo = messagesRepo
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }


    findAll(){
        return this.messagesRepo.findAll();
    }

    create(message: string){
        return this.messagesRepo.create(message);
    }
}