import axios from 'axios'

const baseURL = "http:localhost:3001/persons"

const update = (id, newPerson) => {
	const request = axios.put(`${baseURL}/${id}`, newPerson)

	// it returns the new updated resource
	return request.then((response) => response.data)
}

export default {update}