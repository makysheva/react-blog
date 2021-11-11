import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Posts.module.scss';

const Post = ({ id, title, image, text, onRemove }) => {
  return (
    <Card fullWidth className={styles.card} id={id}>
      <CardMedia component="img" height="140" image={image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Читать</Button>
        <Button size="small" color="error" onClick={() => onRemove(id)}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
