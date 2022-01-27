const Header = () => {
  return (
    <nav
      className='flex items-center justify-between flex-wrap p-6'
    >
      <div className='flex mr-6'>
        <span className='font-semibold text-3xl text-blue-600'>Bitbit</span>
      </div>
      <div className='w-full block flex w-auto'>
        <div>
          <a
            href='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:text-gray-500'
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
