import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  name: string;

  @Column("text", { unique: true })
  githubId: string;

  @OneToMany(() => Todo, (t) => t.creator)
  todos: Promise<Todo[]>;
}
