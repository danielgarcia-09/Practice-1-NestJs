import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('employees')
export class Employee extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', 'nullable': false, length: 30 })
    firstName: string;

    @Column({ type: 'varchar', 'nullable': false, length: 40 })
    lastName: string;

    @Column({ type: 'int', nullable: true, })
    age: number;

    @Column({ type: 'bool', nullable: false })
    isWorking: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}