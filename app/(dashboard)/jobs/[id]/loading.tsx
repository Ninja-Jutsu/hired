import { Skeleton } from '@/components/ui/skeleton'

function loading() {
  return (
    <div>
      <Skeleton className='bg-muted mb-16 h-72 rounded-lg' />
    </div>
  )
}

export default loading
