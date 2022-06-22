import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <h1>Welcome to Pro-Shop</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
