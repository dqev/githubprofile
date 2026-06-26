// --- Data & Config ---
let projectsData = [];
let fetchedRepos = []; // Store all fetched repositories

// Massive list of skills - exactly identical to the original list
const skillsData = {
    languages: [
        { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black', id: 'js' },
        { name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white', id: 'ts' },
        { name: 'Python', color: '3776AB', logo: 'python', logoColor: 'white', id: 'python' },
        { name: 'Java', color: '007396', logo: 'java', logoColor: 'white', id: 'java' },
        { name: 'C', color: 'A8B9CC', logo: 'c', logoColor: 'white', id: 'c' },
        { name: 'C++', color: '00599C', logo: 'c%2B%2B', logoColor: 'white', id: 'cpp' },
        { name: 'C#', color: '239120', logo: 'c-sharp', logoColor: 'white', id: 'cs' },
        { name: 'Go', color: '00ADD8', logo: 'go', logoColor: 'white', id: 'go' },
        { name: 'Rust', color: '000000', logo: 'rust', logoColor: 'white', id: 'rust' },
        { name: 'PHP', color: '777BB4', logo: 'php', logoColor: 'white', id: 'php' },
        { name: 'Ruby', color: 'CC342D', logo: 'ruby', logoColor: 'white', id: 'ruby' },
        { name: 'Swift', color: 'F05138', logo: 'swift', logoColor: 'white', id: 'swift' },
        { name: 'Kotlin', color: '7F52FF', logo: 'kotlin', logoColor: 'white', id: 'kotlin' },
        { name: 'Dart', color: '0175C2', logo: 'dart', logoColor: 'white', id: 'dart' },
        { name: 'Lua', color: '2C2D72', logo: 'lua', logoColor: 'white', id: 'lua' },
        { name: 'R', color: '276DC3', logo: 'r', logoColor: 'white', id: 'r' },
        { name: 'Perl', color: '39457E', logo: 'perl', logoColor: 'white', id: 'perl' },
        { name: 'Haskell', color: '5D4F85', logo: 'haskell', logoColor: 'white', id: 'haskell' },
        { name: 'Julia', color: '9558B2', logo: 'julia', logoColor: 'white', id: 'julia' },
        { name: 'Scala', color: 'DC322F', logo: 'scala', logoColor: 'white', id: 'scala' },
        { name: 'Elixir', color: '4B275F', logo: 'elixir', logoColor: 'white', id: 'elixir' },
        { name: 'Bash', color: '4EAA25', logo: 'gnu-bash', logoColor: 'white', id: 'bash' }
    ],
    frontend: [
        { name: 'HTML5', color: 'E34F26', logo: 'html5', logoColor: 'white', id: 'html' },
        { name: 'CSS3', color: '1572B6', logo: 'css3', logoColor: 'white', id: 'css' },
        { name: 'React', color: '61DAFB', logo: 'react', logoColor: 'black', id: 'react' },
        { name: 'Vue', color: '4FC08D', logo: 'vuedotjs', logoColor: 'white', id: 'vue' },
        { name: 'Angular', color: 'DD0031', logo: 'angular', logoColor: 'white', id: 'angular' },
        { name: 'Svelte', color: 'FF3E00', logo: 'svelte', logoColor: 'white', id: 'svelte' },
        { name: 'Next.js', color: '000000', logo: 'nextdotjs', logoColor: 'white', id: 'nextjs' },
        { name: 'Nuxt.js', color: '00C58E', logo: 'nuxtdotjs', logoColor: 'white', id: 'nuxtjs' },
        { name: 'Gatsby', color: '663399', logo: 'gatsby', logoColor: 'white', id: 'gatsby' },
        { name: 'Tailwind', color: '38B2AC', logo: 'tailwind-css', logoColor: 'white', id: 'tailwind' },
        { name: 'Bootstrap', color: '7952B3', logo: 'bootstrap', logoColor: 'white', id: 'bootstrap' },
        { name: 'Material UI', color: '0081CB', logo: 'mui', logoColor: 'white', id: 'materialui' },
        { name: 'Sass', color: 'CC6699', logo: 'sass', logoColor: 'white', id: 'sass' },
        { name: 'Flutter', color: '02569B', logo: 'flutter', logoColor: 'white', id: 'flutter' },
        { name: 'React Native', color: '61DAFB', logo: 'react', logoColor: 'black', id: 'react' },
        { name: 'Ionic', color: '3880FF', logo: 'ionic', logoColor: 'white', id: 'ionic' },
        { name: 'Android', color: '3DDC84', logo: 'android', logoColor: 'white', id: 'android' },
        { name: 'Three.js', color: '000000', logo: 'three.js', logoColor: 'white', id: 'threejs' },
        { name: 'Redux', color: '764ABC', logo: 'redux', logoColor: 'white', id: 'redux' },
        { name: 'Webpack', color: '8DD6F9', logo: 'webpack', logoColor: 'black', id: 'webpack' }
    ],
    backend: [
        { name: 'Node.js', color: '339933', logo: 'nodedotjs', logoColor: 'white', id: 'nodejs' },
        { name: 'Express', color: '000000', logo: 'express', logoColor: 'white', id: 'express' },
        { name: 'NestJS', color: 'E0234E', logo: 'nestjs', logoColor: 'white', id: 'nestjs' },
        { name: 'Django', color: '092E20', logo: 'django', logoColor: 'white', id: 'django' },
        { name: 'Flask', color: '000000', logo: 'flask', logoColor: 'white', id: 'flask' },
        { name: 'FastAPI', color: '009688', logo: 'fastapi', logoColor: 'white', id: 'fastapi' },
        { name: 'Spring', color: '6DB33F', logo: 'spring', logoColor: 'white', id: 'spring' },
        { name: 'Laravel', color: 'FF2D20', logo: 'laravel', logoColor: 'white', id: 'laravel' },
        { name: 'Rails', color: 'CC0000', logo: 'rubyonrails', logoColor: 'white', id: 'rails' },
        { name: '.NET', color: '512BD4', logo: 'dotnet', logoColor: 'white', id: 'dotnet' },
        { name: 'GraphQL', color: 'E10098', logo: 'graphql', logoColor: 'white', id: 'graphql' },
        { name: 'MongoDB', color: '47A248', logo: 'mongodb', logoColor: 'white', id: 'mongodb' },
        { name: 'PostgreSQL', color: '4169E1', logo: 'postgresql', logoColor: 'white', id: 'postgres' },
        { name: 'MySQL', color: '4479A1', logo: 'mysql', logoColor: 'white', id: 'mysql' },
        { name: 'Redis', color: 'DC382D', logo: 'redis', logoColor: 'white', id: 'redis' },
        { name: 'Firebase', color: 'FFCA28', logo: 'firebase', logoColor: 'black', id: 'firebase' },
        { name: 'Supabase', color: '3ECF8E', logo: 'supabase', logoColor: 'white', id: 'supabase' },
        { name: 'Cassandra', color: '1287B1', logo: 'apachecassandra', logoColor: 'white', id: 'cassandra' },
        { name: 'SQLite', color: '003B57', logo: 'sqlite', logoColor: 'white', id: 'sqlite' },
        { name: 'Prisma', color: '2D3748', logo: 'prisma', logoColor: 'white', id: 'prisma' }
    ],
    tools: [
        { name: 'Git', color: 'F05032', logo: 'git', logoColor: 'white', id: 'git' },
        { name: 'Docker', color: '2496ED', logo: 'docker', logoColor: 'white', id: 'docker' },
        { name: 'Kubernetes', color: '326CE5', logo: 'kubernetes', logoColor: 'white', id: 'kubernetes' },
        { name: 'AWS', color: '232F3E', logo: 'amazon-aws', logoColor: 'white', id: 'aws' },
        { name: 'Azure', color: '0078D4', logo: 'microsoftazure', logoColor: 'white', id: 'azure' },
        { name: 'GCP', color: '4285F4', logo: 'googlecloud', logoColor: 'white', id: 'gcp' },
        { name: 'Linux', color: 'FCC624', logo: 'linux', logoColor: 'black', id: 'linux' },
        { name: 'Nginx', color: '009639', logo: 'nginx', logoColor: 'white', id: 'nginx' },
        { name: 'Jenkins', color: 'D24939', logo: 'jenkins', logoColor: 'white', id: 'jenkins' },
        { name: 'GitHub Actions', color: '2088FF', logo: 'githubactions', logoColor: 'white', id: 'githubactions' },
        { name: 'Terraform', color: '7B42BC', logo: 'terraform', logoColor: 'white', id: 'terraform' },
        { name: 'Ansible', color: 'EE0000', logo: 'ansible', logoColor: 'white', id: 'ansible' },
        { name: 'Figma', color: 'F24E1E', logo: 'figma', logoColor: 'white', id: 'figma' },
        { name: 'Postman', color: 'FF6C37', logo: 'postman', logoColor: 'white', id: 'postman' },
        { name: 'Selenium', color: '43B02A', logo: 'selenium', logoColor: 'white', id: 'selenium' },
        { name: 'Jest', color: 'C21325', logo: 'jest', logoColor: 'white', id: 'jest' },
        { name: 'PyTorch', color: 'EE4C2C', logo: 'pytorch', logoColor: 'white', id: 'pytorch' },
        { name: 'TensorFlow', color: 'FF6F00', logo: 'tensorflow', logoColor: 'white', id: 'tensorflow' },
        { name: 'OpenCV', color: '5C3EE8', logo: 'opencv', logoColor: 'white', id: 'opencv' },
        { name: 'Unity', color: '000000', logo: 'unity', logoColor: 'white', id: 'unity' },
        { name: 'Unreal', color: '0E1128', logo: 'unrealengine', logoColor: 'white', id: 'unreal' },
        { name: 'Blender', color: 'E87D0D', logo: 'blender', logoColor: 'white', id: 'blender' },
        { name: 'Arduino', color: '00979D', logo: 'arduino', logoColor: 'white', id: 'arduino' },
        { name: 'Vim', color: '019733', logo: 'vim', logoColor: 'white', id: 'vim' },
    ]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSkillOptions();
    addProjectInput();
    attachListeners();
    initMobileSidebar();
    generateMarkdown();
});

// --- Theme Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// --- Mobile Sidebar Controls ---
function initMobileSidebar() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    const toggle = () => {
        const isActive = sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active', isActive);
        overlay.classList.toggle('active', isActive);
    };

    toggleBtn.addEventListener('click', toggle);
    overlay.addEventListener('click', toggle);
}

