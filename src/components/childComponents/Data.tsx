import React, { useEffect, useState } from "react";
import { Card } from "./childComponents2/Card";
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

	const fetchingData = async () => {
		let response = await fetch(
			"https://api.spacexdata.com/v4/launchpads"
		);
		let datas = await response.json();
		console.log(datas);
		setData(datas);
	};

	useEffect(() => {
		fetchingData();
		console.log(data);
	}, []);

	return (
		<div className='mainContainer'>
			{data.map((items, id) => {
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
			})}
		</div>
	);
};
