import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { createMessage } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

// Created with the cli command
// nest g controller messages/messages --flat
// flat flag tells to not create am extra folder

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessage) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message Not Found');
    }
    return message;
  }
}
