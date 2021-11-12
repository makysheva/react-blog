import { createStore } from 'redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, {
  posts: [
    {
      id: 1,
      title: 'Статья первая',
      image:
        'https://images.unsplash.com/photo-1636429970501-433ac2ff2f4a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
      id: 2,
      title: 'Статья вторая',
      image:
        'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    },
  ],
  comments: [],
});

export default store;
