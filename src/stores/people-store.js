import { observable, action, autorun } from "mobx";

autorun(() => {
  console.log("people");
});

export default class PeopleStore {
  @observable
  people = [];

  @action
  getAllPeople = () => {
    fetch("https://swapi.co/api/people/?format=json")
      .then(response => response.json())
      .then(myJson => {
        for (let i = 0; i <= myJson["results"].length; i++) {
          this.people.push({
            name: myJson["results"][i]["name"],
            height: myJson["results"][i]["height"],
            mass: myJson["results"][i]["mass"],
            birth_year: myJson["results"][i]["birth_year"],
            gender: myJson["results"][i]["gender"]
          });
        }
      });
  };
}
