import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1704685652657 implements MigrationInterface {
    name = 'UpdatePostTable1704685652657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voter" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP COLUMN "vote"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "articleId" integer`);
        await queryRunner.query(`ALTER TABLE "voter" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "UQ_b6a3557076b565c888eb23f8308" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "voter" ADD "candidateId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4e3d648a89ed8d36cd16f9c4f8c" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_b6a3557076b565c888eb23f8308" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_166eed65e19f98f1cd31574653c" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_166eed65e19f98f1cd31574653c"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_b6a3557076b565c888eb23f8308"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4e3d648a89ed8d36cd16f9c4f8c"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP COLUMN "candidateId"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "UQ_b6a3557076b565c888eb23f8308"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "articleId"`);
        await queryRunner.query(`ALTER TABLE "voter" ADD "vote" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "voter" ADD "name" character varying NOT NULL`);
    }

}
