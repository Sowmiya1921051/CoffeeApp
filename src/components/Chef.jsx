import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import Chef1 from '../assets/Chef1.jpg';
import Chef2 from '../assets/Chef2.jpg';
import Chef3 from '../assets/Chef3.jpg';
import Chef4 from '../assets/Chef4.jpg';

function Memorable() {
    return (
        
        <div className="bg-gray-700 md:p-20">
            <div className="text-center">
                <p className="text-xl text-orange-500">BE READY FOR</p>
                <p className="text-5xl font-bold mt-4">Memorable Moments</p>
                <p className="mt-4 md:mt-8">
                    From exquisite dishes to delightful ambiance, our grand opening promises an unforgettable dining experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 w-full p-20 ">
                <div>
                    <img src={Chef1} alt="" className="h-auto md:h-full" />
                    <div className='text-white mt-4 text-center'>
                    <p className="font-bold ">Fynley Wilkinson</p>
                    <p className="text-yellow-500">Chef</p>
                    <FontAwesomeIcon icon={faFacebook} className="mx-2 text-xl  hover:text-blue-700" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-2  text-xl hover:text-blue-500" />
                    </div>
                </div>
                <div>
                    <img src={Chef2} alt="" className="h-auto md:h-full" />
                    <div className='text-white mt-4 text-center'>
                    <p className="font-bold ">Robyn Peel</p>
                    <p className="text-yellow-500">Chef</p>
                    <FontAwesomeIcon icon={faFacebook} className="mx-2 text-xl  hover:text-blue-700" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-2  text-xl hover:text-blue-500" />
                    <FontAwesomeIcon icon={faInstagram} className="mx-2  text-xl hover:text-violet-700" />
                    </div>
                </div>
                <div>
                <img src={Chef3} alt="" className="h-auto md:h-full" />
                   <div className='text-white mt-4 text-center'>
                    <p className="font-bold ">Aysha Shepard</p>
                    <p className="text-yellow-500">Chef</p>
                    <FontAwesomeIcon icon={faFacebook} className="mx-2 text-xl  hover:text-blue-700" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-2  text-xl hover:text-blue-500" />
                    <FontAwesomeIcon icon={faInstagram} className="mx-2  text-xl hover:text-violet-700" />
                   </div>
                </div>
                <div>
                    <img src={Chef4} alt="" className="h-auto md:h-full" />
                   <div className='text-white mt-4 text-center'>
                   <p className="font-bold ">Myra Welsh</p>
                    <p className="text-yellow-500">Chef</p>
                    <FontAwesomeIcon icon={faFacebook} className="mx-2 text-xl  hover:text-blue-700" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-2  text-xl hover:text-blue-500" />
                    <FontAwesomeIcon icon={faInstagram} className="mx-2  text-xl hover:text-violet-700" />
                    
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Memorable;




{/* <div className="text-center text-white" style={{ backgroundImage: `url(${Chef1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FontAwesomeIcon className='text-3xl' icon={faMugHot} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>
          </div>
          <div className="text-center text-white" style={{ backgroundImage: `url(${Chef2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FontAwesomeIcon className='text-3xl' icon={faBowlFood} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>
          </div>
          <div className="text-center text-white" style={{ backgroundImage: `url(${Chef3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FontAwesomeIcon className='text-3xl' icon={faCakeCandles} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>
          </div>
          <div className="text-center text-white" style={{ backgroundImage: `url(${Chef4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FontAwesomeIcon className='text-3xl' icon={faCakeCandles} />
            <p className='text-xl font-semibold mt-5'>Aromatic Taste</p>
            <p className='mt-5'>Rich, inviting, and utterly tantalizing, the aromatic taste of coffee is a sensory journey that begins with the first whiff.</p>
            <button className="border-white border font-semibold text-black px-4 py-2 mt-4 hover-yellow-500 rounded-full">View More</button>
          </div> */}
