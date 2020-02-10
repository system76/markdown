/**
 * index.js
 * Exports everything related to System76 markdown for bundlers
 */

import directive from './directive'
import serverDirective from './server-directive'

export function install (Vue) {
  Vue.directive('markdown', directive)
}

export * from './markdown'

export { directive, serverDirective }
