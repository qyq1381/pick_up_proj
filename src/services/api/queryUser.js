import api from '../Api.js'

export default {
	queryUserWithoutFilter: function(){
		return api().get('/query/userwithoutfilter');
	}
}