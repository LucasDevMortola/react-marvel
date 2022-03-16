import Header from '../../components/header/index'
import { Container } from './style'
import React,{ useState, useEffect} from 'react'
import CardHero from '../../components/card'
import  axios  from 'axios'
export default function Home(){

let currentPage = 1;
const url = 'https://api-marvel-back.herokuapp.com/personagens?'

const [lista, setLista] = useState();

useEffect(()=>{
    axios.get(url,{
        params: {
           page: currentPage - 1,
           limit: 12,
         },
   }).then((res)=>(
    console.log(res.data.personagens),
      setLista(res.data.personagens),
       console.log(lista)
   ))}
,)
    return(
        <Container>
            <Header />
         <CardHero />       
        </Container>
    )
}