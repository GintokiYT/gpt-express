import { prisma } from '../utils/prisma';

export const getDomain = async (domain: string) => {
  try {
    const foundDomain = await prisma.domain.findFirst({ 
      where: { 
        domains: domain 
      } 
    });
    return foundDomain
  } catch (error: unknown) {
    throw new Error('Error searching for domain');
  }
};

export const createDomain = async (domain: string) => {
  try {
    const newDomain = await prisma.domain.create({
      data: {
        domains: domain
      }
    });
    return newDomain;
  } catch (error: unknown) {
    throw new Error('Error creating domain');
  }
}