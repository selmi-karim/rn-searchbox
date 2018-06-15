/*
 * @Author: kerim selmi 
 * @Date: 2018-06-13 22:55:50 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-15 02:43:49
 */

 
const diceSearch = (input, item) => {
    let itemData =""
    Object.entries(item).forEach(([key, value]) => {
      itemData += value.toUpperCase() 
    })
    const inputData = input.replace(/\s/g,'').toUpperCase()
  
    return itemData.replace(/\s/g,'').indexOf(inputData) > -1
  }


module.exports = { diceSearch }