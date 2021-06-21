import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';

@Module({
  imports: [DatabaseModule, EmployeeModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
