import { Button, Heading, MultiStep, Text } from '@lmiguelm-ui/react'
import { ArrowRight, Calendar, CheckCircle, SignIn } from 'phosphor-react'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Container, Header } from '../styles'

import {
  AuthError,
  ConnectBox,
  ConnectItem,
  ConnectItemWrapper,
} from './styles'

export default function ConnectCalendar() {
  const { status } = useSession()

  const isConnected = status === 'authenticated'

  const router = useRouter()

  const hasAuthError = !!router.query.error

  async function handleConnectCalendar() {
    try {
      await signIn('google')
    } catch (error) {
      console.log(error)
    }
  }

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

          {isConnected ? (
            <Button size="sm" disabled>
              Conectado
              <CheckCircle />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <SignIn />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm" as="span">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </AuthError>
        )}

        <Button disabled={!isConnected}>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
