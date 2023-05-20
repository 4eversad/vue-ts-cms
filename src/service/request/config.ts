let BASE_URL: string
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = "http://coderzy.org/dev";
  // BASE_URL = "http://123.207.32.32:8000/";
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderzy.org/prod'
} else {
  BASE_URL = 'http://coderzy.org/test'
}

export { BASE_URL, TIME_OUT }
