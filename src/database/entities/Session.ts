import {Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionString: string;

  @Column()
  userID: number;

  @Column()
  ip: string;

  @Column({
    default: false,
  })
  invaildated: boolean;
  
  @Column({
    default: false,
  })
  rememberMe: boolean;

  @Column({
    nullable: true,
  })
  expiresAt?: Date;

  serialize() {
    return {
      id: this.id,
      user: this.userID,
      rememberMe: this.rememberMe,
      expiresAt: this.expiresAt
    }
  }
}