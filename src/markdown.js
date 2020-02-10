/**
 * markdown.js
 * Configures our markdown it parser with all of the plugins we want.
 */

import markdownIt from 'markdown-it'
import markdownItKbd from 'markdown-it-kbd'
import markdownItLinkAttributes from 'markdown-it-link-attributes'

const parser = markdownIt({
  html: false,
  linkify: true,
  typographer: true
})
  .use(markdownItKbd)
  .use(markdownItLinkAttributes, {
    pattern: /^https?:\/\//gm,
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })

/**
 * Returns a full block of markdown. Includes all of the sub tags like `<p>` and
 * `<h1>`.
 *
 * @param {String} text
 * @return {String}
 */
export function full (text) {
  return parser.render(text.trim()).trim()
}

/**
 * Returns inline markdown. Does not include block tags, but will include tags
 * like `<strong>`.
 *
 * @param {String} text
 * @return {String}
 */
export function inline (text) {
  return parser.renderInline(text.trim()).trim()
}
