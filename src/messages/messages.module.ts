import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

// Created with cli cmd
// nest g module messages

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
