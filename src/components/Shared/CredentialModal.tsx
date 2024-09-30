import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 4
};

const CredentialModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant='text' onClick={handleOpen}>
				Testing Credentials
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500
					}
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography id='transition-modal-title' variant='h6' component='h2'>
							Testing Credentials
						</Typography>
						<Box id='transition-modal-description' sx={{ mt: 2 }}>
							<pre>
								User Credential <br />
								Email: sharif@gmail.com <br />
								Password: 123456 <br />
								<br />
								Admin Credential <br />
								Email: hs.sharif819@gmail.com <br />
								Password: SuperAdmin
							</pre>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CredentialModal;
