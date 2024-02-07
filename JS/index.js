/*
 * Quit your program fancily
 *
 * @param {number} code - [optional] The status code to exit with, default 0.
 * @param {string} reason - [optional] The reason for quiting.
 * */
const quite = (code=0, reason="none") => {
	if(reason !== "none"){
		console.log(`[${code}] Exiting with reason ${reason}`);
	}

	process.exit(code);
}

module.exports = quite;
