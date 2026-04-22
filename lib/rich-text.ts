import { convertLexicalToHTMLAsync } from '@payloadcms/richtext-lexical/html-async'

export async function richTextToHTML(content: any): Promise<string> {
  if (!content) return ''
  try {
    return await convertLexicalToHTMLAsync({ data: content })
  } catch {
    return ''
  }
}
