# Setup

A brief description of the project goes here.

## Project Creation

```bash
# Step 1: Create a new Next.js project
npx create-next-app@latest

# Step 2: Install development dependencies
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Step 3: Install prettier-plugin-tailwindcss
npm add -D prettier-plugin-tailwindcss

# Step 4: Remove existing content from app/page.tsx and write your own code

# Step 5: Modify app/layout.tsx for meta data related to your project

# Step 6: Remove unnecessary content from app/global.css and keep the Tailwind CSS directives
	- @tailwind base;
	- @tailwind components;
	- @tailwind utilities;

# Step 7: Create the required folders inside the app directory
mkdir app/components app/api app/types

# Step 8: Create a pages folder in the root directory
mkdir pages

# Step 9: Install ESLint and Prettier extensions in your code editor vsc

# Step 10: Update .eslintrc.json with the configuration
	{
	  "extends": ["next", "prettier"]
	}

# Step 11: Create .prettierrc.json and update it with your desired configuration
