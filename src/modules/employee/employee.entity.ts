import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Department } from '../department/department.entity';

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

    @ManyToMany(() => Department, department => department.employees,{
        eager: true,
        cascade: true,
    })
    @JoinTable()
    departments: Department[];

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}