'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get('/', function (req, res) {
    res.status(200).json({ message: "ES6 modules are interested but tiring sometimes" });
});
app.listen(process.env.PORT || 3000, function () {
    return console.log("Listening to port 4000");
});
//# sourceMappingURL=index.js.map