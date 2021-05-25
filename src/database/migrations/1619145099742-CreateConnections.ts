import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateConnections1619145099742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "connections",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "admin_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "user_id",
                    type: "uuid",
                }
                    ,
                {
                    name: "socket_id",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
                ]
            })
        );

        //Criando uma ForinKey de forma diferente
        await queryRunner.createForeignKey(
            "connections",
            new TableForeignKey({
                name: "FRConnectionUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("connections", "FKConnectionUser");
        await queryRunner.dropTable("connections")
    }

}
