import {MigrationInterface, QueryRunner} from "typeorm";

export class departmentsCreated1624290962828 implements MigrationInterface {
    name = 'departmentsCreated1624290962828'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `departments` (`id` int NOT NULL AUTO_INCREMENT, `department_name` varchar(25) NOT NULL, `description` text NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `employees_departments_departments` (`employeesId` int NOT NULL, `departmentsId` int NOT NULL, INDEX `IDX_7a4a06da6e4d9d5d9e37d847c4` (`employeesId`), INDEX `IDX_b31108d923626bdb591e1d2a2b` (`departmentsId`), PRIMARY KEY (`employeesId`, `departmentsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `employees_departments_departments` ADD CONSTRAINT `FK_7a4a06da6e4d9d5d9e37d847c44` FOREIGN KEY (`employeesId`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `employees_departments_departments` ADD CONSTRAINT `FK_b31108d923626bdb591e1d2a2bb` FOREIGN KEY (`departmentsId`) REFERENCES `departments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employees_departments_departments` DROP FOREIGN KEY `FK_b31108d923626bdb591e1d2a2bb`");
        await queryRunner.query("ALTER TABLE `employees_departments_departments` DROP FOREIGN KEY `FK_7a4a06da6e4d9d5d9e37d847c44`");
        await queryRunner.query("DROP INDEX `IDX_b31108d923626bdb591e1d2a2b` ON `employees_departments_departments`");
        await queryRunner.query("DROP INDEX `IDX_7a4a06da6e4d9d5d9e37d847c4` ON `employees_departments_departments`");
        await queryRunner.query("DROP TABLE `employees_departments_departments`");
        await queryRunner.query("DROP TABLE `departments`");
    }

}
