/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['healerspc.sgp1.digitaloceanspaces.com', 'https://healerspc.sgp1.digitaloceanspaces.com']
  },
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN
  },
}

module.exports = nextConfig
