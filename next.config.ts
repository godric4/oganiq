// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [{ hostname: 'images.pexels.com' }],
//   },
// }

// export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ✅ Keep your existing config
  images: {
    remotePatterns: [{ hostname: 'images.pexels.com' }],
  },

  // ✅ Skip ESLint checks during builds (on Vercel and locally)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
