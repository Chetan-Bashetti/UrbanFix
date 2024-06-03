import React from 'react';
import './client-info.css';

const ClientInfo = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer'>
				Designed and developed by
				<a
					className='link'
					target='_blank'
					rel='noreferrer'
					href='https://tecnacy.netlify.app/'
					style={{
						marginLeft: '0.3em',
						color: 'var(--secondary-color)'
					}}
				>
					Tecnacy Solutions
				</a>
			</div>
			<div className='footer-logo'>
				<img
					src={require('../../assets/images/UrbanFix.jpeg')}
					alt='UrbanMES'
					className='footer-img'
				/>
			</div>
		</div>
	);
};

export default ClientInfo;
