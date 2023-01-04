import StepColumn from '@/components/column'

export default function HomePage() {
  const ColumnList = ['Backlog', 'In Progress', 'Pending Review', 'Done']

  return (
    <section className="flex h-screen items-center justify-center">
      {ColumnList.map((name, i) => {
        return <StepColumn key={i} name={name} />
      })}
    </section>
  )
}
