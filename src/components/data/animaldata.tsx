import image1 from '../../images/frenchie.jpg';
import image16 from '../../images/frenchie2.jpg';
import image17 from '../../images/frenchie3.jpg';
import image2 from '../../images/dobermann.jpg';
import image18 from '../../images/dobermann2.jpg';
import image19 from '../../images/dobermann3.jpeg';
import image3 from '../../images/rottw.jpg';
import image4 from '../../images/scottish.jpg';
import image20 from '../../images/scottish2.jpg';
import image21 from '../../images/scottish3.png';
import image5 from '../../images/bengal.jpg';
import image6 from '../../images/sheep1.jpg';
import image7 from '../../images/sheep2.jpg';
import image8 from '../../images/sheep3.jpg';
import image9 from '../../images/chick.jpg';
import image10 from '../../images/chick2.jpg';
import image11 from '../../images/chick3.png';
import image12 from '../../images/donkey.jpg';
import image13 from '../../images/donkey2.jpg';
import image14 from '../../images/hog.jpg';
import image15 from '../../images/hog2.jpg';

export const animalData: {
  id: number;
  type: string;
  checked: boolean;
  img: string[];
  name: string;
  text: string;
  link: string;
}[] = [
  {
    id: 1,
    type: 'dog',
    checked: false,
    img: [`${image1}`, `${image16}`, `${image17}`],
    name: 'French Bulldog',
    text:
      'French Bulldogs are often kept as companions. They rarely bark. The breed is patient and affectionate with their owners and can live with other breeds',
    link: 'https://en.wikipedia.org/wiki/French_Bulldog',
  },
  {
    id: 2,
    type: 'dog',
    checked: false,
    img: [`${image2}`, `${image18}`, `${image19}`],
    name: 'Dobermann',
    text: 'Dobermanns are known to be intelligent, alert, and tenaciously loyal companions and guard dogs',
    link: 'https://en.wikipedia.org/wiki/Dobermann',
  },
  {
    id: 3,
    type: 'dog',
    checked: false,
    img: [`${image3}`],
    name: 'Rottweiler',
    text: 'The Rottweiler is good-natured, placid in basic disposition, very devoted, obedient, biddable and eager to work',
    link: 'https://en.wikipedia.org/wiki/Rottweiler',
  },
  {
    id: 4,
    type: 'cat',
    checked: false,
    img: [`${image4}`, `${image20}`, `${image21}`],
    name: 'Scottish Fold',
    text: 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to fold',
    link: 'https://en.wikipedia.org/wiki/Scottish_Fold',
  },
  {
    id: 5,
    type: 'cat',
    checked: false,
    img: [`${image5}`],
    name: 'Bengal cat',
    text: 'Bengals have a wild appearance; their golden shimmer comes from their leopard cat ancestry, and their coats may show spots, rosettes, arrowhead markings, or marbling',
    link: 'https://en.wikipedia.org/wiki/Bengal_cat',
  },
  {
    id: 6,
    type: 'sheep',
    checked: false,
    img: [`${image6}`],
    name: 'Sheep 1',
    text: 'Being a key animal in the history of farming, sheep have a deeply entrenched place in human culture',
    link: 'https://en.wikipedia.org/wiki/Sheep',
  },
  {
    id: 7,
    type: 'sheep',
    checked: false,
    img: [`${image7}`],
    name: 'Sheep 2',
    text: 'Being a key animal in the history of farming, sheep have a deeply entrenched place in human culture',
    link: 'https://en.wikipedia.org/wiki/Sheep',
  },
  {
    id: 8,
    type: 'sheep',
    checked: false,
    img: [`${image8}`],
    name: 'Sheep 3',
    text: 'Being a key animal in the history of farming, sheep have a deeply entrenched place in human culture',
    link: 'https://en.wikipedia.org/wiki/Sheep',
  },
  {
    id: 9,
    type: 'chicken',
    checked: false,
    img: [`${image9}`],
    name: 'Hen 1',
    text: 'Chickens are gregarious birds and live together in flocks. They have a communal approach to the incubation of eggs and raising of young',
    link: 'https://en.wikipedia.org/wiki/Chicken',
  },
  {
    id: 10,
    type: 'chicken',
    checked: false,
    img: [`${image10}`],
    name: 'Hen 2',
    text: 'Chickens are gregarious birds and live together in flocks. They have a communal approach to the incubation of eggs and raising of young',
    link: 'https://en.wikipedia.org/wiki/Chicken',
  },
  {
    id: 11,
    type: 'chicken',
    checked: false,
    img: [`${image11}`],
    name: 'Hen 3',
    text: 'Chickens are gregarious birds and live together in flocks. They have a communal approach to the incubation of eggs and raising of young',
    link: 'https://en.wikipedia.org/wiki/Chicken',
  },
  {
    id: 12,
    type: 'donkey',
    checked: false,
    img: [`${image12}`],
    name: 'Donkey 1',
    text: 'Donkeys have a notorious reputation for stubbornness, but this has been attributed to a much stronger sense of self-preservation than exhibited by horses',
    link: 'https://en.wikipedia.org/wiki/Donkey',
  },
  {
    id: 13,
    type: 'donkey',
    checked: false,
    img: [`${image13}`],
    name: 'Donkey 2',
    text: 'Donkeys have a notorious reputation for stubbornness, but this has been attributed to a much stronger sense of self-preservation than exhibited by horses',
    link: 'https://en.wikipedia.org/wiki/Donkey',
  },
  {
    id: 14,
    type: 'hog',
    checked: false,
    img: [`${image14}`],
    name: 'Hedgehog 1',
    text: 'Hedgehogs are primarily nocturnal, though some species can also be active during the day',
    link: 'https://en.wikipedia.org/wiki/Hedgehog',
  },
  {
    id: 15,
    type: 'hog',
    checked: false,
    img: [`${image15}`],
    name: 'Hedgehog 2',
    text: 'Hedgehogs are primarily nocturnal, though some species can also be active during the day',
    link: 'https://en.wikipedia.org/wiki/Hedgehog',
  },
];
