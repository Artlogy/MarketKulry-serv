import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Column,
  DeleteDateColumn,
} from 'typeorm';

// 필수 컬럼  Entity
export abstract class DefaultEntity {
  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: true, comment: '사용여부' })
  is_enabled: boolean;

  @Column({
    type: 'boolean',
    default: false,
    comment: 'soft delete용 삭제처리 여부',
  })
  is_deleted: boolean;

  @Index()
  @CreateDateColumn({ type: 'timestamptz' }) //
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' }) //
  updated_at: Date;

  @Index()
  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at: Date;
}
/*
  1) PK로 쓰는 ID 외에 추가로 uuid를 기록하기 위해서 사용
  @Column()
  @Generated('uuid')
  uuid: string
  
  2) index
  https://orkhan.gitbook.io/typeorm/docs/indices
  */
