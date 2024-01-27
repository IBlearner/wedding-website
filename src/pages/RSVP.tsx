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
			<form id="form-container" onSubmit={submitForm}>
				<label htmlFor="fname">Name</label>
				<input
					type="text"
					name="fname"
					value={selectedUser.slice(0, selectedUser.indexOf(" "))}
					disabled={true}
				/>
				<label htmlFor="lname">Surname</label>
				<input
					type="text"
					name="fname"
					value={selectedUser.slice(selectedUser.indexOf(" "), selectedUser.length)}
					disabled={true}
				/>
				<label htmlFor="phone">Please provide your phone</label>
				{/* fix this pattern */}
				<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
				<label htmlFor="email">Please provide your email</label>
				<input type="email" name="email" required />
				<label htmlFor="wedding">Attending the wedding?</label>
				<input type="checkbox" name="wedding" required />
				<label htmlFor="ceremony">Attending the ceremony</label>
				<input type="checkbox" name="ceremony" required />
				<label htmlFor="dinner">Attending the dinner</label>
				<input type="checkbox" name="dinner" required />
				<label htmlFor="allergies">Do you have any allergies?</label>
				<input type="checkbox" name="allergies" />
				<input type="submit" value="Submit" />
			</form>
		);
	};

	const clearSelectedUser = () => {
		setSelectedUser("");
		// setNameSearch("");
	};

	return (
		<div id="rsvp-container">
			{getNameSearch()}
			{selectedUser ? <h1>{selectedUser}</h1> : null}
			{selectedUser ? getForm() : null}
		</div>
	);
};
