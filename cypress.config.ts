import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
   baseUrl:'https://www.demoblaze.com'
  },
  env: {
    apiUrl: 'https://api.demoblaze.com'
  }
})