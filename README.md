# 🏘️ Gornji Milanovac - Interactive Presentation Website

This is an educational web project that presents the Serbian town **Gornji Milanovac** through an interactive single-page website.  
The project was created for the **ICT College - Web Programming course** and showcases multiple web development concepts using:

- HTML5 / CSS3  
- JavaScript  
- jQuery  
- jQuery UI  
- AJAX  
- JSON  
- Lightbox  
- LocalStorage  

The website is fully dynamic, loading most of its content from JSON files (lodging, news, culture, sports, history, statistics, gallery, and navigation items).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![AJAX](https://img.shields.io/badge/AJAX-0052CC?style=for-the-badge&logo=javascript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)	
[![jQuery](https://img.shields.io/badge/jQuery-AJAX-blue.svg?style=for-the-badge&logo=jquery)](https://jquery.com/)
![jQuery UI](https://img.shields.io/badge/jQuery%20UI-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

🔗 Live Demo: https://gornjimilanovac.vercel.app/


---

## 🚀 Features

### 🔹 1. Dynamic Lodging Section
- Loads hotels from `lodging.json`
- Search by name  
- Price range filter  
- Sort (A–Z, Z–A, price asc/desc)  
- Real-time rendering using jQuery

### 🔹 2. News & Information Tabs
Powered by **jQuery UI Tabs + Accordion**:
- Economy  
- Culture  
- Sports  
- History  
- Quote of the Day (custom dialog modal)  
- “Read more” expandable text  

JSON sources:
- `news.json`
- `culture.json`
- `sport.json`
- `stats.json`
- `biographies.json`

### 🔹 3. Image Gallery
- Dynamically loaded gallery section  
- Lightbox integration for image previews

### 🔹 4. Contact Form
- Full form validation (regex)
- Gender selection
- Message length validation
- Error messages displayed dynamically
- Data saved to **LocalStorage**

### 🔹 5. Responsive Navigation
- Hamburger menu (sidebar)  
- Dropdown for documentation & author info  
- Smooth animations and transitions

### 🔹 6. Author Modal
A custom modal displaying:
- Author’s biography  
- Profile image  

---

## 📂 Project Structure
- index.html
- sitemap.xml
- rss.xml
- css/
- js/
- images/
- data/

---

## ⚠️ Important: JSON Will Not Load Without a Local Server

Opening `index.html` by double-clicking **will NOT load JSON files** because browsers block AJAX on the `file://` protocol.

### To run the project correctly:

### Use VS Code Live Server
Right-click `index.html` → **Open with Live Server**
