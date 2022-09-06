import {
    Entity,
    AfterRemove,
    AfterUpdate,
    Column,
    PrimaryGeneratedColumn,
    AfterInsert,
    OneToMany,
} from 'typeorm';
import { Report } from '../reports/report.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Report, (report) => report.user)
    reports: Array<Report>

    @AfterInsert()
    logInsert() {
        console.log('Inserted user with id :', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed user with id :', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with id :', this.id);
    }
}
