import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PostModule } from './Post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      migrationsTableName: 'migrations_typeorm',
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
