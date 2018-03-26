const express = require('express');
const app = express();

app.get('/', (req, res)=> {
	const version = { current: 'v1' };
	res.status(200).json(version);
});

app.listen(3000, ()=> {
	console.log('Server running on port 3000');
});
