import { useQuery } from 'react-query';

export type CourseType =  {
    id: number;
    bgColor: string;
    image: string;
    name: string;
    tags: string[];
}

const fetchCourses = async (): Promise<CourseType[]> => {
    const response = await fetch('https://logiclike.com/docs/courses.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const useFetchCourses = () => {
    return useQuery<CourseType[], Error>('courses', fetchCourses, {refetchOnWindowFocus:false});
};

export default useFetchCourses;
