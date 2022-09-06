import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(Report) private repository: Repository<Report>,
    ) {}

    getAllReports() {
        return this.repository.find()
    }

    create(reportDto: CreateReportDto) {
        const report = this.repository.create(reportDto);
        return this.repository.save(report);
    }
}
