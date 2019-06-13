import React, { Component } from "react";
import styled from "styled-components";
import PeopleCard from "./people-card";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default
@observer
class PeopleList extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired
  };

  render() {
    const people = this.props.people.people;
    return (
      <Div>
        {people.map(people => (
          <PeopleCard people={people} />
        ))}
      </Div>
    );
  }
}
