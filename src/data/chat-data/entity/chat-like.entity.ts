import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatEntity } from './chat.entity';

@Entity({ name: 'chat_like' })
export class ChatLikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  chatId: number;

  @ManyToOne(() => ChatEntity, (c) => c.likes)
  chat: ChatEntity;

  @CreateDateColumn()
  createdAt: Date;
}
