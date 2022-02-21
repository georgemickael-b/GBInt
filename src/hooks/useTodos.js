import axios from 'axios';
import { useQuery } from 'react-query';
const TODO_API_REPO_KEY = 'todos';

const useTodos = () => {
  return useQuery(TODO_API_REPO_KEY, async () =>
    axios.get('https://jsonplaceholder.typicode.com/todos')
  );
};

export default useTodos;
