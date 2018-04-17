const express = require('express');
const app = express();

app.get('/', (req, res)=> {
	const version = { current: 'v1.7' };
	res.status(200).json(version);
});

app.listen(80, ()=> {
	console.log('Server running on port 80');
});
