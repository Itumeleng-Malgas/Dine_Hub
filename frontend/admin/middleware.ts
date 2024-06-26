export { default } from 'next-auth/middleware'
export const config = { matcher: [
    "/admin/dashboard",
    "/admin/products",
    "/admin/analytics",
    "/admin/settings",
] }