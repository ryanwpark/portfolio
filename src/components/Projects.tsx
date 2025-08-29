import type { ProjectDetails } from '../mockData/projects';
import {
	Container,
	Row,
	Col,
	Accordion,
	useAccordionButton,
	Card,
	Badge,
} from 'react-bootstrap';

type ProjectProps = {
	projects: ProjectDetails[];
	language: string;
};

function CustomToggle({
	eventKey,
	children,
}: {
	eventKey: string;
	children: React.ReactNode;
}) {
	const onClick = useAccordionButton(eventKey);
	return (
		<button
			type='button'
			onClick={onClick}
			style={{ backgroundColor: 'rgb(137, 207, 240)' }}
			className='rounded-pill py-2 px-3 border-0'>
			{children}
		</button>
	);
}

const Projects: React.FC<ProjectProps> = ({ projects, language }) => {
	return (
		<Container>
			<Accordion flush>
				<Row xs='auto' className='py-3 justify-content-md-center'>
					<CustomToggle eventKey='0'>{language}</CustomToggle>
				</Row>
				<Accordion.Collapse eventKey='0'>
					<Row className='py-3 justify-content-md-center' xs='auto'>
						{projects.map((project) => (
							<Col
								key={project.title}
								className='col-md-4 col-auto'>
								<Card>
									<Card.Body>
										<Card.Title className='text-primary'>
											{project.title}
										</Card.Title>
										<Row gap={4} className='mb-2'>
											{project.technologies.map(
												(tech) => (
													<Col key={tech}>
														<Badge bg='info'>
															{tech}
														</Badge>
													</Col>
												)
											)}
										</Row>
										<Row>
											<Card.Subtitle className='mb-1'>
												{project.company} •{' '}
												{project.location}
											</Card.Subtitle>
											<Card.Text className='mb-0'>
												{project.startDate} —{' '}
												{project.endDate}
											</Card.Text>
											{project.tasks.map((task) => (
												<Card.Text className='p-3 m-0 pb-0 pt-1'>
													• {task}
												</Card.Text>
											))}
										</Row>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Accordion.Collapse>
			</Accordion>
		</Container>
	);
};

export default Projects;
