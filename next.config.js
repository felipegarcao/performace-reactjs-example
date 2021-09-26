/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withBundleAnalyser = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyser({})
