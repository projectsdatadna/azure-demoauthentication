const response = await fetch('/.auth/me');
const payload = await response.json();
const {clientPrincipal} = payload;
console.log({clientPrincipal});