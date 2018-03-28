const express = require('express');
const app = express();

app.get('/', (req, res)=> {
	const version = { current: 'vSup3' };
	res.status(200).json(version);
});

app.listen(80, ()=> {
	console.log('Server running on port 3000');
});
