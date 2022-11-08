import Pocketbase from 'pocketbase';

/** @type {import('./$types').PageLoad} */
export function load() {
	const client = new Pocketbase('https://prexam.pockethost.io');
	return client.collection('users').listAuthMethods();
}
