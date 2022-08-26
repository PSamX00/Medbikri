import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../childComponents2/css2/Information.css";
import { InfinitySpin } from "react-loader-spinner";

export const Information = () => {
	const [launchInfo, setLaunchInfo] = useState<{
		details: string;
		full_name: string;
		name: string;
		id: string;
		images: { large: string };
		status: string;
		launches: string[];
		timezone: string;
	}>();
	const [loading, setLoading] = useState<boolean>(false);
	const params = useParams();

	let parameterId = params.id;

	useEffect(() => {
		setLoading(true);
		fetchingData();
	}, []);

	const fetchingData = async () => {
		console.log(parameterId);
		let response = await fetch(
			`https://api.spacexdata.com/v4/launchpads/${parameterId}`
		);
		let res = await response.json();

		setLaunchInfo(res);
		setLoading(false);
	};

	return (
		<div className='containerDiv'>
			{loading ? (
				<div className='loader'>
					<InfinitySpin width='200' color='#4fa94d' />
				</div>
			) : (
				<>
					<img
						src={launchInfo?.images.large}
						className='ImageInfo'
					/>

					<div className='detailsContainer'>
						<p>{launchInfo?.name}</p>

						<p>{launchInfo?.full_name}</p>

						<p>{launchInfo?.details}</p>
						<p>{launchInfo?.timezone}</p>
					</div>
				</>
			)}
		</div>
	);
};
