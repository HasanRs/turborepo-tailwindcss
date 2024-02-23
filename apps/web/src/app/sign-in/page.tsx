import Footer from '../../../components/footer';
import Header from '../../../components/header';
import HeaderAlert from '../../../components/headeralert';
import SignIn from '../../../components/signin';

export default function Page() {
  return (
    <div className=''>
      <HeaderAlert />
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
}
