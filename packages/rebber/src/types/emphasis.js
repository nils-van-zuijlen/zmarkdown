/* Dependencies. */
const all = require('../all')

/* Expose. */
module.exports = emphasis

/* Stringify an emphasis `node`. */
function emphasis (ctx, node, index, parent) {
  const contents = all(ctx, node)

  return `\\textit{${contents}}`
}
