import logo from '../img/logo.png'
function Nav() {
  return (
    <div className='border flex items-center gap-10 pl-3 py-4'>
      <img src={logo} className='object-cover h-10 w-30'></img>
      <h3 className='font-bold text-xl text-blue-950 '>Movies</h3>
      <h3 className='font-bold text-xl text-blue-950'>Fevourites</h3>
    </div>
  )
}

export default Nav
