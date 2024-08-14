import { StatsLoadingCard } from '@/components/StatsCard'
import { Skeleton } from '@/components/ui/skeleton'
import { Redacted_Script } from 'next/font/google'

const redacted = Redacted_Script({ subsets: ['latin'], weight: ['400'] })

function StatsLoadingCards() {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
      </div>
      <div className='mt-12 flex flex-col items-center'>
        <h1 className={`text-5xl  ${redacted.className}`}>Hello World Again</h1>
        <Skeleton className='h-[300px] w-full m-10' />
      </div>
    </div>
  )
}
export default StatsLoadingCards
