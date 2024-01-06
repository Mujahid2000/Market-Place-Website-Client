
import Banner from '../HomeFile/Banner';
import CategoryTab from '../HomeFile/CategoryTab';
import FindWork from '../HomeFile/FindWork';
import {Helmet} from "react-helmet";
import Work from '../HomeFile/Work';
import Growth from '../HomeFile/Growth';
import Achievement from '../HomeFile/Achievement';
import FeaturedCompaniesSection from '../HomeFile/Feature';
import BlogResourceSection from '../HomeFile/Blog'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                
            </Helmet>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
            <Growth></Growth>
            <Achievement></Achievement>
            <Work></Work>
            <BlogResourceSection></BlogResourceSection>
            <FeaturedCompaniesSection></FeaturedCompaniesSection>
            <FindWork></FindWork>
        </div>
    );
};

export default Home;