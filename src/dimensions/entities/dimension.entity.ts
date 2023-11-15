import { Daily } from "src/dailys/entities/daily.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dimension {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    key: string;

    @OneToMany(() => Daily, (daily) => daily.dimension)
    daily: Daily[];
}
