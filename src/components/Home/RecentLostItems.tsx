import config from '@/lib/config';
import { TLostItem } from '@/types/lostItem';
import { Box, Button, Container, Skeleton, Stack } from '@mui/material';
import Link from 'next/link';
import LostItemCard from '../Shared/LostItemCard/LostItemCard';
import SectionTitle from '../Shared/SectionTitle';

const RecentLostItems = async () => {
	const fetchItems = await fetch(`${config.serverURL}/lost-items?limit=6`, {
		next: {
			revalidate: 30
		}
	});
	const { data: items } = await fetchItems.json();
	return (
		items?.length && (
			<div className='bg-white'>
				<Container
					sx={{
						py: 5
					}}
				>
					<SectionTitle
						title='Recent Lost Items'
						desc='Take a look at the latest lost items, waiting to be reunited with their rightful owners. Could you help reconnect them?'
					/>
					<Stack
						justifyContent='center'
						alignItems='center'
						gap={5}
						flexWrap='wrap'
						pb={5}
						sx={{
							flexDirection: {
								xs: 'column',
								sm: 'row'
							}
						}}
					>
						{items
							? items.map((item: TLostItem) => <LostItemCard key={item?.id} item={item} />)
							: Array.from({ length: 3 }).map((_, index) => (
									<Box key={index * 1.2}>
										<Skeleton animation='wave' variant='rectangular' width={330} height={118} />
										<Skeleton animation='wave' width={230} height={40} />
										<Skeleton animation='wave' width={230} height={20} />
										<Skeleton animation='wave' width={200} height={20} />
										<Skeleton animation='wave' width={230} height={40} />
									</Box>
							  ))}
					</Stack>
					<div className='grid w-full place-items-center'>
						<Button variant='outlined' component={Link} href='/lost-items' size='large'>
							View More
						</Button>
					</div>
				</Container>
			</div>
		)
	);
};

export default RecentLostItems;
