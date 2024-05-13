function Project() {
    return (
        <div className="flex flex-col md:flex-row bg-slate-600">
            <div className="md:w-1/2">
                <section className="relative md:h-full h-screen hidden md:block">
                    <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)' }}></div>
                </section>
            </div>
            <div className="md:w-1/2 flex justify-center items-center"> 
                <div className="p-16">
                    <p className="text-xl text-orange-500 text-center md:text-left">CUSTOMERS</p> 
                    <p className="text-5xl font-bold mt-4 text-center md:text-left">Review</p> 
                    <p className="mt-8 text-lg text-center md:text-left">As a busy professional, I rely on my morning coffee to kickstart my day. The rich, smooth taste and heavenly aroma never fail to perk me up and get me ready to tackle whatever the day throws at me. It s like a little slice of heaven in a cup!</p> {/* Center text on mobile, left-align on desktop */}
                    <p className="mt-5 text-center md:text-left">Jenna Smith</p> 
                </div>
            </div>
        </div>
    );
}

export default Project;
