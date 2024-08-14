import JobInfo from '@/components/JobInfo'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { Redacted_Script } from 'next/font/google'

const redacted = Redacted_Script({ subsets: ['latin'], weight: ['400'] })

function LoadingJobsList() {
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <div className=''>
      <Skeleton className='bg-muted mb-16 p-16 rounded-lg' />
      <div id='JobList'>
        <div className='flex justify-between'>
          <Skeleton className={`${redacted.className} text-2xl pl-3 h-0`}>Hello World Welcome</Skeleton>
          <Skeleton className='mb-8 h-8 w-72 pr-3' />
        </div>

        <div
          id='cards'
          className='grid md:grid-cols-2 gap-8'
        >
          {skeletons.map((item) => (
            <Skeleton
              className='h-[300px] w-[600px]'
              key={item}
            >
              <div className='p-6'>
                <h2 className={`${redacted.className} text-3xl`}>Hello Job</h2>
                <p className={`${redacted.className} text-xl text-stone-400`}>Hello job</p>
              </div>
              <CardContent className='mt-4 grid grid-cols-2 gap-4'>
                <JobInfo
                  icon={<Briefcase />}
                  text={'hello world'}
                  className={`${redacted.className}`}
                />
                <JobInfo
                  icon={<MapPin />}
                  text={'hello world'}
                  className={`${redacted.className}`}
                />
                <JobInfo
                  icon={<CalendarDays />}
                  text={'hello world'}
                  className={`${redacted.className}`}
                />
              </CardContent>
              <CardFooter className='flex gap-4'>
                <Button
                  size='sm'
                  className={`${redacted.className} bg-green-500 text-white`}
                >
                  Edit
                </Button>
                <Button className={`${redacted.className} bg-red-500 text-white`}>Delete</Button>
              </CardFooter>
            </Skeleton>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingJobsList
