import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invitation } from './invitation.entity';
import { InvitationsController } from './invitations.controller';
import { Organization } from 'src/organizations/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invitation, Organization])],
  providers: [InvitationsService],
  controllers: [InvitationsController],
})
export class InvitationsModule {}
