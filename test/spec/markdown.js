import test from 'ava'

import { readFixture } from '../_helpers'
import * as markdown from '../../src/markdown'

test('it renders simple inline text', (t) => {
  const res = markdown.inline('this is **inline** text')
  t.is(res, 'this is <strong>inline</strong> text')
})

test('it converts keyboard keys', (t) => {
  const res = markdown.inline('it beautifies "quote" strings')
  t.is(res, 'it beautifies “quote” strings')
})

test('it converts copyright shortcuts', (t) => {
  const res = markdown.inline('when it is ready (tm)')
  t.is(res, 'when it is ready ™')
})

test('it can render full blocks of markdown', async (t) => {
  const fixture = await readFixture('terms.md')
  t.snapshot(markdown.full(fixture))
})
