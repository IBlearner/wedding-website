import "./FAQ.scss";
import { faqData as data } from "../common/constants";
import { Ifaq } from "../common/types";
// Icon imports
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";

export const FAQ = () => {
	const [openedItem, setOpenedItem] = useState(0);

	useEffect(() => {
		const faqItems = Array.from(document.getElementsByClassName("faq-item") as HTMLCollectionOf<HTMLElement>);
		for (let i = 0; i < faqItems.length; i++) {
			const element = faqItems[i];
			element.addEventListener("click", () => {
				element.style.pointerEvents = "none";
				setTimeout(() => {
					element.style.pointerEvents = "auto";
				}, 1000);
			});
		}
	}, []);

	const onFaqItemClick = (id: number) => {
		if (openedItem !== id) {
			setOpenedItem(id);
		} else {
			setOpenedItem(0);
		}
	};

	const getFaqData = () => {
		return data.map((elem: Ifaq) => {
			return (
				<div className="faq-item" onClick={() => onFaqItemClick(elem.id)}>
					<div className="faq-header">
						<h2 className="faq-question">{elem.question}</h2>
						<RiArrowDropDownLine size={30} />
					</div>
					{
						<p
							className={`faq-answer ${
								elem.id === openedItem ? "faq-answer-visible" : "faq-answer-hidden"
							}`}
						>
							{elem.answer}
						</p>
					}
				</div>
			);
		});
	};

	return <div id="faq-container">{getFaqData()}</div>;
};
