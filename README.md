# BillCraft App

This project is a web application developed with Vue 3, TypeScript, and Vite. The goal of the project is to provide a modern and responsive user interface for managing customers and other related functionalities.

## Design
The design was created before the code implementation so I could have a base to start.
The logos were generated with AI then I vetorized them on Figma 

![image](https://github.com/user-attachments/assets/bb2c3fed-d88a-4d68-b56d-7cdae238558f)
![image](https://github.com/user-attachments/assets/1db10f03-c0b9-46c5-a999-b56ff1c69270)


[You can check the figma link here](https://www.figma.com/design/nPXgpIOIcL2KfLUsd4qhFO/BillCraft?node-id=0-1&node-type=canvas&t=uYTNw4cuEFkzwc87-0)

## Backend
The backend side it is a simple node API with a mock data.
The edition is saved in memory, there is no database behind it, so when killing the API the data is lost.

## Technologies Used

- **Node.js**: JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- **Vue 3**: Progressive JavaScript framework for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing to the code.
- **Vite**: Fast and modern build tool for web projects.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Vue Router**: Official router library for Vue.js.
- **Vee-validate**: Form validation library for Vue.js.
- **Zod**: Schema validation and parsing library.
- **Font Awesome**: Vector icon library.
- **ESLint**: Linting tool to identify and fix problems in the code.
- **Prettier**: Code formatting tool.
- **PostCSS**: Tool for transforming CSS with plugins.
- **Autoprefixer**: PostCSS plugin to add vendor prefixes automatically.
- **shadcn**: Component library for building accessible and customizable UI components.
- **pnpm**: Fast, disk space efficient package manager.


## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- PNPM (package manager)

### Installation

These instructions are valid for both backend and frontend 

1. Install the dependencies:
```sh
pnpm install
```

2. Run
```sh
pnpm dev
```
