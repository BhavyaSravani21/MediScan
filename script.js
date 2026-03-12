// Initialization and Role Toggling logic
function pickRole(role, el) {
    // Remove "on" class from all pills
    document.querySelectorAll('.rp').forEach(p => p.classList.remove('on'));
    // Add to selected
    el.classList.add('on');
    
    // Toggle extra fields
    const docFields = document.getElementById('doc-fields');
    const patFields = document.getElementById('pat-fields');
    
    docFields.style.display = (role === 'doctor') ? 'block' : 'none';
    patFields.style.display = (role === 'patient') ? 'block' : 'none';
}

function goLogin() {
    document.getElementById('regPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
}

function goRegister() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('regPage').style.display = 'flex';
}

function doLogin() {
    // Simulate login
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    // Set default dashboard view
    showPage('dashboard');
}

function doRegister() {
    alert("Account created successfully! Please sign in.");
    goLogin();
}

function doLogout() {
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
}

// OCR / Upload Handlers
function handleFile(input) {
    if (input.files && input.files[0]) {
        startOcrSimulation(input.files[0].name);
    }
}

function startOcrSimulation(fileName) {
    const pw = document.getElementById('progWrap');
    const pf = document.getElementById('progFill');
    const res = document.getElementById('resSec');
    
    pw.style.display = 'block';
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += 5;
        pf.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            pw.style.display = 'none';
            res.style.display = 'grid';
            document.getElementById('ocrOutput').innerText = "Extracted data from " + fileName + "...";
        }
    }, 100);
}