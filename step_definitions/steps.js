const { I,statsPage } = inject();

Given('Im on the homepage', () => {
statsPage.cookies();
});

When('I choose a champion', () => {
statsPage.stats();
});

Then('I must see champion stats', () => {
statsPage.graphs();
});
