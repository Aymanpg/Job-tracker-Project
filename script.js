let jobs = [
    {
        id: 1,
        company: 'Mobile First Corp',
        position: 'React Native Developer',
        location: 'Remote',
        type: 'Full time',
        salary: '$130,000 - $175,000',
        description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
        status: 'not_applied'
    },
    {
        id: 2,
        company: 'WebFlow Agency',
        position: 'Web Designer & Developer',
        location: 'Los Angeles, CA',
        type: 'Part time',
        salary: '$80,000 - $120,000',
        description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
        status: 'not_applied'
    },
    {
        id: 3,
        company: 'DataViz Solutions',
        position: 'Data Visualization Specialist',
        location: 'Boston, MA',
        type: 'Full time',
        salary: '$125,000 - $185,000',
        description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
        status: 'not_applied'
    },
    {
        id: 4,
        company: 'Tech Innovators',
        position: 'Software Engineer',
        location: 'San Francisco, CA',
        type: 'Full time',
        salary: '$150,000 - $200,000',
        description: 'Develop scalable web applications using modern technologies. Collaborate with cross-functional teams to deliver high-quality software.',
        status: 'not_applied'
    },
    {
        id: 5,
        company: 'Cloud Services Inc',
        position: 'DevOps Engineer',
        location: 'Seattle, WA',
        type: 'Full time',
        salary: '$140,000 - $180,000',
        description: 'Manage cloud infrastructure and automate deployment processes. Ensure system reliability and performance optimization.',
        status: 'not_applied'
    },
    {
        id: 6,
        company: 'AI Labs',
        position: 'Machine Learning Engineer',
        location: 'New York, NY',
        type: 'Full time',
        salary: '$160,000 - $210,000',
        description: 'Design and implement machine learning models for various applications. Work with large datasets to train and evaluate algorithms.',
        status: 'not_applied'
    },
    {
        id: 7,
        company: 'FinTech Startup',
        position: 'Backend Developer',
        location: 'Chicago, IL',
        type: 'Full time',
        salary: '$120,000 - $160,000',
        description: 'Build robust backend systems for financial services. Focus on security, scalability, and integration with frontend components.',
        status: 'not_applied'
    },
    {
        id: 8,
        company: 'Game Dev Co',
        position: 'Game Designer',
        location: 'Austin, TX',
        type: 'Full time',
        salary: '$100,000 - $140,000',
        description: 'Design engaging game mechanics and levels. Collaborate with artists and programmers to bring game concepts to life.',
        status: 'not_applied'
    }
];


let currentTab = 'all';

function getStatusClass(status) {
    if (status === 'not_applied') return 'bg-blue-100 text-blue-800';
    if (status === 'interview') return 'bg-green-100 text-green-800';
    if (status === 'rejected') return 'bg-red-100 text-red-800';
}

function updateDashboard() {
    const total = jobs.length;
    const interview = jobs.filter(j => j.status === 'interview').length;
    const rejected = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('total-count').textContent = total;
    document.getElementById('interview-count').textContent = interview;
    document.getElementById('rejected-count').textContent = rejected;
}

function updateTabStyles() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        if (btn.dataset.tab === currentTab) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-white', 'border', 'border-gray-300');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-white', 'border', 'border-gray-300');
        }
    });
}

function renderJobs() {
    const container = document.getElementById('jobs-container');
    container.innerHTML = '';

    const filters = {
        all: () => true,
        interview: j => j.status === 'interview',
        rejected: j => j.status === 'rejected'
    };

    const filtered = jobs.filter(filters[currentTab]);
    const countText = `${filtered.length} job${filtered.length === 1 ? '' : 's'}`;
    document.getElementById('jobs-count').textContent = countText;

if (filtered.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('text-center', 'py-20', 'border-2', 'border-dotted', 'border-blue-500', 'rounded', 'bg-white');
        emptyDiv.innerHTML = `
            <img src="Image/jobs.png" alt="No jobs" class="mx-auto h-12 w-12">
            <h3 class="mt-2 text-lg font-medium text-gray-900">No jobs available</h3>
            <p class="mt-1 text-sm text-gray-500">Check back soon for new job opportunities</p>
        `;
        container.appendChild(emptyDiv);
    } else {
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-semibold">${job.company}</h3>
                        <p class="text-sm text-gray-600">${job.position}</p>
                        <p class="text-sm text-gray-500">${job.location} · ${job.type} · ${job.salary}</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600 delete-btn" data-id="${job.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="mt-2">
                    <span class="px-2 py-1 rounded text-sm ${getStatusClass(job.status)}">${job.status.toUpperCase().replace('_', ' ')}</span>
                </div>
                <p class="mt-2 text-sm text-gray-600">${job.description}</p>
                <div class="mt-4 flex space-x-2">
                    <button class="interview-btn px-4 py-2 rounded text-white ${job.status === 'interview' ? 'bg-green-700 font-white' : 'bg-white border border-green-500 text-green-600'}" data-id="${job.id}">INTERVIEW</button>
                    <button class="rejected-btn px-4 py-2 rounded text-white ${job.status === 'rejected' ? 'bg-red-700 font-white' : 'bg-white border border-red-500 text-red-600'}" data-id="${job.id}">REJECTED</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Add event listeners for new buttons
    // ==================== FIXED EVENT LISTENERS ====================
    document.querySelectorAll('.interview-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.currentTarget.dataset.id);
            const job = jobs.find(j => j.id === id);
            if (job && job.status !== 'interview') {
                job.status = 'interview';
                renderJobs();
                updateDashboard();
            }
        });
    });

    document.querySelectorAll('.rejected-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.currentTarget.dataset.id);
            const job = jobs.find(j => j.id === id);
            if (job && job.status !== 'rejected') {
                job.status = 'rejected';
                renderJobs();
                updateDashboard();
            }
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.currentTarget.dataset.id);   // ← FIXED HERE
            jobs = jobs.filter(j => j.id !== id);
            renderJobs();
            updateDashboard();
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            currentTab = e.target.dataset.tab;
            updateTabStyles();
            renderJobs();
        });
    });

    updateDashboard();
    renderJobs();
});