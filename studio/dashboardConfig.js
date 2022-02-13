export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6208571c6f4f5dd7067add9d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-22-studio-mx1qaq1r',
                  apiId: '0ade0e92-71d0-49a4-a7d4-cb79152aa661'
                },
                {
                  buildHookId: '6208571c327838cefbc75def',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-22-web',
                  apiId: '818d01b2-b618-44e0-a1e6-8cc0214f73a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davedawson/sanity-nextjs-landing-pages22',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-22-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
