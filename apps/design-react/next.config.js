/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['lucide-icons-react'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: process.env.VERCEL_ENV !== 'production',
	},
	transpilePackages: ['@kittr/ui'],
};

module.exports = nextConfig;
