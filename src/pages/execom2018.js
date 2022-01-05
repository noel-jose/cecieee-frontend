import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
import Header from '../components/Header/Header';
import Footer from './../components/Footer/Footer';

export default function ExeCom2018() {
  return (
    <Container>
      <Main>
      <TopHeader/>
      <Header/>
        <Heading1>
          ExeCom 2018
          </Heading1>
          <Footer/>
        </Main>
    </Container>
  )
}