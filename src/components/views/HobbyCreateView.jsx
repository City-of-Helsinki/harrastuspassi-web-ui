import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import HobbyForm from '../blocks/HobbyForm';
import ActionCreators from '../../actions';

const HobbyCreateView = ({ history }) => {
  const dispatch = useDispatch();
  const submitHandler = event => {
    event.preventDefault();
    console.log('Submit!', event.target);
    const hobbyData = {
      name: event.target.name.value,
      description: event.target.description.value,
      categories: event.target.category.value.split(',')
    };
    dispatch(ActionCreators.createHobby(hobbyData));
    history.push('/');
  };

  useEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchCategories());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Add new Hobby</Typography>
      <HobbyForm cancelUrl="/" submitHandler={submitHandler} />
    </Container>
  );
};

export default withRouter(HobbyCreateView);
