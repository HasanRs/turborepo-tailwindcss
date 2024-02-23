import Companies from '../../components/companies';
import Cookies from '../../components/cookies';
import Customers from '../../components/customers';
import Features from '../../components/features';
import Footer from '../../components/footer';
import Header from '../../components/header';
import HeaderAlert from '../../components/headeralert';
import Hero from '../../components/hero';
import Pricing from '../../components/pricing';
import SlidingText from '../../components/slidingtext';

export default function Page() {
  return (
    <div className=''>
      <HeaderAlert />
      <Header />
      <Hero />
      <SlidingText />
      <Companies />
      <Features />
      <Customers />
      <Pricing />
      <Cookies />
      <Footer />
    </div>
  );
}
