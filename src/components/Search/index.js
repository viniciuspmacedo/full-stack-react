import { useState } from "react";
import { livros } from "./searchDataBase";
import styled from "styled-components";
import Input from "../Input";


const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 470px;
   width: 100%;
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`
const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
`   

export default function Search(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    const search = (e) => {
        const typedText = e.target.value
        const searchResult = livros.filter( livro => livro.nome.includes(typedText))
        setLivrosPesquisados(searchResult)
    }

    return(
        <PesquisaContainer>
           <Titulo>Já sabe por onde começar?</Titulo>
           <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
           <Input
               placeholder="Escreva sua próxima leitura"
               onBlur={evento => search(evento)}
           />
           { livrosPesquisados.map( livro => (
               <Resultado>
                   <img src={livro.src} alt=""/>
                   <p>{livro.nome}</p>
               </Resultado>
           ) ) }
       </PesquisaContainer>
    )
}