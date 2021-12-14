import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';



function Login() {
  return (
    <Container>
      <Text>Login</Text>
      {children}
    </Container>
  );
};

export default Login;
