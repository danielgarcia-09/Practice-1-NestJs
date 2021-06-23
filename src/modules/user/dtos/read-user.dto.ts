import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

@Exclude()
export class ReadUserDto {

    @Expose()
    @IsString()
    username: string;
    
    @Expose()
    @IsDate()
    createdAt: Date;
    
    @Expose()
    @IsDate()
    updatedAt: Date;
}