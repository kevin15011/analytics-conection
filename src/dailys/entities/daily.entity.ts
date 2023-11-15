import { Dimension } from "src/dimensions/entities/dimension.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Daily {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: "double",
    })
    sessions: number;

    @Column({
        type: "double",
    })
    transactions: number;

    @Column({
        type: "double",
    })
    totalRevenues: number;

    @Column({
        type: "datetime",
    })
    date: Date;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Dimension, (dimension) => dimension.id, {
        eager: true,
    })
    dimension: Dimension;
}
