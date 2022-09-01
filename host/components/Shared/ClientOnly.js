import dynamic from 'next/dynamic'

export default function ClientOnly({children}) {
  const Dynamic = dynamic(
    async () => () => children,
    {ssr: false}
  )

  return <Dynamic></Dynamic>
}