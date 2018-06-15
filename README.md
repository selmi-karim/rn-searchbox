
# rn-searchbox

A simple Search Bar with FlatList Component for handling huge and large data.

Build for React Native App and works on both Android and iOS.


<p align="center"> 
<img src="screenshots/test.gif" height= "500" width="350" >
</p>

# How it works

* Fast, Flexible, Customizable.


# Install

```
npm install --save rn-searchbox

or

yarn add rn-searchbox

```

# Example code

# Usage

```jsx
import React, { Component } from 'react' 
import { StyleSheet, Alert } from 'react-native' 
import SearchBox from 'rn-searchbox' 

export default class Example extends Component {
    
    onClick(item) {
        Alert.alert('Item: '+JSON.stringify(item)) 
    }
    render() {
        return (
            <Search
                ref={(ref) => this.searchBar = ref}
                data={data.users}
                showOnLoad
                onClick={(item) => this.onClick(item)}
                itemsStyles={itemsStyle()}
            />
        ) 
    }
}

const itemsStyle = () => {
    return {
        name: {
            fontSize: 18
        },
        email: {
            color: 'red'
        },
        phone: {
            fontSize: 16,
            color: 'blue'
        }
    }
}

const data = {
    "users":
        [
            {
                "key": "0",
                "name": "Proxima Midnight",
                "phone": "+216 54 548 216"
            },
            {
                "key": "1",
                "name": "Ebony Maw",
                "email": "ebony@appdividend.com",
            },
            {
                "key": "2",
                "name": "Black Dwarf",
            },
            {
                "key": "3",
                "name": "Mad Titan",
                "email": "thanos@appdividend.com",
                "phone": "+216 54 548 100",
                "adress": "Sousse, Tunis"
            },
            {...}
        ]
}


```



# Next Step:

*  Possibility to add a custom icon/image to the ListView
*  New Algorithm for String Matching
*  Update docs for Box component
*  Update react, react-native & other dependencies


# Author

kerim selmi <a href="http://www.karimation.com">karimation</a>

# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
