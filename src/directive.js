/**
 * directive.js
 * Markdown directive for Vue
 */

import { full, inline } from './markdown'

/**
 * A Vue directive to parse markdown.
 *
 * @example
 * ```
 * <span v-markdown.full="**test**"></span>
 * ```
 *
 * @var {Object}
 */
export default {
  bind (el, { value, modifiers }, vnode) {
    if (value == null) {
      value = ''

      for (const child of vnode.children) {
        value += (child.text || '')

        // Trim indentation whitespace from each line so we can have nice
        // indented HTML
        const spaces = value.match(/^\s*/)
        if (spaces[0] && spaces[0].length) {
          value = value
            .split('\n')
            .map((l) => l.substring(spaces[0].length - 1))
            .join('\n')
        }
      }
    }

    if (modifiers && modifiers.full) {
      el.innerHTML = full(value)
    } else {
      el.innerHTML = inline(value)
    }
  }
}
