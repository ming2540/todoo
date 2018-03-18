import React, {component, Component} from 'react'
import {withState , mapProps , compose} from 'recompose'

const starWarsChars = [
    { name:'Luke', side:'light' },
    { name:'Darth Vader', side:'dark' },
    { name:'Obi-wan Kenobi', side:'light'},
    { name:'Palpatine', side:'dark'},
 ]


 const DisplayList = ({list, otherSide , stateHandler }) => (
    <div>
        <button onClick = {() => stateHandler(otherSide)}>Switch</button>
        {list.map(c => <div key={c.name}> {c.name} </div>)}
    </div>
 )

// const withFilterProps = BaseComponent => ({list , side }) => {
//     const transfromProps = list.filter(c => c.side === side)
//     return <BaseComponent list = {transfromProps}/> 
// }

// const FilteredList = withFilterProps(DisplayList)

// //HOC
// const withTransfromProps = transfromFunc => BaseComponent => (baseprops) => {
//     const transfromProps = transfromFunc(baseprops)
//     return <BaseComponent {...transfromProps}/>
// }

//HOC
// const withSimpleState = defaultState => BaseComponent => {
//     return class withSimpleState extends Component {
//         state = {value : defaultState}
//         updateState = value => this.setState({value})
//         render(){
//             return <BaseComponent {...this.props}
//                 state = {this.state.value} stateHandler = {this.updateState}/>
//         }
//     }
// }

// const compose = (...hocs) => BaseComponent => hocs.reduceRight((acc ,hoc) => hoc(acc),BaseComponent) 


// const ToggleableFilteredList = compose(
//     withSimpleState('dark'),
//     withTransfromProps (({list ,stateValue , stateHandler}) => ({
//         list : list.filter(c => c.side == stateValue),
//         otherside : stateValue == 'dark' ? 'light' : 'dark',
//         stateHandler
//     }))
// )(DisplayList)

const ToggleableFilteredList = compose(
    withState('stateValue' , 'stateHandler' , 'dark'),
    mapProps(({list , stateValue , stateHandler}) => ({
        list : list.filter(c => c.side == stateValue),
        otherSide : stateValue == 'dark' ? 'light' : 'dark',
        stateHandler
    }))
)(DisplayList)

const StarWarApp = () => (
    <div>
        <ToggleableFilteredList list = {starWarsChars}/>
    </div>
 )

 export default StarWarApp;