import Features from '../../../../modules/home/features/features';
import FeatureOne from '../../../../public/assets/images/landing_p/icon-1.png';
import FeatureTwo from '../../../../public/assets/images/landing_p/icon-2.png';
import HeroSection from '../../features/Hero';
import HeroBg from '../../../../public/assets/images/landing_p/landingPage1.png';
import Button from '@/components/ui/Button';

const data = [
  {
    name: 'Access to Niche Markets',
    img: FeatureOne.src,
    href: '/marketplace',
    slug: 'Browse Products',
    desc: 'Explore a diverse array of products curated by skilled businesses. captivating business offerings!',
  },
  {
    name: 'Digital Storefronts',
    img: FeatureTwo.src,
    href: '/shop',
    slug: 'Create Shop',
    desc: "Establish your digital storefront effortlessly. For your unique products, create your space seamlessly!",
  },
];

const SectionTwo = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center py-5  w-full">
        <HeroSection
          title="How exactly does InT help You?"
          bottom={true}
          desc={
            <p className="text-[#0D0C22] text-left md:text-justify font-manropeL text-[16px]">
              InT seamlessly integrates with your existing systems and processes, streamlining operations and eliminating unnecessary complexities. 
              Our platform is designed to effortlessly align with your workflow, ensuring a smooth transition and maximizing efficiency.
            </p>
          }
          slug="Get Started"
          href="/auth/signup"
        />
      </div>
      <div className="bg-cover bg-no-repeat bg-center h-[400px]" style={{ backgroundImage: `url(${HeroBg.src})` }}></div>
      <div className="flex justify-center items-center py-12 w-full">
        <Features data={data} />
      </div>
    </div>
  );
};

export default SectionTwo;
