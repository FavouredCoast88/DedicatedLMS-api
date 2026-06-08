test('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
});

const article = {
    title: 'Test'
};

test('article title should be Test', () => {
    expect(article.title).toBe('Test');
});