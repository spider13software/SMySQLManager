'use strict';

const express = require('express');

const app = express();
app.listen(error => {
	if (error) {
		console.error(error);
		process.exit();
	} else {
		console.log('SMySQLManager started...');
	}
});