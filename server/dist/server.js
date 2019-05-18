/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/config.js":
/*!*********************************!*\
  !*** ./src/constants/config.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = {\n  \"PG_DB_URL\": \"mserverdev.cskmchbf1fd8.ap-southeast-1.rds.amazonaws.com\",\n  \"DB_USER\": \"melonade\",\n  \"DB_PASS\": \"appiansucks\",\n  \"DB_PORT\": 5432,\n  \"DB_DEFAULT_DATABASE\": \"pt\",\n  \"PT_DEV_API_TOKEN\": \"7fd6b9475e68a6f74c2e4f376153959f\",\n  \"PT_API_TOKEN\": \"ec4c4203fae4b60860c466846e60c4bd\",\n  \"PT_BASE_URL\": \"https://www.pivotaltracker.com/services/v5\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/constants/config.js?");

/***/ }),

/***/ "./src/constants/dbConstants.js":
/*!**************************************!*\
  !*** ./src/constants/dbConstants.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dbConstants = {\n  CONFIGURATION_TABLE: `PT_CONFIGURATION`,\n  HISTORY_TABLE: `PT_HISTORY`,\n  PT_VIEW: `PT_VIEW`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConstants);\n\n//# sourceURL=webpack:///./src/constants/dbConstants.js?");

/***/ }),

/***/ "./src/controllers/ConfigController.js":
/*!*********************************************!*\
  !*** ./src/controllers/ConfigController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db_databaseHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/databaseHandler */ \"./src/db/databaseHandler.js\");\n\nconst ConfigController = {\n  async getConfiguration(req, res) {\n    const projectId = req.params.projectId;\n    const output = await _db_databaseHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConfiguration(projectId);\n    res.send(output);\n  },\n\n  async saveConfiguration(req, res) {\n    const configJson = req.body;\n    console.log(configJson);\n    const output = await _db_databaseHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateConfiguration(configJson);\n    res.send(output);\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfigController);\n\n//# sourceURL=webpack:///./src/controllers/ConfigController.js?");

/***/ }),

/***/ "./src/controllers/TrackerController.js":
/*!**********************************************!*\
  !*** ./src/controllers/TrackerController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/config */ \"./src/constants/config.js\");\n/* harmony import */ var _utils_LabelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LabelUtil */ \"./src/utils/LabelUtil.js\");\n/* harmony import */ var _db_databaseHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/databaseHandler */ \"./src/db/databaseHandler.js\");\n\n\n\n\nclass TrackerController {\n  constructor() {\n    this.labelUtil = new _utils_LabelUtil__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.getLabelsInProject = this.getLabelsInProject.bind(this);\n    this.getLabelByName = this.getLabelByName.bind(this);\n  }\n\n  async getLatestSprint(req, res) {\n    const projectId = req.params.projectId;\n    let output = await _db_databaseHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLatestSprintInfo(projectId);\n    res.send(output);\n  }\n\n  async getHistoryDate(req, res) {\n    const projectId = req.params.projectId;\n    const sprintNo = req.params.sprintNo;\n    let output = await _db_databaseHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getHistory(projectId, sprintNo);\n    res.send(output);\n  }\n\n  async onTrackerEvent(req, res) {\n    const trackerData = req.body;\n    console.log(body);\n    res.send(\"request received\");\n  }\n\n  async getLabelsInProject(req, res) {\n    const projectId = req.params.projectId;\n    let labels = await this.labelUtil.getLabelsByProject(projectId);\n    res.send(labels);\n  }\n\n  async getLabelByName(req, res) {\n    const projectId = req.params.projectId;\n    const queryName = req.params.queryName;\n    let labels = await this.labelUtil.getLabelsByProject(projectId);\n    let label = await this.labelUtil.getLabelByName(queryName, labels);\n    res.send(label);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackerController);\n\n//# sourceURL=webpack:///./src/controllers/TrackerController.js?");

/***/ }),

