import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import MuiButton from '../../components/Button/MuiButton';

import './about-us.css';
import MuiModal from '../../components/Modal/MuiModal';
import ContactUs from '../../components/ContactUs/ContactUs';
import { PRIMARY_COLOR } from '../../mock/style';
const AboutUs = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='about-us-wrapper' id='about_us'>
			<div className='about-us-title'>About us</div>
			<div className='about-us-content-map'>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.4628193375218!2d75.72632057655326!3d16.822849157066123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65569ae5ff589%3A0x2e738f5ab2d2a286!2sNice%20parlour!5e0!3m2!1sen!2smy!4v1717409445530!5m2!1sen!2smy'
						width='100%'
						height='450'
						style={{ border: 0, outline: 'none' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Shop address'
					></iframe>
				</div>
				<div className='about-us-content'>
					<div className='each-info'>
						<div className='about-us-content-title'>Schedule a visit</div>
						<div className='about-us-content-desc'>
							Please fill the form to schedule the visit for services
						</div>
						<div style={{ marginTop: '1em' }}>
							<MuiButton title='Book a visit' onClick={handleOpen} />
						</div>
					</div>
					<div className='each-info'>
						<div className='about-us-content-title'>Timings</div>
						<div className='about-us-content-desc'>
							Monday to Friday 9.00 AM to 10.00 PM
						</div>
					</div>
					<div className='each-info'>
						<div className='about-us-content-title'>Get in touch</div>
						<div style={{ marginTop: '1em', display: 'flex' }}>
							<WhatsAppIcon
								style={{ fontSize: '3em', color: '#01e676' }}
								onClick={() => {
									window.open(
										`https://wa.me/+918217288132?text=Hi, I wanted to check if this UrbanFIX?`,
										'_blank'
									);
								}}
							/>
							<div style={{ width: 20 }} />
							<a href='tel:+918217288132'>
								<CallIcon
									style={{
										fontSize: '3em',
										color: `${PRIMARY_COLOR}`
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<MuiModal
				children={<ContactUs handleClose={handleClose} />}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default AboutUs;
