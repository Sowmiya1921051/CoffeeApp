import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



function Project() {
    const content = [
        {
            "Day": "Mon - Thu",
            "Time": "10:30AM - 9:30PM"
        },
        {
            "Day": "Friday",
            "Time": "10:00AM - 10:30PM",
            "fName": "WE ARE",
            "lName": "Open"
        },
        {
            "Day": "Sat - Sun",
            "Time": "09:30AM - 11:00PM"
        }
    ];

    return (
        <div>
               <div className='bg-black text-white flex flex-col gap-6 sm:flex-row sm:justify-between p-4'>
    <div>
        <p><FontAwesomeIcon icon={faPhone} className='mr-4 text-orange-500 '/>Call us now and get special offers!</p>
    </div>
    <button className="border-white border font-semibold text-white px-4 py-2 hover-yellow-500 rounded-full mt-4 sm:mt-0">View All Menu</button>
</div>

            <section className="relative  md:h-80 h-screen">

                <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}></div>

                <div className="absolute inset-0 ">
                    <div className="text-center">
                        <p className="text-xl text-orange-500">WE ARE</p>
                        <p className="text-5xl font-bold mt-4">Open</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-screen-xl mx-auto h-full">

                        {content.map((item, index) => (
                            <div key={index} className="rounded-md  h-full flex justify-center items-center">
                                <div className="text-center">
                                    <p className='text-lg font-bold'>{item.Day}</p>
                                    <p className='text-xl '>{item.Time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
