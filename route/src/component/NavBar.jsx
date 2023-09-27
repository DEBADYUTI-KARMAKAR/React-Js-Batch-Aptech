import Logo from '../img/logo.png'
function NavBar() {
  return (
    <div className="flex p-5 border-2 gap-5  items-center pl-5 pr-5">
      <img src={Logo} className='object-cover h-10 w-30'></img>
      <div className='text-2xl'>
        Home
      </div>
      <div className='text-2xl'>Fevourite</div>
      
    </div>
  )
}

export default NavBar
