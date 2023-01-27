import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Main from './Components/product/main'

function App() {
  const products=[{
    id:1,
    img:'img/dress1.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'49.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m,l,xs]
  },
  {
    id:2,
    img:'img/dress2.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'29.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m,l,xl]
  },
  {
    id:3,
    img:'img/dress3.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'49.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m,l,xs,s]
  },
  {
    id:4,
    img:'img/dress4.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'49.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m,l,xs,xxl]
  },
  {
    id:5,
    img:'img/dress5.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'49.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m,l,xs,s]
  },
  {
    id:6,
    img:'img/dress6.jpg',
    title:'Midi tea dress in blue and red spot',
    price:'49.9',
    desc:'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
    size:[m]
  },
]

  return (
    <div className="App">
     <Header/>
     <Main products={products}/>
    </div>
  )
}

export default App
