import { sanityClient } from "@/sanity"
import { groq } from "next-sanity"

const query = groq`*[_type == "category"] {
    _id,
    ...
}
`

export default async(): Promise<Category[]> => {

    return sanityClient.fetch(query) 
}