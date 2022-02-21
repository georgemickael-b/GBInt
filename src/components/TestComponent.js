import useTodos from '../hooks/useTodos';
import Todos from './Todos';

const TestComponent = () => {
  const { data: todosData, isLoading } = useTodos();
  return (
    <>{isLoading ? <>Loading...</> : <Todos todos={todosData?.data}></Todos>}</>
  );
};
export default TestComponent;
