// These tests use a public mocked API so not to upset people testing against a real API service.

import { test, expect } from '@playwright/test';

// Example of a simple get request.
test('GET post returns 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();
  // console.log(body); // Commented out as not needed.

  expect(body.id).toBe(1);
});


// Sample post (Create something new)
test('POST creates a new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'My first Playwright post',
      body: 'Learning API testing with Playwright!',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  // console.log(body);

  expect(body.title).toBe('My first Playwright post');
});


// Put example (Replace something that already exists)
test('PUT updates a post', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated title',
        body: 'Updated body content',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  // console.log(body); // I don't like to leave logging in.

  expect(body.title).toBe('Updated title');
  expect(body.body).toBe('Updated body content');
});

// Leaves rest alone just updates the one field.
test('PATCH updates only one field', async ({ request }) => {
  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        title: 'Updated title only'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  // console.log(body);

  expect(body.title).toBe('Updated title only');
});
