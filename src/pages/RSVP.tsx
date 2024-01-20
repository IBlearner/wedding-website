import { useEffect, useState } from "react";
import { google } from "googleapis";
import "./RSVP.scss";

export const RSVP = () => {
	const [namesList, setNamesList] = useState<string[]>([]);
	const [filteredNamesList, setfilteredNamesList] = useState<string[]>([]);
	const [nameSearch, setNameSearch] = useState<string>("");

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

				let sortedData = {};
				res.values
					.map((elem: string[]) => {
						return elem;
					})
					.forEach((elem: string[]) => {
						if (sortedData.hasOwnProperty(elem[1])) {
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
		fetch(
			`https://sheets.googleapis.com/v4/spreadsheets/1AbMVXsGdPteKIpDI8OD3Va5FhlKGtNLfPcQiskoHvZU/values/Wedding guests!A1:B2?key=${
				import.meta.env.VITE_GOOGLE_API_KEY
			}`,
			{
				method: "PUT",
				body: {
					range: "Wedding guests!C1:C2",
					values: [["fdsfs"], ["fsnds"]]
				}
			}
		)
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				console.log(error);
			});
		console.log("submitting form..");
	};

	const onNameSearchChange = (val) => {
		setNameSearch(val.target.value);
		const regex = "";
	};

	const getNameSearch = () => {
		return (
			<div id="name-search">
				{!nameSearch ? null : <label htmlFor="name-search">Search for your name</label>}
				<input
					name="name-search"
					type="text"
					placeholder="Search your name!"
					onChange={(val) => onNameSearchChange(val)}
				/>
				{!nameSearch ? null : getNameSearchDropdown()}
			</div>
		);
	};

	const getNameSearchDropdown = () => {
		return filteredNamesList.map((elem: string) => {
			const elemReplaced = elem.replace(nameSearch, ".");
			const startSlice = elemReplaced.slice(0, elemReplaced.indexOf("."));
			const endSlice = elemReplaced.slice(elemReplaced.indexOf(".") + 1);

			return (
				<div className="name-search-dropdown-option" tabIndex={0}>
					{startSlice}
					<strong>{nameSearch}</strong>
					{endSlice}
				</div>
			);
		});
	};

	const getForm = () => {
		return (
			<>
				<label htmlFor=""></label>
				<label htmlFor=""></label>; Name: <input type="text" name="fname" />
				<input type="submit" value="Submit" />
			</>
		);
	};

	return (
		<>
			<button onClick={submitForm}>clickk</button>
			<form onSubmit={submitForm}>
				{getNameSearch()}
				{getForm()}
			</form>
		</>
	);
};
