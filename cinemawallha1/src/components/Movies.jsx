import Img from '../img/banner.png'
function Movies() {
  return (
    <div className='-mt-16'>
        <div
        className='
        mb-8 font-bold text-2xl text-center

        text-blue-950
        '
        >Tranding Movies</div>
      <div className='flex 
        flex-wrap
        justify-center'>
        <img src={Img}
        className='w-40
        h-[30vh]
        m-4
        rounded-xl
        hover:scale-110
        duration-300
        ' alt='' />
        <img src={Img}
        className='w-40
        h-[30vh]
        m-4
        rounded-xl
        hover:scale-110
        duration-300
        ' alt='' />
        <img src={Img}
        className='w-40
        h-[30vh]
        m-4
        rounded-xl
        hover:scale-110
        duration-300
        ' alt='' />
      </div>
    </div>
  )
}

export default Movies
