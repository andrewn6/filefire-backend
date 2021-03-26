import {Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
import { IImageMiddlewareSettings } from '../../img/utils'

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

  @Column()
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

  serialize() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      emailVerified: this.emailVerified,
      registrationDate: this.registrationDate,
      lastLogin: this.lastLogin,
      uploadKey: this.uploadKey,
      apiKey: this.apiKey,
      registrationIp: this.registrationIp,
      usedIps: this.usedIps,
      administrator: this.administrator,
      mailAcess: this.mailAcess,
      mailAccessExpires: this.mailAccessExpires,
      mailAccountCreated: this.mailAccountCreated,
      mailAliasLimit: this.mailAliasLimit,
      imageCount: this.imageCount,
      deactivated: this.deactivated,
   
      settings_apiIpSecurity: this.settings_apiIpSecurity,
      settings_imageMiddleware: this.settings_imageMiddleware,
      settings_randomDomains: this.settings_randomDomains,
      settings_secureURLs: this.settings_secureURLs,
      settings_invisibleShortURLs: this.settings_invisibleShortURLs,
      settings_ipSecurity: this.settings_ipSecurity,
    }
  }
}


declare global {
  namespace Express {
    interface Request {
      user: User,
      loggedIn: boolean,
      realIp: string,
      flash: (clazz: string, message: string) => void
    }
  }
  namespace SocketIO {
    interface Socket {
      user: User,
      loggedIn: boolean;
    }
  }
}