// --- Tech Stack Logic ---
function toggleSkillMode() {
    const mode = document.getElementById('skill-display-mode').value;
    const container = document.getElementById('badge-style-container');
    if (mode === 'icons') {
        container.classList.add('hidden');
    } else {
        container.classList.remove('hidden');
    }
    renderSkillOptions();
    generateMarkdown();
}

function filterSkills() {
    const query = document.getElementById('skill-search').value.toLowerCase();
    document.querySelectorAll('.skill-chip-icon, .skill-chip-badge').forEach(el => {
        const name = el.dataset.search.toLowerCase();
        el.style.display = name.includes(query) ? 'inline-flex' : 'none';
    });
}

function renderSkillOptions() {
    const mode = document.getElementById('skill-display-mode').value;
    const badgeStyle = document.getElementById('badge-style').value;
    
    const createItem = (skill) => {
        if (mode === 'icons') {
            return `
            <label class="skill-chip-icon" data-search="${skill.name}" title="${skill.name}">
                <input type="checkbox" class="skill-checkbox" data-id="${skill.id}" data-mode="icon" onchange="handleSkillChange(this)">
                <img src="https://skillicons.dev/icons?i=${skill.id}" alt="${skill.name}">
            </label>`;
        } else {
            return `
            <label class="skill-chip-badge" data-search="${skill.name}">
                <input type="checkbox" class="skill-checkbox" 
                    data-name="${skill.name}" 
                    data-color="${skill.color}" 
                    data-logo="${skill.logo}" 
                    data-logocolor="${skill.logoColor}"
                    data-mode="badge"
                    onchange="handleSkillChange(this)">
                <img src="https://img.shields.io/badge/${skill.name}-${skill.color}?style=${badgeStyle}&logo=${skill.logo}&logoColor=${skill.logoColor}" class="badge-img" alt="${skill.name}">
                <span class="badge-indicator"></span>
            </label>`;
        }
    };

    document.getElementById('skills-languages').innerHTML = skillsData.languages.map(createItem).join('');
    document.getElementById('skills-frontend').innerHTML = skillsData.frontend.map(createItem).join('');
    document.getElementById('skills-backend').innerHTML = skillsData.backend.map(createItem).join('');
    document.getElementById('skills-tools').innerHTML = skillsData.tools.map(createItem).join('');
}

