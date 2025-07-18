import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { styled } from "styled-components";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userApi } from "../services/userService";

interface User {
	id: number;
	name: string;
	email: string;
	company: {
		name: string;
	};
}

const Section = styled.section`
	background-color: rgb(134, 177, 247);
	padding: 2rem;
	border-radius: 8px;
`;

export default function InformationSection() {
	const { data: users, isLoading, error } = userApi.useFetchAllUsersQuery(10);
	const input = useInput();

	if (isLoading) return <p>Loading...</p>;
	if (error) {
		const message = "message" in error ? error.message : "Loading Error!";
		return <p>{message}</p>;
	}

	return (
		<Section>
			<h3>From Api</h3>

			<input type="text" className="control" {...input} />

			<ul>
				{users
					?.filter((user) =>
						user.name.toLowerCase().includes(input.value.toLocaleLowerCase())
					)
					.map((user) => (
						<li key={user.id}>
							<strong>{user.name} </strong>work in {user.company.name}
						</li>
					))}
			</ul>
		</Section>
	);
}
