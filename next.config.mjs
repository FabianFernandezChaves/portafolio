/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
  assetPrefix: "http://fafechaportfolio.s3-website.us-east-2.amazonaws.com", // Raíz del bucket
};

export default nextConfig;
