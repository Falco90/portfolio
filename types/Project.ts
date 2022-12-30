import { StaticImageData } from "next/image";

type Project = {
    id: number,
    name: string,
    description: string,
    image: string,
    url: string,
    stack: string[],
    category: string
    // github: string,
}

export default Project;