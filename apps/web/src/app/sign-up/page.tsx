import Footer from '../../../components/footer';
import Header from '../../../components/header';
import HeaderAlert from '../../../components/headeralert';
import SignUp from '../../../components/signup';

export default function Page() {
  return (
    <div className=''>
      <HeaderAlert />
      <Header />
      <SignUp />
      <Footer />
    </div>
  );
}
