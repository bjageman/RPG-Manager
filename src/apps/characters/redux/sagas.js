import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, deleteDataApi, verifyData } from 'redux/api'

export function* getCharacters(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/characters"
      
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.charactersSuccess({ entries: response.data }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}

export function* createCharacter(action) {
    try{
      let payload = action.payload
      let data = {"name": payload.name, "author_id": payload.author_id }
      let url = 'campaign/' + payload.campaign_id + "/characters"
      if ( payload.character_id != null ){
          url = url + "/" + payload.character_id
      }
      const response = yield call(postDataApi, url, data, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getCharacters({id: payload.campaign_id}))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}

export function* deleteCharacter(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/characters/" + payload.character_id
      
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          yield put(actions.getCharacters({id: payload.campaign_id}))
          yield put(actions.success({ "message": response.data.message }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}
