import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import Header from './components/Header';
import Posts from './components/Posts/';
import Comments from './components/Comments/';
import { Grid, Paper } from '@mui/material';

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
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
            {posts.map((obj) => {
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
