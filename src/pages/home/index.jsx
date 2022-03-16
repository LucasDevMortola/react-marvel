import Header from '../../components/header/index'
import { Container } from './style'
import CardHero from '../../components/card'
import {axios } from 'axios'
export default function Home(){

let currentPage = 1;
const url = 'https://api-marvel-back.herokuapp.com/personagens?'

    return(
        <Container>
            <Header />
            {axios.get(url,{
                 params: {
                    page: currentPage - 1,
                    limit: 12,
                  },
            }).then((res)=>{
                console.log(res)
            })}
            <CardHero />
        </Container>
    )
}