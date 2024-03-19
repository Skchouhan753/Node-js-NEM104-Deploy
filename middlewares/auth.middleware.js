const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (token) {
		jwt.verify(token, "masai", (err, decoded) => {
			if (err) {
				res.json({ err });
			} else {
				console.log(decoded);
				req.body.userID = decoded.userID;
				req.body.username = decoded.username;
				next();
			}
		});
	} else {
		res.json({ msg: "Please Login!" });
	}
};

module.exports = {
	auth,
};
