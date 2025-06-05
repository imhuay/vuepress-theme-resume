<template>
  <div class="page">
    <Content class="content"
      :custom="false" />
  </div>
</template>

<script>
export default {
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
@import '../styles/config.styl';

/* 打印设置 */
@media print {
  * {
    border: none !important;  /* 强制清除所有边框 */
    // box-shadow: none !important;
    // outline: none !important;
  }

  /* 全局页边距 */
  @page {
    size: $pageSize;        /* 纸张大小 (A4/A5/letter等) */
    margin: $pageMargin;    /* 上 右 下 左 (顺时针) */
    // marks: none;            /* 禁用裁剪标记 */
  }

  /* 单独设置首页页边距 */
  @page :first {
    margin-top: $firstPageMarginTop;  /* 首页上边距 */
  }

  /* 隐藏导航栏 */
  .navbar {
    display: none;
  }

  /* 移除页面的所有内外边距 */
  html, body {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* 打印时防止某些元素被分页截断; 不推荐, 还是通过 page-break 手动控制 */
  /* 避免标题孤行 (单独出现在页面最下方) */
  // h1, h2, h3, hr {
  //   break-after: avoid;   /* 避免在这些元素后分页 */
  //   // break-inside: avoid;  /* 防止标题被截断 */
  // }

  /* 列表/表格不分页 */
  // ul, ol, table {
  //   break-inside: avoid;
  // }

  /* 强制分页 */
  /* 用法: 在想要分页的地方添加 <div class="page-break"></div> <!-- 分页 --> */
  .page-break {
    break-before: page;
  }

  /* 隐藏指定元素 */
  /* 用法: 对不想打印的元素添加 <div class="no-print"></div> <!-- 不打印 --> */
  .no-print {
    display: none !important;
  }
}

.page { .content {
  font-size: $fontSize;
  // font-family: "Cascadia Mono", "Noto Sans SC", "PingFang SC";
  font-family: $textFont;
  font-weight: $fontWeight;
  color: $textColor;

  * {
    margin: 0 !important;
  }

  h1 {
    display: flex;
    align-items: center;
    font-family: $h1Font;
    font-size: $h1FontSize;
    color: $h1Color;

    > span {
      flex: 1;
      letter-spacing: 0.2em;
      transform: translateY(-0.2em);
    }

    > ul {
      float: right;
      font-family: $infoFont;
      font-size: $fontSize * min($h3ElemFontSizeRatio, 1) !important;
      font-weight: normal;
      color: $infoColor;
      margin: 0;
      padding: 0;

      > li {
        display: flex;
        flex-wrap: nowrap;

        > span {
          flex-shrink: 0;
          width: 6em;
          text-align: right;

          &::after {
            content: ':';
            margin: 0 0.25em;
          }
        }
      }
    }
  }

  hr {
    margin-top: $hrMarginTop !important;
    border-top: $h3BorderBottomSize dashed $h3BorderColor !important;
  }

  hr.sub {
    margin-left: $subHrMarginL !important;
    margin-right: $subHrMarginR !important;
    border-top: $subHrBorder !important;
  }

  h2, h3 {
    line-height: 1;
    border: 0;
    padding: 0;
    display: flex;
    align-items: baseline;

    .header-anchor {
      display: none;
    }
  }

  h2 {
    font-family: $h2Font;
    font-size: $h2FontSize;
    color: $h2Color
    display: flex;
    margin-bottom: $h2MarginBottom !important;

    &:not(:first-of-type) {
      margin-top: $h2MarginTop !important;
    }

    &::after {
      content: '';
      flex: 1;
      border-bottom: $h2BorderBottomSize dashed $h2BorderColor !important;
      margin-left: 10px;
    }
  }

  h3 {
    font-family: $h3Font;
    font-size: $h3FontSize;
    color: $h3Color
    margin-bottom: $h3MarginBottom !important;

    &:not(:first-of-type) {
      margin-top: $h3MarginTop !important;
    }
  }

  p, ul, ol {
    // max-width: $textMaxWidth;
    line-height: $lineHeight;
  }

  ul {
    margin: 0;
    margin-top: 0.5em;
  }

  li:not([style]):not(:has(> [class])) {
    max-width: $textMaxWidth;
  }

  > ul {
    margin-left: $topUlMarginLeft !important; /* 顶层无序列表缩进 */

    ul {
      margin-left: $ulMarginLeft !important; /* 无序项目缩进 */
    }

    ol {
      margin-left: $olMarginLeft !important; /* 有序项目缩进 */
    }
  }

  > ol {
    margin-left: $topOlMarginLeft !important; /* 顶层有序列表缩进 */

    ul {
      margin-left: $ulMarginLeft !important; /* 无序项目缩进 */
    }

    ol {
      margin-left: $olMarginLeft !important; /* 有序项目缩进 */
    }
  }

  ol ol {
    list-style-type: lower-alpha;
  }

  ol ol ol {
    list-style-type: lower-roman;
  }

  .com, .role, .tag, .right {
    font-weight: normal;
    transform: translateY(-0.04em); // 微调垂直位置（正值下移，负值上移）
  }

  .com {
    font-family: $comFont;
    font-size: $fontSize * min($h3ElemFontSizeRatio, 1) !important;
    color: $comColor;
  }

  .role {
    font-family: $roleFont;
    font-size: $fontSize * min($h3ElemFontSizeRatio, 1) !important;
    color: $roleColor;
  }

  .tag {
    font-family: $tagFont;
    font-size: $fontSize * min($h3ElemFontSizeRatio, 1) !important;
    color: $tagColor;
  }

  .right {
    font-family: $rightFont;
    // flex: 1;
    float: right;
    font-size: $fontSize * min($h3ElemFontSizeRatio, 1) !important;
    color: $rightColor;
    text-align: right;
    font-style: italic;
  }

  .text-container {
    display: flex;
    align-items: baseline;

    p {
      flex: 1;
    }

    .right {
      flex: 1;
    }
  }

  .head3-container {
    display: flex;
    align-items: baseline;

    // margin-top: $h3MarginTop !important;
    &:not(:first-of-type) {
      margin-top: $h3MarginTop !important;
    }

    h3 {
      flex: 1;
      max-width: $titleMaxWidth;
    }

    .com {
      flex: 1;
      max-width: $comMaxWidth;
    }

    .role {
      flex: 1;
      max-width: $roleMaxWidth;
    }

    .tag {
      flex: 1;
    }

    .right {
      flex: 1;
    }
  }

  .head3-container[data-type="sub"] {
    margin-top: $h3SubMarginTop !important;

    h3 {
      font-size: $h3SubFontSize !important;
      color: $h3SubColor;
      text-indent: $h3SubTextIndent !important; /* 子项目标题缩进 */
    }
  }

  .head3-container + .head3-container[data-type="sub"] {
    margin-top: $h3SubMarginTopFirst !important;  // 仅第一个子项目上移
  }

  .no-display {
    display: none !important; /* 完全从布局中移除 */
  }

  .center {
    color: $centerColor;
    text-align: center;           /* 文字居中 */
    font-size: $centerFontSize;   /* 字号 */
    letter-spacing: $centerLetterSpacing;       /* 字符间距 */
    transform: translateX($centerTranslateX);   /* 整体左右偏移 */
    transform: translateY($centerTranslateY);   /* 整体上下偏移 */
  }

}}
</style>
