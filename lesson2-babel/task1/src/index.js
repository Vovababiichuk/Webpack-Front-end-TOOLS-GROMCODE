import { printProfile } from "./profile";

const UserData = {
	name: 'Tom',
	age: 17,
}

const Profile = {
	...UserData,
	company: 'Gromcode',
}

printProfile(Profile);