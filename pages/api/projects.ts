// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Project from "../../types/Project";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const projects: Project[] = [
    {
      id: 0,
      name: "ZK Giving",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/zkgiving.jpg",
      url: "https://zkgiving.org",
      stack: ["react", "typescript", "solidity"],
    },
    {
      id: 1,
      name: "Temporary Anonymous Zone",
      description:
        "Donec ac ultricies nunc. Aliquam erat volutpat. Integer a nunc eu augue venenatis dapibus id vitae lacus. Cras ligula purus, pretium sed suscipit a, commodo vitae sapien. Mauris tempus pulvinar lectus, ac hendrerit ipsum interdum rutrum. Sed auctor a justo a sollicitudin. Integer vel dapibus risus. Etiam consequat scelerisque ipsum, vitae dictum nunc condimentum ut. Nullam bibendum venenatis eros et fringilla.",
      image: "/taz.jpg",
      url: "https://taz.appliedzkp.org",
      stack: ["react", "next", "typescript", "solidity"],
    },
  ];

  res.status(200).json(projects);
}
