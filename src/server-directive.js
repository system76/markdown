/**
 * server-directive.js
 * Markdown server directive for Vue
 */

import { full, inline } from './markdown'

/**
 * A Vue directive to parse markdown. Made for server usage.
 *
 * @example
 * ```
 * <span v-markdown.full="**test**"></span>
 * ```
 *
 * @var {Object}
 */
export default function ServerMarkdown (vnode, { value, modifiers }) {
  if (value == null) {
    value = ''

    for (const child of vnode.children) {
      value += (child.text || '')
        .trim()
        .replace('\n', '')
    }
  }

  const html = (modifiers && modifiers.full) ? full(value) : inline(value)

  if (vnode.data.domProps == null) {
    vnode.data.domProps = {}
  }

  vnode.data.domProps.innerHTML = html
}
