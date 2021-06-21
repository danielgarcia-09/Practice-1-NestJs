import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Employee } from '../employee/employee.entity';

@Entity('departments')
export class Department extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 25, name:'department_name', nullable:false })
    name: string;

    @Column({ type: 'text' })
    description: string;

    @ManyToMany(() => Employee, employee => employee.departments)
    employees: Employee[];

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}