/***/ "./src/db/databaseHandler.js":
/*!***********************************!*\
  !*** ./src/db/databaseHandler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/config */ \"./src/constants/config.js\");\n/* harmony import */ var _constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/dbConstants */ \"./src/constants/dbConstants.js\");\n\n\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"]({\n  host: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PG_DB_URL,\n  port: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_PORT,\n  database: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_DEFAULT_DATABASE,\n  user: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_USER,\n  password: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_PASS\n});\npool.on('connect', () => {\n  console.log(`Successfully connected to ${_constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PG_DB_URL}, databse: ${_constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_DEFAULT_DATABASE}`);\n});\nconst db = {\n  async getLatestSprintInfo(projectId) {\n    const queryText = `SELECT * FROM ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE} WHERE project_id = '${projectId}' ORDER BY sprint_no ASC;`;\n    const res = await pool.query(queryText);\n    return {\n      status: 1,\n      text: \"Data retrieved!\",\n      data: res.rows[0]\n    };\n  },\n\n  async getHistory(projectId, sprintNo) {\n    const queryText = `SELECT * FROM ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE} WHERE sprint_no = '${sprintNo}' AND project_id = '${projectId}';`;\n    const res = await pool.query(queryText);\n    return {\n      status: 1,\n      text: \"Data retrieved!\",\n      data: res.rows[0]\n    };\n  },\n\n  async updateHistory(historyJson) {\n    const queryText = `INSERT INTO public.\"${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE}\"(sprint_no, project_id, sprint_start_date, release_date, review_date)\n                            VALUES('${historyJson.sprintNo}', '${historyJson.projectId}', '${historyJson.sprintStartDate}', '${historyJson.releaseDate}', '${historyJson.reviewDate}')`;\n    const res = await pool.query(queryText);\n    return {\n      status: 1,\n      text: \"History Updated!\",\n      data: null\n    };\n  },\n\n  async updateConfiguration(configJson) {\n    const queryText = `INSERT INTO ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CONFIGURATION_TABLE}(project_id, release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging)\n                            VALUES('${configJson.projectId}', '${configJson.isReleaseTaggingEnabled}', '${configJson.isReviewTaggingEnabled}',\n                                                                '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}')\n                            ON CONFLICT (project_id) DO UPDATE\n                            SET (release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging) = ('${configJson.isReleaseTaggingEnabled}', '${configJson.isReviewTaggingEnabled}',\n                            '${configJson.isFeatureTaggingEnabled}', '${configJson.isChoreTaggingEnabled}', '${configJson.isBugfixTaggingEnabled}');`;\n    console.log(queryText);\n    const res = await pool.query(queryText);\n    return {\n      status: 1,\n      text: \"Configuration Saved!\",\n      data: null\n    };\n  },\n\n  async getConfiguration(projectId) {\n    const queryText = `SELECT project_id, release_tagging, review_tagging, feature_tagging, chore_tagging, bugfix_tagging FROM\n                        ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CONFIGURATION_TABLE} WHERE project_id = '${projectId}'`;\n    console.log(queryText);\n    const res = await pool.query(queryText);\n    return {\n      status: 1,\n      text: null,\n      data: res.rows[0]\n    };\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n//# sourceURL=webpack:///./src/db/databaseHandler.js?");

/***/ }),

/***/ "./src/db/dbCreateScripts.js":
/*!***********************************!*\
  !*** ./src/db/dbCreateScripts.js ***!
  \***********************************/
