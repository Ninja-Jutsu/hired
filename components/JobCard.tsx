import { JobType } from '@/utils/types'
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import JobInfo from './JobInfo'
import DeleteJobButton from './DeleteJobButton'

function JobCard({ job }: { job: JobType }) {
  const date = new Date(job.createdAt)
  const today = new Date()

  const timeDifference = Math.abs(today.getTime() - date.getTime())
  const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000
  const expiring = timeDifference > sevenDaysInMilliseconds

  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle className='cursor-pointer hover:underline'>
          {job.link && <a href={`https://${job.link}`}>{job.position}</a>}
          {!job.link && <p>{job.position}</p>}
        </CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='mt-4 grid grid-cols-2 gap-4'>
        <JobInfo
          icon={<Briefcase />}
          text={job.mode}
        />
        <JobInfo
          icon={<MapPin />}
          text={job.location}
        />
        <JobInfo
          icon={<CalendarDays />}
          text={date.toLocaleDateString()}
          className={`${!expiring && 'text-red-500'}`}
        />
        <Badge
          className='w-32  justify-center'
          variant={job.status === 'interview' ? 'default' : job.status === 'pending' ? 'secondary' : 'destructive'}
        >
          <JobInfo
            icon={<RadioTower className='w-4 h-4' />}
            text={job.status}
          />
        </Badge>
      </CardContent>
      <CardFooter className='flex gap-4'>
        <Button
          asChild
          size='sm'
          className='text-white'
        >
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  )
}
export default JobCard
