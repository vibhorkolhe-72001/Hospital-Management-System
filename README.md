# 🏥 Hospital Management System  

A **web-based Hospital Management System (HMS)** for managing hospital operations, appointments, users, and medical records.  

---

## ✨ Features  

- 👨‍⚕️ **User Roles**: Patient, Doctor, and Admin  
- 🔑 User **registration & authentication**  
- 📅 Book and manage **appointments**  
- 📋 View and manage **medical history**  
- 📝 Edit profile, change password & update email  
- 📊 **Admin Dashboard** for managing doctors, patients, and queries  
- 📂 File upload support (images, documents)  
- 📱 **Responsive UI** with Bootstrap  

---

## 📂 Project Structure  

```
contact.php
hms.sql
index.html
preloaderscript.js
preloaderstyle.css
css/
images/
js/
hms/
    appointment-history.php
    book-appointment.php
    change-emaild.php
    change-password.php
    check_availability.php
    checklogin.php
    dashboard.php
    edit-profile.php
    forgot-password.php
    get_doctor.php
    logout.php
    manage-medhistory.php
    registration.php
    reset-password.php
    user-login.php
    ...
```

---

## 🛠️ Technologies Used  

- **Backend:** PHP  
- **Database:** MySQL ([hms.sql](hms.sql))  
- **Frontend:** HTML, CSS, JavaScript  
- **Libraries & Frameworks:** jQuery, Bootstrap  
- **Icons:** FontAwesome  

---

## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system
```

### 2️⃣ Import the Database  
- Import `hms.sql` into your MySQL server.  

### 3️⃣ Configure Database Connection  
- Update credentials in:  
  - `hms/include/config.php`  
  - `hms/admin/include/config.php`  
  - `hms/doctor/include/config.php`  

### 4️⃣ Run the Application  
- Place the project in your web server root (e.g., `htdocs` for XAMPP).  
- Open browser and navigate to:  
  ```
  http://localhost/hospital-management-system/index.html
  ```
  or  
  ```
  http://localhost/hospital-management-system/contact.php
  ```

---

## 📁 Folder Details  

- `hms/` → Main application logic (PHP scripts)  
- `css/` → Stylesheets  
- `js/` → JavaScript files  
- `images/` → Image assets  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

👉 **Note:** Replace `yourusername` in the clone URL with your actual GitHub username.  
