import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faBowlFood, faCakeCandles } from '@fortawesome/free-solid-svg-icons';


function Memorable() {
  return (
    <div className="bg-gray-700 p-8 md:p-20">
      <div className="text-center">
        <p className="text-xl text-orange-500">BE READY FOR</p>
        <p className="text-5xl font-bold mt-4">Memorable Moments</p>
        <p className="mt-4 md:mt-8">
          From exquisite dishes to delightful ambiance, our grand opening promises an unforgettable dining experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-10 ">
        <section className="flex justify-center items-center bg-cover bg-fixed bg-center h-80" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}>
          <div className="text-center text-white">
            <FontAwesomeIcon className='text-3xl' icon={faMugHot} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold  text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>

          </div>
        </section>
        <section className="flex justify-center items-center bg-cover bg-fixed bg-center h-80" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}>
          <div className="text-center text-white">
            <FontAwesomeIcon className='text-3xl' icon={faBowlFood} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold  text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>

          </div>
        </section>
        <section className="flex justify-center items-center bg-cover bg-fixed bg-center h-80" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}>
          <div className="text-center text-white">
            <FontAwesomeIcon className='text-3xl' icon={faCakeCandles} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold  text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>
            <br/> 

         </div>
        </section>
      </div>

    </div>
  )
}

export default Memorable
