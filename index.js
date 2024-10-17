let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
})

shareButton.addEventListener('click', () => {
  const randomLink = `https://example.com/app?id=${Math.floor(Math.random() * 10000)}`;
  alert(`Share this link: ${randomLink}`);
});

// Select the theme switcher button
const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

// Check if the user has a saved preference
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the current theme
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeSwitcher.src = 'moon.png';  // Switch icon to moon in dark mode
} else {
  body.classList.add('light-mode');
  themeSwitcher.src = 'sun.png';  // Switch icon to sun in light mode
}

// Toggle between light and dark modes on button click
themeSwitcher.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeSwitcher.src = './assets/sun.png';  // Switch icon to sun for light mode
    localStorage.setItem('theme', 'light');  // Save user's preference
  } else {

    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeSwitcher.src = './assets/moon.png';  // Switch icon to moon for dark mode
    localStorage.setItem('theme', 'dark');  // Save user's preference
  }

});

const bellIcon = document.getElementById('bellIcon');
const messages = [
  "You have 5 new notifications!",
  "Reminder: Meeting at 3 PM today.",
  "Don't forget to check your email.",
  "A new report is available for review.",
  "Your profile has been updated successfully."
];

bellIcon.addEventListener('click', () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
});

// Logout - Confirmation and Redirect
const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
  alert("you are logging out");
  if (confirmLogout == true) {
    window.location.href = "index.html";  // Redirect to login.html page
  }
});

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
      label: 'Sales Distribution (%)',
      data: [35, 25, 20, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }]
  }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Company A', 'Company B', 'Company C'],
    datasets: [{
      label: 'Market Share (%)',
      data: [50, 30, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }]
  }
});

const scatterCtx = document.getElementById('scatterChart').getContext('2d');
const scatterChart = new Chart(scatterCtx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Revenue vs Ad Spend',
      data: [
        { x: 20000, y: 10000 },
        { x: 30000, y: 15000 },
        { x: 50000, y: 25000 }
      ],
      backgroundColor: '#FF6384',
    }]
  }
});

const radarCtx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ['Quality', 'Service', 'Price', 'Variety', 'Brand'],
    datasets: [{
      label: 'Performance Metrics',
      data: [3, 4, 2, 5, 4],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2
    }]
  }
});

const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
      label: 'Sales by Region (%)',
      data: [25, 35, 20, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }],
    cutout: '100%'
  }
});

const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(bubbleCtx, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Price vs Units Sold',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 30, y: 20, r: 10 },
        { x: 40, y: 40, r: 20 }
      ],
      backgroundColor: '#FF6384',
    }]
  }
});

const horizontalBarCtx = document.getElementById('horizontalBarChart').getContext('2d');
const horizontalBarChart = new Chart(horizontalBarCtx, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      label: 'Sales by Product Category (%)',
      data: [55, 25, 20],
      backgroundColor: '#36A2EB',
    }]
  },
  options: {
    indexAxis: 'y',
  }
});

const mixedCtx = document.getElementById('mixedChart').getContext('2d');
const mixedChart = new Chart(mixedCtx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales (%)',
        data: [50, 60, 70, 80],
        backgroundColor: '#FF6384',
      },
      {
        label: 'Profit (%)',
        type: 'line',
        data: [20, 30, 40, 50],
        borderColor: '#36A2EB',
        fill: false,
      }
    ]
  }
});


// WebSocket Integration
const socket = io('https://data.gdscnsut.com/');

// Update all charts with WebSocket data
socket.on('random_number', (data) => {

  // Update Bar Chart
  barChart.data.datasets[0].data = barChart.data.datasets[0].data.map(() => Math.random() * 100);
  barChart.update();

  // Update Pie Chart
  pieChart.data.datasets[0].data = [Math.random() * 100, Math.random() * 100, Math.random() * 100];
  pieChart.update();

  // Update Scatter Chart
  scatterChart.data.datasets[0].data.push({
    x: Math.random() * 50000,
    y: Math.random() * 30000
  });
  scatterChart.update();

  // Update Radar Chart
  radarChart.data.datasets[0].data = radarChart.data.datasets[0].data.map(() => Math.random() * 5);
  radarChart.update();

  // Update Doughnut Chart
  doughnutChart.data.datasets[0].data = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100];
  doughnutChart.update();

  // Update Bubble Chart
  bubbleChart.data.datasets[0].data.push({
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: Math.random() * 20
  });
  bubbleChart.update();

  // Update Horizontal Bar Chart
  horizontalBarChart.data.datasets[0].data = horizontalBarChart.data.datasets[0].data.map(() => Math.random() * 100);
  horizontalBarChart.update();

  // Update Mixed Chart
  mixedChart.data.datasets[0].data = mixedChart.data.datasets[0].data.map(() => Math.random() * 100);
  mixedChart.data.datasets[1].data = mixedChart.data.datasets[1].data.map(() => Math.random() * 100);
  mixedChart.update();
});
