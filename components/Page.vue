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

.page {
  .content {
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
        font-size: $fontSize * $h3ElemFontSizeRatio !important;
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
        border-bottom: 2px dashed $h2BorderColor;
        margin-left: 10px;
      }
    }

    h2:has(+ h3) {
      margin-bottom: $h2HasH3MarginBottom !important;
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

    > p, > ul, > ol {
      line-height: 1.5;
    }

    > p {
    }

    > ul {
      margin: 0;
      margin-top: 0.5em;
    }

    > hr {
      margin-top: $h3MarginBottom !important;
      border-top: 1px dashed $h3BorderColor;
    }

    /* 不对齐方案 */
    .role, .tag, .right {
      font-weight: normal;
      transform: translateY(-0.04em); // 微调垂直位置（正值下移，负值上移）
    }

    .role {
      font-family: $roleFont;
      font-size: $fontSize * $h3ElemFontSizeRatio !important;
      color: $roleColor;
    }

    .tag {
      font-family: $tagFont;
      font-size: $fontSize * $h3ElemFontSizeRatio !important;
      color: $tagColor;
    }

    .right {
      font-family: $rightFont;
      flex: 1;
      float: right;
      font-size: $fontSize * $h3ElemFontSizeRatio !important;
      color: $rightColor;
      text-align: right;
      font-style: italic;
    }

    .head3-container {
      display: flex;
      align-items: baseline;

      &:not(:first-of-type) {
        margin-top: $h3MarginTop !important;
      }

      h3 {
        flex: 1;
        max-width: $titleMaxWidth;
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
  }
}
</style>
