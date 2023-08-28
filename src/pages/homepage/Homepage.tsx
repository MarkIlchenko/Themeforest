import ImageSection from "./imageSection/ImageSection.tsx";
import LogoBrands from "./logoBrands/LogoBrands.tsx";
import Comments from "./comments/Comments.tsx";
import {companyComments, HomeData} from "../../../data/data.tsx";
import Articles from "./articles/Articles.tsx";
import CaruselNew from "./carusel/Carusel.tsx";
import Company from "./company/Company.tsx";
import Contacts from "./contacts/Contacts.tsx";
import Newsletter from "./newsletter/Newsletter.tsx";

const Homepage = () => {
    return (
        <main>
            <ImageSection title={HomeData[0].title} img={HomeData[0].img} orderText={false} secButton={true}/>
            <LogoBrands />
            <Comments />
            <ImageSection title={HomeData[1].title} img={HomeData[1].img} orderText={false} secButton={false} addSpacing={`mt-10 mb-20`}/>
            <ImageSection title={HomeData[2].title} img={HomeData[2].img} orderText={true} secButton={false} addSpacing={`mb-20`}/>
            <Articles />
            <CaruselNew />
            <Company data={companyComments} />
            <Contacts />
            <Newsletter />
        </main>
    );
};

export default Homepage;