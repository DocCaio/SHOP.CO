import Banner from "../../components/Banner"
import ContainerBrands from "../../components/ContainerBrands"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";


const Home = () => {
  return (
    <div>
      <Header/>
      <Banner />
      <ContainerBrands />
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home;