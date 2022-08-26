import React, { useEffect, useState } from "react";
import { Card } from "./childComponents2/Card";
import { InfinitySpin } from "react-loader-spinner";
import "../childComponents/css/Data.css";

export const Data = () => {
	const [data, setData] = useState<
		{
			details: string;
			full_name: string;
			name: string;
			id: string;
			images: { large: string };
			status: string;
			launches: string[];
		}[]
	>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchingData = async () => {
		let response = await fetch(
			"https://api.spacexdata.com/v4/launchpads"
		);
		let datas = await response.json();
		console.log(datas);
		setData(datas);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		fetchingData();
		console.log(data);
	}, []);

	return (
		<div className='mainContainer'>
			<h1 style={{ marginBottom: "3%" }}>SpaceX Launchpads</h1>
			{loading ? (
				<div className='loader'>
					<InfinitySpin width='200' color='#4fa94d' />
				</div>
			) : (
				data.map((items, id) => {
					return (
						<Card
							key={id}
							id={items?.id}
							name={items?.full_name}
							nick={items?.name}
							details={items?.details}
							status={items?.status}
							image={items?.images.large}
							launches={items?.launches}
						/>
					);
				})
			)}
		</div>
	);
};
