import React, { useState } from 'react';
import './App.css';
import 'flexboxgrid';
import Tag from './components/tags/tags';
import Card from './components/card/card';
import { animalData } from './components/data/animaldata';

const Cards = () => {
  const [animalsToShow, setAnimalsToShow] = useState('');
  const [animals, setAnimals] = useState([...animalData]);

  /* eslint-disable no-param-reassign */
  const checkHandler = (animal: string) => {
    const newArr = [...animals];
    newArr.forEach((i) => {
      if (i.type === animal) {
        i.checked = !i.checked;
      }
    });
    setAnimalsToShow(animal);
    setAnimals(newArr);
  };
  /* eslint-enable no-param-reassign */

  const animalCards = () => {
    return animals
      .filter((obj) => obj.checked)
      .map((obj) => {
        return (
          <div key={obj.id}>
            <Card
              text={obj.text}
              name={obj.name}
              link={obj.link}
              source={obj.img}
            />
          </div>
        );
      });
  };

  const animalTags = (animal: string, text: string) => {
    return (
      <>
        <Tag
          text={text}
          id={text}
          onChange={() => {
            checkHandler(animal);
          }}
        />
      </>
    );
  };

  return (
    <div className="cards">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="cards__header">
              {animalTags('dog', 'Dogs')}
              {animalTags('cat', 'Cats')}
              {animalTags('sheep', 'Sheeps')}
              {animalTags('chicken', 'Chickens')}
              {animalTags('donkey', 'Donkeys')}
              {animalTags('hog', 'Hedgehogs')}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="cards__container">
              {animalsToShow === 'dog' && animalCards()}
              {animalsToShow === 'cat' && animalCards()}
              {animalsToShow === 'sheep' && animalCards()}
              {animalsToShow === 'chicken' && animalCards()}
              {animalsToShow === 'donkey' && animalCards()}
              {animalsToShow === 'hog' && animalCards()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
