import reunion from '@/assets/our-journey.jpg';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Reunion = () => {
	return (
		<div className='bg-white'>
			<Container
				sx={{
					py: 5
				}}
			>
				<Stack
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
						gap: 4
					}}
					justifyContent='center'
					alignItems='center'
				>
					{/* image */}
					<Box>
						<Image
							src={reunion}
							alt='Last reunion'
							className='rounded-lg shadow-md border-4'
							width={500}
							height={250}
						/>
					</Box>
					{/* text */}
					<Box sx={{ maxWidth: '550px', p: 2 }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: '700',
								mb: 2,
								fontSize: {
									xs: '1.65rem',
									sm: '2.25rem'
								}
							}}
						>
							Warm and Nostalgic
						</Typography>
						<Typography variant='body2'>
						On Septemer 30, 2024, Minnesota in MN was the scene of heartwarming reunions at our last event. Attendees shared touching stories of reuniting lost items with their owners, enjoying live music and refreshments in a celebration of community. Make sure to join us at our next event and witness these incredible moments firsthand!
						</Typography>
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default Reunion;
