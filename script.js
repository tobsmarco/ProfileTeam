
    const members = [
      { 
        name: "Kaith Marky Duro", 
        role: "Developer", 
        age: "20",
        year: "2nd Year",
        major: "BS Information Technology",
        college: "Bestlink College of the Philippines",
        description: "Passionate developer who loves solving complex problems with code. Always exploring new technologies and frameworks.",
        avatar: "KD",
        email: "kduro@university.edu",
        phone: "+63 917 123 4567",
        website: "kduro.dev"
      },
      { 
        name: "Aaron C. Enguerra", 
        role: "Developer", 
        age: "19",
        year: "2nd Year",
        major: "BS Information Technology",
        college: "Bestlink College of the Philippines",
        description: "Creative designer focused on user experience. Loves transforming ideas into beautiful and functional interfaces.",
        avatar: "AE",
        email: "aenguerra@university.edu",
        phone: "+63 917 234 5678",
        website: "aaron.design"
      },
      { 
        name: "Tobey D. Marco", 
        role: "IT Mastermind", 
        age: "21",
        year: "2nd Year",
        major: "BS Information Technology",
        college: "Bestlink College of the Philippines",
        description: "Natural leader with strong organizational skills. Ensures smooth team coordination and project delivery.",
        avatar: "TM",
        email: "tobsmarco@gmail.com",
        phone: "N/A",
        website: "N/A"
      },
      { 
        name: "Emmanuel Robert Tenorio", 
        role: "Developer", 
        age: "19",
        year: "2nd Year",
        major: "BS Information Management",
        college: "Bestlink College of the Philippines",
        description: "Passionate about creating games and interactive experiences. Skilled in game design and development.",
        avatar: "ET",
        email: "emmanuelroberttenorio.gmail.com",
        phone: "+63 935 592 6809",
        website: "emmanuel.tenorio"
      },
      { 
        name: "Eugene Ombrog", 
        role: "Developer", 
        age: "22",
        year: "2nd Year",
        major: "BS Information Technology",
        college: "Bestlink College of the Philippines",
        description: "Technical expert in system management and infrastructure. Ensures all systems run smoothly and securely.",
        avatar: "EO",
        email: "ombrogeugene@gmail.com",
        phone: "+63 917 567 8901",
        website: "eugene-sys.net"
      }
    ];

    let currentIndex = 0; 
    let isDashboardActive = false;
    let isTeamListOpen = true;
    let isDashboardListOpen = false;

    

    function toggleTeamList() {
      const list = document.getElementById('member-list');
      const chevron = document.getElementById('team-chevron');
      isTeamListOpen = !isTeamListOpen;

      if (isTeamListOpen) {
        list.classList.remove('collapsed');
        chevron.classList.remove('collapsed');
      } else {
        list.classList.add('collapsed');
        chevron.classList.add('collapsed');
      }
    }

    function toggleDashboard() {
      const list = document.getElementById('dashboard-list');
      const chevron = document.getElementById('dashboard-chevron');
      isDashboardListOpen = !isDashboardListOpen;

      if (isDashboardListOpen) {
        list.classList.remove('collapsed');
        chevron.classList.remove('collapsed'); // In this context, NOT collapsed means pointing UP usually, but here collapsed is -90deg (right)
    
      } else {
        list.classList.add('collapsed');
        chevron.classList.add('collapsed');
      }

      
      showDashboard();
    }



    function showDashboard() {
      isDashboardActive = true;
      currentIndex = -1; 
      renderUI();
    }

    function selectMember(index) {
      isDashboardActive = false;
      currentIndex = index;
      renderUI();
    }


    function renderUI() {
      const mainContent = document.getElementById('main-content');
      const dashboardHeader = document.getElementById('dashboard-header');
      
      
      if (isDashboardActive) {
        mainContent.classList.add('dashboard-mode');
        dashboardHeader.classList.add('active-link');
        renderSidebar(-1);
      } else {
        mainContent.classList.remove('dashboard-mode');
        dashboardHeader.classList.remove('active-link');
        renderSidebar(currentIndex);
        renderProfile(currentIndex);
      }
    }

    function renderSidebar(activeIndex) {
      const listContainer = document.getElementById('member-list');
      listContainer.innerHTML = members.map((m, index) => `
        <div class="sub-item ${index === activeIndex ? 'active' : ''}" onclick="selectMember(${index})">
          <span class="member-name">${m.name}</span>
          
        </div>
      `).join('');
    }

    function renderProfile(index) {
      if (index < 0 || index >= members.length) return;
      
      const member = members[index];
      const container = document.getElementById('profile-container');
      
      container.innerHTML = `
        <div class="card-body">
          <div class="profile-header">
            <div class="avatar-circle">${member.avatar}</div>
            <div class="profile-header-info">
              <h1>${member.name}</h1>
              <span class="role-badge">${member.role}</span>
            </div>
          </div>

          <div class="info-section-title">Academic Details</div>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">College</span>
              <span class="info-value">${member.college}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Course</span>
              <span class="info-value">${member.major}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Year Level</span>
              <span class="info-value">${member.year}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Age</span>
              <span class="info-value">${member.age} Years Old</span>
            </div>
          </div>

          <div class="info-section-title">Contact Information</div>
          <div class="contact-grid">
            <div class="contact-item">
              <i class="fa-regular fa-envelope contact-icon"></i>
              <span class="info-label">Email</span>
              <span class="contact-value">${member.email}</span>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-phone contact-icon"></i>
              <span class="info-label">Phone</span>
              <span class="contact-value">${member.phone}</span>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-globe contact-icon"></i>
              <span class="info-label">Website</span>
              <span class="contact-value">${member.website}</span>
            </div>
          </div>

          <div class="info-section-title">About</div>
          <div class="description-section">
            ${member.description}
          </div>
        </div>
      `;
    }

    renderUI();






