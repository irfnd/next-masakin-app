<!-- PROJECT LOGO -->
<div align="center">
  <p>
    <img src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fmain-banner.png?alt=media&token=d88c4590-775a-4292-b1bb-7eaec79a4539" alt="Logo" width="auto">
  </p>

  <h3 align="center">Masakin App (Next.js)</h3>
  <i><h4 align="center">A place to find inspiration for cooking recipes anywhere and anytime</h4></i>

  <p align="center">
    <a href="https://next-masakin-app.up.railway.app/">View Demo</a>
    |
    <a href="https://github.com/irfnd/next-resip-app/issues">Report Bug</a>
    |
    <a href="https://github.com/irfnd/next-resip-app/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

**Masakin App** is a simple website that provides a variety of user-entered recipes, the recipes provided display ingredients and cooking stages with videos. Users can leave comments for the displayed recipes. In addition, users can also give likes and save the recipes they want.

### Built With

This app was built with some technologies below:

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.ecma-international.org/publications-and-standards/standards/)
[![Next JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

[![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/download)

### Optional

You can install yarn package manager for your project

[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

### Installation

If you want to run this project locally, I recommend you to configure the [backend](https://github.com/irfnd/be-masakin-app/) first before configuring this frontend repo.

- Clone this repo

```bash
git clone https://github.com/irfnd/fe-masakin-app
```

- Go to folder repo

```bash
cd fe-masakin-app
```

- Install packages

```bash
npm install
```

- or install packages with yarn

```bash
yarn
```

- <a href="#setup-environment">Setup Environment</a>
- Type `npm run start` or `yarn start` to start project
- Type `npm run build` or `yarn build` to build production

### Setup Environment

- Read `.env.example` to get all detail environment for this project.
- Create your `.env` file based on .env.example
- Put `.env` to root project folder
- Example:

```
NEXT_PUBLIC_REST_API=[your-rest-api]
COOKIE_EXPIRE=[30m|24h|2d]
```

## Screenshots

<p align="center" display=flex>
   
<table>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fregister.png?alt=media&token=e73f4a2f-b115-4fd7-af11-e92fee0033b7" alt="Register Page" width=100%/></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Flogin.png?alt=media&token=a1b6be62-ee5b-48a2-a5eb-1f80bd03faf6" alt="Login Page" width=100%></td>
  </tr>
  <tr>
    <td>Register Page</td>
    <td>Login Page</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fhome.png?alt=media&token=fddfcbd2-5e78-4c4e-ba31-c91ce6b6a335" alt="Home" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fsearch-recipes.png?alt=media&token=0bf4f911-642b-4953-b578-2c56f44e9862" alt="Search Recipes" width=100%></td>
  </tr>
  <tr>
    <td>Home</td>
    <td>Search Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fpopular-recipes.png?alt=media&token=8ba1a3a2-faf5-4e9b-a92a-e383a08f9cc1" alt="Popular Recipes" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Frecipe-add.png?alt=media&token=b4802e89-f1a9-480d-94ae-3a7520618ac5" alt="Add Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Popular Recipes</td>
    <td>Add Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fprofile-no-login.png?alt=media&token=4a729c85-8601-491f-bf31-cb8c0861308d" alt="Profile (without login)" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fprofile-login.png?alt=media&token=17af2c64-cd46-4d45-82e0-7a057bd0f764" alt="Profile (with login)" width=100%/></td>
  </tr>
  <tr>
    <td>Profile (without login)</td>
    <td>Profile (with login)</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fprofile-edit.png?alt=media&token=4408d839-c8c8-4406-a897-50cc8f1f519c" alt="Edit Profile" width=100%/></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fmy-recipes.png?alt=media&token=67e318ba-6301-40af-b649-9c1fe1a56800" alt="My Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Edit Profile</td>
    <td>My Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fliked-recipes.png?alt=media&token=a72024e6-7eb3-438a-8e76-86abbc440add" alt="Liked Recipes" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Fsaved-recipes.png?alt=media&token=81a660d2-16aa-4fd8-a739-6b1db1461ef9" alt="Saved Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Liked Recipes</td>
    <td>Saved Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Frecipe-details.png?alt=media&token=65366a52-e7cc-41a1-8f01-391d853f46a6" alt="Detail Recipes" width=100%/></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Frecipe-videos.png?alt=media&token=03b8dfdb-f148-4f5c-bfb4-fd447063bda1" alt="Step Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Detail Recipes</td>
     <td>Step Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Frecipe-comments.png?alt=media&token=9856feaf-9e6e-4c21-be10-7ea30ba58e6e" alt="Comment Recipes" width=100%/></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fnext%2Frecipe-comments-no-login.png?alt=media&token=8faeee9e-15f4-42dc-9585-f878ad09249c" alt="Comment Recipes (without login)" width=100%/></td>
  </tr>
  <tr>
    <td>Comment Recipes</td>
    <td>Comment Recipes (without login)</td>
  </tr>
</table>
      
</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

Distributed under the [MIT](/LICENSE) License.