function handleSkillChange(checkbox) {
    const parent = checkbox.closest('.skill-chip-icon, .skill-chip-badge');
    if (checkbox.checked) {
        parent.classList.add('checked');
    } else {
        parent.classList.remove('checked');
    }
    generateMarkdown();
}

function updateAllBadges() {
    const style = document.getElementById('badge-style').value;
    const chips = document.querySelectorAll('.skill-chip-badge');
    
    chips.forEach(chip => {
        const checkbox = chip.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.dataset.mode === 'badge') {
            const name = checkbox.dataset.name;
            const color = checkbox.dataset.color;
            const logo = checkbox.dataset.logo;
            const logoColor = checkbox.dataset.logocolor;
            const img = chip.querySelector('img');
            if (img) {
                img.src = `https://img.shields.io/badge/${name}-${color}?style=${style}&logo=${logo}&logoColor=${logoColor}`;
            }
        }
    });
    generateMarkdown();
}

// --- Projects Logic ---
function addProjectInput(data = { name: '', desc: '', stack: '', link: '' }) {
    const id = Date.now() + Math.random();
    projectsData.push({ id, isCustom: true, ...data });
    renderProjectInputs();
}

function removeProject(id) {
    projectsData = projectsData.filter(p => p.id !== id);
    renderProjectInputs();
    generateMarkdown();
}

