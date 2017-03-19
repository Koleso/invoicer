import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

const NewInvoice = () => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Vystavení nové faktury">

					<Form>
						<div className="Form-col">
							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Jméno / Název" type="text" name="name" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell Form-cell--50">
									<Input label="IČ" type="text" name="ic" />
								</div>
								<div className="Form-cell Form-cell--50">
									<Input label="DIČ" type="text" name="dic" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Ulice" type="text" name="street" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell Form-cell--70">
									<Input label="Město" type="text" name="city" />
								</div>
								<div className="Form-cell Form-cell--30">
									<Input label="PSČ" type="text" name="zip" />
								</div>
							</div>
						</div>


						<div className="Form-col">
							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Kontaktní osoba" type="text" name="contact_person" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Funkce" type="text" name="title" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="E-mail" type="mail" name="mail" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Telefon" type="phone" name="phone" />
								</div>
							</div>
						</div>

						<div className="Form-footer">
							<Button to={'/faktury/nova-faktura'} modifiers={['primary', 'big', 'formRight']}>
								Vytvořit odběratele
							</Button>
						</div>
					</Form>

				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default NewInvoice;
