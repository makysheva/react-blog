import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Posts from './components/Posts/';
import Comments from './components/Comments/';
import { Grid, Paper } from '@mui/material';

const appReducer = (state, action) => {
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state, action.payload],
    };
  }

  if (action.type === 'REMOVE_POST') {
    return {
      ...state,
      posts: state.posts.filter((obj) => obj.id !== action.payload.id),
    };
  }
};

function App() {
  const [state, dispatch] = React.useReducer(appReducer, {
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

  const addPost = () => {
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: 3,
        title: 'Третья статья',
        image:
          'https://images.unsplash.com/photo-1636483534930-eb2bad7bff2d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        text: 'with over 6,000 species, Lizards are a widespread group of squamate reptiles,',
      },
    });
  };

  const removePost = (id) => {
    if (window.confirm('Вы уверенны, что хотите удалить статью?'))
      return dispatch({
        id: id,
      });
  };

  return (
    <div className={styles.App}>
      <Header onAddPost={addPost} />
      <Grid container spacing={2} className={styles.wrapper}>
        <Grid item xs={7}>
          <Paper>
            {state.posts.map((obj) => {
              return <Posts key={obj.id} {...obj} onRemove={removePost} />;
            })}
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            <Comments />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
