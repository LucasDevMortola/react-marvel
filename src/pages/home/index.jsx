import Header from "../../components/header/index";
import { Container } from "./style";
import React, { useState, useEffect } from "react";
import CardHero from "../../components/card";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { containerButton } from "./style";
export default function Home() {
  let currentPage = 1;
  const url = "https://api-marvel-back.herokuapp.com/personagens?";

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          page: currentPage - 1,
          limit: 12,
        },
      })
      .then((res) => {
        setLista(res.data.personagens);
        console.log(lista);
      });
  }, []);
  return (
    <Container>
      <Header />
      <Grid container>
        {lista.map((x) => (
          <Grid item xs={2}>
            <CardHero personagem={x} />
          </Grid>
        ))}
      </Grid>
      <Grid container>
          <Grid item xs={5}>

          </Grid>
        <Grid item xs={6}>
          <Button color="error" variant="outlined">
            Carregar mais
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
