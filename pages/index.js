/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizCard from '../src/components/QuizCard';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
// import Button from '../src/components/Button'; é o componente feito na aula que eu resolvi não usar
// import Input from '../src/components/Input'; é o componente feito na aula que eu resolvi não usar


// essa é a div do quiz
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// essa função representa a minha página (como se fosse o componente)
export default function Home() {
  const router = useRouter();
  // isso é um hook
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>

          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <QuizCard.Input
                onChange={(infosDoEvento) => {
                  console.log(infosDoEvento);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Informe como gostaria de ser chamada(o)"
              />
              <QuizCard.Button type="submit" disabled={name.length < 3}>
                CHALLENGE ACCEPTED!
              </QuizCard.Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nos Quizes que a comunidade fez durante a Imersão React Next.js da Alura!!</p>
          </Widget.Content>

          <Widget.Link href="#">
            link outro quiz
          </Widget.Link>
          <Widget.Link href="#">
            link outro quiz
          </Widget.Link>
          <Widget.Link href="#">
            link outro quiz
          </Widget.Link>
          <Widget.Link href="#">
            link outro quiz
          </Widget.Link>
          <Widget.Content>
          </Widget.Content>
        </Widget>


        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/malufell" />
    </QuizBackground>
  );
}


{/* <ExternalQuizList hasName={hasName}>
    {db.external.map((url) => {
        const prepareUrl = url
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '');

        const [repoName, user] = prepareUrl.split('.');
        return (
            <li key={url}>
                <Widget.Topic href={`/quiz/${user}__${repoName}?name=${name}`}>
                    {`${user}/${repoName}`}
                </Widget.Topic>
            </li>
        );
    })}
</ExternalQuizList> */}