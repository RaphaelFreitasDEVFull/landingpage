type TitlePageProps = {
  title: string
  subtitle: string
}

const TitlePage = ({ title, subtitle }: TitlePageProps) => {
  return (
    <div className="flex gap-10 items-center justify-start">
      <span className="bg-[#B9FF66] text-4xl font-medium px-6 py-3 rounded-lg">
        {title}
      </span>
      <p className="max-w-[750px]">{subtitle}</p>
    </div>
  )
}

export default TitlePage
