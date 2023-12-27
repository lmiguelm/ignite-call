import { Button, Heading, MultiStep, Text } from '@lmiguelm-ui/react'
import { ArrowRight, Calendar, SignIn } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem, ConnectItemWrapper } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <ConnectItemWrapper>
            <Calendar />
            <Text>Google Calendar</Text>
          </ConnectItemWrapper>

          <Button variant="secondary" size="sm">
            Conectar <SignIn />
          </Button>
        </ConnectItem>

        <Button disabled>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
