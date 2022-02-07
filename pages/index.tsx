import type {NextPage} from 'next'
import Head from 'next/head'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>bradyanderson.tech</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
          <Container className="home-container">
            <Row className="home-content text-center">
              <Col>
                <Image
                    className="logo rounded mx-auto d-block"
                    src="/logos/logo1024.png"
                />
                <h1 className="title">Welcome to the new bradyanderson.tech</h1>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
  )
}

export default Home
