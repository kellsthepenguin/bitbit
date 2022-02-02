import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useJwt } from 'react-jwt'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function useCheck (token: string) {
  const { data, error } = useSWR(`/api/check?token=${token}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

const Header = () => {
  const [token, setToken] = useState('')
  const result = useCheck(token)
  const { decodedToken } = useJwt(token)

  let isValid = false

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (token) {
      setToken(token)
    }
  })

  if (result.isError) return <div>An Error Occured</div>
  if (result.isLoading) return <div></div>

  if (result.data.valid) isValid = true

  return (
    <nav
      className='flex items-center justify-between flex-wrap p-6'
    >
      <div className='flex mr-6'>
        <span className='font-semibold text-3xl text-blue-600'>Bitbit</span>
      </div>
      <div className='w-full block flex w-auto'>
        <div className='text-sm'>
          {
            isValid ? <span>{ (decodedToken as any).id }</span> :
            <a
              href='/login'
              className='inline-block px-4 py-2 leading-none border rounded text-black border-black hover:text-gray-500'
            >
              Login
            </a>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header
