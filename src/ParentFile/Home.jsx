
import Banner from '../HomeFile/Banner';
import CategoryTab from '../HomeFile/CategoryTab';
import FindWork from '../HomeFile/FindWork';
import Promotion from '../HomeFile/Promotion';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                
            </Helmet>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
            <Promotion></Promotion>
            <FindWork></FindWork>
        </div>
    );
};

export default Home;