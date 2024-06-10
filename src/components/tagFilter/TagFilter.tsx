import React, {memo} from 'react';
import styles from './TagFilter.module.css';

interface TagFilterProps {
    tags: string[];
    selectedTag: string;
    onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTag, onTagSelect }) => {
    return (
        <div className={styles.tagFilter}>
            <div className={styles.tagWrapper}>
                {tags.map(tag => (
                    <button
                        key={tag}
                        className={`${styles.tagBtn} ${tag === selectedTag ? styles.active : ''}`}
                        onClick={() => onTagSelect(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default memo(TagFilter);