/*! exports provided: createAllTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAllTables\", function() { return createAllTables; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/config */ \"./src/constants/config.js\");\n/* harmony import */ var _constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/dbConstants */ \"./src/constants/dbConstants.js\");\n\n\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"]({\n  host: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PG_DB_URL,\n  port: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_PORT,\n  database: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_DEFAULT_DATABASE,\n  user: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_USER,\n  password: _constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DB_PASS\n});\npool.on('connect', () => {\n  console.log(`Successfully connected to ${_constants_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PG_DB_URL}`);\n});\n\nconst createHistoryTable = async () => {\n  const queryText = `CREATE TABLE IF NOT EXISTS \n            ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE}(\n                id SERIAL PRIMARY KEY,\n                sprint_no INT NOT NULL,\n                project_id INT NOT NULL,\n                sprint_start_date TIMESTAMP,\n                release_date TIMESTAMP,\n                review_date TIMESTAMP\n            );`;\n  await pool.query(queryText);\n};\n\nconst createConfigurationTables = async () => {\n  const queryText = `CREATE TABLE IF NOT EXISTS\n            ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CONFIGURATION_TABLE}(\n                project_id INT PRIMARY KEY,\n                release_tagging BOOLEAN,\n                review_tagging BOOLEAN,\n                feature_tagging BOOLEAN,\n                chore_tagging BOOLEAN,\n                bugfix_tagging BOOLEAN\n            );\n        `;\n  await pool.query(queryText);\n};\n\nconst createPTView = async () => {\n  const queryText = `CREATE OR REPLACE VIEW ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PT_VIEW} AS\n            SELECT ht.sprint_no as sprint_no,\n                   ht.project_id as project_id,\n                   ht.sprint_start_date as sprint_start_date,\n                   ht.release_date as release_date, \n                   ht.review_date as review_date,\n                   ct.release_tagging as release_tagging,\n                   ct.review_tagging as review_tagging,\n                   ct.feature_tagging as feature_tagging,\n                   ct.chore_tagging as chore_tagging,\n                   ct.bugfix_tagging as bugfix_tagging\n            FROM ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CONFIGURATION_TABLE} AS ct\n            INNER JOIN ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE} AS ht\n            ON ct.project_id = ht.project_id\n        ;`;\n  await pool.query(queryText);\n};\n\nconst seedHistoryTable = async () => {\n  const queryText = `INSERT INTO ${_constants_dbConstants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HISTORY_TABLE}(sprint_no, project_id, sprint_start_date, release_date, review_date)\n            VALUES(27, 2345186, TIMESTAMP '2019-05-21 00:00:00', TIMESTAMP '2019-05-30 00:00:00', TIMESTAMP '2019-06-04 00:00:00')`;\n  await pool.query(queryText);\n};\n\nconst createAllTables = async () => {\n  await createHistoryTable();\n  await createConfigurationTables();\n  await seedHistoryTable();\n  await createPTView();\n};\n\n//# sourceURL=webpack:///./src/db/dbCreateScripts.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_ConfigController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/ConfigController */ \"./src/controllers/ConfigController.js\");\n/* harmony import */ var _controllers_TrackerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/TrackerController */ \"./src/controllers/TrackerController.js\");\n/* harmony import */ var _db_dbCreateScripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db/dbCreateScripts */ \"./src/db/dbCreateScripts.js\");\n\n\n\n\nconst Routes = app => {\n  app.use(function (req, res, next) {\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\n    res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n    next();\n  });\n  app.get('/test', (req, res) => {\n    res.writeHead(200, {\n      'Content-Type': 'text/plain'\n    });\n    res.end('Invalid Endpoint\\n');\n  });\n  app.get('/api/createtables', _db_dbCreateScripts__WEBPACK_IMPORTED_MODULE_2__[\"createAllTables\"]);\n  app.get('/api/getsprint/project/:projectId/', new _controllers_TrackerController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getLatestSprint);\n  app.get('/api/getlabels/:projectId', new _controllers_TrackerController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getLabelsInProject);\n  app.get('/api/project/:projectId/label/:queryName', new _controllers_TrackerController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getLabelByName);\n  app.get('/api/config/project/:projectId', _controllers_ConfigController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConfiguration);\n  app.post('/api/updateconfig', _controllers_ConfigController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveConfiguration);\n  app.post('/api/pt/hook', new _controllers_TrackerController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().onTrackerEvent);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 5000;\nconst staticPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, 'build');\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use('/', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(staticPath));\nObject(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\napp.listen(port, () => {\n  console.log(`Serving static files from ${staticPath}`);\n  console.log(`Listening on port ${port}`);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/utils/LabelUtil.js":
/*!********************************!*\
  !*** ./src/utils/LabelUtil.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RequestUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestUtil */ \"./src/utils/RequestUtil.js\");\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ \"./src/constants/config.js\");\n\n\n\nclass LabelUtil {\n  constructor() {\n    this.requestUtil = new _RequestUtil__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  async getLabelsByProject(projectId) {\n    let url = _constants_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PT_BASE_URL;\n    url += `/projects/${projectId}`;\n    url += `/labels`;\n    return this.requestUtil.getResponseData(url, 'get');\n  }\n\n  async getLabelByName(queryName, labels) {\n    return labels.filter(label => {\n      return label.name == queryName;\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LabelUtil);\n\n//# sourceURL=webpack:///./src/utils/LabelUtil.js?");

/***/ }),

/***/ "./src/utils/RequestUtil.js":
/*!**********************************!*\
  !*** ./src/utils/RequestUtil.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ \"./src/constants/config.js\");\n\n\n\nclass RequestUtil {\n  constructor() {\n    this.apiKey = _constants_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].PT_DEV_API_TOKEN; // this.apiKey = config.PT_API_TOKEN;\n  }\n\n  async getResponseData(url, method) {\n    return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {\n      method: method,\n      headers: {\n        'X-TrackerToken': this.apiKey\n      }\n    }).then(res => res.json()).then(json => {\n      return json;\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestUtil);\n\n//# sourceURL=webpack:///./src/utils/RequestUtil.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ })

/******/ });