import { ChangeEvent, useEffect, useState } from "react";
import "./RSVP.scss";

interface NamesListObject {
	[key: string]: string[];
}

export const RSVP = () => {
	const [namesList, setNamesList] = useState<string[]>([]);
	const [filteredNamesList, setfilteredNamesList] = useState<string[]>([]);
	const [nameSearch, setNameSearch] = useState<string>("");
	const [selectedUser, setSelectedUser] = useState<string>("");
	const [wedding, setWedding] = useState<boolean | null>(null);
	const [attendance, setAttendance] = useState<0 | 1 | 2 | 3>(0);

	useEffect(() => {
		// const auth = new google.auth.GoogleAuth({
		// 	keyFile: "../../single-portal-410911-df162cabc822.json",
		// 	scopes: ["https://www.googleapis.com/auth/sheets"]
		// });

		getGuestList();
	}, []);

	useEffect(() => {
		const arr = namesList.filter((elem: string) => {
			return elem.includes(nameSearch);
		});
		setfilteredNamesList(arr);
	}, [nameSearch]);

	const getGuestList = () => {
		fetch(
			`https://sheets.googleapis.com/v4/spreadsheets/1AbMVXsGdPteKIpDI8OD3Va5FhlKGtNLfPcQiskoHvZU/values/Wedding guests!A1:B61?key=${
				import.meta.env.VITE_GOOGLE_API_KEY
			}`,
			{
				method: "GET"
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				setNamesList(
					res.values.map((elem: string) => {
						return elem[0].toLowerCase();
					})
				);

				const sortedData: NamesListObject = {};
				res.values
					.map((elem: string[]) => {
						return elem;
					})
					.forEach((elem: string[]) => {
						if (Object.prototype.hasOwnProperty.call(sortedData, elem[1])) {
							sortedData[elem[1]] = [...sortedData[elem[1]], elem[0]];
						} else {
							sortedData[elem[1]] = [elem[0]];
						}
					});
			})
			.catch((error) => {
				console.log(error);
			});
		console.log("submitting form..");
	};

	const submitForm = () => {
		// 	fetch(
		// 		`https://sheets.googleapis.com/v4/spreadsheets/1AbMVXsGdPteKIpDI8OD3Va5FhlKGtNLfPcQiskoHvZU/values/Wedding guests!A1:B2?key=${
		// 			import.meta.env.VITE_GOOGLE_API_KEY
		// 		}`,
		// 		{
		// 			method: "PUT",
		// 			body: {
		// 				range: "Wedding guests!C1:C2",
		// 				values: [["fdsfs"], ["fsnds"]]
		// 			}
		// 		}
		// 	)
		// 		.then((response) => {
		// 			return response.json();
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});
		console.log("submitting form..");
	};

	const onNameSearchChange = (val: ChangeEvent<HTMLInputElement>) => {
		setNameSearch(val.target.value);
	};

	const getNameSearch = () => {
		return (
			<div id="name-search-container">
				{nameSearch ? <label htmlFor="name-search">Search for your name</label> : null}
				<input
					id="name-search"
					name="name-search"
					type="text"
					placeholder="Search your name!"
					onChange={(val: ChangeEvent<HTMLInputElement>) => onNameSearchChange(val)}
				/>
				{nameSearch ? getNameSearchDropdown() : null}
			</div>
		);
	};

	const getNameSearchDropdown = () => {
		return (
			<div id="name-search-dropdown">
				{filteredNamesList.map((elem: string) => {
					const elemReplaced = elem.replace(nameSearch, ".");
					const startSlice = elemReplaced.slice(0, elemReplaced.indexOf("."));
					const endSlice = elemReplaced.slice(elemReplaced.indexOf(".") + 1);

					return (
						<div
							className="name-search-dropdown-option"
							tabIndex={0}
							onClick={() => onNameSearchDropdownClick(elem)}
						>
							{startSlice}
							<strong>{nameSearch}</strong>
							{endSlice}
						</div>
					);
				})}
			</div>
		);
	};

	// When the user clicks on a name in the search dropdown
	const onNameSearchDropdownClick = (name: string) => {
		setSelectedUser(name);
		setNameSearch("");
		(document.getElementById("name-search") as HTMLInputElement).value = "";
	};

	const getForm = () => {
		return (
			<form id="form-container" onSubmit={() => submitForm()}>
				<label htmlFor="phone">Phone</label>
				{/* fix this pattern */}
				<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
				<br />
				<label htmlFor="email">Email</label>
				<input type="email" name="email" required />
				<br />
				<label htmlFor="wedding">Attending the wedding?</label>
				<br />
				<input
					type="radio"
					id="weddingYes"
					name="wedding"
					value="weddingYes"
					onClick={() => setWedding(true)}
				/>
				<label htmlFor="wedding">Yes</label>
				<input
					type="radio"
					id="weddingNo"
					name="wedding"
					value="weddingNo"
					onClick={() => {
						setWedding(false);
						// We need to toggle attendance back to 0 if the user flicks between choices
						setAttendance(0);
					}}
				/>
				<label htmlFor="wedding">No</label>
				{wedding ? (
					<>
						<br />
						<label htmlFor="attendance">Will you attend both the ceremony and dinner?</label>
						<br />
						<input
							type="radio"
							id="ceremony"
							name="attendance"
							value="ceremony"
							onClick={() => setAttendance(1)}
						/>
						<label htmlFor="ceremony">Only ceremony</label>
						<input
							type="radio"
							id="dinner"
							name="attendance"
							value="dinner"
							onClick={() => setAttendance(2)}
						/>
						<label htmlFor="dinner">Only dinner</label>
						<input type="radio" id="both" name="attendance" value="both" onClick={() => setAttendance(3)} />
						<label htmlFor="both">Both</label>

						{attendance ? (
							<>
								{attendance === 2 || attendance === 3 ? (
									<>
										<br />
										<label htmlFor="allergies">Do you have any allergies?</label>
										<br />
										<input type="type" name="allergies" placeholder="Leave blank if N/A" />
									</>
								) : null}
								<br />
								<input type="submit" value="Submit" />
							</>
						) : null}
					</>
				) : null}
				{wedding === false ? (
					<>
						<br />
						<input type="submit" value="Submit" />
					</>
				) : null}
			</form>
		);
	};

	// const clearSelectedUser = () => {
	// 	setSelectedUser("");
	// 	// setNameSearch("");
	// };

	return (
		<div id="rsvp-container">
			{getNameSearch()}
			{selectedUser ? <h1>{selectedUser}</h1> : null}
			{selectedUser ? getForm() : null}
		</div>
	);
};
