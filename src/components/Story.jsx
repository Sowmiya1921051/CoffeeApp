import One from '../assets/one.jpg';
import Two from '../assets/two.jpg';

const BrandComponent = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gray-600 text-white ">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div className="item text-left sm:text-left">
            <p className=" text-yellow-600 text-lg mt-10">DISCOVER</p>
            <p className=" text-5xl font-bold mt-5">Our Story</p>
            <p className=" mt-5 text-lg">At Baresto we believe in the power of good coffee and warm hospitality. Our journey began with a simple vision: to create a welcoming space where friends, families, and strangers alike could come together to enjoy delicious beverages, homemade treats, and meaningful connections.</p>
            <p className=" mt-5 text-lg">As a proud member of the community, we re committed to giving back and making a positive impact wherever we can. From supporting local artisans and farmers to hosting events that celebrate diversity and inclusion, we believe in using our platform to spread joy and goodwill in our neighborhood and beyond.</p>
          </div>

          <div className="item">
            <div className="flex flex-col sm:flex-row mt-6 gap-4">
              <img className="w-full sm:w-1/2 h-auto object-cover mb-4 sm:mb-0" src={One} alt="" />
              <img className="w-full sm:w-1/2 h-auto object-cover" src={Two} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandComponent;
