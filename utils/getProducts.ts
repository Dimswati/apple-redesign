import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`*[_type == "product"] {
    _id,
    ...
  }`

export default async (): Promise<Product[]> => {
    return sanityClient.fetch(query)
}