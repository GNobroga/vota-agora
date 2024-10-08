import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import InfrastructureModule from "src/infrastructure/infrastructure.module";
import UserModule from "../users/user.module";
import PublicConsultation from "./entities/public-consultation.entity";
import PublicConsultationController from "./public-consultation.controller";
import usecases from "./usecases";
import PublicConsultationExpirationCheckerScheduler from "./scheduler/public-consultation-expiration-checker.scheduler";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        InfrastructureModule,
        UserModule,
        TypeOrmModule.forFeature([PublicConsultation]),
        ScheduleModule.forRoot()
    ],
    controllers: [PublicConsultationController],
    providers: [
        ...usecases,
        PublicConsultationExpirationCheckerScheduler
    ]
})
export default class PublicConsultationModule {}