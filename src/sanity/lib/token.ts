export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error(
    "Please define the SANITY_API_READ_TOKEN environment variable"
  );
}
