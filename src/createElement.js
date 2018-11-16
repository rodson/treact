// @flow
import type { VNode } from './types';

/**
 * @param  {string | function} nodeName Element's name
 * @param  {object} attributes Key/value set of the element
 * @param  {...VNode} children Element's children
 * @return {object}
 */
export function createElement(
	nodeName: string | Function,
	attributes: Object,
	...children: VNode
): Object {
	return {
		nodeName: nodeName,
		attributes: attributes,
		children: children
	};
}
