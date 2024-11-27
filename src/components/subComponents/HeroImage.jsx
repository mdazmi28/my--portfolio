import HeroSectionImage from '../../assets/images/HeroSectionImage.jpg';

const HeroImage = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <img
                className="h-[200px] w-[200px] rounded-full"
                src={HeroSectionImage} // Import the image
                alt="Hero Section Image"
            />
            <h1 className='text-2xl font-bold text-gray-800'>Md Azmi Siddique</h1>
        </div>
    );
};

export default HeroImage;
