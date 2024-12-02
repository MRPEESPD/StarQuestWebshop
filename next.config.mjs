/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "img2.pic.in.th",
            "img5.pic.in.th",
            "res.cloudinary.com"
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