function updateProject(id, field, value) {
    const project = projectsData.find(p => p.id === id);
    if (project) {
        project[field] = value;
        generateMarkdown();
    }
}

function renderProjectInputs() {
    const container = document.getElementById('projects-list');
    container.innerHTML = '';

    projectsData.forEach((p) => {
        const div = document.createElement('div');
        div.className = "project-card-form";
        div.innerHTML = `
            <button type="button" onclick="removeProject(${p.id})" class="btn-remove-project" aria-label="Remove Project">
                <i class="fas fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="form-group">
                <label>Project Name</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="e.g. Portfolio Builder" value="${p.name}" oninput="updateProject(${p.id}, 'name', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="e.g. A gorgeous profile builder" value="${p.desc}" oninput="updateProject(${p.id}, 'desc', this.value)">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Stack</label>
                    <div class="input-wrapper">
                      <input type="text" placeholder="React, Node..." value="${p.stack}" oninput="updateProject(${p.id}, 'stack', this.value)">
                    </div>
                </div>
                <div class="form-group">
                    <label>URL</label>
                    <div class="input-wrapper">
                      <input type="text" placeholder="https://..." value="${p.link}" oninput="updateProject(${p.id}, 'link', this.value)">
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

async function fetchProjects() {
    const username = document.getElementById('project-username').value.trim();
    if (!username) return alert("Please enter a GitHub username");

    const btn = document.querySelector('button[onclick="fetchProjects()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    try {
        let allRepos = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&page=${page}`);
            if (!response.ok) throw new Error('Error fetching repositories');

            const repos = await response.json();
            if (repos.length === 0) {
                hasMore = false;
            } else {
                allRepos.push(...repos.filter(repo => !repo.fork));
                page++;
                if (allRepos.length >= 200) hasMore = false;
            }
        }

        fetchedRepos = allRepos.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Code',
            html_url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated_at: new Date(repo.updated_at),
            selected: false
        }));

        fetchedRepos.sort((a, b) => {
            if (b.stars !== a.stars) return b.stars - a.stars;
            return b.updated_at - a.updated_at;
        });

        renderRepoSelection();
        if (!document.getElementById('github-username').value) {
            document.getElementById('github-username').value = username;
            syncGithubUsername(username);
        }

    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function renderRepoSelection() {
    const container = document.getElementById('repo-list');
    const selectionDiv = document.getElementById('repo-selection');

    if (fetchedRepos.length === 0) {
        selectionDiv.classList.add('hidden');
        return;
    }

    selectionDiv.classList.remove('hidden');
    container.innerHTML = '';

    fetchedRepos.forEach((repo) => {
        const div = document.createElement('div');
        div.className = "repo-select-row";
        div.innerHTML = `
            <input type="checkbox" id="repo-${repo.id}" onchange="toggleRepoSelection(${repo.id})">
            <div class="repo-select-details">
                <label for="repo-${repo.id}" class="repo-select-name">${repo.name} <span>★ ${repo.stars}</span></label>
                <span class="repo-select-desc">${repo.description}</span>
            </div>
        `;
        container.appendChild(div);
    });

    updateSelectedCount();
}

