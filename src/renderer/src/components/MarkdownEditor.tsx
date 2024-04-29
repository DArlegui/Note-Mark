import { MDXEditor } from '@mdxeditor/editor'

export const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown={'# Hello'}
      contentEditableClassName="outline-none min-h-screen max-w-none w-full text-lg px-8 py-5 text-white/90 "
    />
  )
}
