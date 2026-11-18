import { docsRoute } from './shared';
import { type Locale, i18n, localizedPath } from './i18n';

const localizedTabs = {
  en: [
    {
      title: 'NarraLeaf Studio',
      description: 'Zero-code authoring, editing, preview, and publishing workflows.',
      path: 'studio',
    },
    {
      title: 'NarraLeaf Team',
      description: 'Self-hosted projects, roles, reviews and collaboration.',
      path: 'studio/team',
    },
    {
      title: 'NarraLeaf-React',
      description: 'React player docs for web embedding and custom UI.',
      path: 'narraleaf-react',
    },
  ],
  zh: [
    {
      title: 'NarraLeaf Studio',
      description: '零代码创作、编辑、预览与发布工作流。',
      path: 'studio',
    },
    {
      title: 'NarraLeaf Team',
      description: '自托管项目、角色、审阅与协作。',
      path: 'studio/team',
    },
    {
      title: 'NarraLeaf-React',
      description: '用于网页嵌入和自定义 UI 的 React 播放器文档。',
      path: 'narraleaf-react',
    },
  ],
  ja: [
    {
      title: 'NarraLeaf Studio',
      description: 'ノーコードでの制作、編集、プレビュー、公開までのワークフロー。',
      path: 'studio',
    },
    {
      title: 'NarraLeaf Team',
      description: 'セルフホスト型のプロジェクト、役割、レビュー、共同作業。',
      path: 'studio/team',
    },
    {
      title: 'NarraLeaf-React',
      description: 'Web への組み込みと UI カスタマイズのための React プレイヤーのドキュメント。',
      path: 'narraleaf-react',
    },
  ],
} satisfies Record<Locale, { title: string; description: string; path: string }[]>;

/**
 * Documentation shell tabs: each tab is a separate top-level docs segment.
 * Project overview lives at `/project`, outside the documentation tabs.
 */
export function docsProductTabs(locale: Locale = i18n.defaultLanguage) {
  return localizedTabs[locale].map(({ path, ...tab }) => ({
    ...tab,
    url: localizedPath(`${docsRoute}/${path}`, locale),
  }));
}
