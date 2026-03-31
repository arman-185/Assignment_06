import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import Stats from "./Component/stats"
import Footer from "./Component/Footer"
import Steps from "./Component/Steps"
import Pricing from "./Component/Pricing"
import CTABanner from "./Component/CTABanner"
import Models from "./Component/Models"


const getModels = async () => {
  const res = await fetch("/model.json")
  return res.json()
}

const modelPromise = getModels();


function App() {

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Stats></Stats>
      
      <Models modelPromise={modelPromise}></Models>
      
      <Steps></Steps>
      <Pricing></Pricing>
      <CTABanner></CTABanner>
      <Footer></Footer>
    </>
  )
}

export default App
