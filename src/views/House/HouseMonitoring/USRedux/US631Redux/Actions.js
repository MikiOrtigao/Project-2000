import axios from 'axios';

export const FETCH_HOT_STARTED = 'FETCH_HOT_STARTED';
export const FETCH_HOT_SUCCESS = 'FETCH_HOT_SUCCESS';
export const FETCH_HOT_FAILURE = 'FETCH_HOT_FAILURE';


export const fetchHottestDay = ({ from, to }) => {
  return dispatch => {
    dispatch(fetchHottestDayStarted(from, to)); // antes de fazer o get, coloca o loading a true
    axios
      .get(`http://localhost:9898/houseMonitoring/hottestDay?initialDate=`+from+`&finalDate=`+to, {
      })
      .then(res => {
        dispatch(fetchHottestDaySuccess(res.data)); // chegaram os resultados (dados) , loading fica a falso
      })
      .catch(err => {
        dispatch(fetchHottestDayFailure(err.message));
      });

  };
}

export function fetchHottestDayStarted (from, to) {
  return {
    type: FETCH_HOT_STARTED,
    payload: {
      from: from,
      to: to//passa o array com os dados
    }
  }
}

export function fetchHottestDaySuccess (data) { // cria uma açao
  return {
    type: FETCH_HOT_SUCCESS,
    payload: {
      hottestDay: data //passa o array com os dados
    }
  }
}

export function fetchHottestDayFailure (message) {
return {
  type: FETCH_HOT_FAILURE,
  payload: {
    error: message
  }
}
}



