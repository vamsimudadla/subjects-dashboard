import type { ISubject } from "./types";

export const subjects: ISubject[] = [
  {
    name: "Math",
    topics: [
      {
        name: "Algebra",
        description:
          "Algebra deals with symbols and variables to represent numbers and relationships. It forms the foundation for solving equations and understanding patterns. Concepts like expressions, equations, and functions are central to algebra.",
      },
      {
        name: "Geometry",
        description:
          "Geometry focuses on shapes, sizes, and spatial relationships. It includes the study of points, lines, angles, surfaces, and solids. Geometry is widely used in design, architecture, and real-world measurements.",
      },
      {
        name: "Trigonometry",
        description:
          "Trigonometry studies the relationships between angles and sides of triangles. It introduces functions like sine, cosine, and tangent. This topic is essential in fields like physics, engineering, and navigation.",
      },
    ],
  },
  {
    name: "Science",
    topics: [
      {
        name: "Physics",
        description:
          "Physics explores the fundamental laws of nature and how the universe behaves. It covers motion, energy, forces, and matter. Physics helps explain everyday phenomena and advanced technologies.",
      },
      {
        name: "Chemistry",
        description:
          "Chemistry is the study of substances, their properties, and how they interact. It involves elements, compounds, reactions, and molecular structures. Chemistry plays a key role in medicine, industry, and environmental science.",
      },
      {
        name: "Biology",
        description:
          "Biology is the study of living organisms and life processes. It includes topics like cells, genetics, evolution, and ecosystems. Biology helps us understand life and improve healthcare and sustainability.",
      },
    ],
  },
  {
    name: "History",
    topics: [
      {
        name: "Ancient",
        description:
          "Ancient history studies early human civilizations and their development. It includes cultures like Mesopotamia, Egypt, and the Indus Valley. This period helps us understand the origins of society and culture.",
      },
      {
        name: "Medivial",
        description:
          "Medieval history covers the period between ancient and modern times. It includes feudal systems, kingdoms, and major cultural changes. This era shaped many political and social structures seen today.",
      },
      {
        name: "Modern",
        description:
          "Modern history focuses on events from the late 15th century to the present. It includes revolutions, industrialization, and global conflicts. This period explains the formation of the contemporary world.",
      },
    ],
  },
];
