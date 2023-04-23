import { IsString } from 'class-validator';
export class createMessage {
  @IsString()
  content: string;
}
