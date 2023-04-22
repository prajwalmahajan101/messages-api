import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// Created with the cli command
// nest g controller messages/messages --flat
// flat flag tells to not create am extra folder

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return { msg: 'hello' };
  }

  @Post()
  createMessage(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return { msg: id };
  }
}
