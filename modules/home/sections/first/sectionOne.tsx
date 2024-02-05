import Jumbotron from '../../jumbotron/jumbotron';
import PortfolioCarousel from '../../carousel/portfolios/portfolioCarousel';

const SectionOne = () => {
  return (
    <div className="md:border-b-2 border-[#96969611]">
      <div className="flex justify-center items-center flex-col">
        <Jumbotron />
      </div>
      <div>
        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default SectionOne;
