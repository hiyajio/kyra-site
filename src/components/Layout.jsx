import React from "react"
import { Helmet } from "react-helmet"

import Footer from "./Footer"

const Layout = props => {
  return (
    <div className="flex">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Kyra Buenviaje</title>
        <meta name="author" content="Kyra Buenviaje" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kyra Buenviaje" />

        <meta property="og:title" content="Kyra Buenviaje" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/50670255/76829260-1c726c80-67f9-11ea-84b2-3b134ff8eb9d.png"
        />
        <meta
          property="og:description"
          content="Portfolio website of Kyra Gabrielle Buenviaje: Clothing Enthusiast, Fashion Designer, Artist, Creative and proud Filipino."
        />
        <meta property="og:url" content="kyrabuenviaje.com" />

        <meta property="twitter:url" content="kyrabuenviaje.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Kyra Buenviaje" />
        <meta property="twitter:title" content="Kyra Buenviaje" />
        <meta
          name="description"
          content="Portfolio website of Kyra Gabrielle Buenviaje: Clothing Enthusiast, Fashion Designer, Artist, Creative and proud Filipino."
        />
        <meta
          property="og:description"
          content="Portfolio website of Kyra Gabrielle Buenviaje: Clothing Enthusiast, Fashion Designer, Artist, Creative and proud Filipino."
        />
        <meta
          property="twitter:description"
          content="Portfolio website of Kyra Gabrielle Buenviaje: Clothing Enthusiast, Fashion Designer, Artist, Creative and proud Filipino."
        />
        <meta
          name="keywords"
          content="kyra,gabrielle,kyragabrielle,kyragabriellebuenviaje,risd,rhodeislandschoolofdesign,risdapparel,risdappareldesign,rhodeisland,ri,providence,design,designstudent,fashionstudent,fashion,fashiongraduate,fashiondesign,fashiondesigner,appareldesign,appareldesigner,womenswear,womensweardesigner,menswear,mensweardesigner,contemporary,contemporaryclothes,classic,classicclothes,assistant,assistantdesigner,associatedesigner,productdeveloper,productdevelopment,woven,wovendesigner,zacposen,zacposeninternship,zacposencollection,zacposenss2020,zacposenwinnieharlow,stevensebring,zacposen360,newyorkcity,ny,newyork,manhattan,newyorkcitydesigner,nycdesigner,nycfashion,newyorkfashion,designerclothes,rtwdesigner,rtw,womensrtw,philippines,philippinefashiondesigner,philippinefashion,filipinodesigner,filipinodesign,rmit,melbournefashion,rmitfashion,luihonintern,upandcoming,metdesigncompetition,heavenlybodies,heavenlybodiesdesign,metexhibit,ymafsf,fashionscholarshipfund,fashionscholarshipfundwinner,metromagazine,metromagazinefeature"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/50670255/76829260-1c726c80-67f9-11ea-84b2-3b134ff8eb9d.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kyrabuenviaje.com/" />
      </Helmet>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
