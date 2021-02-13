require('dotenv').config();
const config = {
    WIKIPEDIA_BASE_API_URL: process.env.REACT_APP_WIKIPEDIA_BASE_URL+process.env.REACT_APP_WIKIPEDIA_API_PATH,
    WIKIPEDIA_BASE_URL: process.env.REACT_APP_WIKIPEDIA_BASE_URL,
    TIMEOUT_FOR_SEARCH: process.env.REACT_APP_TIMEOUT_FOR_SEARCH,
    GOOGLE_TRANSLATE_API_KEY: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
}

module.exports = config;