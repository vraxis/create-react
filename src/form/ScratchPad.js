import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScratchTextBox from './ScratchTextBox';
export default class ScratchPad extends Component {
    state = {
        numBoxes: 0, //TODO use this instead
        boxValues: []
    }

    constructor(props) {
        super(props);
        let boxVals = [];
         for(let i = 0; i < props.numBoxes;++i) {
            boxVals[i] = '';
         }
        this.state = {  numBoxes: props.numBoxes,
                        boxValues: boxVals
                    };
    }

    handleClick (e,index) {
        console.log("clicked",e, this.state.boxValues[index]);
        this.copyToClipboard("/r "+this.state.boxValues[index]);
    }

    handleChange (event, key) {
        var newBoxValues =  [...this.state.boxValues]
        newBoxValues[key] = event.target.value;
        this.setState({boxValues:newBoxValues});
    }

    //find a better way, maybe using refs to do this 
    //https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    copyToClipboard(text ) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    render () {
        var items = this.state.boxValues;
        return (<div>
            {items.map((item,key)=> 
                <p key="{key}" >
                    <input key="{key+'i'}" type='textbox'  onChange={(e)=> this.handleChange(e, key)} value={this.state.boxValues[key]} ></input>
                    <button key="{key+'b'}" onClick={(e)=>this.handleClick(e,key)}>Copy</button><br/></p>
            )}            
            <br/></div>
        );
    } 
    
} 

