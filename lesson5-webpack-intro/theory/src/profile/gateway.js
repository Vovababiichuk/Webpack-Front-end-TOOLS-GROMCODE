export default async function  fetchUser(userId) {
	const res = await fetch(`https://api.github.com/users/${userId}`);
	if (!res.ok) {
		throw new Error('Failed to get user data');
	}
	return await res.json();
}