import googleLogo from '../assets/Google-logo.png'
import Star from '../assets/Star.png'
import GreenStar from '../assets/Green-Star.png'
import Trust from '../assets/Trust.png'


function Memorable() {
    return (
        <div className="bg-gray-700 p-8 md:p-20">
            <div className="text-center text-white">
                <p className="text-xl text-orange-500">22,000+</p>
                <p className="text-5xl font-bold mt-4">Happy Customers</p>
                <p className="mt-4 md:mt-8"> 
                Happy diners, happy hearts! Join the delighted ranks of our satisfied customers and experience culinary excellence like never before.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-10">
                    <div className="text-left text-white  border border-white p-4 rounded-lg">
                        <img className='w-24' src={googleLogo} alt="" />
                        <p className='mt-5'>An absolute gem! The food was exquisite, service impeccable, and ambiance delightful. Can t wait to return!</p>
                       <div className='flex justify-between mt-10'>
                       <div>
                        <p className='text-lg font-bold'>Karyn Deely</p>
                        <p>Jan 20, 2024</p>
                       </div>
                       <div className='flex '>
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                       </div>
                       </div>

                    </div>
                    <div className="text-left text-white  border border-white p-4 rounded-lg">
                        <img className='w-24 ' src={Trust} alt="" />
                        <p className='mt-5'>Absolutely phenomenal! The chef s dedication to quality ingredients shines through in every dish.</p>
                       <div className='flex justify-between mt-10'>
                       <div>
                        <p className='text-lg font-bold'>Josefa Devany</p>
                        <p>Jan 20, 2024</p>
                       </div>
                       <div className='flex '>
                            <img className='w-6 h-6' src={GreenStar} alt="" />
                            <img className='w-6 h-6' src={GreenStar} alt="" />
                            <img className='w-6 h-6' src={GreenStar} alt="" />
                            <img className='w-6 h-6' src={GreenStar} alt="" />
                            <img className='w-6 h-6' src={GreenStar} alt="" />
                       </div>
                       </div>

                    </div>
                    <div className="text-left text-white  border border-white p-4 rounded-lg">
                        <img className='w-24' src={googleLogo} alt="" />
                        <p className='mt-5'>An unforgettable dining experience. Every course was a delightful surprise, perfectly complemented by impeccable service.</p>
                       <div className='flex justify-between mt-10'>
                       <div>
                        <p className='text-lg font-bold'>Samual Stein</p>
                        <p>Jan 20, 2024</p>
                       </div>
                       <div className='flex '>
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                            <img className='w-6 h-6' src={Star} alt="" />
                       </div>
                       </div>

                    </div>
            </div>

        </div>
    )
}

export default Memorable
