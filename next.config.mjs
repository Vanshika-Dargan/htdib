/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Find the existing rule that handles SVG files
      const svgFileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      );
  
      // Add a new rule to handle SVG files when the `?url` query is present
      config.module.rules.push(
        {
          ...svgFileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // Only apply when "?url" is in the import query
        },
        {
          test: /\.svg$/i,
          issuer: svgFileLoaderRule.issuer,
          resourceQuery: { not: [...svgFileLoaderRule.resourceQuery.not,/url/] }, // Apply when "?url" is NOT in the import query
          use: ["@svgr/webpack"], // Use the SVGR loader for React components from SVG
        }
      );
  
      // Exclude `.svg` files from the original file loader rule
      svgFileLoaderRule.exclude = /\.svg$/i;
  
      return config;
    },
  };
  
  export default nextConfig;
  