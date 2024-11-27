import HeroSectionImage from '../../assets/images/HeroSectionImage.jpg';

const HeroImage = () => {
    return (
        <div>
            <img
                className="h-[200px] w-[200px] rounded-full"
                src={HeroSectionImage} // Import the image
                alt="Hero Section Image"
            />
        </div>
    );
};

export default HeroImage;
