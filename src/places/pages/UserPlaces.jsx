import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire States Building',
    description: 'One of the mos famous sky scrapes in the world!',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.748405,
      lan: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Eifel Tower',
    description: 'One of the mos famous sky scrapes in the world!',
    imageURL:
      'https://s1.static.brasilescola.uol.com.br/be/2023/03/torre-eiffel.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.748405,
      lan: -73.9878584,
    },
    creator: 'u2',
  },
];

function UserPlaces(props) {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
