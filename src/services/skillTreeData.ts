
export interface skillTreeType {
    name: string;
    isFolder?: boolean;
    children?: any;
}

export const skillTree : skillTreeType[] =[
        { name: "Languages",
          children: [
              { name: "React" },
              { name: "Angular"},
              { name: "html" },
              { name: "Typescript" },
              { name: "css" },
          ]
        },
        {
            name: "Integration",
            children: [
                {
                    name: "API",
                    children: [
                        { name: "REST" },
                        { name: "Sockets" },
                        { name: "GraphQL" },
                    ]
                },
                {
                    name: "Visualization",
                    children: [
                        { name: "D3" },
                        { name: "SVG/Canvas" },
                        { name: "ChartJS" },
                        { name: "Mapbox" },
                    ]
                },

            ]
        },
        {
            name: "Tools",
            children: [
                {
                    name: "Development",
                    children: [
                        { name: "GitHub" },
                        { name: "Jira" },
                        { name: "Heroku" },
                    ]
                },
                {
                    name: "Design",
                    children: [
                        { name: "Figma" },
                        { name: "Adobe" },
                        { name: "Confluence" },
                    ]
                },

            ]
        }
    ]