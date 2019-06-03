import axios from 'axios';

export const FETCH_AMP_STARTED = 'FETCH_AMP_STARTED';
export const FETCH_AMP_SUCCESS = 'FETCH_AMP_SUCCESS';
export const FETCH_AMP_FAILURE = 'FETCH_AMP_FAILURE';


export const fetchAmplitude = ({ from, to }) => {
  return dispatch => {
    dispatch(fetchAmplitudeStarted(from, to)); // antes de fazer o get, coloca o loading a true
    axios
      .get(`http://localhost:9898/houseMonitoring/highestAmplitude?initialDate=`+from+`&finalDate=`+to, {
      })

      .then(res => {
        dispatch(fetchAmplitudeSuccess(res.data)); // chegaram os resultados (dados) , loading fica a falso
      })
      .catch(err => {
        dispatch(fetchAmplitudeFailure(err.message));
      });

  };
}

export function fetchAmplitudeStarted (from, to) {
  return {
    type: FETCH_AMP_STARTED,
    payload: {
      from: from,
      to: to//passa o array com os dados
    }
  }
}

export function fetchAmplitudeSuccess (data) { // cria uma açao
  return {
    type: FETCH_AMP_SUCCESS,
    payload: {
      amplitude: [...data] //passa o array com os dados
    }
  }
}

export function fetchAmplitudeFailure (message) {
return {
  type: FETCH_AMP_FAILURE,
  payload: {
    error: message
  }
}
}



