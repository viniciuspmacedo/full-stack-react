import { livros } from './latestReleasesDataBase'
import CardRecomends from '../CardRecomends'
import imagemLivro from '../../images/livro2.png'
import styled from 'styled-components'
import { Title } from '../Title'

const LatestReleasesContainer = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`
const NewBooksContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   cursor: pointer;
`
function LatestReleases() {
   return (
       <LatestReleasesContainer>
           <Title
               cor="#EB9B00"
               tamanhoFonte="36px"
           >
               ÚLTIMOS LANÇAMENTOS
           </Title>
           <NewBooksContainer>
               {livros.map( livro => (
                   <img src={livro.src} alt=""/>
               ))}
           </NewBooksContainer>
           <CardRecomends
               titulo="Talvez você se interesse por"
               subtitulo="Angular 11"
               descricao="Construindo uma aplicação com a plataforma Google"
               img={imagemLivro}
           />
       </LatestReleasesContainer>
   )
}
export default LatestReleases