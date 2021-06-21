import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadDepartmentDto {
    
    @Expose()
    readonly name: string;

    @Expose()
    readonly description: string;

    @Expose()
    readonly createdAt: Date;

    @Expose()
    readonly updatedAt: Date;
}