function toggleRepoSelection(repoId) {
    const repo = fetchedRepos.find(r => r.id === repoId);
    if (repo) {
        repo.selected = !repo.selected;
    }
    updateSelectedCount();
}

function updateSelectedCount() {
    const selectedCount = fetchedRepos.filter(r => r.selected).length;
    document.getElementById('selected-count').textContent = `${selectedCount} selected`;
}

function selectAllRepos() {
    fetchedRepos.forEach(repo => {
        repo.selected = true;
        const checkbox = document.getElementById(`repo-${repo.id}`);
        if (checkbox) checkbox.checked = true;
    });
    updateSelectedCount();
}

function clearAllRepos() {
    fetchedRepos.forEach(repo => {
        repo.selected = false;
        const checkbox = document.getElementById(`repo-${repo.id}`);
        if (checkbox) checkbox.checked = false;
    });
    updateSelectedCount();
}

function addSelectedProjects() {
    const selectedRepos = fetchedRepos.filter(r => r.selected);
    if (selectedRepos.length === 0) {
        alert('Please select at least one repository');
        return;
    }

    projectsData = projectsData.filter(p => p.isCustom);

    selectedRepos.forEach(repo => {
        projectsData.push({
            id: Date.now() + Math.random(),
            name: repo.name,
            desc: repo.description,
            stack: repo.language,
            link: repo.html_url,
            isCustom: false
        });
    });

    renderProjectInputs();
    generateMarkdown();
    document.getElementById('repo-selection').classList.add('hidden');
}

// --- Sync Handlers ---
function syncGithubUsername(value) {
    const socialGithubField = document.getElementById('social-github');
    if (socialGithubField && socialGithubField.value !== value) {
        socialGithubField.value = value;
    }
    updateProfileImage();
}

function syncToMainGithub(value) {
    const mainGithubField = document.getElementById('github-username');
    if (mainGithubField && mainGithubField.value !== value) {
        mainGithubField.value = value;
        updateProfileImage();
    }
}

function updateProfileImage() {
    const username = document.getElementById('github-username').value.trim();
    const previewImg = document.getElementById('preview-avatar');

    if (username) {
        previewImg.src = `https://github.com/${username}.png`;
        previewImg.onerror = () => {
            previewImg.src = 'https://via.placeholder.com/150';
        };
    } else {
        previewImg.src = 'https://via.placeholder.com/150';
    }
    generateMarkdown();
}

// --- Listeners Setup ---
function attachListeners() {
    const formInputs = document.querySelectorAll('#profileForm input, #profileForm textarea, #profileForm select');
    formInputs.forEach(input => {
        input.addEventListener('input', generateMarkdown);
        input.addEventListener('change', generateMarkdown);
    });
}

function getIconUrl(iconName, color) {
    const iconMap = {
        'github': `https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white`,
        'linkedin': `https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white`,
        'twitter': `https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white`,
        'instagram': `https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white`,
        'facebook': `https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white`,
        'discord': `https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white`,
        'medium': `https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white`,
        'dev.to': `https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white`,
        'youtube': `https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white`,
        'twitch': `https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white`,
        'stack-overflow': `https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stackoverflow&logoColor=white`,
        'codepen': `https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white`,
        'dribbble': `https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white`,
        'behance': `https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white`,
        'leetcode': `https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black`,
        'hackerrank': `https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white`,
        'codeforces': `https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white`,
        'topcoder': `https://img.shields.io/badge/TopCoder-29A7DF?style=for-the-badge&logo=topcoder&logoColor=white`,
        'kaggle': `https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white`
    };
    return iconMap[iconName] || `https://img.shields.io/badge/${iconName}-${color}?style=for-the-badge&logo=${iconName}&logoColor=white`;
}

