# Farewill React Code Task

## Setup

```bash
yarn install
yarn storybook
yarn start
```

## Thoughts and reasonings behind your decisions

One of my goals was to treat this challenge as though the project was real and worked on by a team of engineers.

- Prop Types. Type-checking on props to prevent some basic errors. I normally use Typescript for most reasonably-sized projects. Here I've stuck with Javascript and Prop Types to save time and not needlessly change the stack.
- Storybook. I find it easier to style components better if I build them in isolation. In future SB could be published as a reference for other engineers and designers.
- React Testing Library. Tools that I find useful for testing React applications.
- Prettier, Husky, Lint Staged. Keep code style consistent across the code base and provide you with well-formatted code.

## What went well?

- Styled Components
- Semantic HTML elements
- Lighthouse
- Storybook

## What could have gone better?

- Technical issues with Glitch. I've never used it before and ran into a few issues so I've moved to GH to combat this.
- Should've started off by upgrading the dependencies.
- Problems getting the tests to run

## Is there anything particular you'd like to come back and improve if you had time? Why?

- ESLint. To prevent and fix issues throughout the codebase. Specifically https://www.npmjs.com/package/eslint-plugin-jsx-a11y to aid in building an accessible UI. 
- Use a cross-browser testing tool.
- Better loading and error states within the app.

### General Improvements

These are just some other general considerations for how I'd continue the project if it were an actual product.

- Visual Regression Testing, go for spotting problems with the UX and getting changes reviewed by specific UX team members (e.g. Chromatic)
- Publish Storybook as the design system
- CI (test, build, lint)

## What I've gained from doing the challenge
