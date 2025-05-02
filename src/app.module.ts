/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Custom Modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LessonsModule } from './lessons/lessons.module';
import { ScoresModule } from './scores/scores.module';
import { VideosModule } from './videos/videos.module';
import { GamesModule } from './game/games.module';

// JWT & Config
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '7d' },
    }),
    UsersModule,
    AuthModule,
    AdminModule,
    LessonsModule,
    ScoresModule,
    VideosModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
