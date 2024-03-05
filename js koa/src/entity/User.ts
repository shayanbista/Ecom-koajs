import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";

import { Order } from "./Order";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  role: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: true })
  deletedAt: Date;

  @Column({ type: "varchar", nullable: true })
  phoneNumber: string | null;

  @Column({ type: "varchar", nullable: true })
  email: string | null;

  [key: string]: any;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
