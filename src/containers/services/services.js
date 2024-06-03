import React from 'react';
import HandymanIcon from '@mui/icons-material/Handyman';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import TvIcon from '@mui/icons-material/Tv';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ChaletIcon from '@mui/icons-material/Chalet';
import FoundationIcon from '@mui/icons-material/Foundation';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CarRentalIcon from '@mui/icons-material/CarRental';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CommuteIcon from '@mui/icons-material/Commute';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import CableIcon from '@mui/icons-material/Cable';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import PowerIcon from '@mui/icons-material/Power';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BrushIcon from '@mui/icons-material/Brush';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WindPowerIcon from '@mui/icons-material/WindPower';
import BlenderIcon from '@mui/icons-material/Blender';

import { appliancesData } from '../../mock/appliances';

import './services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import MuiModal from '../../components/Modal/MuiModal';
import Pricing from '../../components/Pricing/Pricing';
import ContactUs from '../../components/ContactUs/ContactUs';

const Services = ({ setSnackBar }) => {
	const [open, setOpen] = React.useState(false);
	const [selectedKey, setSelectedKey] = React.useState('');
	const [pricingModel, setPricingModel] = React.useState(false);
	const [selectedSubService, setSelectedSubService] = React.useState({});
	const [bookingDialogOpen, setBookingDialogOpen] = React.useState(false);

	const icons = {
		painting: <ImagesearchRollerIcon style={{ fontSize: '6em' }} />,
		appliances: <HandymanIcon style={{ fontSize: '6em' }} />,
		key_project: <EngineeringIcon style={{ fontSize: '6em' }} />,
		tv: <TvIcon style={{ fontSize: '6em' }} />,
		ac: <HeatPumpIcon style={{ fontSize: '6em' }} />,
		fridge: <KitchenIcon style={{ fontSize: '6em' }} />,
		man_power: <Diversity3Icon style={{ fontSize: '6em' }} />,
		contract: <ApartmentIcon style={{ fontSize: '6em' }} />,
		cab: <LocalTaxiIcon style={{ fontSize: '6em' }} />,
		complete_painting: <FormatPaintIcon style={{ fontSize: '6em' }} />,
		color_patch_work: <BrushIcon style={{ fontSize: '6em' }} />,
		cctv_services: <ElectricalServicesIcon style={{ fontSize: '6em' }} />,
		fan: <WindPowerIcon style={{ fontSize: '6em' }} />,
		full_home_painting: <FormatColorFillIcon style={{ fontSize: '6em' }} />,
		power: <PowerIcon style={{ fontSize: '6em' }} />,
		wiring: <SettingsInputCompositeIcon style={{ fontSize: '6em' }} />,
		interior_and_exterior: <ChaletIcon style={{ fontSize: '6em' }} />,
		patch_work: <CableIcon style={{ fontSize: '6em' }} />,
		pickup_drop: <CommuteIcon style={{ fontSize: '6em' }} />,
		planning: <FoundationIcon style={{ fontSize: '6em' }} />,
		outstation: <AirportShuttleIcon style={{ fontSize: '6em' }} />,
		tour_package: <DepartureBoardIcon style={{ fontSize: '6em' }} />,
		car_rental: <CarRentalIcon style={{ fontSize: '6em' }} />,
		supervision: <ManageAccountsIcon style={{ fontSize: '6em' }} />,
		mixture: <BlenderIcon style={{ fontSize: '6em' }} />
	};

	const handleOpen = (key) => {
		setSelectedKey(key);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<div className='services-wrapper' id='services'>
			<div className='services-title'>Services</div>
			<div className='services-content'>
				{appliancesData?.map((eachAppliance, id) => (
					<ServiceCard
						key={eachAppliance.key}
						title={eachAppliance.title}
						desc={eachAppliance.desc}
						icon={icons[eachAppliance.key]}
						onClick={
							eachAppliance.sub_services.length
								? () => handleOpen(id)
								: () => setPricingModel(true)
						}
					/>
				))}
			</div>
			<MuiModal
				children={
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div className='contact-us-title'>
							{appliancesData[selectedKey]?.title}
						</div>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								flexDirection: 'row',
								justifyContent: 'center'
							}}
						>
							{appliancesData[selectedKey]?.sub_services?.map(
								(eachAppliance) => (
									<ServiceCard
										key={eachAppliance.key}
										title={eachAppliance.title}
										desc={eachAppliance.desc}
										icon={icons[eachAppliance.key]}
										onClick={(title, key) => {
											setPricingModel(true);
											setSelectedSubService(eachAppliance);
										}}
									/>
								)
							)}
						</div>
					</div>
				}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
			<MuiModal
				children={
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<Pricing
							title={selectedSubService.title}
							appliaceData={selectedSubService}
							handleBookingDialogBox={() => {
								setBookingDialogOpen(true);
							}}
						/>
					</div>
				}
				open={pricingModel}
				handleOpen={() => setPricingModel(true)}
				handleClose={() => setPricingModel(false)}
			/>
			<MuiModal
				children={
					<ContactUs
						handleClose={() => setBookingDialogOpen(false)}
						setSnackBar={() => {
							setSnackBar();
							handleClose();
						}}
					/>
				}
				open={bookingDialogOpen}
				handleClose={() => setBookingDialogOpen(false)}
			/>
		</div>
	);
};

export default Services;
