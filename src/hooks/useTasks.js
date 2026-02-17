import { useState, useEffect } from 'react';
import { fetchTodos } from '../services/api';
import { transformApiTasks } from '../utils/transformTasks';
import useStore from '../store/useStore';

export const useTasks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setTasks } = useStore();

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const apiTasks = await fetchTodos();
        const transformedTasks = transformApiTasks(apiTasks);
        setTasks(transformedTasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [setTasks]);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const apiTasks = await fetchTodos();
      const transformedTasks = transformApiTasks(apiTasks);
      setTasks(transformedTasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, refetch };
};
