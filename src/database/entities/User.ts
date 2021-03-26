import {Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'




@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column("Registration date")
  registrationDate: Date;

  @Column("timestamp", {
    nullable: true,
  })
  lastLogin?: Date;
  
  @Column({ default: false})
  emailVerified: boolean;

  @Column()
  emailVerficationToken: string;

  @Column()
  lowercaseUsername: string;

  @Column()
  lowercaseEmail: string;

  @Column()
  uploadKey: string;

  @Column({
    nullable: true,
  })
  apiKey?: string;

  @Column()
  registrationIp: string;

  @Column('text', {
    array: true,
  })
  usedIps: string[];

  @Column({
    default: false,
  })
  administrator: boolean;

  @Column({
    default: false,
  })
  mailAcess: boolean;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  mailAccessExpires: Date;

  @Column({
    default: false,
  })
  mailAccountCreated: boolean;

  @Column({
    default: 5,
  })
  mailAliasLimit: number

  @Column({
    default: 0,
  })
  imageCount: number

  @Column({
    default: true,
  })
  settings_apiIpSecurity: boolean

  @Column({
    default: false,
  })
  settings_imageMiddleware: boolean

  @Column('text', {
    array: true,
    default: '{}',
  })
  settings_randomDomains: string[]

  @Column({ default: false })
  settings_secureURLs: boolean

  @Column({ default: false })
  settings_invisibleShortURLs: boolean

  @Column({ default: true })
  settings_ipSecurity: boolean

  @Column('json', {
    default: { middleware: [] },
  })
  imageMiddleware: IImageMiddlewareSettings

  @Column({ default: false })
  limited: boolean

  @Column({ nullable: true })
  limitedId: string

  @Column({ default: false })
  deactivated: boolean

  @Column({ default: false })
  embed: boolean

  @Column({
    default: true,
  })
  embedAuthor: boolean

  @Column({
    default: '',
  })
  embedAuthorStr: string

  @Column({
    default: '',
  })
  embedTitle: string

  @Column({
    default: '',
  })
  embedDescription: string

  @Column({ default: '#1070ca' })
  embedColor: string

}
