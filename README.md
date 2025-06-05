vuepress-theme-resume
===
> fork from: [komomoo/vuepress-theme-resume](https://github.com/komomoo/vuepress-theme-resume)

- [Start](#start)
- [打印 / 导出为 PDF](#打印--导出为-pdf)
- [样式修改](#样式修改)
- [我的修改](#我的修改)


## Start

1. 安装 yarn
    > https://gist.github.com/imhuay/59b7f2676510b5b18882b5ad31793104#install-nodejs
2. 安装依赖包
    ```bash
    cd path/to/vuepress-theme-resume
    yarn
    ```
3. 启动
    ```bash
    yarn dev
    ```


## 打印 / 导出为 PDF

右键 -> 打印 -> 另存为 pdf

打印设置
- 上下边距 3mm, 左右边距 4mm
- 取消页眉页脚

## 样式修改
> example/.vuepress/styles/palette.styl

```styl
// font
$fontSize = 13px
$fontWeight = 400

// colors
$accentColor = #4688F1
$textColor = #161F28
$borderColor = #eaecef
```


## 我的修改
1. 隐藏侧边栏
    > https://github.com/komomoo/vuepress-theme-resume/issues/17

    在默认打印设置下无影响, 但如果打印时想减小页边距, 则会出现, 所以最好隐藏 (默认打印下的页边距有点宽)
    
    方法: 注释掉 `example/.vuepress/config.js` 中的 `themeConfig.sidebar`
    ```js
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
        }
    }
    ```

2. 修改字体

    通过修改浏览器字体实现, 以 Edge 浏览器为例, 进入 设置 | 外观 | 字体 | 自定义字体, 推荐等宽字体, 我使用的是 `Cascadia Mono`.

    修改浏览器字体对大多数网页没有影响, 一般网页都会使用自己定义的字体