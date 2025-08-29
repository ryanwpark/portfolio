import { useState } from 'react';
import {
	Form,
	FloatingLabel,
	Button,
	Row,
	Col,
	Container,
	Spinner,
} from 'react-bootstrap';
import { motion } from 'motion/react';
import * as formik from 'formik';
import * as yup from 'yup';

function isValidEmail(email: string) {
	const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
	return emailRegex.test(email);
}

const Contact: React.FC = () => {
	const [pendingSubmit, setPendingSubmit] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');
	const { Formik } = formik;
	const schema = yup.object().shape({
		emailfullname: yup.string().required(),
		emailsender: yup
			.string()
			.email()
			.required()
			.test('is-valid-email', 'Invalid email address', (value) =>
				isValidEmail(value || '')
			),
		emailmsg: yup.string().required(),
	});

	return (
		<Formik
			validationSchema={schema}
			validateOnChange={false}
			onSubmit={(values, { resetForm }) => {
				setPendingSubmit(true);
				setSubmitMessage('');
				fetch('https://gmailsenderapi.onrender.com/send-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'Application/JSON',
					},
					body: JSON.stringify(values),
				})
					.then((res) => {
						setTimeout(() => {
							setPendingSubmit(false);
							if (res.ok) {
								setSubmitMessage('Message sent successfully!');
								resetForm();
							} else {
								setSubmitMessage('Error sending message.');
							}
						}, 500);
						return res.json();
					})
					.catch(() => {
						setTimeout(() => {
							setPendingSubmit(false);
							setSubmitMessage('Error sending message.');
						}, 500);
					});
			}}
			initialValues={{
				emailsender: '',
				emailmsg: '',
				emailfullname: '',
			}}>
			{({ handleSubmit, handleChange, values, errors }) => (
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 1, delay: 0.7 }}>
					<Container>
						<div className='mt-5'>
							{submitMessage && (
								<p
									className={
										submitMessage.includes('success')
											? 'text-success text-center'
											: 'text-danger text-center'
									}>
									{submitMessage}
								</p>
							)}
						</div>
						<h1 className='text text-black text-center mt-5 mb-5'>
							Thanks for taking the time to reach out. How can I
							help you today?
						</h1>
						<Form noValidate onSubmit={handleSubmit}>
							<Row className='justify-content-center'>
								<Col xs lg='3'>
									<Form.Group
										className='mb-3'
										controlId='validationFormik01'>
										<FloatingLabel
											controlId='floatingname'
											className='mb-3'
											label='Name'>
											<Form.Control
												type='text'
												name='emailfullname'
												placeholder='name'
												value={values.emailfullname}
												onChange={handleChange}
												isInvalid={
													!!errors.emailfullname
												}
											/>
											<Form.Control.Feedback type='invalid'>
												Please enter a name.
											</Form.Control.Feedback>
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col xs lg='3'>
									<Form.Group
										className='mb-3'
										controlId='validationFormik02'>
										<FloatingLabel
											controlId='floatingemail'
											label='Email address'
											className='mb-3'>
											<Form.Control
												required
												type='email'
												name='emailsender'
												placeholder='name@example.com'
												value={values.emailsender}
												onChange={handleChange}
												isInvalid={!!errors.emailsender}
											/>
											<Form.Control.Feedback type='invalid'>
												Please enter a valid email.
											</Form.Control.Feedback>
										</FloatingLabel>
									</Form.Group>
								</Col>
							</Row>

							<Row className='justify-content-center'>
								<Col xs lg='6'>
									<Form.Group
										className='mb-3'
										controlId='validationFormik03'>
										<FloatingLabel
											controlId='floatingmessage'
											label='Message'
											className='mb-3'>
											<Form.Control
												as='textarea'
												name='emailmsg'
												style={{ minHeight: '200px' }}
												value={values.emailmsg}
												onChange={handleChange}
												isInvalid={!!errors.emailmsg}
											/>
											<Form.Control.Feedback type='invalid'>
												Please enter a message.
											</Form.Control.Feedback>
										</FloatingLabel>
									</Form.Group>
								</Col>
							</Row>
							<Row className='text-center pt-3'>
								<Col>
									<Button
										variant='outline-info'
										disabled={pendingSubmit}
										className='rounded-pill px-4 py-2'
										style={{
											textDecoration: 'none',
											fontWeight: 500,
											fontSize: '1.1rem',
										}}
										type='submit'>
										{pendingSubmit ? (
											<Spinner
												animation='border'
												size='sm'
											/>
										) : (
											'Submit'
										)}
									</Button>
								</Col>
							</Row>
						</Form>
					</Container>
				</motion.div>
			)}
		</Formik>
	);
};

export default Contact;