function resetForm() {
    if (confirm("Are you sure you want to reset everything?")) {
        document.getElementById("profileForm").reset();
        document.querySelectorAll('.skill-chip-icon.checked, .skill-chip-badge.checked').forEach(el => el.classList.remove('checked'));
        projectsData = [];
        addProjectInput();
        updateProfileImage();
        generateMarkdown();
    }
}

// --- Core Generator Compiler ---
function generateMarkdown() {
    const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
    };
    const isChecked = (id) => {
        const el = document.getElementById(id);
        return el ? el.checked : false;
    };
    const getSelect = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : '';
    };

    const name = getVal('name') || 'Your Name';
    const subtitle = getVal('subtitle') || 'A passionate developer';
    const about = getVal('about');
    const bannerUrl = getVal('banner-url');

    const working = getVal('working');
    const learning = getVal('learning');
    const collaborating = getVal('collaborating');
    const help = getVal('help');
    const askme = getVal('askme');
    const email = getVal('email');
    const funfact = getVal('funfact');
    const portfolioSite = getVal('portfolio-site');
    const blogSite = getVal('blog-site');

    // Socials mapping
    const githubUsername = getVal('github-username') || getVal('social-github');
    const socialMap = [
        { id: 'github', user: githubUsername, icon: 'github', color: '181717' },
        { id: 'linkedin', user: getVal('social-linkedin'), icon: 'linkedin', color: '0A66C2' },
        { id: 'twitter', user: getVal('social-twitter'), icon: 'twitter', color: '1DA1F2' },
        { id: 'instagram', user: getVal('social-instagram'), icon: 'instagram', color: 'E4405F' },
        { id: 'facebook', user: getVal('social-facebook'), icon: 'facebook', color: '1877F2' },
        { id: 'discord', user: getVal('social-discord'), icon: 'discord', color: '5865F2' },
        { id: 'medium', user: getVal('social-medium'), icon: 'medium', color: '12100E' },
        { id: 'devto', user: getVal('social-devto'), icon: 'dev.to', color: '0A0A0A' },
        { id: 'youtube', user: getVal('social-youtube'), icon: 'youtube', color: 'FF0000' },
        { id: 'twitch', user: getVal('social-twitch'), icon: 'twitch', color: '9146FF' },
        { id: 'stackoverflow', user: getVal('social-stackoverflow'), icon: 'stack-overflow', color: 'FE7A16', urlPrefix: 'https://stackoverflow.com/users/' },
        { id: 'codepen', user: getVal('social-codepen'), icon: 'codepen', color: '000000' },
        { id: 'dribbble', user: getVal('social-dribbble'), icon: 'dribbble', color: 'EA4C89' },
        { id: 'behance', user: getVal('social-behance'), icon: 'behance', color: '1769FF' },
        { id: 'leetcode', user: getVal('social-leetcode'), icon: 'leetcode', color: 'FFA116' },
        { id: 'hackerrank', user: getVal('social-hackerrank'), icon: 'hackerrank', color: '2EC866' },
        { id: 'codeforces', user: getVal('social-codeforces'), icon: 'codeforces', color: '1F8ACB' },
        { id: 'topcoder', user: getVal('social-topcoder'), icon: 'topcoder', color: '292929' },
        { id: 'kaggle', user: getVal('social-kaggle'), icon: 'kaggle', color: '20BEFF' },
    ];

    const badgeStyle = getSelect('badge-style');
    const statsTheme = getSelect('stats-theme');
    const skillMode = getSelect('skill-display-mode');

    // Section Alignments
    const essentialsAlign = getSelect('essentials-align') || 'left';
    const techAlign = getSelect('tech-align') || 'left';
    const socialAlign = getSelect('social-align') || 'left';
    const projectsAlign = getSelect('projects-align') || 'left';
    const sponsorsAlign = getSelect('sponsors-align') || 'left';
    const widgetsAlign = getSelect('widgets-align') || 'left';

    const showAvatar = isChecked('show-avatar');

    let md = "";

    // 1. Profile Essentials
    md += `<div align="${essentialsAlign}">\n\n`;
    md += `# Hi 👋, I'm ${name}\n\n`;
    md += `### ${subtitle}\n\n`;

    if (githubUsername && showAvatar) {
        md += `<img src="https://github.com/${githubUsername}.png" alt="${name}" width="150" height="150" style="border-radius: 50%; border: 4px solid #000000;">\n\n`;
    }

    if (bannerUrl) md += `![Header](${bannerUrl})\n\n`;

    if (working) md += `- 🔭 I'm currently working on **${working}**\n\n`;
    if (learning) md += `- 🌱 I'm currently learning **${learning}**\n\n`;
    if (collaborating) md += `- 👯 I'm looking to collaborate on **${collaborating}**\n\n`;
    if (help) md += `- 🤝 I'm looking for help with **${help}**\n\n`;
    if (askme) md += `- 💬 Ask me about **${askme}**\n\n`;
    if (email) md += `- 📫 How to reach me **${email}**\n\n`;
    if (funfact) md += `- ⚡ Fun fact **${funfact}**\n\n`;
    if (portfolioSite) md += `- 👨‍💻 All of my projects are available at **[${portfolioSite}](${portfolioSite})**\n\n`;
    if (blogSite) md += `- 📝 I regularly write articles on **[${blogSite}](${blogSite})**\n\n`;

    if (about) md += `${about}\n\n`;
    md += `</div>\n\n`;

    // 2. Connect with me
    const activeSocials = socialMap.filter(s => s.user);
    if (activeSocials.length > 0) {
        md += `<h3 align="${socialAlign}">Connect with me:</h3>\n`;
        md += `<p align="${socialAlign}">\n`;
        activeSocials.forEach(s => {
            let url = `https://${s.id}.com/${s.user}`;
            if (s.urlPrefix) url = s.urlPrefix + s.user;
            if (s.id === 'discord') url = `https://discord.gg/${s.user}`;
            if (s.id === 'devto') url = `https://dev.to/${s.user}`;
            if (s.id === 'medium') url = `https://medium.com/@${s.user}`;
            if (s.id === 'leetcode') url = `https://leetcode.com/${s.user}`;
            if (s.id === 'hackerrank') url = `https://www.hackerrank.com/${s.user}`;
            if (s.id === 'codeforces') url = `https://codeforces.com/profile/${s.user}`;
            if (s.id === 'topcoder') url = `https://www.topcoder.com/members/${s.user}`;
            if (s.id === 'kaggle') url = `https://kaggle.com/${s.user}`;

            const iconUrl = getIconUrl(s.icon, s.color);
            md += `<a href="${url}" target="blank"><img align="center" src="${iconUrl}" alt="${s.user}" height="30" /></a>\n`;
        });
        md += `</p>\n\n`;
    }

    // 3. Languages and Tools (Tech Stack)
    const selectedSkills = Array.from(document.querySelectorAll('.skill-checkbox:checked'));
    if (selectedSkills.length > 0) {
        md += `<h3 align="${techAlign}">Languages and Tools:</h3>\n`;
        md += `<p align="${techAlign}"> `;

        if (skillMode === 'icons') {
            const ids = selectedSkills.map(cb => cb.dataset.id).join(',');
            md += `<a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=${ids}" alt="My Skills" /> </a>`;
        } else {
            selectedSkills.forEach(cb => {
                const name = cb.dataset.name;
                const color = cb.dataset.color;
                const logo = cb.dataset.logo;
                const logoColor = cb.dataset.logocolor;
                md += `<img src="https://img.shields.io/badge/${name}-${color}?style=${badgeStyle}&logo=${logo}&logoColor=${logoColor}" alt="${name}" /> `;
            });
        }
        md += `</p>\n\n`;
    }

    // 4. Widgets & Stats
    const githubUser = githubUsername;
    const hasWidgets = (isChecked('addon-visitors') && githubUsername) ||
                       (isChecked('addon-trophy') && githubUsername) ||
                       (isChecked('addon-twitter-badge') && getVal('social-twitter')) ||
                       (githubUser && (isChecked('addon-stats') || isChecked('addon-streak')));

    if (hasWidgets) {
        md += `<div align="${widgetsAlign}">\n\n`;

        if (isChecked('addon-visitors') && githubUsername) {
            md += `<img src="https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=0e75b6&style=flat" alt="${githubUsername}" />\n\n`;
        }

        if (isChecked('addon-trophy') && githubUsername) {
            md += `<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}" alt="${githubUsername}" /></a>\n\n`;
        }

        if (isChecked('addon-twitter-badge') && getVal('social-twitter')) {
            md += `<a href="https://twitter.com/${getVal('social-twitter')}" target="blank"><img src="https://img.shields.io/twitter/follow/${getVal('social-twitter')}?logo=twitter&style=for-the-badge" alt="${getVal('social-twitter')}" /></a>\n\n`;
        }

        if (githubUser) {
            if (isChecked('addon-stats')) {
                md += `<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${githubUser}&show_icons=true&locale=en&layout=compact&theme=${statsTheme}" alt="${githubUser}" />\n`;
                md += `<img src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&locale=en&theme=${statsTheme}" alt="${githubUser}" />\n\n`;
            }
            if (isChecked('addon-streak')) {
                md += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=${statsTheme}" alt="${githubUser}" />\n\n`;
            }
        }

        md += `</div>\n\n`;
    }

    // 5. Projects Table
    const activeProjects = projectsData.filter(p => p.name);
    if (activeProjects.length > 0) {
        md += `<div align="${projectsAlign}">\n\n`;
        md += `### 🚀 Projects\n\n`;
        md += `| Project | Description | Stack | Link |\n`;
        md += `| :--- | :--- | :--- | :--- |\n`;
        activeProjects.forEach(p => {
            const link = p.link ? `[Link](${p.link})` : ``;
            const stack = p.stack ? p.stack : '';
            md += `| **${p.name}** | ${p.desc} | ${stack} | ${link} |\n`;
        });
        md += `\n</div>\n\n`;
    }

    // 6. Support / Sponsorship links
    const coffee = getVal('donate-buymeacoffee');
    const kofi = getVal('donate-kofi');
    const patreon = getVal('donate-patreon');
    const paypal = getVal('donate-paypal');

    if (coffee || kofi || patreon || paypal) {
        md += `\n<h3 align="${sponsorsAlign}">Support:</h3>\n<p align="${sponsorsAlign}">\n`;
        if (coffee) md += `<a href="https://www.buymeacoffee.com/${coffee}" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>\n`;
        if (kofi) md += `<a href="https://ko-fi.com/${kofi}" target="_blank"><img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" alt="Buy Me a Coffee at ko-fi.com" height="36" style="border:0px;height:36px;"></a>\n`;
        if (patreon) md += `<a href="https://www.patreon.com/${patreon}" target="_blank"><img src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" alt="Patreon" /></a>\n`;
        if (paypal) md += `<a href="${paypal.includes('http') ? paypal : `https://paypal.me/${paypal}`}" target="_blank"><img src="https://img.shields.io/badge/PayPal-003087?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" /></a>\n`;
        md += `</p>`;
    }

    // Update UI elements
    document.getElementById('code-output').value = md;
    document.getElementById('preview-content').innerHTML = marked.parse(md);
}

