import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const message = messages[id];
    return message;
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = uuidv4();
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return { id, content };
  }
}
