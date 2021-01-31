/* eslint-disable no-console */
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import QuizCard from '../src/components/QuizCard';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
// import Button from '../src/components/Button'; componente feito na aula que eu resolvi não usar
// import Input from '../src/components/Input'; componente feito na aula que eu resolvi não usar

// essa função representa a minha página (como se fosse o componente)
export default function Home() {
  const router = useRouter();
  // isso é um hook
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget
          as={motion.section}
          transition={{ delay: 0.0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >

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
              <QuizCard.Button type="submit" disabled={name.length < 2}>
                CHALLENGE ACCEPTED!
              </QuizCard.Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/malufell" />
    </QuizBackground>
  );
}
