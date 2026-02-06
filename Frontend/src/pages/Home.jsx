
import ChoosePkg from '../components/ChoosePkg'
import ConsultancyServices from '../components/ConsultancyServices'
// import CTA from '../components/CTA'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import PanditHelpCTA from '../components/PanditHelpCTA'
import Pooja from '../components/Pooja'
import Service from '../components/Service'
import StepByStep from '../components/StepByStep'
import WhyAnanthaPooja from '../components/WhyAnanthaPooja'

const Home = () => {
  return (
    <div>
        <Hero/>
          <ChoosePkg/>
          <ConsultancyServices/>
          <PanditHelpCTA/>
         <WhyAnanthaPooja/>
         <Pooja/>
         <StepByStep/>
         <HowItWorks/>
         <Service/>
         {/* <CTA/> */}
    </div>
  )
}

export default Home
