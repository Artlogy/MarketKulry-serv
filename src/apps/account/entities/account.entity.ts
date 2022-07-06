import { DefaultEntity } from 'common/models/base.entity';
import { GENDER_CODE } from 'common/enum/common.enum';
import { Entity, Column, Index, Unique } from 'typeorm';
import { Min } from 'class-validator';
@Entity('account')
export class Account extends DefaultEntity {
  // 회원고유코드
  @Index()
  @Column({
    type: 'uuid',
    nullable: false,
    comment: 'unique uuid',
    unique: true,
  })
  uuid: string;

  // 비밀번호 최소10자
  @Min(10)
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    comment: '비밀번호',
    
  })
  password: string;

  // 회원 이름
  @Column({ type: 'varchar', length: 64, nullable: false, comment:'회원 이름' })
  name: string;

  // 회원 이메일
  @Column({type:'varchar', length:256, nullable:false, unique:true, comment:'회원 이메일'})
  email: string;

  // 회원 연락처
  @Column({type:'varchar', length:256, nullable:false, comment:'연락처'})
  phone: string;

  // 우편 번호
  @Column({type:'varchar', length:32, nullable:false, comment:'우편번호'})
  zip_code: string;

  // 메인주소 (경상북도 영천시 망정로80)
  @Column({type:'varchar', length:256, nullable:false, comment:'주소 메인'})
  address_main: string;
  
  // 부주소 (홍길동아파트 800동 1200호)
  @Column({type:'varchar', length:1024, nullable: false, comment:'주소 서브'})
  address_sub: string;
  
  // 성별
  @Column({ enum: GENDER_CODE ,comment:'성별'})
  gender:  GENDER_CODE;

  // 생년월일
  @Column({type:'date', comment:'회원 생년월일'})
  birth: Date;

  // 리플래시토큰
  @Column({type:'text', nullable:true, unique:true ,comment:'리플래시 토큰'})
  refresh_token:string
}
