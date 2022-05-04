import {
  getDatabase, ref, child, get, set, push,
} from 'firebase/database';

export const getObj = (path) => new Promise((resolve, reject) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, path)).then((snapshot) => {
    if (snapshot.exists()) {
      resolve(snapshot.val());
    } else {
      reject('No data available!');
    }
  }).catch((error) => {
    reject(error);
  });
});

export const createNUpdateObj = (path, data) => new Promise((resolve, reject) => {
  const db = getDatabase();
  try {
    set(ref(db, path), data);
    resolve('Data updated successfully!');
  } catch (e) {
    reject(e);
  }
});

export const pushObj = (path, data) => new Promise((resolve, reject) => {
  const db = getDatabase();
  try {
    push(ref(db, path), data);
    resolve(data);
  } catch (e) {
    reject(e);
  }
});

export default getObj;
