export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to db
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'temp',
      authorLastName: 'temp last',
      authorID: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({type: 'CREATE-PROJECT_ERROR', err});
    })
  }
};