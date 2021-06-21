import {MigrationInterface, QueryRunner} from "typeorm";

export class employeeCreated1624230882468 implements MigrationInterface {
    name = 'employeeCreated1624230882468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `employees` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(30) NOT NULL, `lastName` varchar(40) NOT NULL, `age` int NULL, `isWorking` tinyint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `employees`");
    }

}
