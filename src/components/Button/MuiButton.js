import React from 'react';
import { Button } from '@mui/material';

const MuiButton = ({ title = '', onClick, type, disabled }) => {
	return (
		<Button
			variant='contained'
			style={{
				fontFamily: "'Montserrat', sans-serif",
				background: `var(--primary-bg)`,
				letterSpacing: '1px',
				fontWeight: 600
			}}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{title}
		</Button>
	);
};

export default MuiButton;
