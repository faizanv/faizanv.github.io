import * as React from "react"

import Header from '../components/header';
import Footer from '../components/footer';

import '@fontsource/montserrat';
import './index.scss';

const IndexPage = () => {
  return (
    <div className="site">
      <main>
        <title>Faizan Virani</title>
        <Header />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
