import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: 'C:\\Users\\pavel\\OneDrive\\Desktop\\programisto\\Rotarius\\d2',
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
