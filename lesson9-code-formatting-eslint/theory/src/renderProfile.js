export const printProfile = profileData=> {
	const { name, company } = profileData;
	const profileElem = document.querySelector('.profile');
	profileElem.textContent = `${name} from ${company}`;
};