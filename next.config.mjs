/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  trailingSlash: true, 
  images: {
    unoptimized: true, 
    localPatterns: [
      {
        pathname: '/',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'fafechaportfolio.s3-website.us-east-2.amazonaws.com',
        port: '',
        pathname: '/',
        search: '',
      },
    ],
  },
};

export default nextConfig;
