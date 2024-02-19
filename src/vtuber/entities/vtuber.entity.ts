import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Vtuber {

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;
    
    @Column()
    debut: Date;
    
    @Column()
    age: number;

    @Column()
    company: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
