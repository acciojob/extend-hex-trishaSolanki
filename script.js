const extendHex = (shortHex) => {
  // write your code here
	 shortHex = shortHex.replace('#', '').toLoweCase();

	const r = shortHex[0];
	const g = shortHex[1];
	const b = shortHex[2];

	const fullHex = '#${r.repeat(2)}${g.repeat(2)}${b.repeat(2)}';
	return fullHex.toUpperCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
