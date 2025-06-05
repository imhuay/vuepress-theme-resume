module.exports = {
    base: '/vuepress-theme-resume/example/dist/',
    dest: 'example/dist',
    theme: 'resume',
    themeConfig: {
        // sidebar: [
        //   {
        //     collapsable: true,
        //     children: ['/']
        //   }
        // ]
    },
    chainWebpack: (config) => {
        config.resolve.symlinks(true);
    }
}