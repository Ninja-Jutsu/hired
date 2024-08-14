function JobInfo({ icon, text, className }: { icon: React.ReactNode; text: string; className?: string }) {
  return (
    <div className={`flex gap-x-2 items-center ${className} sm:text-xl`}>
      {icon}
      {text}
    </div>
  )
}
export default JobInfo
