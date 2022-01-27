const Header = () => {
  return (
    <nav
      className='flex items-center justify-between flex-wrap bg-teal p-6'
    >
      <div className='flex flex-no-shrink text-white mr-6'>
        <span className='font-semibold text-3xl tracking-tight text-blue-600'>Bitbit</span>
      </div>
      <div className='w-full block flex-grow flex w-auto'>
        <div className='text-sm flex-grow'>
        </div>
        <div>
          <a
            href='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:text-gray-500 mt-0'
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
