import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../childComponents2/css2/Card.css";

interface Props {
	name: string;
	details: string;
	status: string;
	image: string;
	launches: string[];
	nick: string;
	id: string;
}

export const Card: React.FC<Props> = ({
	name,
	details,
	status,
	image,
	launches,
	nick,
	id,
}) => {
	console.log(launches);
	let statusClassName = "statusRed";

	if (status === "active") {
		statusClassName = "statusGreen";
	} else if (status === "under construction") {
		statusClassName = "statusGray";
	}
	return (
		<>
			<div className='cardContainer'>
				<img src={image} />
				<div className='informationContainer'>
					<div>
						<h3>{name}</h3>
						<p>{nick}</p>
						<b className={statusClassName}>{status}</b>
					</div>
					<p>{details}</p>

					<div className='launchesContainer'>
						{launches.length > 0 ? (
							launches
								.slice(0, 3)
								.map((items, index) => {
									return (
										<p
											className='launches'
											style={{
												textDecoration:
													"none",
											}}
										>
											<Link
												to={`/${id}`}
											>
												Launch{" "}
												{index}
											</Link>
										</p>
									);
								})
						) : (
							<p>Launch Not Available</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
