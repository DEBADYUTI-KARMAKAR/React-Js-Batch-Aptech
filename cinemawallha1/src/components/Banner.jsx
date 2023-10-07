/* eslint-disable react/no-unescaped-entities */
import b from '../img/banner.png'
function Banner() {
  return (
    <div>
        <img src={b} className='h-96 w-full'></img>
        <div className='parent h-28'>
            <div className='relative bottom-16  text-3xl text-white
      
      bg-gray-900 w-full
      bg-opacity-40
      h-16
      pt-2
      text-center
      font-bold'>
            Don't Breathe 2
            </div>

        </div>
    </div>
  )
}

export default Banner
