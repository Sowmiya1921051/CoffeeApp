import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-6 lg:p-14">
      <div className="container mx-auto py-8 px-4 lg:px-0 flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-auto mb-8 lg:mb-0 text-center lg:text-left">
          <p className='text-4xl font-bold'>Our Location</p>
          <p className='mt-2'>Collins Street West, Victoria 8007 Australia</p>
          <p className='mt-2'>T. (208) 333 9296</p>
          <p className='mt-2'>E. contact@baresto.com</p>
        </div>
        <div className="w-full lg:w-auto mb-8 lg:mb-0 ">
          <img src={Logo} alt="" className='w-20 mx-auto lg:mx-0' />
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-start text-2xl">
          <FontAwesomeIcon icon={faFacebookF} className="mx-2  hover:text-blue-700" />
          <FontAwesomeIcon icon={faTwitter} className="mx-2 hover:text-blue-500" />
          <FontAwesomeIcon icon={faGoogle} className="mx-2 hover:text-orange-500" />
          <FontAwesomeIcon icon={faPinterest} className="mx-2 hover:text-red-500" />
          <FontAwesomeIcon icon={faDribbble} className="mx-2 hover:text-pink-500" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
