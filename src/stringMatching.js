/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:50 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-14 14:41:41
 */
import { filter, some, includes } from 'lodash/collection';


const stringSearch = (input, data) => {
    if (input === '') {
        return allDataOnEmptySearch ? data : [];
    }
    return filter(data, item => {
        return depthFirstSearch(item, input);
    });
};

// private function
const depthFirstSearch = (collection, input) => {
    // let's get recursive boi
    let type = typeof collection;
    // base case(s)
    if (type === 'string' || type === 'number' || type === 'boolean') {
        return includes(
            collection.toString().toLowerCase(),
            input.toString().toLowerCase()
        );
    }
    return some(collection, item => this._depthFirstSearch(item, input));
};

module.exports = { stringSearch }