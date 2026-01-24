import { useEffect } from "react";

type DocumentMeta = {
  title: string;
  description?: string;
};

/**
 * Lightweight SEO helper without changing index.html.
 * Updates document.title and (if present) the meta description tag.
 */
export function useDocumentMeta(meta: DocumentMeta) {
  useEffect(() => {
    document.title = meta.title;

    if (!meta.description) return;
    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (tag) tag.content = meta.description;
  }, [meta.title, meta.description]);
}
