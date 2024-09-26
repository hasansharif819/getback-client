import team from '@/assets/team.jpg';
import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'About Us - GetBack',
	description:
		'Learn more about GetBack! Discover our story, our mission, and our vision. Find out how we transform moments of loss into stories of reunion and hope. Join us on our journey!'
};

const AboutPage = () => {
	return (
		<Box>
			<Image src={team} alt='About Us' width={700} height={500} className='w-full h-[20vh] lg:h-[50vh] object-cover' />
			<Container maxWidth='md' sx={{ py: 6 }}>
				<Typography
					variant='h2'
					gutterBottom
					align='center'
					sx={{
						fontSize: {
							xs: '3rem',
							sm: '3.5rem'
						}
					}}
				>
					Our Journey
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Founding Phase (2010-2012)
					Inception: Bhuiyan Soft was founded by a group of passionate software engineers who aimed to provide innovative software solutions to local businesses.
					Initial Focus: The company started with web development services, creating simple websites and applications for small to medium-sized enterprises (SMEs) in Bangladesh.
					First Project: The company landed its first significant contract with a local retail business to develop an inventory management system.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Growth Phase (2013-2015)
					Expanding Services: Bhuiyan Soft expanded its service offerings to include mobile app development and digital marketing.
					Key Clients: The company began to work with notable clients, including educational institutions and healthcare providers, which helped to establish its reputation in the industry.
					Team Growth: The team grew from 5 to 20 employees, bringing in specialists in UI/UX design and software testing.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Innovation Phase (2016-2018)
					New Products: Bhuiyan Soft launched its first SaaS product, a customer relationship management (CRM) tool tailored for SMEs, which gained positive feedback and user adoption.
					Recognition: The company received awards for innovation in software development and was recognized as one of the top emerging tech firms in Bangladesh.
					Partnerships: Bhuiyan Soft formed strategic partnerships with tech companies in Europe to expand its reach and capabilities.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Expansion Phase (2019-2021)
					Global Reach: The company started catering to international clients, expanding its market beyond Bangladesh.
					Remote Work: Bhuiyan Soft adapted to remote work, hiring talent from various countries and establishing a more diverse workforce.
					New Technologies: The team embraced new technologies like AI and machine learning, integrating them into their product offerings.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Our journey is one of transformation, of turning moments of loss into opportunities for connection and growth.
					With each reunion, we reaffirm our commitment to spreading kindness and fostering a sense of belonging. Join
					us as we continue this remarkable journey, one lost item at a time.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}></Typography>
			</Container>
		</Box>
	);
};

export default AboutPage;
