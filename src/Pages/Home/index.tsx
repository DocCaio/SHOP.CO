import Banner from "../../components/Banner"
import Cart from "../../components/Cart";
import ContainerBrands from "../../components/ContainerBrands"

import Main from "../../components/Main";


const Home = () => {
  return (
    <div>     
      <Cart /> 
      <Banner/>
      <ContainerBrands/>
      <Main/>     
    </div>
  )
}

export default Home;