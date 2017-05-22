import R from 'ramda'

/**
 * @typedef {(String|undefined)} Component
 *
 * @typedef {Object} ItemDefinition
 * @property {String} cat
 * @property {String} name
 * @property {String} page
 * @property {String[]} uses
 * @property {String[]} rel
 */

/**
 * @param {String} cat - Category name in PascalCase
 * @param {String} name - PascalCased name of component
 * @param {Component} page - Imported .md page or `undefined`
 * @param {String[]} uses - Component dependencies
 * @return {ItemDefinition} - Item definition
 */
export const item = (cat, name, page, uses = []) =>
  ({ cat, name, page, uses, rel: [] })


/**
 * @param {String} name - PascalCased name of component
 * @param {Component} [page] - Imported .md page or `undefined`
 * @param {String[]} [uses] - Component dependencies
 * @return {Object} - Item definition
 */
export const atom = (name, page, uses) =>
  item('Atoms', name, page, uses)

/**
 * @param {String} name - PascalCased name of component
 * @param {Component} [page] - Imported .md page or `undefined`
 * @param {String[]} [uses] - Component dependencies
 * @return {Object} - Item definition
 */
export const molecule = (name, page, uses) =>
  item('Molecules', name, page, uses)

/**
 * @param {String} name - PascalCased name of component
 * @param {Component} [page] - Imported .md page or `undefined`
 * @param {String[]} [uses] - Component dependencies
 * @return {Object} - Item definition
 */
export const organism = (name, page, uses) =>
  item('Organisms', name, page, uses)

/**
 * @param {String} name
 * @return {String}
 */
export const asPath = name =>
  name.toLowerCase().replace(/\s+/gm, '_')

/**
 * Find dependencies from `uses` and set it to `rel`
 *
 * @param {Object} map
 * @return {Object<ItemDefinition>}
 */
export function resolveDependencies(map) {
  R.keys(map).forEach((key) => {
    const com = map[key]

    com.uses.forEach((dep) => {
      map[asPath(dep)].rel.push(com.name)
    })
  })

  return map
}

/**
 * @param {ItemDefinition[]} list - List of defined items
 * @return {Object<ItemDefinition>}
 */
export const collection = list =>
  resolveDependencies(
    list.reduce((all, depn) => ({ ...all, [asPath(depn.name)]: depn }), {}),
  )
