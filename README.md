# Poojan's Portfolio Website

Welcome to the source code for my personal portfolio website, built with React and hosted on AWS S3 as a static site.

## 🌐 Live Demo

Check it out here:  
[http://poojan-portfolio-bucket.s3-website.ap-south-1.amazonaws.com/](http://poojan-portfolio-bucket.s3-website.ap-south-1.amazonaws.com/)

---

## 🧭 Overview

This React app serves as my online portfolio showcasing my skills, projects, and professional background.

### 📄 Pages

- **Home** — Introduction and overview
- **About** — More about me
- **Projects** — A list of my projects
- **Resume** — My professional resume
- **Blog** — Links to my blog hosted on Medium

---

## 🗂️ Project Structure

```
src/
├── assets/         # Images, fonts, and other static assets
├── components/     # React components mapped to pages/routes
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   └── Resume/
├── constants/      # App-wide constants and configurations
└── App.js          # Main React app with routing logic
```

---

## 🚀 Deployment

The site is hosted as a static website on an AWS S3 bucket configured with website hosting enabled.

### ⚙️ Deployment Pipeline

A GitHub Actions CI/CD pipeline is set up to automate builds and deploys on every push to the `main` branch:

- Runs `yarn build` to create an optimized React production build.
- Syncs the `build/` folder contents to the S3 bucket using:

  ```bash
  aws s3 sync build/ s3://$BUCKET_NAME --delete --cache-control "no-cache"
  ```

- Bucket name and AWS credentials are managed securely through GitHub Secrets.

---

## 🛠️ Getting Started (Development)

### 1. Clone the repo

```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the app locally

```bash
yarn start
```
