import { useRef, useState, useEffect } from 'react';
import { FilterContainer, FilterButton, FilterWrapper, ScrollButton } from './styles';
import { Filter } from '../../types';

interface FilterBarProps {
    filters: Filter[];
    selectedFilter: string;
    onFilterSelect: (id: string) => void;
    style?:Object;
}

export const FilterBar = ({
    filters,
    selectedFilter,
    onFilterSelect,
    style
}: FilterBarProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScrollPosition = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            containerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScrollPosition, 300);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    // Touch swipe detection
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            touchEndX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            if (touchStartX - touchEndX > 50) {
                scroll('right');
            } else if (touchEndX - touchStartX > 50) {
                scroll('left');
            }
        };

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    // Keyboard navigation support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (containerRef.current) {
                if (e.key === 'ArrowLeft') {
                    scroll('left');
                } else if (e.key === 'ArrowRight') {
                    scroll('right');
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <FilterWrapper style ={style}>
            {showLeftArrow && (
                <ScrollButton $direction="left" onClick={() => scroll('left')}>
                    &lt;
                </ScrollButton>
            )}

            <FilterContainer ref={containerRef}>
                {filters.map((filter) => (
                    <FilterButton
                        key={filter.id}
                        $active={filter.id === selectedFilter}
                        onClick={() => onFilterSelect(filter.id)}
                    >
                        {filter.label} {filter.count && ( filter.count )}
                    </FilterButton>
                ))}
            </FilterContainer>

            {showRightArrow && (
                <ScrollButton $direction="right" onClick={() => scroll('right')}>
                    &gt;
                </ScrollButton>
            )}
        </FilterWrapper>
    );
};