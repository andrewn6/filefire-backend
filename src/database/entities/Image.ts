  import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Image {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortId: string;

  @Column()
  uploader: number;

  @Column()
  host: string;

  @Column()
  contentType: string;

  @Column("time stamp")
  uploadTime: Date;

  @Column()
  size: number;

  @Column()
  hash: string;

  @Column()
  url: string;

  @Column()
  path: string;

  @Column()
  originalName: string;

  @Column({
    default: false,
  })
  deleted: boolean;

  @Column({
    default: 'N/A',
  })
  deletionReason: string;

  @Column()
  uploaderIp: string;

  @Column({ nullable: true })
  deletionKey: string;

  @Column({ default: false })
  embed: boolean;

  @Column({
    default: true,
  })
  embedAuthor: boolean;

  @Column({
    default: '',
  })
  embedAuthorStr: string;

  @Column({
    default: '',
  })
  embedTitle: string;

  @Column({
    default: '',
  })
  embedDescription: string;

  @Column({ default: '' })
  embedColor: string;

  serialize() {
    return {
      id: this.id,
      shortId: this.shortId,
      uploader: this.uploader,
      host: this.host,
      contentType: this.contentType,
      uploadTime: this.uploadTime,
      size: this.size,
      hash: this.hash,
      url: this.url,
      path: this.path,
      originalName: this.originalName,
      deleted: this.deleted,
      deletionReason: this.deletionReason,
      uploaderIp: this.uploaderIp,
      deletionKey: this.deletionKey,
    }
  }
}