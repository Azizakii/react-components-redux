import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { styled } from "styled-components";

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
	border-radius: 8px
`;

export default function InformationSection() {
	const [users, setUsers] = useState<User[]>();
	const [loading, setLoading] = useState(true);
	const input = useInput();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log("Error loading data");
				setLoading(true);
			});
	}, []);

	if (loading) return <p>Loading...</p>;

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
