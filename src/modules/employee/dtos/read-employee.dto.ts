import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Department } from 'src/modules/department/department.entity';

@Exclude()
export class ReadEmployeeDto {
    
    @Expose()
    @IsString()
    readonly firstName: string;

    @Expose()
    @IsString()
    readonly lastName: string;
    
    @Expose()
    @IsNumber()
    readonly age: number;

    @Expose()
    @IsBoolean()
    readonly isWorking: boolean;

    @Expose()
    readonly departments: Department[];
}