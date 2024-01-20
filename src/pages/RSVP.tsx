import { useEffect, useState } from "react";
import { google } from "googleapis";
import "./RSVP.scss";

export const RSVP = () => {
	const [namesList, setNamesList] = useState([]);
	const [filteredNamesList, setfilteredNamesList] = useState([]);
	const [nameSearch, setNameSearch] = useState("");

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
			"https://sheets.googleapis.com/v4/spreadsheets/1AbMVXsGdPteKIpDI8OD3Va5FhlKGtNLfPcQiskoHvZU/values/Wedding guests!A1:B61?key=AIzaSyDXlaLu9_omOiZtqcwVbH-c0uVwRg9lR7E",
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
			"https://sheets.googleapis.com/v4/spreadsheets/1AbMVXsGdPteKIpDI8OD3Va5FhlKGtNLfPcQiskoHvZU/values/Wedding guests!A1:B2?key=AIzaSyDXlaLu9_omOiZtqcwVbH-c0uVwRg9lR7E",
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
		return filteredNamesList.map((elem) => {
			return (
				<div className="name-search-dropdown-option" tabIndex={0}>
					{elem}
				</div>
			);
		});
	};

	return (
		<>
			<button onClick={submitForm}>clickk</button>
			<form onSubmit={submitForm}>
				{getNameSearch()}
				<label htmlFor=""></label>
				{/* Name: <input type="text" name="fname" /> */}
				{/* <input type="submit" value="Submit" /> */}
			</form>
		</>
	);
};
