

export interface skillTreeType {
    name: string;
    isFolder?: boolean;
    children?: any;
}

export const skillTree : skillTreeType[] =[{
    name: "Skills",
    children: [
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
                        { name: "Kendo / Highcharts" },
                        { name: "ChartJS" },
                        { name: "Mapbox" },
                    ]
                },

            ]
        }
    ]
}]

