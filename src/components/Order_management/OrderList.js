/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';

const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];
class OrderList extends Component {


    render() {
        return (
            <div>
                {
                    [
                        <span>React.js</span>,
                        <span>is</span>,
                        <span>good</span>]
                }
            </div>
        )
    }

}

export default OrderList;