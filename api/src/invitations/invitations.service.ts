import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invitation } from './invitation.entity';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { Organization } from '../organizations/organization.entity';

@Injectable()
export class InvitationsService {
  constructor(
    @InjectRepository(Invitation)
    private invitationsRepository: Repository<Invitation>,
    @InjectRepository(Organization)
    private organizationsRepository: Repository<Organization>,
  ) {}

  async create(
    createInvitationDto: CreateInvitationDto,
  ): Promise<Invitation> {
    const organization = await this.organizationsRepository.findOne({
      where: { id: createInvitationDto.organizationId },
    });
    if (!organization) {
      throw new Error('Organization not found');
    }

    const newInvitation = this.invitationsRepository.create({
      ...createInvitationDto,
      organization,
    });
    return this.invitationsRepository.save(newInvitation);
  }
}
