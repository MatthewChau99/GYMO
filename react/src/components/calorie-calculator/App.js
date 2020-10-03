import React, { Component } from "react";
import MultiSelect from "react-multi-select-component";
import {Card, Form} from"shards-react";
import "./App.css"
const options = [
  { label: "Grapes 🍇", value: "20" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  { label: "Watermelon 🍉", value: "watermelon" },
  { label: "Pear 🍐", value: "pear" },
  { label: "Apple 🍎", value: "apple" },
  { label: "Tangerine 🍊", value: "tangerine" },
  { label: "Pineapple 🍍", value: "pineapple" },
  { label: "Peach 🍑", value: "peach" },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    }
    this.setSelected = this.setSelected.bind(this);
  }
  setSelected(e) {
    this.setState({ selected: e })
  }
  render() {
    const CustomItemRenderer = ({ checked, option, onClick, disabled }) => {
        return (
            <Card>
                <div className={`item-renderer ${disabled && "disabled"}`}>
                    <label className="container">
                        <input
                        type="checkbox"
                        onChange={onClick}
                        checked={checked}
                        tabIndex={-1}
                        disabled={disabled}
                        className="checkboxMulti"
                        />
                        <span className="checkmark_span" />
                    </label>
                    <span className="optionLabel">{option.label}</span>
                </div>
            </Card>
        );
    };
        return (
            <div>
                <MultiSelect
                    options={options}
                    value={this.state.selected}
                    onChange={this.setSelected}
                    labelledBy={"Select"}
                    ItemRenderer={CustomItemRenderer}
                    selectAllLabel={"All Sites"}
                />
                <div className="testDiv"></div>
            </div>
        )
    }
}
export default App;