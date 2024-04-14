import React, { Component } from 'react'

export default class Class extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment =()=>{
        console.log("increment");
        this.setState({count:this.state.count+1})
    }
    decrement =()=>{
        console.log("decrement");
        this.setState({count:this.state.count-1})
    }
    reset =()=>{
        this.setState({count:this.state.count=0})
    }

  render() {
    return (
      <div >
        <h2 className='text-5xl mx-40'>{this.state.count}</h2>
        <button onClick={this.decrement} className='bg-blue-500 border-2 border-black font-semibold text-2xl rounded-full w-40'>decrement</button>
        <button onClick={this.increment} className='bg-blue-500 border-2 ms-10 border-black font-semibold text-2xl rounded-full w-40'>increment</button>
        <button onClick={this.reset} className='bg-red-500 border-2 ms-10 border-black font-semibold text-2xl rounded-full w-40'>reset</button>
      </div>
    )
  }
}
