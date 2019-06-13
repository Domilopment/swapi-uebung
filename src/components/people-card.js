import React, { Component } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { observer } from "mobx-react";

const Div = styled.div`
  display: flex;
  max-width: 17em;
  box-shadow: 0px 40px 40px -10px rgba(90, 90, 90, 0.6) inset;
  flex-wrap: wrap;
  padding: 1em;
  margin: 2em;
  justify-content: center;
  background-color: #fff;
  border-radius: 5%;
`;

const P = styled.p`
  padding: 0 0.5em;
`;

export default
@observer
class PeopleCard extends Component {
  static propTypes = {
    people: PropTypes.object.isRequired
  };

  render() {
    const people = this.props.people;
    return (
      <Div>
        <h2>{people.name}</h2>
        <P>Größe: {people.height}</P>
        <P>Gewicht: {people.mass}</P>
        <P>Geboren am: {people.birth_year}</P>
        <P>Geschlecht: {people.gender}</P>
      </Div>
    );
  }
}
