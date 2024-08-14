'use client'
import JobCard from './JobCard'
import { useSearchParams } from 'next/navigation'
import { getAllJobsAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import ComplexButtonContainer from './ComplexButtonContainer'
import LoadingJobsList from '@/app/(dashboard)/jobs/loading'
import { Button } from './ui/button'
import { useRouter, usePathname } from 'next/navigation'

function JobsList() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const jobStatus = searchParams.get('jobStatus') || 'all'

  const pageNumber = Number(searchParams.get('page')) || 1
  const { data, isPending } = useQuery({
    queryKey: ['jobs', search ?? '', jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  })

  // Reset search in case of no result
  const router = useRouter()
  const pathname = usePathname()
  function resetSearch() {
    router.push(pathname)
  }

  const jobs = data?.jobs || []

  const count = data?.count || 0
  const page = data?.page || 0
  const totalPages = data?.totalPages || 0

  if (isPending) return <LoadingJobsList />

  if (jobs.length < 1)
    return (
      <div className='w-full h-full flex flex-col gap-8 items-center'>
        <h2 className='text-xl'>No Jobs Found</h2>
        <Button onClick={resetSearch}>Reset Search</Button>
      </div>
    )
  return (
    <main>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-between mb-8'>
        <h2 className='text-xl font-semibold capitalize '>{count} jobs found</h2>
        {totalPages < 2 ? null : (
          <ComplexButtonContainer
            currentPage={page}
            totalPages={totalPages}
          />
        )}
      </div>
      <div className='grid md:grid-cols-2  gap-8'>
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
            />
          )
        })}
      </div>
    </main>
  )
}

export default JobsList
