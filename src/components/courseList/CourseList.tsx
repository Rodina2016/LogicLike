import React from 'react';
import styles from './CourseList.module.css';
import {CourseType} from "../../hooks/useFetchCourses";

type PropsType =  {
    courses: CourseType[];
}

const CourseList: React.FC<PropsType> = ({ courses }) => {
    return (
        <div className={styles.courseList}>
            {courses.map(course => (
                <div key={course.id} className={styles.course}>
                    <div style={{backgroundColor:course.bgColor}} className={styles.imgWrap}>
                        <img src={course.image} alt={course.name} className={styles.img}/>
                    </div>
                    <h3 className={styles.heading}>{course.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default CourseList;
