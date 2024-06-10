import React, {useCallback, useMemo, useState} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useFetchCourses, {CourseType} from './hooks/useFetchCourses';
import CourseList from './components/courseList/CourseList';
import TagFilter from './components/tagFilter/TagFilter';
import styles from './App.module.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
    const { data = [], isLoading, error } = useFetchCourses();

    const [selectedTag, setSelectedTag] = useState<string>('Все темы');

    const filteredCourses = useMemo(() => {
        if (selectedTag === 'Все темы') return data;
        return data.filter(course => course.tags.includes(selectedTag));
    }, [data, selectedTag]);

    const tags = useMemo(() => {
        const allTags = Array.from(new Set(data.flatMap((course: CourseType) => course.tags)));
        return ['Все темы', ...allTags];
    }, [data]);

    const handleTagToggle = useCallback((tag: string) => {
        setSelectedTag(tag);
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

  return (
      <div className={styles.app}>
        <TagFilter tags={tags} selectedTag={selectedTag} onTagSelect={handleTagToggle} />
        <CourseList courses={filteredCourses} />
      </div>
  );
};

const RootApp: React.FC = () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
);

export default RootApp;
