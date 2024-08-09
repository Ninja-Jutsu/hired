'use server'
import prisma from '@/prisma/client'

import { auth } from '@clerk/nextjs'
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from './types'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'

function authenticateAndRedirect(): string {
  const { userId } = auth()
  console.log('userId')
  if (!userId) {
    redirect('/')
  }
  return userId
}

export async function createJobAction(values: CreateAndEditJobType): Promise<JobType | null> {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('createJobAction')
  const userId = authenticateAndRedirect()
  try {
    console.log('createJobAction')

    createAndEditJobSchema.parse(values)
    const job: JobType = await prisma.job.create({
      data: {
        ...values,

        clerkId: userId,
      },
    })
    return job
  } catch (error) {
    console.log('something went wrong')
    console.error(error)
    return null
  }
}
