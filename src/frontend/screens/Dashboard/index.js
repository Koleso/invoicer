import React from 'react';

// Components
import Wrap from 'components/Wrap';
import Header from 'components/Header';
import Grid, {GridColumn} from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';

let actions = [
  <Button to={'/faktury/nova-faktura'} modifiers={['primary', 'big']}>Nová faktura</Button>
];

const Dashboard = () => (
  <div>
    <Header />
    <Wrap>
      <Screen title="Dashboard" actions={actions}>
        <Grid>
          <GridColumn>
            <Box title="Pohledávky" modifiers={['smallMargin']}>
              
            </Box>

            <Box title="Neuhrazené faktury" modifiers={['smallMargin']}>
              
            </Box>
          </GridColumn>

          <GridColumn>
            <Box title="Příjem za posledních 6 měsíců" modifiers={['smallMargin']}>
              
            </Box>
          </GridColumn>
        </Grid>
      </Screen>
    </Wrap>
  </div>
);

export default Dashboard;

/*
<div className="NotificationsList">
      <Notification>Faktura cislo <strong>20160601</strong> byla uspesne vytvorena</Notification>
      <Notification>Faktura cislo 20160601 byla uspesne vytvorena</Notification>
      <Notification type="error">Neco se posralo</Notification>
    </div>
 */