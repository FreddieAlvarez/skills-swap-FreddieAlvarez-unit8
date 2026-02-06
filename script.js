console.log("Skill Swap loaded");

// Function from skillswap-functions.js
function filterSkillsByCategory(skills, category) {
  if (category === 'All') return skills;
  return skills.filter(skill => skill.category === category);
}

// Get skill cards
const cards = document.querySelectorAll('.card');

// Set up category buttons
document.getElementById('all').addEventListener('click', () => filterCards('All'));
document.getElementById('programming').addEventListener('click', () => filterCards('Programming'));
document.getElementById('music').addEventListener('click', () => filterCards('Music'));
document.getElementById('career').addEventListener('click', () => filterCards('Career'));

// Show and hide cards based on category
function filterCards(category) {
  cards.forEach(card => {
    const skillTitle = card.querySelector('h4').textContent;
    let skillCategory = '';
    
    // Match HTML cards to their categories exactly
    if (skillTitle === 'Football' || skillTitle === 'Gaming') skillCategory = 'Programming';
    else if (skillTitle === 'Cooking advice') skillCategory = 'Career';
    
    // Show if matches or category is All
    if (category === 'All' || category === skillCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}