// --- Tab Navigation Switcher ---
function switchTab(tab) {
    const previewBtn = document.getElementById('tab-preview');
    const codeBtn = document.getElementById('tab-code');
    const previewContainer = document.getElementById('preview-container');
    const codeContainer = document.getElementById('code-container');

    if (tab === 'preview') {
        previewBtn.classList.add('active');
        previewBtn.setAttribute('aria-selected', 'true');
        codeBtn.classList.remove('active');
        codeBtn.setAttribute('aria-selected', 'false');

        previewContainer.classList.remove('hidden');
        codeContainer.classList.add('hidden');
    } else {
        codeBtn.classList.add('active');
        codeBtn.setAttribute('aria-selected', 'true');
        previewBtn.classList.remove('active');
        previewBtn.setAttribute('aria-selected', 'false');

        codeContainer.classList.remove('hidden');
        previewContainer.classList.add('hidden');
    }
}

// --- Clipboard & Download Actions ---
function copyToClipboard() {
    const copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then(() => {
        const btn = document.getElementById('btn-copy');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.backgroundColor = 'var(--success-bg)';
        btn.style.color = 'var(--success-text)';
        btn.style.borderColor = 'var(--success-border)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

function downloadMarkdown() {
    const content = document.getElementById("code-output").value;
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
