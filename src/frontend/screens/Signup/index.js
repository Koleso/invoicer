import React from 'react';

// Screens
import LoginLayout from 'screens/LoginLayout';

// Components
import Button from 'components/Button';
import Input from 'components/Input';

const Signup = () => (
  <LoginLayout page="signup">
    <div>
      <h1>Registrace</h1>
      <p>Taky je už slyšíte cinkat?</p>
      <Input label="E-mail" type="mail" modifiers={['paddingBottom']} />
      <Button to={'xxx'} modifiers={['primary', 'big']}>
        Vytvořit účet
      </Button>
    </div>
  </LoginLayout>
);

export default Signup;
