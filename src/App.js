import React, { Component, Fragment } from "react";
import PeopleList from "./components/people-list";
import { inject } from "mobx-react";

export default
@inject("peopleStore")
class App extends Component {
  render() {
    const people = this.props.peopleStore;

    const handleGetAllPeople = () => {
      people.getAllPeople();
    };

    return (
      <Fragment>
        {handleGetAllPeople()}
        <PeopleList people={people} />
      </Fragment>
    );
  }
}
