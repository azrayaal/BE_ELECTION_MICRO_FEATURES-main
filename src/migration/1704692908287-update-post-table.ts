import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1704692908287 implements MigrationInterface {
    name = 'UpdatePostTable1704692908287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "party" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying, "chairman" character varying NOT NULL, "vision_mission" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_e6189b3d533e140bb33a6d2cec1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "candidate" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying, "number" integer NOT NULL, "vision_mission" character varying NOT NULL, "partyId" integer, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voter" ("id" SERIAL NOT NULL, "candidateId" integer, "userId" integer, CONSTRAINT "PK_c1a0d8fd992c199219325d43705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "date" TIMESTAMP NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "candidate" ADD CONSTRAINT "FK_ee54545f559cc92ca30424fa82f" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_166eed65e19f98f1cd31574653c" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_b6a3557076b565c888eb23f8308" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_636f17dadfea1ffb4a412296a28" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_636f17dadfea1ffb4a412296a28"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_b6a3557076b565c888eb23f8308"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_166eed65e19f98f1cd31574653c"`);
        await queryRunner.query(`ALTER TABLE "candidate" DROP CONSTRAINT "FK_ee54545f559cc92ca30424fa82f"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "voter"`);
        await queryRunner.query(`DROP TABLE "candidate"`);
        await queryRunner.query(`DROP TABLE "party"`);
    }

}
