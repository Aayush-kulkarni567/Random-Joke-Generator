const jokes = [
    "How do you know if a vampire is unwell? Because he'll be coffin",
"Where do pirates get their hooks? Second hand shops",
"Why did the bicycle collapse? It was too tyred",
"Why did the hairdresser win the race? He knew a shortcut",
"How did the picture end up in prison? It was framed",
"What do solicitors wear to work? Lawsuits",
"Why did the bullet lose its job? It got fired",
"Why can’t a toe be 12 inches long? Then it’d be a foot",
"Want to hear a joke about a roof? The first one’s on the house",
"What does a house wear? Address!",
"What did one wall say to the other? 'I'll meet you at the corner'",
"Why is grass so dangerous? It’s full of blades",
"Why should you always knock before opening the fridge door? In case there's a salad dressing",
"Why couldn't the sesame seed stop talking? He was on a roll",
"Why do prawns never share? Because they're shellfish",
"What did the cheese say to himself in the mirror? Halloumi!",
"What do you call a drunk parsnip? A steaming vegetable",
"Why did the mushroom go to the party? Because he was a fungi",
"What do you call a singer with a laptop on her head? A-Dell",
"When is a door not a door? When it's ajar",
"What do toilets do when they're embarrassed? They always get a bit flush",
"How do you organise a space-themed party? You planet",
"Why do pancakes always win at cricket? They have the best batter",
"Why did the robot arrive at the event so tired? He had a hard-drive"
];

function generateRandomJoke() {
  const jokeContainer = document.getElementById('joke-text');
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeContainer.textContent = jokes[randomIndex];
}