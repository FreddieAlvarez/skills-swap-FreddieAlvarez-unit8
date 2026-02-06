const { filterSkillsByCategory } = require('../skillswap-functions');

// Minimal placeholder test (optional)
test("test environment is set up", () => {
  expect(true).toBe(true);
});

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

// Now wrap the examples in tests
test('Filters skills by category', () => {
  expect(filterSkillsByCategory(skills, 'Programming')).toEqual([
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Web Development', category: 'Programming', price: 25 }
  ]);
});

test('Returns all skills when category is All', () => {
  expect(filterSkillsByCategory(skills, 'All')).toEqual(skills);
});

test('Returns empty array when no matches', () => {
  expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
});