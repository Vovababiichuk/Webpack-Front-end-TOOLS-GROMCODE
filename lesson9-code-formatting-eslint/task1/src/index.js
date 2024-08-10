import { printProfile } from "./profile";

const UserData = {
	name: 'Tom',
	age: 17,
};

const profile = {
	...UserData,
	company: 'Gromcode',
};

printProfile(profile);

const num = 17;

if (num === 18) {
	alert('Hello!!!');
}
