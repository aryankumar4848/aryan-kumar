import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
    resolveExtensions: [".mdx", ".md", ".jsx", ".js", ".tsx", ".ts"],
  },
};

export default nextConfig;
