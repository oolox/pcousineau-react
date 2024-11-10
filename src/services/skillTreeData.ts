import {skillTreeType} from "../App.types";

export const skillTree : skillTreeType[] =[
    {
        name: "Skills",
        children: [
            {
                name: "Development",
                children: [
                    {
                        name: "Frameworks",
                        children: [
                            {name: "React"},
                            {name: "Angular"},
                            {name: "NextJs"},
                            {name: "Tailwind"}]
                    },
                    {
                        name: "Languages",
                        children: [
                            {name: "javascript"},
                            {name: "typescript"},
                            {name: "css"}]
                    }
                ]
            },
            {
                name: "Integration",
                children: [
                    {
                        name: "API",
                        children: [
                            {name: "REST"},
                            {name: "Sockets"},
                            {name: "GraphQL"}]
                    },
                    {
                        name: "Visualization",
                        children: [
                            {name: "D3"},
                            {name: "SVG/Canvas"},
                            {name: "ChartJS"},
                            {name: "Mapbox"}]
                    },

                ]
            },
            {
                name: "Tools",
                children: [
                            {name: "GitHub"},
                            {name: "Jira"},
                            {name: "Heroku"},
                            {name: "Figma"},
                        ]

            }
        ]
    }
    ]
