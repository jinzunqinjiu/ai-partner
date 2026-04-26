import { TailwindDemo } from '@repo/ui/tailwind-demo'

export default function Home() {
  return (
    <main className='min-h-screen bg-slate-950 p-6 md:p-10'>
      <div className='mx-auto flex w-full max-w-6xl justify-center'>
        <TailwindDemo appName='web' />
      </div>
    </main>
  )
}