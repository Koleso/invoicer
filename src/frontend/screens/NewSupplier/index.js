import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Dropdown from 'components/Dropdown';

const Supplier = () => (
	<Screen title="Subjekty">
		<Grid>
			<GridColumn>
				<Box title="Vytvoření nového dodavatele">

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
									<Checkbox value="payer">
										Plátce DPH
									</Checkbox>
								</div>
							</div>

							<div className="Form-line"></div>

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

							<div className="Form-line"></div>

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
						</div>


						<div className="Form-col">
							<div className="Form-line">
								<div className="Form-cell Form-cell--33">
									<Dropdown
										label="Sazba"
										options={[
											{
												key: 'key_1',
												label: 'Prvni',
											}, {
												key: 'key_2',
												label: 'Druha',
											}, {
												key: 'key_3',
												label: 'Treti',
											}, {
												key: 'key_4',
												label: 'Ctvrta',
											}, {
												key: 'key_5',
												label: 'Pata',
											},
										]}
										keyId="key"
										keyLabel="label"
									/>
								</div>
								<div className="Form-cell Form-cell--34">
									<Input label="Měna" type="text" name="currency" />
								</div>
								<div className="Form-cell Form-cell--33">
									<Input label="Splatnost" type="number" name="due" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Bankovní spojení" type="text" name="bank" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="Číslo účtu" type="text" name="account" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="IBAN" type="mail" name="iban" />
								</div>
							</div>

							<div className="Form-line">
								<div className="Form-cell">
									<Input label="SWIFT" type="phone" name="swift" />
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
								Vytvořit dodavatele
							</Button>
						</div>
					</Form>

				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Supplier;
