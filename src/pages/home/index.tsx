import { Heading, Text } from '@lmiguelm-ui/react'
import Image from 'next/image'

import PreviewImage from '../../assets/app-preview.png'

import { Container, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/claim-username-form'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={PreviewImage}
          alt="Calendário simbolizando a aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
