import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Redacted_Script } from 'next/font/google'

const redacted = Redacted_Script({ subsets: ['latin'], weight: ['400'] })


type StatsCardsProps = {
  title: string
  value: number
}

function StatsCards({ title, value }: StatsCardsProps) {
  return (
    <Card className='bg-muted'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle className='capitalize'>{title}</CardTitle>
        <CardDescription className='text-4xl font-extrabold text-primary mt-[0px!important]'>{value}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export function StatsLoadingCard() {
  return (
    <Card className='w-[400px] h-[88px] bg-muted'>
      <CardHeader className='flex flex-row justify-between items-center gap-6 min-w-[400px]'>
        <p className={`text-2xl flex-1 text-white ${redacted.className}`}>Hello World</p>
        <p className={`text-2xl text-green-500 ${redacted.className}`}>10</p>
      </CardHeader>
    </Card>
  )
}

export default StatsCards
