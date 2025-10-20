// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });
    }

    // Course Filtering and Search
    const coursesData = [
        {
            id: 1,
            title: "Web Development Masterclass",
            description: "Learn modern web development from scratch with HTML, CSS, JavaScript, and React",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
            instructor: "Sarah Johnson",
            rating: 4.8,
            students: 12453,
            duration: "40 hours",
            price: "$79.99",
            category: "Development",
            level: "Beginner"
        },
        {
            id: 2,
            title: "Data Science & Machine Learning",
            description: "Master Python, statistics, and ML algorithms to become a data scientist",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            instructor: "Dr. Michael Chen",
            rating: 4.9,
            students: 8234,
            duration: "60 hours",
            price: "$99.99",
            category: "Data Science",
            level: "Intermediate"
        },
        {
            id: 3,
            title: "Digital Marketing Complete Course",
            description: "Learn SEO, social media marketing, content strategy, and analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            instructor: "Emily Roberts",
            rating: 4.7,
            students: 9876,
            duration: "35 hours",
            price: "$69.99",
            category: "Marketing",
            level: "Beginner"
        },
        {
            id: 4,
            title: "UI/UX Design Fundamentals",
            description: "Create beautiful and user-friendly interfaces with Figma and design principles",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
            instructor: "James Wilson",
            rating: 4.8,
            students: 6543,
            duration: "30 hours",
            price: "$74.99",
            category: "Design",
            level: "Beginner"
        },
        {
            id: 5,
            title: "Advanced Python Programming",
            description: "Deep dive into Python with advanced concepts, decorators, generators, and more",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
            instructor: "Alex Kumar",
            rating: 4.9,
            students: 5432,
            duration: "45 hours",
            price: "$89.99",
            category: "Development",
            level: "Advanced"
        },
        {
            id: 6,
            title: "Business Strategy & Management",
            description: "Learn strategic thinking, leadership, and business management fundamentals",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
            instructor: "Rachel Martinez",
            rating: 4.6,
            students: 7654,
            duration: "25 hours",
            price: "$59.99",
            category: "Business",
            level: "Intermediate"
        },
        {
            id: 7,
            title: "Mobile App Development with React Native",
            description: "Build cross-platform mobile apps for iOS and Android using React Native",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
            instructor: "Tom Anderson",
            rating: 4.7,
            students: 4321,
            duration: "50 hours",
            price: "$94.99",
            category: "Development",
            level: "Intermediate"
        },
        {
            id: 8,
            title: "Graphic Design Essentials",
            description: "Master Adobe Creative Suite and create stunning visual designs",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
            instructor: "Lisa Chen",
            rating: 4.8,
            students: 8765,
            duration: "38 hours",
            price: "$79.99",
            category: "Design",
            level: "Beginner"
        }
    ];

    // Initialize courses page if we're on it
    const coursesGrid = document.getElementById('coursesGrid');
    if (coursesGrid) {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const levelFilter = document.getElementById('levelFilter');
        const filterResults = document.getElementById('filterResults');
        const noCourses = document.getElementById('noCourses');

        function renderCourses(courses) {
            if (courses.length === 0) {
                coursesGrid.style.display = 'none';
                noCourses.style.display = 'block';
                filterResults.textContent = 'Showing 0 of ' + coursesData.length + ' courses';
            } else {
                coursesGrid.style.display = 'grid';
                noCourses.style.display = 'none';
                filterResults.textContent = 'Showing ' + courses.length + ' of ' + coursesData.length + ' courses';
                
                coursesGrid.innerHTML = courses.map(course => `
                    <div class="card card-hover" style="display: flex; flex-direction: column;">
                        <div class="card-image">
                            <img src="${course.image}" alt="${course.title}">
                            <span class="badge-absolute">${course.category}</span>
                            <span class="badge-secondary badge-absolute" style="left: 0.75rem; right: auto;">${course.level}</span>
                        </div>
                        <div class="card-header" style="flex: 1;">
                            <h3 class="card-title">${course.title}</h3>
                            <p class="card-description">${course.description}</p>
                        </div>
                        <div class="card-content">
                            <p class="instructor-name">${course.instructor}</p>
                            <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.75rem;">
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    ${course.duration}
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.25rem;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                    ${course.students.toLocaleString()}
                                </div>
                            </div>
                            <div class="course-meta" style="padding-top: 0.5rem;">
                                <div class="rating">
                                    <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <span class="rating-value">${course.rating}</span>
                                </div>
                                <span class="price">${course.price}</span>
                            </div>
                            <button class="btn btn-primary btn-full" style="margin-top: 0.75rem;">Enroll Now</button>
                        </div>
                    </div>
                `).join('');
            }
        }

        function filterCourses() {
            const searchQuery = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const selectedLevel = levelFilter.value;

            const filtered = coursesData.filter(course => {
                const matchesSearch = course.title.toLowerCase().includes(searchQuery) ||
                                     course.description.toLowerCase().includes(searchQuery);
                const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
                const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
                
                return matchesSearch && matchesCategory && matchesLevel;
            });

            renderCourses(filtered);
        }

        // Initial render
        renderCourses(coursesData);

        // Event listeners
        searchInput.addEventListener('input', filterCourses);
        categoryFilter.addEventListener('change', filterCourses);
        levelFilter.addEventListener('change', filterCourses);
    }

    // Tab functionality for dashboard
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked trigger and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Course overlay hover effect
    const courseCards = document.querySelectorAll('.card-hover');
    courseCards.forEach(card => {
        const overlay = card.querySelector('.course-overlay');
        if (overlay) {
            card.addEventListener('mouseenter', function() {
                overlay.style.opacity = '1';
            });
            card.addEventListener('mouseleave', function() {
                overlay.style.opacity = '0';
            });
        }
    });
});
