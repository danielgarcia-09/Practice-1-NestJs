import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ReadEmployeeDto } from './dtos/';
import { EmployeeService } from './employee.service';
import { ConfigService } from '../../config/config.service';

@Controller('employee')
export class EmployeeController {

    constructor(
        private readonly _employeeService: EmployeeService,
        private readonly _configService: ConfigService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createEmployee( @Body() employee ): Promise<ReadEmployeeDto> {
        return this._employeeService.createEmployee(employee);
    }

    @Get()
    allEmployees(): Promise<ReadEmployeeDto[]>{
        return this._employeeService.allEmployees();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Get('jwt')
    getJwtSecret(){
        const secret = this._configService.get('JWT_SECRET');
        return { secret: secret }
    }

}
