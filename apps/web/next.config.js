/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function DefineNextConfig(config) {
  return config
}

export default DefineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true
  }
})