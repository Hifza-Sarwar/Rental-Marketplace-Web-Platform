
import Hero from "../components/Hero"
import Search from "../components/Search"
import BrowseCategory from "../components/BrowseCategory"
import Featured from "../components/Featured"
import LatestRentals from "../components/LatestRental"
import HowItWorks from "../components/HowItWorks"
import WhyChooseUs from "../components/WhyChooseUs"
// import Counter from "../components/Counter"
import About from "../components/About"
import FAQ from "../components/FQA"
import CTA from "../components/CTA"

function Home(){
 
  return(
    <>
    
    
    <Hero/>
    <Search/>
    <BrowseCategory/>
    <Featured/>
    <LatestRentals/>
    <HowItWorks/>
    <WhyChooseUs/>
    {/* <Counter/> */}
    <About/>
    <FAQ/>
    <CTA/>
    
    </>
  )

}
export default Home