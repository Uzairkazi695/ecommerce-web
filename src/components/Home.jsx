import About from './About'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import ProductContainer from './ProductContainer'
import Services from './Services'

export default function Home() {
  return (
    <div className='bg-[#FDF8EB]'>
      <Hero />
      <ProductContainer />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
