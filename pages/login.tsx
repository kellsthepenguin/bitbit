import type { NextPage } from 'next'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'

const Home: NextPage = () => {
  function login() {
    const id = (document.getElementById('id') as HTMLInputElement).value
    const pw = (document.getElementById('pw') as HTMLInputElement).value

    fetch('/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, pw })
    })
      .then(res => res.json())
      .then(({ token, error }) => {
        if (error) return toast.error('Failed to login. Reason: ' + error)
        toast.success('Success!')
      })
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Toaster />

      <div className='p-40 py-36 shadow-xl center'>
        <div className='text-center'>
          <h1 className='relative text-5xl font-bold text-blue-600 bottom-20'>
            Bitbit
          </h1>

          <input
            className='relative border border-gray-400 rounded bottom-12 placeholder-right-3'
            id='id'
            placeholder='id'
          /> <br />
          <input
            className='relative border border-gray-400 rounded bottom-12 placeholder-right-3'
            id='pw'
            type='password'
            placeholder='pw'
          /> <br />

          <button
            className='bg-blue-500 text-white rounded px-10'
            onClick={login}
          >Login</button> <br />
          or Register
        </div>
      </div>
    </div>
  )
}

export default Home
