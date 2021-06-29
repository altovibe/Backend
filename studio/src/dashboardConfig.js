export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60da7a7f4ba1e60cd0d312de",
                  title: "Sanity Studio",
                  name: "backend-studio",
                  apiId: "56deb71c-455d-495f-a7b3-9703acc3f706",
                },
                {
                  buildHookId: "60da7a7fd185961096240696",
                  title: "Blog Website",
                  name: "backend-web",
                  apiId: "a02b5adc-fe0f-4c7a-8f3b-688ec59eb387",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/altovibe/Backend",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://backend-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
