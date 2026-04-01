import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import Stats from "./Component/stats"
import Footer from "./Component/Footer"
import Steps from "./Component/Steps"
import Pricing from "./Component/Pricing"
import CTABanner from "./Component/CTABanner"
import Models from "./Component/Models"
import Cart from "./Component/cart"
import { useState } from "react"


const getModels = async () => {
  const res = await fetch("/model.json")
  return res.json()
}

const modelPromise = getModels();


function App() {
  const [activeTab, setActiveTab] = useState('model');
  const [carts, setCarts] = useState([]);
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Stats></Stats>

      <div className="tabs tabs-box justify-center bg-transparent pt-8">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold" aria-label="Products" defaultChecked
          onClick={() => setActiveTab("model")} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 font-bold" aria-label="Carts"
          onClick={() => setActiveTab("cart")} />
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab}></Cart>}
      <Steps></Steps>
      <Pricing></Pricing>
      <CTABanner></CTABanner>
      <Footer></Footer>
    </>
  )
}

export default App