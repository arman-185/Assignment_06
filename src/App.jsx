import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import Stats from "./Component/stats"
import Footer from "./Component/Footer"
import Steps from "./Component/Steps"
import Pricing from "./Component/Pricing"
import CTABanner from "./Component/CTABanner"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Steps></Steps>
      <Pricing></Pricing>
      <CTABanner></CTABanner>
      <Footer></Footer>
    </>
  )
}

export default App
