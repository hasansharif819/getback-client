import logo from '@/assets/logo/logo-w.png';
import navLinks from '@/constants/navLinks';
import { Facebook, Instagram, LinkedIn, X } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
			<Container maxWidth='lg'>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={3}>
						<Image src={logo} alt='GetBack Logo' width={150} height={100} />
						<Typography variant='body2' sx={{ mt: 2 }}>
						Discover our mission to reconnect lost items with their owners. We are a community committed to helping one another find what’s missing.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Typography variant='h5' gutterBottom>
							Quick Links
						</Typography>
						<Stack direction='column' gap={1}>
							{navLinks.map((link) => (
								<span key={link?.title}>
									<Link href={link.href} className='hover:underline underline-offset-4'>
										{link.title}
									</Link>
								</span>
							))}

						</Stack>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Typography variant='h5' gutterBottom>
							Terms & Conditions
						</Typography>
						<Stack direction='column' gap={1}>
							<span>
								<Link href='/privacy-policy' className='hover:underline underline-offset-4'>
									Privacy Policy
								</Link>
							</span>
							<span>
								<Link href='/terms-of-use' className='hover:underline underline-offset-4'>
									Terms of Use
								</Link>
							</span>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Typography variant='h5' gutterBottom>
							Contact Us
						</Typography>
						<Typography variant='body2'>Email: hs.sharif819@gmail.com</Typography>
						<Typography variant='body2'>Phone: +880 1640911511</Typography>
						<Box sx={{ mt: 2 }}>
							<IconButton href='https://www.facebook.com/profile.php?id=100012993934707' color='inherit'>
								<span style={visuallyHidden}>Facebook</span>
								<Facebook />
							</IconButton>
							<IconButton href='https://www.instagram.com/' color='inherit'>
								<span style={visuallyHidden}>Instagram</span>
								<Instagram />
							</IconButton>
							<IconButton href='https://x.com/' color='inherit'>
								<span style={visuallyHidden}>X</span>
								<X />
							</IconButton>
							<IconButton href='https://www.linkedin.com/in/sharif-hasan-073a58218' color='inherit'>
								<span style={visuallyHidden}>LinkedIn</span>
								<LinkedIn />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<Box sx={{ mt: 4, textAlign: 'center' }}>
					<Typography variant='body2'>
						&copy; {currentYear} GetBack. All rights reserved. Made with ❤️ by{' '}
						<Link href='https://sharifs-portfolio.vercel.app' target='_blank' className='hover:underline underline-offset-4'>
							Sharif Hasan
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
